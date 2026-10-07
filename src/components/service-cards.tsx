import Image from "next/image";
import { services } from "@/lib/services";

type ServiceCardsProps = {
  headingLevel?: "h2" | "h3";
  imageOverrides?: Record<string, { src: string; alt: string }>;
  descriptionOverrides?: Record<string, string>;
};

export function ServiceCards({ headingLevel = "h2", imageOverrides, descriptionOverrides }: ServiceCardsProps) {
  const Heading = headingLevel;

  return (
    <div className="service-list">
      {services.map((service) => {
        const { id, icon: Icon, title, description, image, alt, promotionalArtwork } = service;
        const cardDescription = descriptionOverrides?.[id] ?? description;
        const imageLabel = "imageLabel" in service ? service.imageLabel : undefined;
        const cardImage = imageOverrides?.[id] ?? imageOverrides?.[title] ?? { src: image, alt };

        return (
          <article className="service-row" key={id}>
            <div className={`service-image${promotionalArtwork ? " service-image-promo" : ""}`}>
              <Image
                src={cardImage.src}
                alt={cardImage.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 540px"
                unoptimized
              />
              {!promotionalArtwork && imageLabel && (
                <div className="service-image-caption">
                  <span>{imageLabel}</span>
                </div>
              )}
            </div>
            <div className="service-row-copy">
              <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
              <div><Heading className="service-title">{title}</Heading><p>{cardDescription}</p></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}