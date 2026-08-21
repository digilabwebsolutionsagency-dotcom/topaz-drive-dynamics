import { useEffect, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/topaz-data";
import { scrollToSection } from "@/lib/scroll";
import logoAsset from "@/assets/topaz-logo.png.asset.json";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-charcoal text-white/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a className="flex items-center gap-2 hover:text-gold" href={`tel:${CONTACT.tel.replace(/\s/g, "")}`}>
              <Phone className="size-3.5 text-gold" /> {CONTACT.tel}
            </a>
            <a
              className="hidden items-center gap-2 hover:text-gold sm:flex"
              href={`tel:${CONTACT.mobile.replace(/\s/g, "")}`}
            >
              <Phone className="size-3.5 text-gold" /> {CONTACT.mobile}
            </a>
          </div>
          <a className="flex items-center gap-2 hover:text-gold" href={`mailto:${CONTACT.emails[0]}`}>
            <Mail className="size-3.5 text-gold" /> {CONTACT.emails[0]}
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-colors ${
          scrolled
            ? "border-border bg-background/90 backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
          <button onClick={() => go("home")} className="flex min-w-0 items-center text-left">
            <img
              src={logoAsset.url}
              alt="Topaz Transport CC — logistics and plant hire"
              width={1163}
              height={461}
              className="h-12 w-auto sm:h-14 lg:h-16"
            />
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="hero" className="hidden sm:inline-flex" onClick={() => go("contact")}>
              Get a Quote
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="border-b border-border/60 py-3 text-left text-sm font-medium last:border-0"
                >
                  {l.label}
                </button>
              ))}
              <Button variant="hero" className="my-3 sm:hidden" onClick={() => go("contact")}>
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
