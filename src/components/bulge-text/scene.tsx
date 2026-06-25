"use client";
/* eslint-disable */

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import CustomShaderMaterial from "three-custom-shader-material";
import html2canvas from "html2canvas";
import { vertexShader, fragmentShader } from "./shaders";

let _three: any = null;
async function getThree() {
  if (!_three) _three = await import("three");
  return _three;
}

function useDomToCanvas(domEl: HTMLDivElement | null) {
  const [texture, setTexture] = useState<any>(null);

  useEffect(() => {
    if (!domEl) return;
    let cancelled = false;

    async function convert() {
      const three = await getThree();
      if (!domEl) return;
      const canvas = await html2canvas(domEl!, { backgroundColor: null });
      if (cancelled) return;
      setTexture(new three.CanvasTexture(canvas));
    }

    void convert();

    const onResize = () => void convert();
    window.addEventListener("resize", onResize);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
    };
  }, [domEl]);

  return texture;
}

function SceneInner() {
  const { viewport } = useThree();
  const materialRef = useRef<any>(null);
  const [domEl, setDomEl] = useState<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const [MeshStandard, setMeshStandard] = useState<any>(null);
  const textureDOM = useDomToCanvas(domEl);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: textureDOM },
      uMouse: { value: { x: 0, y: 0 } },
    }),
    [textureDOM],
  );

  const mouseLerped = useRef({ x: 0, y: 0 });
  const threeRef = useRef<any>(null);

  useEffect(() => {
    getThree().then((three) => {
      threeRef.current = three;
      setMeshStandard(() => three.MeshStandardMaterial);
      setReady(true);
    });
  }, []);

  useFrame((state) => {
    const t = threeRef.current;
    if (!t) return;

    mouseLerped.current.x = t.MathUtils.lerp(
      mouseLerped.current.x,
      state.mouse.x,
      0.1,
    );
    mouseLerped.current.y = t.MathUtils.lerp(
      mouseLerped.current.y,
      state.mouse.y,
      0.1,
    );

    if (materialRef.current?.uniforms) {
      materialRef.current.uniforms.uMouse.value.x = mouseLerped.current.x;
      materialRef.current.uniforms.uMouse.value.y = mouseLerped.current.y;
    }
  });

  return (
    <>
      <Html zIndexRange={[-1, -10]} prepend fullscreen>
        <div
          ref={(el) => setDomEl(el)}
          className="flex h-full w-full items-center bg-black pl-[3vw]"
        >
          <p className="font-sans text-[clamp(100px,17vw,200px)] font-bold leading-[0.8] text-white">
            WHEN
            <br />
            WILL
            <br />
            WE
            <br />
            MEET ?
          </p>
        </div>
      </Html>
      {ready && MeshStandard && (
        <mesh>
          <planeGeometry
            args={[viewport.width, viewport.height, 254, 254]}
          />
          <CustomShaderMaterial
            ref={materialRef}
            baseMaterial={MeshStandard}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
            {...({ roughness: 0.95, metalness: 0 } as any)}
          />
        </mesh>
      )}
      {ready && (
        <pointLight
          position={[2, 4, 6]}
          intensity={30}
          distance={12}
          decay={1}
        />
      )}
    </>
  );
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      camera={{ fov: 55, near: 0.1, far: 200 }}
    >
      <SceneInner />
    </Canvas>
  );
}
