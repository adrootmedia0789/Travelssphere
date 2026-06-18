import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${site.name} travel advisory services, pricing, and bookings.`,
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <Faq />
      <Footer />
    </>
  );
}
