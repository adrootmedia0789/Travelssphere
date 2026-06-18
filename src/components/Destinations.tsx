import { MapPin, Star } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    name: "New York City, USA",
    tagline: "The city that never sleeps",
    nights: 4,
    rating: 4.9,
    price: "$1,200",
    description:
      "Broadway, world-class dining, and iconic landmarks from Manhattan to Brooklyn.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  },
  {
    name: "Banff, Canada",
    tagline: "Rocky Mountain paradise",
    nights: 5,
    rating: 4.9,
    price: "$1,800",
    description:
      "Lake Louise, Moraine Lake, and alpine adventures in the Canadian Rockies.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
  },
  {
    name: "Miami, USA",
    tagline: "Sun, sand & style",
    nights: 4,
    rating: 4.8,
    price: "$1,100",
    description:
      "South Beach glamour, Art Deco architecture, and Everglades adventures.",
    image:
      "https://images.unsplash.com/photo-1533106418989-88406c7df8f3?w=800&q=80",
  },
  {
    name: "Vancouver, Canada",
    tagline: "Pacific coast gem",
    nights: 5,
    rating: 4.9,
    price: "$1,400",
    description:
      "Harbourfront dining, Stanley Park, and gateway to Vancouver Island.",
    image:
      "https://images.unsplash.com/photo-1559511260-66a8e70a2d8e?w=800&q=80",
  },
  {
    name: "Hawai'i, USA",
    tagline: "Island paradise",
    nights: 7,
    rating: 5.0,
    price: "$2,200",
    description:
      "Volcanoes, luaus, and pristine beaches across the Hawaiian Islands.",
    image:
      "https://images.unsplash.com/photo-1542259009477-d62527252930?w=800&q=80",
  },
  {
    name: "Quebec City, Canada",
    tagline: "European charm",
    nights: 4,
    rating: 4.8,
    price: "$1,300",
    description:
      "Old Quebec's cobblestone streets, French cuisine, and winter carnival magic.",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba202f?w=800&q=80",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Featured Destinations
          </p>
          <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
            Top USA & Canada getaways
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Handpicked North American destinations with curated experiences. Each
            package can be fully customized to match your travel style.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <article
              key={dest.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-white/80">{dest.tagline}</p>
                  <h3 className="font-display text-xl text-white">{dest.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {dest.nights} nights
                  </span>
                  <span className="flex items-center gap-1 font-medium text-accent">
                    <Star className="h-3.5 w-3.5 fill-accent" />
                    {dest.rating}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {dest.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted">Starting from</p>
                    <p className="text-lg font-bold text-primary">
                      From {dest.price}
                    </p>
                  </div>
                  <Link
                    href="#contact"
                    className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-light"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
