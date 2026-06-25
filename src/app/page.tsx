import HeroScrollSection from "~/components/hero-scroll-section";
import TelescopeZoomSection from "~/components/telescope-zoom-section";
export default function HomePage() {
  return (
    <>
      <HeroScrollSection />
      <TelescopeZoomSection />
      <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-light tracking-tight sm:text-6xl">
            Welcome to Heaven Homes
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            This is the content below the hero section. Scroll up to see the
            transition effect again.
          </p>
        </div>
      </section>
    </>
  );
}
