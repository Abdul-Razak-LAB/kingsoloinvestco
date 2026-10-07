import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  ChevronDown,
} from "lucide-react";
import { ServiceCards } from "@/components/service-cards";

const reasonsToChooseUs = [
  { title: "Property-first conversations", detail: "Start with the home, land, or rental you need. Tell us your location and priorities." },
  { title: "Clear details, fewer assumptions", detail: "Ask about availability, location, and the information you need before deciding what to do next." },
  { title: "A direct route to the team", detail: "Reach out by phone or send an enquiry without creating an account." },
];

const propertyNotes = [
  {
    category: "Property search",
    title: "Build a property brief before you browse",
    excerpt: "A few clear priorities can make your search and conversations more useful.",
    body: "Write down your intended use, preferred areas, budget range, essential features, and timing. Separate must-haves from preferences so you can compare options consistently.",
  },
  {
    category: "Viewings",
    title: "What to note during a property viewing",
    excerpt: "Look beyond first impressions and keep a record of the details you want to confirm.",
    body: "Note the property's condition, access, surroundings, and any questions about utilities or ongoing costs. Ask which details are confirmed, take your own notes, and do not rely on photographs alone when evaluating a property.",
  },
  {
    category: "Land considerations",
    title: "Questions to clarify before proceeding with land",
    excerpt: "Treat boundaries, records, access, and planning requirements as items to verify.",
    body: "Before making a commitment, independently confirm the parcel's identity, boundaries, tenure, access, and applicable planning requirements with qualified professionals. This general information is not legal advice, and promotional material is not a substitute for verification.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-showcase content-card" aria-labelledby="intro-title">
        <div className="hero" aria-label="King Solomon homepage banner">
          <h1 className="sr-only">King Solomon Investment &amp; Supplies</h1>
          <Image
            className="hero-reference-image"
            src="/IMG-20260928-WA0865.jpg"
            alt="King Solomon Investment & Supplies homepage banner"
            fill
            priority
            sizes="(max-width: 1208px) 100vw, 1160px"
          />
        </div>
        <div className="intro">
          <div className="intro-copy">
            <h2 id="intro-title">The World Is In<br /><em>Your Hands</em></h2>
          </div>
          <p className="intro-description">Your One-Stop Center for Lands, Cars, Building, Real Estate and Global Supplies. Genuine lands, quality cars, strong buildings — all with wisdom and integrity.</p>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="page-wrap">
          <div className="section-heading">
            <div><p className="eyebrow eyebrow-red">What we do</p><h2 id="services-title">Services for every<br /><em>stage of the journey.</em></h2></div>
            <Link className="text-link dark-link" href="/services">All services <ArrowRight size={16} /></Link>
            </div>
          <ServiceCards
            headingLevel="h3"
            descriptionOverrides={{
              "real-estate-development-management": "We develop, sell, rent, and manage properties. Invest with us and earn.",
              "litigation-free-land-sales": "Genuine lands across Greater Accra, with indenture and site plan. No double sale.",
              "legal-advisory-services": "Land searches, title registration, and legal advice before you pay.",
              "supplies-of-building-materials": "Cement, iron rods, roofing sheets, blocks, and more delivered to your site.",
              "building-and-construction": "Houses, shops, estates, and fence walls built solid and beautiful.",
              "sales-of-cars-all-kinds": "New, cleared, and home-use vehicles with correct documents.",
              "land-swapping-and-property-exchange": "Swap land, cars, or building materials for land with us.",
              "import-and-export": "We import cars and goods, and help you export local products.",
            }}
            imageOverrides={{
              "real-estate-development-management": {
                src: "/real%20estate%201.jpg",
                alt: "Real estate development in progress with homes and construction equipment",
              },
              "litigation-free-land-sales": {
                src: "/Litigation%20Free%20Land%20Sales%201.jpg",
                alt: "Construction team reviewing plans at a land development site",
              },
              "supplies-of-building-materials": {
                src: "/supplies%20of%20building%20materials%201.jpg",
                alt: "Building materials including cement, blocks, and steel ready for a project",
              },
              "building-and-construction": {
                src: "/building%20and%20construction%201.jpg",
                alt: "Residential construction site with building plans and equipment",
              },
              "import-and-export": {
                src: "/import%20and%20export%201.jpg",
                alt: "Cargo containers and freight equipment at a shipping port",
              },
            }}
          />
        </div>
      </section>

      <section className="why-section" aria-labelledby="why-title">
        <div className="page-wrap why-layout">
          <div className="why-intro">
            <p className="eyebrow eyebrow-red">Why choose us</p>
            <h2 id="why-title">A clearer start for <em>your next move.</em></h2>
            <p>Property decisions begin with the right questions. Tell us what you are looking for and get a straightforward way to explore the next step.</p>
          </div>
          <div className="why-list">
            {reasonsToChooseUs.map(({ title, detail }, index) => (
              <article className="why-item" key={title}>
                <span className="why-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section page-wrap" aria-labelledby="feature-title">
        <div className="feature-band content-card">
          <div className="feature-image" role="img" aria-label="Contemporary home surrounded by a landscaped garden" />
          <div className="feature-copy">
            <p className="eyebrow">A clearer way to get started</p>
            <h2 id="feature-title">Your plans deserve<br /><em>a good beginning.</em></h2>
            <p>Tell us what you need, where you are in the process, and how best to reach you. Our team will help direct your inquiry.</p>
            <Link className="button button-light" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="blog-section page-wrap" aria-labelledby="blog-title">
        <div className="blog-heading">
          <div>
            <p className="eyebrow eyebrow-red">From the property journal</p>
            <h2 id="blog-title">A little more clarity <em>before you decide.</em></h2>
          </div>
          <p>Practical notes for searching, viewing, and asking better questions about property and land.</p>
        </div>
        <div className="blog-grid">
          {propertyNotes.map(({ category, title, excerpt, body }) => (
            <article className="blog-entry" key={title}>
              <p className="blog-category">{category}</p>
              <h3>{title}</h3>
              <p className="blog-excerpt">{excerpt}</p>
              <details className="blog-reading">
                <summary>Read note <ChevronDown size={17} aria-hidden="true" /></summary>
                <div className="blog-article"><p>{body}</p></div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap closing-section">
        <div className="closing content-card">
          <Compass size={26} strokeWidth={1.5} aria-hidden="true" />
          <p>Ready when you are.</p>
          <Link href="/contact">Let&apos;s talk <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
