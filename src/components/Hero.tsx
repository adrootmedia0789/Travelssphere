import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "2,400+", label: "Trips Planned" },
  { value: "50+", label: "Global Destinations" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d4f4f]/80" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent-light" />
            <span>Travel the world with {site.name}</span>
          </div>

          <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            Flights, hotels, and experiences worldwide — expertly planned by our
            travel advisors. Smarter bookings, better trips, every time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-light"
            >
              Start Planning
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#destinations"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              Browse Experiences
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-accent-light sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/75">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
