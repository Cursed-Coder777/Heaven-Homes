export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] text-white/40 uppercase">
Heaven Homes
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              Curating extraordinary properties for discerning clientele worldwide.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] text-white/40 uppercase">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a
                  href="mailto:hello@heavenhomes.com"
                  className="transition-colors hover:text-white"
                >
                  hello@heavenhomes.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="transition-colors hover:text-white"
                >
                  +1 (415) 555-0123
                </a>
              </li>
              <li>48 Montgomery Street, San Francisco</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] text-white/40 uppercase">
              Social
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Heaven Homes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
