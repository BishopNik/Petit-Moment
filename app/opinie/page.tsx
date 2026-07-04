import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ManagedReviews from "@/components/ManagedReviews";
import ReviewForm from "@/components/ReviewForm";
import { createMetadata } from "@/lib/seo";

export const dynamic="force-dynamic";
export const metadata:Metadata=createMetadata({title:"Opinie klientów",description:"Przeczytaj opinie rodzin o Little Ceremony Boutique lub podziel się własnym doświadczeniem.",path:"/opinie"});
export default function ReviewsPage(){return <><header className="soft py-14 md:py-20"><div className="container-site"><Breadcrumbs items={[{label:"Strona główna",href:"/"},{label:"Opinie"}]}/><p className="eyebrow mt-10">Wasze doświadczenia</p><h1 className="display mt-5">Małe chwile. <br/><em>Ważne słowa.</em></h1><p className="max-w-xl text-[#756b64] mt-6 leading-relaxed">Przeczytaj, jak rodziny wspominają wybór stroju, przymiarki i ważne uroczystości z Little Ceremony.</p></div></header><section className="py-16 md:py-24"><div className="container-site"><ManagedReviews showCta={false}/></div></section><section id="dodaj-opinie" className="soft py-16 md:py-24 scroll-mt-24"><div className="container-site grid lg:grid-cols-[.65fr_1.35fr] gap-12 lg:gap-20"><div><p className="eyebrow">Podziel się opinią</p><h2 className="section-title mt-5">Jak było<br/><em>u Was?</em></h2><p className="text-[#756b64] leading-relaxed mt-6">Każdą opinię czytamy przed publikacją. Możemy również odpowiedzieć na nią bezpośrednio na stronie.</p></div><ReviewForm/></div></section></>}
