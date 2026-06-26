"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="pointer-events-none fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[3vw] pt-5 pb-[3vw] text-sm text-white/70">
        {/* Desktop nav */}
        <nav className="pointer-events-auto hidden flex-wrap gap-8 underline-offset-2 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white hover:underline ${
                pathname === link.href ? "text-white underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="pointer-events-auto flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Desktop right side */}
        <Link
          href="https://github.com/Hiro-kiii/Scroll-Transition/"
          className={`pointer-events-auto hidden underline-offset-2 hover:text-white hover:underline md:inline ${
            pathname === "/github" ? "text-white underline" : ""
          }`}
        >
          GitHub
        </Link>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl text-white/80">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-white hover:underline ${
                pathname === link.href ? "text-white underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com/Hiro-kiii/Scroll-Transition/"
            className="hover:text-white hover:underline"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </Link>
        </nav>
      </div>
    </>
  );
}
