import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-muted">
          {site.name} · {site.domain} · Last updated: June 2026
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          {children}
        </div>
        <Link
          href="/"
          className="mt-10 inline-block text-sm font-medium text-primary hover:text-accent"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
