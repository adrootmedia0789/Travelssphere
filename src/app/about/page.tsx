import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: `Learn about ${site.name}, an independent licensed travel advisory service at ${site.domain}.`,
};

export default function AboutPage() {
  return (
    <LegalLayout title="About Us">
      <LegalSection title="Who we are">
        <p>
          {site.name} ({site.domain}) is an independent, licensed travel advisory
          service based in the United States, serving travelers worldwide. We help
          clients plan and book flights, hotels, and curated travel experiences
          through third-party suppliers.
        </p>
        <p>
          <strong className="text-foreground">We are a travel advisory service — not an airline, hotel, cruise line, or tour operator.</strong>{" "}
          All travel services are fulfilled by third-party suppliers under their
          own terms and conditions.
        </p>
      </LegalSection>

      <LegalSection title="What we do">
        <p>
          Our certified travel advisors provide complimentary consultations,
          custom itineraries, booking assistance, and 24/7 support before, during,
          and after your trip. We compare options across multiple suppliers to
          help you find competitive fares and accommodations.
        </p>
      </LegalSection>

      <LegalSection title="Affiliations & disclosures">
        <p>
          {site.name} is <strong className="text-foreground">not</strong> owned by,
          sponsored by, endorsed by, or officially affiliated with Google LLC, Meta
          Platforms Inc. (Facebook/Instagram), or any airline, hotel, cruise
          line, or tour operator listed on this website.
        </p>
        <p>
          Prices displayed on {site.domain} are starting estimates only. Final
          pricing is confirmed when you speak with an advisor and at the time of
          booking.
        </p>
      </LegalSection>

      <LegalSection title="Contact information">
        <p>
          <strong className="text-foreground">Business name:</strong> {site.name}
          <br />
          <strong className="text-foreground">Website:</strong> {site.domain}
          <br />
          <strong className="text-foreground">Phone:</strong>{" "}
          <a href={site.phoneHref} className="text-primary underline">
            {site.phone}
          </a>
          <br />
          <strong className="text-foreground">Email:</strong>{" "}
          <a href={`mailto:${site.email}`} className="text-primary underline">
            {site.email}
          </a>
          <br />
          <strong className="text-foreground">Location:</strong> {site.location}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
