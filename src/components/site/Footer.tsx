import { NAV_LINKS } from "@/lib/topaz-data";
import { scrollToSection } from "@/lib/scroll";

export function Footer() {
  return (
    <footer className="surface-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-[image:var(--gradient-gold)] font-display text-xl font-bold text-gold-foreground">
                T
              </span>
              <span>
                <span className="block font-display text-lg font-bold tracking-wide text-white">
                  TOPAZ TRANSPORT CC
                </span>
                <span className="block text-[11px] uppercase tracking-[0.26em] text-gold">
                  logistics + plant hire
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm">
              One-stop facility for all your logistics & plant hire needs.
            </p>
            <p className="mt-4 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs">
              Serving Namibia & the entire SADC Region.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-white">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollToSection(l.id)} className="hover:text-gold">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} Topaz Transport CC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
