import ContactForm from "~/components/contact-form";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-black px-6 pt-40 pb-32 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-32">
          <p className="mb-4 text-sm tracking-[0.2em] text-white/40 uppercase">
            Inquire
          </p>
          <h1 className="text-5xl leading-[0.9] font-light tracking-tight sm:text-7xl lg:text-8xl">
            Begin your
            <br />
            <span className="text-white/30">journey</span>
          </h1>
        </div>

        <div className="mb-40 grid gap-16 lg:grid-cols-2">
          <div className="space-y-16">
            <div>
              <p className="mb-4 text-sm tracking-[0.15em] text-white/30 uppercase">
                Address
              </p>
              <p className="text-lg font-light leading-relaxed text-white/70">
                48 Montgomery Street
                <br />
                San Francisco, CA 94104
              </p>
            </div>
            <div>
              <p className="mb-4 text-sm tracking-[0.15em] text-white/30 uppercase">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@heavenhomes.com"
                    className="text-lg font-light text-white/70 transition-colors hover:text-white"
                  >
                    hello@heavenhomes.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+14155550123"
                    className="text-lg font-light text-white/70 transition-colors hover:text-white"
                  >
                    +1 (415) 555-0123
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm tracking-[0.15em] text-white/30 uppercase">
                Hours
              </p>
              <p className="text-lg font-light leading-relaxed text-white/70">
                Monday &ndash; Friday: 9 AM &ndash; 7 PM
                <br />
                Saturday: 10 AM &ndash; 5 PM
                <br />
                Sunday: By appointment
              </p>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="border-t border-white/10 pt-16 text-center">
          <p className="text-sm tracking-[0.15em] text-white/30 uppercase">
            Prefer a call?
          </p>
          <a
            href="tel:+14155550123"
            className="mt-2 inline-block text-2xl font-light text-white/70 transition-colors hover:text-white sm:text-3xl"
          >
            +1 (415) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
}
