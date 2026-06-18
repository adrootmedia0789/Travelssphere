import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const benefits = [
  "Certified travel advisors with 12+ years of industry experience",
  "Preferred partner with Virtuoso & Signature Travel Network",
  "Personal relationships with hotels, airlines & local guides worldwide",
  "Complimentary travel insurance consultation included",
  "Licensed and insured travel advisory business",
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "Share your travel dreams, preferences, and budget in a complimentary consultation.",
  },
  {
    num: "02",
    title: "Custom Proposal",
    description:
      "Receive a detailed itinerary with handpicked accommodations, activities, and transparent pricing.",
  },
  {
    num: "03",
    title: "Refine & Book",
    description:
      "Collaborate on adjustments until every detail is perfect, then we handle all bookings.",
  },
  {
    num: "04",
    title: "Travel & Support",
    description:
      "Depart with confidence knowing our team is available 24/7 throughout your entire journey.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why {site.name}
            </p>
            <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
              Travel smarter with expert advisors
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {site.name} isn&apos;t just a booking service — we&apos;re a
              full-service travel advisory team. We build
              relationships with top hotels, airlines, and local experts worldwide
              so you get insider access, competitive fares, and peace of mind on
              every trip.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                alt="Direct Sales Catalyst travel advisory team"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary px-6 py-4 text-white shadow-xl">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm text-white/80">Years of expertise</div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-center text-2xl text-foreground sm:text-3xl">
            How it works
          </h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent">
                  {step.num}
                </div>
                <h4 className="mt-4 font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
