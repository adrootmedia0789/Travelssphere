import { Quote } from "lucide-react";
import { site } from "@/lib/site";

const testimonials = [
  {
    quote: `${site.name} booked our NYC to Toronto trip — flights, hotel, and a Niagara Falls day tour. Flawless from start to finish.`,
    author: "Sarah & Michael T.",
    trip: "NYC → Toronto Getaway",
  },
  {
    quote:
      "Our Banff and Lake Louise itinerary was incredible. The team secured a room upgrade and arranged a private guide for our family.",
    author: "James R.",
    trip: "Canadian Rockies Adventure",
  },
  {
    quote: `Cross-border business travel is a headache — unless you have ${site.name}. They handle everything between our Chicago and Montreal offices.`,
    author: "The Martinez Family",
    trip: "Chicago ↔ Montreal Business",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Client Stories
          </p>
          <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
            Travelers who trust {site.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Real experiences from real clients. Individual results may vary.
            Testimonials reflect personal experiences and are not guarantees of
            future outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-accent/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted">{t.trip}</div>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
