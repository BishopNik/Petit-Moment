import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
export function createMetadata({ title, description, path = "", image = "/images/hero-boutique.png" }: { title: string; description: string; path?: string; image?: string }): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  return { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, siteName: siteConfig.name, locale: "pl_PL", type: "website", images: [{ url: image, width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [image] } };
}
