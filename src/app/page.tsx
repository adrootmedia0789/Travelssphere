import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Destinations } from "@/components/Destinations";
import { Disclosure } from "@/components/Disclosure";
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
        {site.name} is a travel advisory service of {site.entity}. We are not
        affiliated with Google, Meta, any airline, or hotel chain. Prices shown
        are starting estimates, subject to change and availability.
      </div>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Disclosure />
        <Services />
        <WhyUs />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
