"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const BLIND_COUNT = 30;

const IMAGES = [
  "/hero-images/1.webp",
  "/hero-images/2.webp",
  "/hero-images/3.webp",
];

const TEXTS = [
  {
    title: "HEAVEN",
    subtitle: "Luxury Living",
    desc: "Curated estates for those who seek the extraordinary. Every property tells a story of elegance and refinement.",
  },
  {
    title: "HOMES",
    subtitle: "Premium Estates",
    desc: "Architectural masterpieces nestled in the world's most coveted locations. Designed for discerning clientele.",
  },
  {
    title: "LEGACY",
    subtitle: "Timeless Excellence",
    desc: "Where vision meets craftsmanship. We craft bespoke real estate experiences that transcend generations.",
  },
];

const SVG_NS = "http://www.w3.org/2000/svg";

export default function HeroScrollSection() {
  const stageRef = useRef<HTMLElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      lerp: 0.15,
      smoothWheel: true,
      syncTouch: !isTouch,
      autoRaf: true,
    });
    lenis.on("scroll", () => ScrollTrigger.update());

    const stage = stageRef.current;
    const layersEl = layersRef.current;
    const textsEl = textsRef.current;
    const progressEl = progressRef.current;
    if (!stage || !layersEl || !textsEl || !progressEl) return;

    let master: gsap.core.Timeline | null = null;
    const blindSets: {
      top: SVGRectElement;
      bottom: SVGRectElement;
      y: number;
      h: number;
    }[][] = [];

    const width = window.innerWidth;
    const height = window.innerHeight;
    const vbWidth = 100;
    const vbHeight = (height / width) * 100;
    const h = vbHeight / BLIND_COUNT;

    const svgs = layersEl.querySelectorAll<SVGSVGElement>("svg.layer");

    svgs.forEach((svg) => {
      svg.setAttribute("viewBox", `0 0 ${vbWidth} ${vbHeight}`);

      const maskRect = svg.querySelector("mask rect");
      if (maskRect) {
        maskRect.setAttribute("width", String(vbWidth));
        maskRect.setAttribute("height", String(vbHeight));
      }

      const img = svg.querySelector("image");
      if (img) {
        img.setAttribute("width", String(vbWidth));
        img.setAttribute("height", String(vbHeight));
      }

      const g = svg.querySelector("g[id^=blinds]");
      if (!g) return;
      g.innerHTML = "";

      const blinds: {
        top: SVGRectElement;
        bottom: SVGRectElement;
        y: number;
        h: number;
      }[] = [];
      let currentY = 0;

      for (let i = 0; i < BLIND_COUNT; i++) {
        const centerY = vbHeight - (currentY + h / 2);
        const rectTop = document.createElementNS(SVG_NS, "rect");
        const rectBottom = document.createElementNS(SVG_NS, "rect");

        [rectTop, rectBottom].forEach((r) => {
          r.setAttribute("x", "0");
          r.setAttribute("width", "100");
          r.setAttribute("height", "0");
          r.setAttribute("fill", "white");
          r.setAttribute("shape-rendering", "crispEdges");
        });

        rectTop.setAttribute("y", String(centerY));
        rectBottom.setAttribute("y", String(centerY));

        g.appendChild(rectTop);
        g.appendChild(rectBottom);

        blinds.push({ top: rectTop, bottom: rectBottom, y: centerY, h: h / 2 });
        currentY += h;
      }

      blindSets.push(blinds);
    });

    const txtElements = textsEl.querySelectorAll<HTMLDivElement>(".txt");
    const scrollIndicator = document.querySelector<HTMLDivElement>(".scroll-indicator");

    function openBlinds(
      blinds: {
        top: SVGRectElement;
        bottom: SVGRectElement;
        y: number;
        h: number;
      }[],
    ) {
      return gsap.timeline().to(
        blinds.flatMap((b) => [b.top, b.bottom]),
        {
          attr: {
            y: (i: number) => {
              const b = blinds[Math.floor(i / 2)]!;
              return i % 2 === 0 ? b.y - b.h : b.y;
            },
            height: (i: number) => {
              const b = blinds[Math.floor(i / 2)]!;
              return b.h + 0.01;
            },
          },
          ease: "power3.out",
          stagger: {
            each: 0.02,
            from: "start",
          },
        },
      );
    }

    function textIn(el: HTMLDivElement) {
      return gsap.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1.5,
        ease: "expo.out",
      });
    }

    function textOut(el: HTMLDivElement) {
      return gsap.to(el, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: -30,
        duration: 1.2,
        ease: "power2.inOut",
      });
    }

    master = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: "top top",
        end: "bottom bottom",
        scrub: 2.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const tl = master;

    if (scrollIndicator) {
      tl.to(scrollIndicator, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    blindSets.forEach((blinds, i) => {
      tl.add(openBlinds(blinds));
      if (txtElements[i]) {
        tl.add(textIn(txtElements[i]), "-=0.3");
        tl.add(textOut(txtElements[i]), "+=0.8");
      }
    });

    const progressFills = progressEl.querySelectorAll<HTMLDivElement>(".fill");
    ScrollTrigger.create({
      trigger: stage,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSteps = progressFills.length;
        progressFills.forEach((fill, i) => {
          let p = (progress - i / totalSteps) * totalSteps;
          p = Math.max(0, Math.min(1, p));
          fill.style.width = `${p * 100}%`;
        });
      },
    });

    ScrollTrigger.refresh();

    const autoScroll = setTimeout(() => {
      window.scrollTo({ top: window.innerHeight * 1, behavior: "smooth" });
    }, 600);

    return () => {
      clearTimeout(autoScroll);
      master?.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <section ref={stageRef} className="relative h-[500vh]">
        <div
          ref={layersRef}
          className="sticky top-0 h-screen w-screen overflow-hidden"
        >
          <div className="scroll-indicator absolute inset-0 z-50 flex items-center justify-center gap-6">
            <div className="group flex items-center gap-6">
              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer rounded-full border border-white/20 px-10 py-4 font-sans text-sm tracking-[0.3em] text-white/60 uppercase transition-colors hover:border-white hover:text-white"
              >
                scroll down
              </button>
              <svg
                className="h-5 w-5 animate-bounce text-white/60 transition-colors group-hover:text-white"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M8 3v10M3 8l5 5 5-5" />
              </svg>
            </div>
          </div>
          {IMAGES.map((src, i) => (
            <svg
              key={src}
              className="layer absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <mask id={`hero-mask-${i}`} maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="100" height="100" fill="black" />
                  <g id={`blinds${i}`} />
                </mask>
              </defs>
              <image
                href={src}
                x="0"
                y="0"
                width="100"
                height="100"
                preserveAspectRatio="xMidYMid slice"
                mask={`url(#hero-mask-${i})`}
                className="brightness-[0.8]"
              />
            </svg>
          ))}

          <div
            ref={progressRef}
            className="absolute bottom-0 z-20 flex w-full gap-4 p-16"
          >
            {IMAGES.map((_, i) => (
              <div
                key={i}
                className="segment relative h-0.5 flex-1 overflow-hidden bg-white/20"
              >
                <div className="fill absolute top-0 left-0 h-full w-0 bg-white" />
              </div>
            ))}
          </div>

          <div ref={textsRef} className="p-[3vw]">
            {TEXTS.map((txt, i) => (
              <div
                key={i}
                className="txt absolute w-full font-sans text-white uppercase"
                style={{
                  clipPath: "inset(100% 0 0 0)",
                  transform: "translateY(40px)",
                }}
              >
                <h1 className="mt-[10vh] text-[clamp(4.8rem,6.8vw,13.6rem)] leading-[0.85] font-light tracking-[-0.025em]">
                  {txt.title}
                </h1>
                <h2 className="mt-[6vw] text-[clamp(1.4rem,1.067vw,1.8rem)] tracking-[0.24em]">
                  {txt.subtitle}
                </h2>
                <span className="mt-[30px] block w-1/5 text-[clamp(1.1rem,0.8vw,1.2rem)] leading-[1.8] max-lg:w-[35%] max-sm:w-1/2">
                  {txt.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
