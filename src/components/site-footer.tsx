import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-wrap">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image className="brand-logo" src="/IMG-20260928-WA0007.jpg" alt="" width={62} height={62} />
            <span className="brand-copy"><strong>King Solomon</strong><small>Investment &amp; Supplies ltd</small></span>
          </Link>
          <p className="footer-note">Real estate, land, building supplies, and construction service inquiries.</p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <Link href="/services">Our services</Link>
            <Link href="/about">About the company</Link>
            <Link href="/contact">Contact our team</Link>
            <Link href="/privacy">Privacy notice</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Call or email</p>
          <div className="footer-links">
            {business.phones.map((phone) => <a href={`tel:${phone.href}`} key={phone.display}>{phone.display}</a>)}
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <p className="footer-title footer-location-title">Location</p>
          <div className="footer-links">
            <address>{business.location}</address>
          </div>
        </div>
      </div>
      <div className="footer-bottom page-wrap">
        <span>© {new Date().getFullYear()} King Solomon Investment &amp; Supplies ltd</span>
        <span>Website inquiries are sent securely by email.</span>
      </div>
    </footer>
  );
}
