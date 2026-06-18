import {
  Building2,
  Compass,
  Headphones,
  Plane,
  Route,
  Users,
} from "lucide-react";

const services = [
  {
    id: "flights",
    icon: Plane,
    title: "Flight Booking",
    description:
      "Domestic and international flights on all major carriers — expert routing, cabin selection, and disruption support.",
  },
  {
    id: "hotels",
    icon: Building2,
    title: "Hotel Reservations",
    description:
      "Preferred partner rates at 4- and 5-star properties with upgrades, breakfast, and VIP amenities.",
  },
  {
    id: "experiences",
    icon: Compass,
    title: "Curated Experiences",
    description:
      "Tours, activities, and exclusive access at destinations worldwide — tailored to your travel style.",
  },
  {
    icon: Headphones,
    title: "24/7 Travel Support",
    description:
      "Real-time assistance before, during, and after your trip. Our team is one call away.",
  },
  {
    icon: Users,
    title: "Group & Corporate Travel",
    description:
      "Seamless coordination for conferences, retreats, and team trips of any size.",
  },
  {
    icon: Route,
    title: "Custom Itineraries",
    description:
      "Every trip built from scratch around your interests, pace, and budget — no cookie-cutter packages.",
  },
];

export function Services() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
            Flights, hotels & experiences — all in one place
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From cross-border flights to luxury hotel stays and curated
            experiences, our team manages every detail of your travel. No stress,
            no surprises.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              id={service.id}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
