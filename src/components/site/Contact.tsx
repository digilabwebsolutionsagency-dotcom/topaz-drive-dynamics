import { useState } from "react";
import { Building2, Mail, MapPin, Phone, Send, Warehouse } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CONTACT, FLEET } from "@/lib/topaz-data";

const SERVICES = [
  "Logistics / Freight Transport",
  "Plant Hire",
  "Abnormal Load",
  "General Inquiry",
];

type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "location", string>>;

export function Contact({
  equipment,
  setEquipment,
}: {
  equipment: string[];
  setEquipment: (ids: string[]) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleEquipment = (id: string) =>
    setEquipment(equipment.includes(id) ? equipment.filter((x) => x !== id) : [...equipment, id]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.phone.replace(/\D/g, "").length < 7) next.phone = "Enter a valid phone number.";
    if (!form.service) next.service = "Select the service you need.";
    if (form.location.trim().length < 2) next.location = "Tell us where the work is.";
    setErrors(next);
    if (Object.keys(next).length) {
      toast.error("Please correct the highlighted fields.");
      return;
    }
    toast.success("Quotation request sent", {
      description: "Our team will respond within one business day.",
    });
    setForm({ name: "", email: "", phone: "", service: "", location: "", message: "" });
    setEquipment([]);
  };

  const err = (k: keyof Errors) =>
    errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <section id="contact" className="scroll-mt-28 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Contact & Quotation
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Request Your Free Quotation
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={submit}
            noValidate
            className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Your name"
                  className="mt-1.5"
                />
                {err("name")}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1.5"
                />
                {err("email")}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+264 ..."
                  className="mt-1.5"
                />
                {err("phone")}
              </div>
              <div>
                <Label htmlFor="service">Service Required</Label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                  className="mt-1.5 h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {err("service")}
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium">Specific Equipment Needed</legend>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {FLEET.map((f) => (
                  <label
                    key={f.id}
                    className="flex cursor-pointer items-center gap-2.5 rounded-md border border-border p-2.5 text-sm transition-colors hover:border-gold"
                  >
                    <Checkbox
                      checked={equipment.includes(f.id)}
                      onCheckedChange={() => toggleEquipment(f.id)}
                    />
                    <span className="min-w-0 truncate">{f.name}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-6">
              <Label htmlFor="location">Delivery / Project Location</Label>
              <Input
                id="location"
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
                placeholder="e.g. Walvis Bay, Erongo"
                className="mt-1.5"
              />
              {err("location")}
            </div>

            <div className="mt-5">
              <Label htmlFor="message">Message / Project Details</Label>
              <Textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Duration, tonnage, timelines..."
                className="mt-1.5"
              />
            </div>

            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
              <Send /> Request Free Quotation
            </Button>
          </form>

          <div className="space-y-4">
            <div className="rounded-xl surface-dark p-6 text-white shadow-[var(--shadow-elevated)]">
              <h3 className="font-display text-lg uppercase tracking-wide">Talk to us directly</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-gold" />
                  <a href={`tel:${CONTACT.tel.replace(/\s/g, "")}`}>{CONTACT.tel} (Main Tel)</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-gold" />
                  <a href={`tel:${CONTACT.mobile.replace(/\s/g, "")}`}>{CONTACT.mobile} (Mobile)</a>
                </li>
                {CONTACT.emails.map((e) => (
                  <li key={e} className="flex items-center gap-3">
                    <Mail className="size-4 shrink-0 text-gold" />
                    <a href={`mailto:${e}`} className="truncate hover:text-gold">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg uppercase tracking-wide">Find us</h3>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Building2 className="size-4 shrink-0 text-gold-deep" />
                  <span>
                    <strong className="block text-foreground">Offices</strong>
                    {CONTACT.offices.join(" · ")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Warehouse className="size-4 shrink-0 text-gold-deep" />
                  <span>
                    <strong className="block text-foreground">Warehouse</strong>
                    {CONTACT.warehouse}
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="size-4 shrink-0 text-gold-deep" />
                  <span>
                    <strong className="block text-foreground">Postal</strong>
                    {CONTACT.postal.join(" · ")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Topaz Transport CC location in Windhoek, Namibia"
                src="https://www.openstreetmap.org/export/embed.html?bbox=17.0290%2C-22.6100%2C17.1200%2C-22.5350&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
