import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How King Solomon Investment & Supplies handles website contact inquiries.",
};

export default function PrivacyPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Your information"
        title="Privacy"
        emphasis="notice."
        description="A starter notice for information submitted through this website. The business must review and approve it before launch."
        image="photo-1450101499163-c8848c66ca85"
        imagePosition="center 48%"
      />
      <section className="inner-content page-wrap">
        <div className="privacy-copy content-card">
          <p>This website collects the details you choose to submit through the contact form, including your name, email address, optional phone number, service selection, and message. The information is used to respond to your inquiry and is sent to King Solomon Investment &amp; Supplies by email through its email delivery provider, Resend.</p>
          <h2>How information is handled</h2>
          <p>The initial website does not save inquiries in a website database. Information may be handled by email and service providers involved in delivering the message. The business should confirm its email retention practices and provider settings before launch.</p>
          <h2>Your choices</h2>
          <p>You can contact the business to ask about your inquiry or request correction or deletion where applicable. Do not submit sensitive personal or financial information through this form.</p>
          <h2>Contact</h2>
          <p>For privacy questions, email <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
          <p>This notice is a draft and is not legal advice. The business must review it for its actual practices and applicable requirements before collecting visitor information.</p>
        </div>
      </section>
    </main>
  );
}
