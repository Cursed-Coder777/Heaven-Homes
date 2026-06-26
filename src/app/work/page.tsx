import { StickyCard } from "~/components/sticky-card";

const PROPERTIES = [
  { id: 1, alt: "Villa Serenity - Amalfi Coast, Italy", image: "/hero-images/1.webp" },
  { id: 2, alt: "Penthouse Nocturne - Manhattan, USA", image: "/hero-images/2.webp" },
  { id: 3, alt: "Casa Verde - Tuscany, Italy", image: "/hero-images/3.webp" },
  { id: 4, alt: "Azure Residence - Saint-Tropez, France", image: "/hero-images/4.webp" },
  { id: 5, alt: "The Ridge Estate - Aspen, USA", image: "/hero-images/5.webp" },
  { id: 6, alt: "Palm Pavilion - Dubai, UAE", image: "/hero-images/6.webp" },
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
      </div>

      <StickyCard cards={PROPERTIES} />

      <div className="mx-auto max-w-6xl">
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
