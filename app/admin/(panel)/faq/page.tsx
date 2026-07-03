import AdminFaq from "@/components/admin/AdminFaq";import { readStore } from "@/lib/admin-store";
export const dynamic="force-dynamic";export const metadata={title:"FAQ"};
export default async function FaqAdmin(){return <><header><p className="text-xs uppercase tracking-[.15em] text-[#8b6d4d]">Pomoc</p><h1 className="serif text-4xl mt-2">FAQ</h1><p className="text-sm text-[#69717b] mt-2">Pytania publikowane na stronie — kolejność, kategorie i widoczność.</p></header><div className="mt-8"><AdminFaq initialItems={(await readStore()).faq}/></div></>}
