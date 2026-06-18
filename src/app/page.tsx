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

export default function Home() {
  return (
    <>
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
