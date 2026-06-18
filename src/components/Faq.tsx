import Link from "next/link";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Is TravelsSphere an airline or hotel?",
    a: "No. TravelsSphere is an independent, licensed travel advisory service. We help you plan and book travel through third-party airlines, hotels, and tour operators. We do not operate flights, own hotels, or run tours ourselves.",
  },
  {
    q: "Are the prices on this website final?",
    a: "No. All prices shown are starting estimates in USD or CAD only. Final pricing is confirmed when you speak with an advisor and at the time of booking, based on travel dates, availability, taxes, fees, and supplier rates.",
  },
  {
    q: "Is there a fee for your travel advisory service?",
    a: "Consultations are complimentary. Any service fees, if applicable, will be disclosed clearly before you confirm a booking. See our Fees & Refunds page for full details.",
  },
  {
    q: "How do cancellations and refunds work?",
    a: "Cancellations and refunds are governed by the terms of the airline, hotel, or tour operator that fulfills your booking. TravelsSphere will assist you with change requests but cannot guarantee refunds beyond supplier policies.",
  },
  {
    q: "Are you affiliated with Google, Meta, or any airline?",
    a: "No. TravelsSphere is not owned by, sponsored by, or officially affiliated with Google LLC, Meta Platforms Inc., or any airline, hotel, cruise line, or tour operator featured on this website.",
  },
  {
    q: "How can I contact TravelsSphere?",
    a: `Call ${site.phone}, email ${site.email}, or use the contact form on this site. We respond to inquiries within 24 business hours.`,
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Transparent answers about who we are, how pricing works, and what to
            expect when you book through {site.name}.
          </p>
        </div>

        <dl className="mt-12 space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <dt className="font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-sm text-muted">
          More details in our{" "}
          <Link href="/fees-refunds" className="font-medium text-primary underline">
            Fees & Refunds
          </Link>{" "}
          and{" "}
          <Link href="/about" className="font-medium text-primary underline">
            About
          </Link>{" "}
          pages.
        </p>
      </div>
    </section>
  );
}
