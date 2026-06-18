import { Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const serviceLinks = [
  { href: "#flights", label: "Flights" },
  { href: "#hotels", label: "Hotels" },
  { href: "#experiences", label: "Experiences" },
  { href: "#destinations", label: "Destinations" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-display text-2xl">{site.name}</div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Flights, hotels, and curated travel experiences worldwide.{" "}
              {site.name} helps you plan smarter trips with expert booking
              support and personalized service.
            </p>
            <p className="mt-4 text-xs text-white/60">
              A service of {site.entity}
              <br />
              Travel Advisory Service · Licensed Travel Advisor
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="transition hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-xs leading-relaxed text-white/55">
            <strong className="text-white/70">Advertising disclosure:</strong>{" "}
            {site.name} is a travel advisory service of {site.entity}.{" "}
            {site.entity} is a licensed travel advisory business operating in
            the United States and Canada. We are not owned by, sponsored by, or
            officially affiliated with Google LLC, Meta Platforms Inc., or any
            airline, hotel, or tour operator featured on this site. Displayed
            prices are estimates only and may vary based on dates, availability,
            and supplier rates. Bookings are fulfilled by third-party travel
            suppliers subject to their terms and conditions.
          </p>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/55">
              © {site.year} {site.entity}. All rights reserved. {site.name} is a
              travel advisory service of {site.entity}.
            </p>
            <p className="text-xs text-white/55">
              Prices are estimates only · Subject to availability
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/40 transition hover:bg-accent-light hover:shadow-xl sm:bottom-8 sm:right-8"
    >
      <Phone className="h-4 w-4" />
      <span className="hidden sm:inline">Call us: {site.phone}</span>
      <span className="sm:hidden">Call Now</span>
    </a>
  );
}
