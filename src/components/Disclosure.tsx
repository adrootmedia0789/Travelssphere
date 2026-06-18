import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export function Disclosure() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <AlertTriangle className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">
              Important Disclosure
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <p>
                {site.name} is a travel advisory service of {site.entity}. We are{" "}
                <strong className="text-foreground">not</strong> affiliated with,
                endorsed by, or sponsored by Google, Meta (Facebook/Instagram), or
                any airline, hotel, cruise line, or tour operator listed on this
                website.
              </p>
              <p>
                All prices displayed are <strong className="text-foreground">starting estimates</strong> in USD or CAD and are subject to change without notice based on travel dates, availability, seasonal demand, taxes, fees, and supplier pricing. Final pricing is confirmed at the time of booking.
              </p>
              <p>
                Travel services are provided by third-party suppliers (airlines,
                hotels, tour operators). {site.name} acts as an intermediary and is
                not responsible for supplier cancellations, delays, or service
                changes. See our{" "}
                <Link href="/terms" className="font-medium text-primary underline hover:text-accent">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-medium text-primary underline hover:text-accent">
                  Privacy Policy
                </Link>{" "}
                for full details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
