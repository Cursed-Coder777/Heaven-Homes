"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

interface StickyCardProps {
  cards: CardData[];
  className?: string;
}

const StickyCard = ({ cards, className = "" }: StickyCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-card]");
    if (cards.length === 0) return;

    cards.forEach((card) => {
      const text = card.querySelector("[data-text]");

      gsap.fromTo(
        text,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
    >
      {cards.map((card, i) => (
        <div
          key={card.id}
          data-card
          className="sticky top-0 flex h-screen w-screen items-center justify-center overflow-hidden"
          style={{ top: `${i * 35}px` }}
        >
          <Image
            src={card.image}
            alt={card.alt ?? `Card ${i + 1}`}
            fill
            className="absolute inset-0 object-cover"
          />
          <div
            data-text
            className="relative z-10 text-center text-white opacity-0"
          >
            {card.title && (
              <h2 className="text-5xl font-bold drop-shadow-lg md:text-7xl lg:text-8xl">
                {card.title}
              </h2>
            )}
            {card.subtitle && (
              <p className="mt-4 text-lg drop-shadow-md md:text-xl lg:text-2xl">
                {card.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { StickyCard };
export type { CardData, StickyCardProps };
