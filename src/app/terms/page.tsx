import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  title: `Terms & Conditions | ${site.name}`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl text-foreground">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="prose-custom mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            These Terms & Conditions govern your use of the {site.name} website
            and travel advisory services provided by {site.name}.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Services</h2>
          <p>
            {site.name} acts as a travel advisory intermediary. All bookings are
            fulfilled by third-party suppliers including airlines, hotels, and tour
            operators. We are not responsible for supplier cancellations, delays,
            or changes to services.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Pricing</h2>
          <p>
            All prices displayed on this website are starting estimates in USD or
            CAD. Final pricing is confirmed at the time of booking and may vary
            based on travel dates, availability, taxes, fees, and supplier rates.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-primary underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="text-primary underline">
              {site.phone}
            </a>
            .
          </p>
        </div>

        <Link href="/" className="mt-10 inline-block text-sm font-medium text-primary hover:text-accent">
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
