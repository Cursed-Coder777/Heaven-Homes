"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const FAQS = [
  {
    q: "How do I restart, reverse, scrub, pin, or use markers and overwrite?",
    img: "https://assets.codepen.io/16327/portrait-image-8.jpg",
  },
  {
    q: "What are toggleActions, start, end, once, refresh, from, and to?",
    img: "https://assets.codepen.io/16327/portrait-image-3.jpg",
  },
  {
    q: "Can I use ScrollSmoother, Flip, Draggable, SplitText, or InertiaPlugin?",
    img: "https://assets.codepen.io/16327/portrait-image-1.jpg",
  },
  {
    q: "How do onComplete, onUpdate, quickSetter, quickTo, and utils.toArray work?",
    img: "https://assets.codepen.io/16327/portrait-image-14.jpg",
  },
  {
    q: "What easing options are available — Power, Back, Elastic, Bounce, Expo, Sine?",
    img: "https://assets.codepen.io/16327/portrait-image-6.jpg",
  },
];

export default function FaqHover() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.set(".faq-list .faq-image", { xPercent: -50, yPercent: -50 });

    const containers = gsap.utils.toArray<HTMLElement>(".faq-list .faq-item");

    containers.forEach((el) => {
      const image = el.querySelector<HTMLImageElement>(".faq-image");
      if (!image) return;

      const setX = gsap.quickTo(image, "x", {
        duration: 0.4,
        ease: "power3",
      });
      const setY = gsap.quickTo(image, "y", {
        duration: 0.4,
        ease: "power3",
      });

      let firstEnter = true;

      const align = (e: MouseEvent) => {
        if (firstEnter) {
          setX(e.clientX, e.clientX);
          setY(e.clientY, e.clientY);
          firstEnter = false;
        } else {
          setX(e.clientX);
          setY(e.clientY);
        }
      };

      const startFollow = () => document.addEventListener("mousemove", align);
      const stopFollow = () => document.removeEventListener("mousemove", align);

      const fade = gsap.to(image, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        duration: 0.1,
        onReverseComplete: stopFollow,
      });

      el.addEventListener("mouseenter", (e: Event) => {
        const mouseE = e as MouseEvent;
        firstEnter = true;
        void fade.play();
        startFollow();
        align(mouseE);
      });

      el.addEventListener("mouseleave", () => {
        void fade.reverse();
      });
    });
  }, []);

  return (
    <ul ref={listRef} className="faq-list mx-auto max-w-4xl">
      {FAQS.map((faq, i) => (
        <li
          key={i}
          className="faq-item relative w-full border-b border-white/10 px-8 py-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="faq-image pointer-events-none invisible fixed top-0 left-0 z-50 h-[350px] w-[350px] object-cover opacity-0"
            src={faq.img}
            alt=""
          />
          <div className="text">
            <h3 className="text-lg leading-snug font-light tracking-tight">
              {faq.q}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
