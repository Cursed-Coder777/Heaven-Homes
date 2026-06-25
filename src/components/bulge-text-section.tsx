"use client";

import dynamic from "next/dynamic";

const BulgeScene = dynamic(() => import("./bulge-text/scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[120vh] items-center bg-black pl-[3vw]">
      <p className="font-sans text-[clamp(100px,17vw,200px)] font-bold leading-[0.8] text-white">
        WHEN
        <br />
        WILL
        <br />
        WE
        <br />
        MEET ?
      </p>
    </div>
  ),
});

export default function BulgeTextSection() {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden bg-black">
      <BulgeScene />
    </section>
  );
}
