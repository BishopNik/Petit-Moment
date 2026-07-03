import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryCard from "@/components/CategoryCard";
import CatalogGrid from "@/components/CatalogGrid";
import { categories } from "@/data/categories";
import { getManagedProducts } from "@/lib/admin-store";
import { createMetadata } from "@/lib/seo";

export const dynamic="force-dynamic";
export const metadata:Metadata=createMetadata({title:"Kolekcje i katalog odzieży dziecięcej",description:"Poznaj sukienki, garnitury, ubrania komunijne i świąteczne oraz akcesoria dla dzieci i nastolatków.",path:"/kolekcje"});
export default async function Collections(){const products=await getManagedProducts();return <><header className="soft py-14 md:py-20"><div className="container-site"><Breadcrumbs items={[{label:"Strona główna",href:"/"},{label:"Kolekcje"}]}/><p className="eyebrow mt-10">Kolekcje 2026</p><h1 className="display max-w-4xl mt-5">Ubrania na chwile,<br/><em>które są tylko Wasze</em></h1><p className="max-w-xl text-[#756b64] leading-relaxed mt-7">Odkrywaj według okazji albo przejrzyj cały katalog. Każdy model możemy omówić i dopasować podczas konsultacji.</p></div></header><section className="py-16 md:py-24"><div className="container-site"><div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">{categories.map(c=><CategoryCard key={c.slug} category={c}/>)}</div></div></section><section className="pb-24"><div className="container-site"><p className="eyebrow">Cały katalog</p><h2 className="section-title mt-5 mb-10">Znajdź swój model</h2><CatalogGrid items={products}/></div></section></>}
