import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="gradient-cta py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Your next unforgettable journey awaits
        </h2>
        <p className="mt-4 text-lg text-white/85">
          Complimentary consultation. No fees, no pressure — just expert travel
          advice from the Direct Sales Catalyst team.
        </p>
        <Link
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-light"
        >
          Book Your Free Consultation
        </Link>
      </div>
    </section>
  );
}
