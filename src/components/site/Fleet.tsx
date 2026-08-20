import { useState } from "react";
import { ArrowRight, Check, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FLEET, FLEET_CATEGORIES } from "@/lib/topaz-data";

export function Fleet({ onInquire }: { onInquire: (id: string) => void }) {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const items = FLEET.filter((f) => filter === "All" || f.category === filter);
  const active = FLEET.find((f) => f.id === openId) ?? null;

  return (
    <section id="fleet" className="scroll-mt-28 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Fleet & Plant Hire
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Heavy Duty Equipment & Fleet Hire
          </h2>
          <p className="mt-4 text-muted-foreground">
            Well-maintained machinery equipped with the latest technology for mining, construction
            and earthmoving projects.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {FLEET_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === c
                  ? "border-gold bg-[image:var(--gradient-gold)] text-gold-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-gold hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <article
              key={f.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative surface-dark p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-success">
                  <span className="size-1.5 rounded-full bg-success" /> Available
                </span>
                <Cog className="absolute -bottom-6 right-2 size-24 text-gold/10 transition-transform duration-500 group-hover:rotate-45" />
                <h3 className="mt-4 font-display text-xl uppercase leading-tight tracking-wide text-white">
                  {f.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{f.spec}</p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-muted-foreground">{f.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button variant="hero" size="sm" onClick={() => onInquire(f.id)}>
                    Inquire Availability
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setOpenId(f.id)}>
                    Details <ArrowRight />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent className="sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl uppercase tracking-wide">
                  {active.name}
                </DialogTitle>
                <DialogDescription className="font-medium text-gold-deep">
                  {active.spec} · {active.category}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{active.detail}</p>
              <ul className="space-y-2">
                {active.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-success" /> {p}
                  </li>
                ))}
              </ul>
              <Button
                variant="hero"
                size="lg"
                onClick={() => {
                  setOpenId(null);
                  onInquire(active.id);
                }}
              >
                Inquire Availability <ArrowRight />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
