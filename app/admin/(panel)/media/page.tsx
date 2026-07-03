import AdminMedia from "@/components/admin/AdminMedia";import { readStore } from "@/lib/admin-store";
export const dynamic="force-dynamic";export const metadata={title:"Media"};
export default async function MediaAdmin(){return <><header><p className="text-xs uppercase tracking-[.15em] text-[#8b6d4d]">Medioteka</p><h1 className="serif text-4xl mt-2">Zdjęcia i pliki</h1><p className="text-sm text-[#69717b] mt-2">Wgrywaj zdjęcia, grupuj je i dbaj o opisy alternatywne.</p></header><div className="mt-8"><AdminMedia initialItems={(await readStore()).media}/></div></>}
