import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or email King Solomon Investment & Supplies, or send a service inquiry using the contact form.",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="We are here to help"
        title="Let’s talk"
        emphasis="about your plans."
        description="Call our team or send a short message. We will direct your inquiry to the right place."
        image="/IMG-20260928-WA6368.jpg"
        imagePosition="center 44%"
        showText={false}
        unoptimized
      />
      <section className="inner-content page-wrap">
        <div className="contact-layout">
          <div className="contact-details content-card">
            <h2>Contact our team</h2>
            <p>For the quickest response, call one of our listed numbers. For written inquiries, use the form or email us directly.</p>
            <div className="contact-method">
              <Phone size={20} aria-hidden="true" />
              <div><strong>Call us</strong>{business.phones.map((phone) => <a href={`tel:${phone.href}`} key={phone.display}>{phone.display}</a>)}</div>
            </div>
            <div className="contact-method">
              <Mail size={20} aria-hidden="true" />
              <div><strong>Email</strong><a href={`mailto:${business.email}`}>{business.email}</a></div>
            </div>
            <p>Message our team on WhatsApp using the floating button.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
