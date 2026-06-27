"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "~/styles/footer.module.css";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ITEMS_1 = [
  "Digital-First Strategy",
  "Brand Architecture",
  "Immersive Experiences",
  "Motion Design",
  "Art Direction",
  "Creative Consulting",
];

const ITEMS_2 = [
  "Web3 & Metaverse",
  "Generative Art",
  "AI Integration",
  "Interactive Installations",
  "Spatial Design",
  "UX Innovation",
];

const ITEMS_3 = [
  "London",
  "New York",
  "Tokyo",
  "Berlin",
  "Seoul",
  "Los Angeles",
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ---- GSAP entrance animations ---- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const colItems = section.querySelectorAll(`.${styles.colItem}`);
    const labelItems = section.querySelectorAll(`.${styles.colLabel}`);
    const brandEls = section.querySelectorAll(
      `.${styles.brandName}, .${styles.brandTagline}, .${styles.taglineLine}`,
    );
    const bottomEls = section.querySelectorAll(
      `.${styles.copyright}, .${styles.socialLink}`,
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      brandEls,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
    )
      .fromTo(
        labelItems,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        "-=0.3",
      )
      .fromTo(
        colItems,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.04 },
        "-=0.3",
      )
      .fromTo(
        bottomEls,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
        "-=0.2",
      );
  }, []);

  return (
    <footer ref={sectionRef} className={styles.section}>
      <div className={styles.content}>
        {/* Top row */}
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Heaven Homes</span>
            <span className={styles.brandTagline}>
              Curating extraordinary properties for discerning clientele
              worldwide
            </span>
          </div>
          <div className={styles.tagline}>
            <p className={styles.taglineLine}>
              Where visionary architecture meets
              <br />
              uncompromising luxury
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          <div className={styles.column}>
            <span className={styles.colLabel}>Expertise</span>
            {ITEMS_1.map((item) => (
              <span key={item} className={styles.colItem}>
                {item}
              </span>
            ))}
          </div>
          <div className={styles.column}>
            <span className={styles.colLabel}>Disciplines</span>
            {ITEMS_2.map((item) => (
              <span key={item} className={styles.colItem}>
                {item}
              </span>
            ))}
          </div>
          <div className={styles.column}>
            <span className={styles.colLabel}>Studios</span>
            {ITEMS_3.map((item) => (
              <span key={item} className={styles.colItem}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} Heaven Homes. All rights reserved.
          </span>
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
