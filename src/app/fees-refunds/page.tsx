import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Fees & Refunds",
  description: `Fees, pricing, cancellation, and refund policies for ${site.name} travel advisory services.`,
};

export default function FeesRefundsPage() {
  return (
    <LegalLayout title="Fees & Refunds">
      <LegalSection title="Pricing transparency">
        <p>
          All prices displayed on {site.domain} are <strong className="text-foreground">starting estimates</strong> in USD or CAD. They are not guaranteed fares or final booking prices. Actual pricing depends on travel dates, availability, seasonal demand, taxes, government fees, baggage charges, and supplier rates.
        </p>
        <p>
          Final pricing is always confirmed in writing or by phone before you
          authorize a booking. You will never be charged without your explicit
          approval.
        </p>
      </LegalSection>

      <LegalSection title="Service fees">
        <p>
          Initial travel consultations are complimentary. If a service fee,
          planning fee, or booking fee applies to your itinerary, it will be
          disclosed clearly and in advance before you confirm any reservation.
        </p>
        <p>
          Third-party suppliers (airlines, hotels, tour operators) may charge
          their own fees, including change fees, cancellation fees, resort fees,
          and baggage fees. These are set by the supplier, not {site.name}.
        </p>
      </LegalSection>

      <LegalSection title="Cancellations & changes">
        <p>
          Cancellation and change policies are determined by the airline, hotel,
          or tour operator that fulfills your booking — not by {site.name}. Our
          advisors will explain applicable policies before you book and assist
          with change requests on your behalf.
        </p>
        <p>
          Some fares and packages are non-refundable or subject to penalties.
          Always review supplier terms before confirming.
        </p>
      </LegalSection>

      <LegalSection title="Refunds">
        <p>
          Refunds, when eligible, are processed according to the third-party
          supplier&apos;s policies and timelines. {site.name} cannot guarantee
          refunds beyond what the supplier allows. Processing times vary by
          airline, hotel, or operator and may take several billing cycles.
        </p>
        <p>
          Any service fees charged by {site.name} may be non-refundable once
          advisory work has been completed, unless otherwise stated at the time
          of booking.
        </p>
      </LegalSection>

      <LegalSection title="Questions">
        <p>
          For questions about fees, cancellations, or refunds, contact us at{" "}
          <a href={site.phoneHref} className="text-primary underline">
            {site.phone}
          </a>{" "}
          or{" "}
          <a href={`mailto:${site.email}`} className="text-primary underline">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
