import AdminProducts from "@/components/admin/AdminProducts";import { readStore } from "@/lib/admin-store";
export const dynamic="force-dynamic";export const metadata={title:"Produkty"};
export default async function ProductsAdmin(){return <><header><p className="text-xs uppercase tracking-[.15em] text-[#8b6d4d]">Katalog</p><h1 className="serif text-4xl mt-2">Produkty</h1><p className="text-sm text-[#69717b] mt-2">Dodawaj modele, zmieniaj dostępność, zdjęcia i informacje SEO.</p></header><div className="mt-8"><AdminProducts initialProducts={(await readStore()).products}/></div></>}
