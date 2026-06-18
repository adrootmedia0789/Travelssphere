"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get In Touch
            </p>
            <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
              Let&apos;s plan your dream trip
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Ready to start your journey? Fill out the form and our team will
              reach out within 24 hours for a complimentary consultation. No
              obligation, just great travel ideas.
            </p>
            <p className="mt-4 text-sm text-muted">
              {site.name} is a travel advisory service of {site.entity}.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 text-foreground transition hover:text-accent"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted">Email</div>
                  <div className="font-medium">{site.email}</div>
                </div>
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 text-foreground transition hover:text-accent"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted">Phone</div>
                  <div className="font-medium">{site.phone}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted">Location</div>
                  <div className="font-medium">{site.location}</div>
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl border border-border bg-background p-12 text-center">
              <div>
                <div className="text-4xl">✈️</div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Thank you for your inquiry!
                </h3>
                <p className="mt-2 text-muted">
                  Our team will reach out within 24 hours. For immediate
                  assistance, call{" "}
                  <a href={site.phoneHref} className="font-medium text-primary">
                    {site.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="destination" className="text-sm font-medium text-foreground">
                  Dream Destination
                </label>
                <input
                  id="destination"
                  name="destination"
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Tell us about your trip
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <label className="mt-5 flex items-start gap-3 text-sm text-muted">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  I agree to the Terms & Conditions and Privacy Policy. I consent
                  to being contacted about my travel inquiry.
                </span>
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-light sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
