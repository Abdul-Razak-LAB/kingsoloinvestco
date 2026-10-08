import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about King Solomon Investment & Supplies and get in touch with the team.",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="About King Solomon"
        title="Our story."
        emphasis="From land to keys."
        description="King Solomon Investment and Supplies, led by Nene Kabu I, is a trusted Ghanaian company. We know the stress of land issues and buying cars, so we do honest business. We deal only in genuine, litigation-free lands and quality vehicles with proper papers. From land to keys, we are with you"
        image="photo-1600596542815-ffad4c1539a9"
        imagePosition="center 55%"
      />
      <section className="inner-content page-wrap">
        <div className="about-grid content-card">
          <div className="about-photo" role="img" aria-label="King Solomon Investment and Supplies office interior" />
          <div className="about-copy">
            <p className="eyebrow eyebrow-red">Next steps</p>
            <h2>Start with a conversation.</h2>
            <p>Whether you are exploring real estate, looking for land, or sourcing building supplies, we make it easier to ask questions and find out what is available.</p>
            <p>We are building this website around clear information and direct communication. Details about our history, location, and current services will be published here once verified by our team.</p>
            <Link className="text-link dark-link" href="/contact">Get in touch <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
