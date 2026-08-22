import coastImg from "@/assets/IMG-20260821-WA0048.jpg.asset.json";
import roadsideImg from "@/assets/IMG-20260821-WA0045.jpg.asset.json";
import pairImg from "@/assets/IMG-20260821-WA0040.jpg.asset.json";
import crewImg from "@/assets/IMG-20260821-WA0051.jpg.asset.json";

const SHOTS = [
  {
    src: coastImg.url,
    alt: "Topaz Transport Scania hauling branded curtain-side trailers along the Namibian coast",
    caption: "Coastal corridor run",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: pairImg.url,
    alt: "Two Topaz Transport Scania horses fitted with abnormal load boards",
    caption: "Abnormal load ready",
    className: "",
  },
  {
    src: roadsideImg.url,
    alt: "Topaz Transport Scania TP06 on a Namibian highway",
    caption: "TP06 on the B1",
    className: "",
  },
  {
    src: crewImg.url,
    alt: "Topaz Transport team member in branded uniform in front of the fleet",
    caption: "Our people on site",
    className: "sm:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
            On The Road
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Our Fleet In Action
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real Topaz trucks, real routes — from the Atlantic coastline to the northern corridors of
            Namibia and the wider SADC region.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[180px] gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
          {SHOTS.map((s) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-xl shadow-[var(--shadow-elevated)] ${s.className}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.17_0.035_264/0.85),transparent)] p-4 text-sm font-medium text-white">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
