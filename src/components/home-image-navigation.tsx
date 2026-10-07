"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/business";

export function PrimaryNavigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !isHome) return;

    const hero = document.querySelector(".hero");
    if (!hero) return;

    const updateImageMode = () => {
      const bounds = hero.getBoundingClientRect();
      nav.classList.toggle("is-image-nav", bounds.bottom > 82 && bounds.top < window.innerHeight);
    };
    const observer = new IntersectionObserver(updateImageMode, { rootMargin: "-82px 0px 0px 0px" });

    updateImageMode();
    observer.observe(hero);
    window.addEventListener("scroll", updateImageMode, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateImageMode);
    };
  }, [isHome]);

  return (
    <nav ref={navRef} className={`site-navigation${isHome ? " is-home is-image-nav" : ""}`} aria-label="Main navigation">
      <div className="site-navigation-inner">
        <Link className="site-navigation-brand" href="/" aria-label={`${business.name} home`}>
          <Image className="site-navigation-logo" src="/IMG-20260928-WA0007.jpg" alt="" width={56} height={56} priority />
          <span className="site-navigation-brand-copy"><strong>King Solomon</strong><small>Investment &amp; Supplies</small></span>
        </Link>
        <div className="site-navigation-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link className="navigation-quote" href="/contact">Get a quote</Link>
        </div>
      </div>
    </nav>
  );
}
