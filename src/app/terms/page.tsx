import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions">
      <LegalSection title="Agreement">
        <p>
          These Terms & Conditions govern your use of {site.domain} and travel
          advisory services provided by {site.name}. By using this website or
          submitting an inquiry, you agree to these terms.
        </p>
      </LegalSection>

      <LegalSection title="Our role">
        <p>
          {site.name} is an independent travel advisory intermediary. We assist
          with planning and booking travel through third-party suppliers
          including airlines, hotels, and tour operators. We do not operate
          flights, own properties, or provide travel services directly.
        </p>
        <p>
          {site.name} is not affiliated with, endorsed by, or sponsored by
          Google LLC, Meta Platforms Inc., or any airline, hotel, cruise line, or
          tour operator featured on this website.
        </p>
      </LegalSection>

      <LegalSection title="Pricing">
        <p>
          All prices displayed on this website are starting estimates in USD or
          CAD and are subject to change without notice. Final pricing is
          confirmed at the time of booking. See our{" "}
          <a href="/fees-refunds" className="text-primary underline">
            Fees & Refunds
          </a>{" "}
          page for full details.
        </p>
      </LegalSection>

      <LegalSection title="Bookings & third-party suppliers">
        <p>
          When you book through {site.name}, your contract for travel services
          is with the applicable third-party supplier. Supplier terms govern
          cancellations, changes, refunds, baggage, schedules, and service
          delivery. {site.name} is not responsible for supplier delays,
          cancellations, overbooking, or service changes.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, {site.name} shall not be liable
          for indirect, incidental, or consequential damages arising from travel
          bookings or use of this website. Our liability is limited to the
          service fees paid directly to {site.name}, if any.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${site.email}`} className="text-primary underline">
            {site.email}
          </a>{" "}
          ·{" "}
          <a href={site.phoneHref} className="text-primary underline">
            {site.phone}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
