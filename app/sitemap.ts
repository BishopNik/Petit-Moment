import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/categories";
import { getManagedPosts,getManagedProducts } from "@/lib/admin-store";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const [products,posts]=await Promise.all([getManagedProducts(),getManagedPosts()]);
  const routes=["","/kolekcje","/szycie-na-zamowienie","/sklep-dabrowa-tarnowska","/poradnik","/kontakt","/o-nas","/opinie","/pomoz-mi-wybrac","/umow-przymiarke","/ubrania-komunijne","/sukienki-komunijne","/ubrania-na-urodziny","/ubrania-swiateczne-dla-dzieci","/garnitury-dla-chlopcow","/sukienki-dla-dziewczynek","/polityka-prywatnosci","/regulamin"];
  return [...routes.map(route=>({url:`${siteConfig.url}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly" as const:"monthly" as const,priority:route===""?1:.7})),...categories.map(c=>({url:`${siteConfig.url}/kategorie/${c.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),...products.map(p=>({url:`${siteConfig.url}/produkty/${p.slug}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:.8})),...posts.map(p=>({url:`${siteConfig.url}/poradnik/${p.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7}))]
}
