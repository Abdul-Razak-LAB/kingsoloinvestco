import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  emphasis: string;
  description?: string;
  image: string;
  imagePosition?: string;
  showText?: boolean;
  unoptimized?: boolean;
};

export function PageHero({ eyebrow, title, emphasis, description, image, imagePosition = "center", showText = true, unoptimized = false }: PageHeroProps) {
  const imageSrc = image.startsWith("/")
    ? image
    : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=2000&q=85`;

  return (
    <section className={`page-hero${showText ? "" : " page-hero-image-only"}`} aria-labelledby={showText ? "page-hero-title" : undefined} aria-label={showText ? undefined : "Contact banner"}>
      <Image
        className="page-hero-image"
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        unoptimized={unoptimized || !image.startsWith("/")}
        style={{ objectPosition: imagePosition }}
      />
      <div className="page-hero-overlay" aria-hidden="true" />
      {showText && (
        <div className="page-wrap page-hero-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-hero-title">{title}<br /><em>{emphasis}</em></h1>
          {description && <p className="page-hero-description">{description}</p>}
        </div>
      )}
      <span className="page-hero-rule" aria-hidden="true" />
    </section>
  );
}