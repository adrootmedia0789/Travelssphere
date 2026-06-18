import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  title: `Privacy Policy | ${site.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="prose-custom mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            {site.entity} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates {site.name}. This Privacy Policy explains how we collect,
            use, and protect your personal information.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
          <p>
            We collect information you provide through contact forms, phone calls,
            and email correspondence, including your name, email address, phone
            number, and travel preferences.
          </p>
          <h2 className="text-lg font-semibold text-foreground">How We Use Your Information</h2>
          <p>
            We use your information to respond to travel inquiries, provide
            advisory services, process bookings through third-party suppliers, and
            communicate about your trip.
          </p>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
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
