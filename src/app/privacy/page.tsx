import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <LegalSection title="Introduction">
        <p>
          {site.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{" "}
          {site.domain}. This Privacy Policy explains how we collect, use, disclose,
          and protect your personal information when you visit our website or use
          our travel advisory services.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>We may collect the following information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact details: name, email address, phone number</li>
          <li>Travel preferences: destinations, dates, budget, special requests</li>
          <li>Communication records: emails, phone calls, form submissions</li>
          <li>Technical data: IP address, browser type, device information, pages visited</li>
          <li>Cookie and analytics data as described below</li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use your information">
        <p>We use your information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to travel inquiries and provide advisory services</li>
          <li>Process and facilitate bookings with third-party suppliers</li>
          <li>Communicate about your trip before, during, and after travel</li>
          <li>Improve our website and measure advertising performance</li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="Advertising & analytics">
        <p>
          We may use Google Ads, Google Analytics, and similar tools to measure
          ad performance and website traffic. These services may use cookies and
          similar technologies. Google&apos;s use of advertising data is governed by{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Advertising Policies
          </a>
          . You can manage ad personalization at{" "}
          <a
            href="https://adssettings.google.com"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ad Settings
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          We use essential cookies required for site functionality. With your
          consent, we may also use analytics and advertising cookies. You can
          control cookies through your browser settings. Declining cookies may
          affect certain site features.
        </p>
      </LegalSection>

      <LegalSection title="Sharing your information">
        <p>
          We do not sell your personal information. We may share data with
          third-party travel suppliers to fulfill bookings, and with service
          providers who assist our operations (e.g., email, analytics), subject
          to confidentiality obligations.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or restrict use of your personal data. To exercise these
          rights, contact us using the information below.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Privacy inquiries:{" "}
          <a href={`mailto:${site.email}`} className="text-primary underline">
            {site.email}
          </a>{" "}
          ·{" "}
          <a href={site.phoneHref} className="text-primary underline">
            {site.phone}
          </a>
          <br />
          {site.name} · {site.location}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
