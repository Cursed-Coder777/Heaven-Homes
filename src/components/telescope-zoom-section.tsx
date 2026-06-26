"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SMALL_IMAGES = [
  { src: "/hero-images/2.webp", top: "15vw", left: "-3vw" },
  { src: "/hero-images/3.webp", top: "5vw", left: "20vw" },
  { src: "/hero-images/4.webp", top: "8vw", left: "26.5vw" },
  { src: "/hero-images/5.webp", top: "18vw", right: "18vw" },
  { src: "/hero-images/6.webp", top: "5vw", right: "10vw" },
  { src: "/hero-images/7.webp", bottom: "5vw", left: "10vw" },
  { src: "/hero-images/8.webp", bottom: "8vw", left: "22.5vw" },
  { src: "/hero-images/9.webp", bottom: "3vw", left: "45vw" },
  { src: "/hero-images/10.webp", bottom: "5vw", right: "15vw" },
  { src: "/hero-images/1.webp", bottom: "9vw", right: "7vw" },
];

export default function TelescopeZoomSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const mainImgWrapperRef = useRef<HTMLSpanElement>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);
  const revealTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const smallImages = imagesRef.current?.querySelectorAll("img");
    const wrapper = mainImgWrapperRef.current;
    const revealText = revealTextRef.current;
    if (!section || !smallImages?.length || !wrapper || !revealText) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const eased = gsap.parseEase("power1.inOut")(self.progress);
          section.style.setProperty("--progress", String(eased));
        },
      },
    });

    gsap.set(smallImages, {
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      force3D: true,
    });

    tl.to(smallImages, {
      z: "100vh",
      duration: 1,
      ease: "power1.inOut",
      stagger: { amount: 0.2, from: "center" },
    }, 0);

    tl.fromTo(
      wrapper,
      { width: 0, height: 0 },
      {
        width: "80vw",
        height: "80vh",
        duration: 1,
        ease: "power1.inOut",
      },
      0,
    );

    tl.fromTo(
      revealText,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      0.3,
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div
        ref={imagesRef}
        className="absolute inset-0"
        style={{ perspective: "100vh" }}
      >
        {SMALL_IMAGES.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt=""
            width={200}
            height={267}
            className="absolute w-[10vw] object-cover max-sm:w-[20vw]"
            style={{
              top: img.top,
              bottom: img.bottom,
              left: img.left,
              right: img.right,
              aspectRatio: "3/4",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1 className="flex w-full items-center justify-center font-sans text-[3vw] font-semibold text-white max-sm:text-[9vw]">
          <span
            className="inline-block shrink-0"
            style={{
              transform:
                "translate3d(calc(var(--progress) * (-66vw + 100%) - 0.5vw), 0, 0)",
            }}
          >
            for the
          </span>
          <span
            ref={mainImgWrapperRef}
            className="inline-block shrink-0 overflow-hidden"
            style={{ lineHeight: 0, fontSize: 0 }}
          >
            <Image
              ref={mainImgRef}
              src="/hero-images/3.webp"
              alt=""
              width={1920}
              height={1080}
              className="block h-full w-full object-cover"
            />
          </span>
          <span
            className="inline-block shrink-0"
            style={{
              transform:
                "translate3d(calc(var(--progress) * (66vw - 100%)), 0, 0)",
            }}
          >
            planet
          </span>
        </h1>
        <p
          ref={revealTextRef}
          className="absolute inset-0 flex items-center justify-center font-sans text-[3vw] font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-sm:text-[9vw]"
          style={{ marginTop: "0px" }}
        >
          Explore More
        </p>
      </div>
    </section>
  );
}
