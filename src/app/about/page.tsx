export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-black px-6 pt-40 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-32">
          <p className="mb-4 text-sm tracking-[0.2em] text-white/40 uppercase">
            About
          </p>
          <h1 className="text-5xl leading-[0.9] font-light tracking-tight sm:text-7xl lg:text-8xl">
            Redefining
            <br />
            <span className="text-white/30">luxury living</span>
          </h1>
        </div>

        <div className="mb-40 grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-white/60">
              Heaven Homes is a premium real estate agency specializing in
              extraordinary properties across the world&rsquo;s most coveted
              destinations. We connect discerning clients with architectural
              masterpieces that transcend the ordinary.
            </p>
            <p className="text-lg leading-relaxed text-white/60">
              Founded on the principles of discretion, excellence, and
              unparalleled service, our team brings decades of experience in
              luxury acquisitions, portfolio curation, and bespoke property
              advisory.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <p className="mb-1 text-5xl font-light text-white">15+</p>
              <p className="text-sm tracking-[0.15em] text-white/40 uppercase">
                Years of Excellence
              </p>
            </div>
            <div>
              <p className="mb-1 text-5xl font-light text-white">500+</p>
              <p className="text-sm tracking-[0.15em] text-white/40 uppercase">
                Premium Estates Sold
              </p>
            </div>
            <div>
              <p className="mb-1 text-5xl font-light text-white">20</p>
              <p className="text-sm tracking-[0.15em] text-white/40 uppercase">
                Global Destinations
              </p>
            </div>
          </div>
        </div>

        <div className="mb-40 border-t border-white/10 pt-32">
          <h2 className="mb-16 text-3xl font-light tracking-tight sm:text-5xl">
            Our <span className="text-white/30">process</span>
          </h2>
          <div className="grid gap-16 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "We take time to understand your vision, preferences, and aspirations to curate a selection that resonates with your lifestyle.",
              },
              {
                step: "02",
                title: "Curate",
                desc: "Our network of exclusive listings and off-market properties ensures access to the finest estates tailored to your desires.",
              },
              {
                step: "03",
                title: "Deliver",
                desc: "From first viewing to final signature, we provide white-glove service at every stage of your acquisition journey.",
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="mb-4 text-sm tracking-[0.3em] text-white/20 uppercase">
                  {item.step}
                </p>
                <h3 className="mb-4 text-2xl font-light text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
