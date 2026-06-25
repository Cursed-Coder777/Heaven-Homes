const PROPERTIES = [
  { title: "Villa Serenity", location: "Amalfi Coast, Italy", image: "/hero-images/1.webp" },
  { title: "Penthouse Nocturne", location: "Manhattan, USA", image: "/hero-images/2.webp" },
  { title: "Casa Verde", location: "Tuscany, Italy", image: "/hero-images/3.webp" },
  { title: "Azure Residence", location: "Saint-Tropez, France", image: "/hero-images/4.webp" },
  { title: "The Ridge Estate", location: "Aspen, USA", image: "/hero-images/5.webp" },
  { title: "Palm Pavilion", location: "Dubai, UAE", image: "/hero-images/6.webp" },
];

export default function WorkPage() {
  return (
    <section className="relative min-h-screen bg-black px-6 pt-40 pb-32 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="mb-4 text-sm tracking-[0.2em] text-white/40 uppercase">
            Portfolio
          </p>
          <h1 className="text-5xl leading-[0.9] font-light tracking-tight sm:text-7xl lg:text-8xl">
            Curated
            <br />
            <span className="text-white/30">estates</span>
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property) => (
            <div
              key={property.title}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover brightness-[0.7] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-light tracking-tight">
                  {property.title}
                </h3>
                <p className="mt-1 text-sm tracking-[0.15em] text-white/50 uppercase">
                  {property.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 border-t border-white/10 pt-32 text-center">
          <h2 className="mb-6 text-3xl font-light tracking-tight sm:text-5xl">
            Inquire about <span className="text-white/30">a property</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/50">
            Each listing in our portfolio is hand-selected for its architectural
            significance and exceptional quality. Contact us for private
            viewings.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full border border-white/20 px-10 py-4 text-sm tracking-[0.2em] uppercase transition-colors hover:border-white hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
