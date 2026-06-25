"use client";

import { useEffect, useRef } from "react";

export default function LiquidOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function init() {
      /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
      const mod = await import(
        "threejs-components/build/backgrounds/liquid1.min.js"
      );
      const LiquidBackground = mod.default;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const app = LiquidBackground(canvas);
      app.loadImage(
        "https://assets.codepen.io/33787/liquid.webp",
      );
      app.liquidPlane.material.metalness = 0.75;
      app.liquidPlane.material.roughness = 0.25;
      app.liquidPlane.uniforms.displacementScale.value = 5;
      app.setRain(false);
      /* eslint-enable */
    }

    void init();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-40 h-full w-full opacity-30"
    />
  );
}
