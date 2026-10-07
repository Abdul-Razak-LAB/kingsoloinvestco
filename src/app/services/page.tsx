import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCards } from "@/components/service-cards";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore real estate, land, building supplies, construction, and related service inquiries with King Solomon Investment & Supplies.",
};

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="How we can help"
        title="Many services."
        emphasis="One conversation."
        description="Tell us what you are planning. Our team can help you understand which services are available and where to begin."
        image="photo-1504307651254-35680f356dfd"
        imagePosition="center 54%"
      />
      <section className="inner-content page-wrap" aria-label="Services">
        <ServiceCards
          imageOverrides={{
            "real-estate-development-management": {
              src: "/services-real-estate.jpg",
              alt: "Modern homes in a landscaped residential development",
            },
            "litigation-free-land-sales": {
              src: "/services-litigation-free-land-sales.jpg",
              alt: "Land development site with construction plans and equipment",
            },
            "legal-advisory-services": {
              src: "/services-legal-advisory.jpg",
              alt: "Legal advisor reviewing a property document at a desk",
            },
            "supplies-of-building-materials": {
              src: "/services-building-materials.jpg",
              alt: "Building materials and supplies at a construction yard",
            },
            "building-and-construction": {
              src: "/services-building-and-construction.jpg",
              alt: "Construction projects from foundation through completed homes",
            },
            "land-swapping-and-property-exchange": {
              src: "/services-land-swapping.jpg",
              alt: "Vehicle and building materials represented in a land exchange",
            },
          }}
        />
        <p className="services-cta"><Link className="text-link dark-link" href="/contact">Ask about a service <ArrowRight size={16} /></Link></p>
      </section>
    </main>
  );
}
