import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Fleet } from "@/components/site/Fleet";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { scrollToSection } from "@/lib/scroll";

const TITLE = "TOPAZ Transport CC | Logistics & Heavy Plant Hire in Namibia";
const DESCRIPTION =
  "Freight transport, abnormal loads and heavy plant hire from Windhoek across Namibia and the SADC region. Request a free quotation from Topaz Transport CC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [equipment, setEquipment] = useState<string[]>([]);

  const handleInquire = (id: string) => {
    setEquipment((prev) => (prev.includes(id) ? prev : [...prev, id]));
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet onInquire={handleInquire} />
        <Gallery />
        <WhyUs />
        <Contact equipment={equipment} setEquipment={setEquipment} />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
