import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Destinations } from "@/components/Destinations";
import { Disclosure } from "@/components/Disclosure";
import { Faq } from "@/components/Faq";
import { FloatingCall, Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <div className="border-b border-border bg-primary/5 px-4 py-2 text-center text-xs text-muted sm:text-sm">
        <strong className="text-foreground">{site.businessType}</strong> Prices
        shown are estimates only. Not affiliated with Google, Meta, any airline,
        or hotel chain. Call {site.phone} for confirmed pricing.
      </div>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Disclosure />
        <Services />
        <WhyUs />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
