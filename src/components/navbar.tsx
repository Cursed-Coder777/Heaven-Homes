"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed top-0 left-0 z-50 grid w-full grid-cols-[auto_auto_auto_1fr] grid-rows-[auto_auto] gap-x-8 gap-y-4 px-[3vw] pt-5 pb-[3vw] text-sm text-white/70 max-lg:grid-cols-[auto_auto_1fr] lg:h-full lg:content-between">
      <Link
        href="/"
        className={`pointer-events-auto justify-self-start underline-offset-2 hover:text-white hover:underline ${
          pathname === "/" ? "text-white underline" : ""
        }`}
      >
        Article
      </Link>
      <Link
        href="/"
        className={`pointer-events-auto justify-self-start underline-offset-2 hover:text-white hover:underline ${
          pathname === "/archive" ? "text-white underline" : ""
        }`}
      >
        All demos
      </Link>
      <Link
        href="https://github.com/Hiro-kiii/Scroll-Transition/"
        className={`pointer-events-auto justify-self-start underline-offset-2 hover:text-white hover:underline ${
          pathname === "/github" ? "text-white underline" : ""
        }`}
      >
        GitHub
      </Link>
      <nav className="pointer-events-auto hidden flex-wrap gap-8 justify-self-end underline-offset-2 max-lg:col-span-3 max-lg:justify-self-start lg:flex">
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
    </header>
  );
}
