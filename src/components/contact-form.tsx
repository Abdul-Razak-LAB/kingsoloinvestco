"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { business } from "@/lib/business";

const serviceOptions = [
  "Real estate",
  "Land sales or rentals",
  "Building materials",
  "Building and construction",
  "Legal advisory",
  "Site plans or indentures",
  "Vehicle inquiry",
  "Import or export",
  "Other",
];

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [hasError, setHasError] = useState(false);
  const [fallbackEmailHref, setFallbackEmailHref] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setStatus("");
    setHasError(false);
    setFallbackEmailHref("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const emailSubject = `Website inquiry: ${String(formData.get("service") ?? "General inquiry")}`;
    const emailBody = [
      `Name: ${String(formData.get("name") ?? "")}`,
      `Email: ${String(formData.get("email") ?? "")}`,
      `Phone: ${String(formData.get("phone") || "Not provided")}`,
      `Service: ${String(formData.get("service") ?? "")}`,
      "",
      "Message:",
      String(formData.get("message") ?? ""),
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Your message could not be sent.");
      form.reset();
      setStatus("Thank you. Your inquiry has been sent. Our team will be in touch.");
    } catch (error) {
      setHasError(true);
      setFallbackEmailHref(`mailto:${business.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`);
      setStatus(error instanceof Error ? error.message : "Something went wrong. Please try again or call our team.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Send an inquiry</h2>
      <p>Share a few details and we will direct your message to the right person.</p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Your name *</label>
          <input id="name" name="name" autoComplete="name" maxLength={100} required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address *</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number <span>(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
        </div>
        <div className="form-field">
          <label htmlFor="service">What is this about? *</label>
          <select id="service" name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((service) => <option key={service}>{service}</option>)}
          </select>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="message">How can we help? *</label>
          <textarea id="message" name="message" maxLength={3000} required />
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <button className="button button-gold form-submit" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Send inquiry"} <ArrowRight size={16} aria-hidden="true" />
      </button>
      <p className="form-status" role="status" aria-live="polite" data-error={hasError}>
        {status}
        {fallbackEmailHref && <><br /><a href={fallbackEmailHref}>Open your email app with this inquiry</a>.</>}
      </p>
    </form>
  );
}
