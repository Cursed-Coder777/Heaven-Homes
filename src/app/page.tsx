import HeroScrollSection from "~/components/hero-scroll-section";
import TelescopeZoomSection from "~/components/telescope-zoom-section";
import { StickyCard } from "~/components/sticky-card";

const FEATURED_PROPERTIES = [
  { id: 9, alt: "La Maison Blanche", image: "/hero-images/9.webp", title: "La Maison Blanche", subtitle: "Côte d'Azur, France" },
  { id: 1, alt: "Villa Serenity", image: "/hero-images/1.webp", title: "Villa Serenity", subtitle: "Amalfi Coast, Italy" },
  { id: 3, alt: "Casa Verde", image: "/hero-images/3.webp", title: "Casa Verde", subtitle: "Tuscany, Italy" },
  { id: 4, alt: "Azure Residence", image: "/hero-images/4.webp", title: "Azure Residence", subtitle: "Saint-Tropez, France" },
  { id: 7, alt: "The Cliff House", image: "/hero-images/7.webp", title: "The Cliff House", subtitle: "Santorini, Greece" },
  { id: 10, alt: "Dune Palace", image: "/hero-images/10.webp", title: "Dune Palace", subtitle: "Marrakech, Morocco" },
];

export default function HomePage() {
  return (
    <>
      <HeroScrollSection />
      <TelescopeZoomSection />

<section className="w-full bg-black text-white">
  <StickyCard cards={FEATURED_PROPERTIES} />
</section>
    </>
  );
}
