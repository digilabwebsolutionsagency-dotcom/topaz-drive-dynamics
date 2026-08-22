import { Gauge, Globe2, HeartHandshake, Quote, Sparkles, Users } from "lucide-react";
import aboutImg from "@/assets/IMG-20260821-WA0016.jpg.asset.json";

const VALUES = [
  {
    icon: Sparkles,
    title: "Always Advancing",
    text: "Modern TMS solutions, live tracking and continuous enhancement of every process we run.",
  },
  {
    icon: Users,
    title: "Celebrate Diversity",
    text: "A multicultural team built for long-term customer relationships and shared success.",
  },
  {
    icon: Gauge,
    title: "Excellence & Quality",
    text: "Exceeding expectations on every load, every site, and every deadline we commit to.",
  },
  {
    icon: Globe2,
    title: "Responsibility",
    text: "Sustainable, compliant operating practices across Namibia and the wider SADC region.",
  },
  {
    icon: HeartHandshake,
    title: "Employee Collaboration",
    text: "An open culture where ideas from the yard to the boardroom drive innovation.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
              About Topaz Transport CC
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Driven by Innovation, Defined by Reliability
            </h2>
            <p className="mt-6 text-muted-foreground">
              Topaz Transport CC is a trusted third-party logistics (3PL) provider operating from
              Windhoek with a decade of unbroken profitability. We combine an owned heavy fleet, a
              disciplined risk management framework and modern transport technology to keep freight
              and plant moving across Namibia and the SADC region.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <h3 className="font-display text-lg uppercase tracking-wide">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To be the industry leader in every business venture and to build customer and
                  stakeholder value while changing the way you think about the logistics industry.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <h3 className="font-display text-lg uppercase tracking-wide">Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To provide excellence and quality service through innovation, integrity and a
                  forward-thinking approach — utilizing technology and collaboration to exceed
                  industry standards.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={aboutImg.url}
              alt="Topaz Transport Scania lowbed hauling a CAT excavator in Namibia"
              width={1200}
              height={900}
              loading="lazy"
              className="h-64 w-full rounded-xl object-cover shadow-[var(--shadow-elevated)] sm:h-80"
            />
            <figure className="relative overflow-hidden rounded-xl surface-dark p-7 text-white shadow-[var(--shadow-elevated)]">
              <Quote className="absolute -right-2 -top-2 size-24 text-gold/10" />
              <blockquote className="relative text-sm leading-relaxed text-white/85">
                “Innovation matters and it starts with a mind-shift. There's only one way to master
                anything, and it is to never ever stop. We will continue to work with all, to build
                the kind of inclusive industry that expands opportunities.”
              </blockquote>
              <figcaption className="relative mt-5 flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-gold)] font-display font-bold text-gold-foreground">
                  BN
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-base uppercase tracking-wide">
                    Boas Naanda
                  </span>
                  <span className="block truncate text-xs text-gold">Topaz Group Chairman</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="grid size-11 place-items-center rounded-lg bg-gold/15 text-gold-deep transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg uppercase tracking-wide">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
