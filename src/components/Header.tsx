"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#flights", label: "Flights" },
  { href: "#hotels", label: "Hotels" },
  { href: "#experiences", label: "Experiences" },
  { href: "#destinations", label: "Destinations" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl font-normal tracking-tight text-primary sm:text-2xl">
            {site.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-muted sm:text-xs">
            A service of {site.entity}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent sm:flex"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/25 transition hover:bg-accent-light sm:inline-flex"
          >
            Plan Your Trip
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex rounded-lg p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-background hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Plan Your Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
