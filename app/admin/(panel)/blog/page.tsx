import AdminBlog from "@/components/admin/AdminBlog";import { readStore } from "@/lib/admin-store";
export const dynamic="force-dynamic";export const metadata={title:"Poradnik"};
export default async function BlogAdmin(){return <><header><p className="text-xs uppercase tracking-[.15em] text-[#8b6d4d]">Content</p><h1 className="serif text-4xl mt-2">Poradnik</h1><p className="text-sm text-[#69717b] mt-2">Artykuły, szkice i treści przygotowane pod SEO.</p></header><div className="mt-8"><AdminBlog initialItems={(await readStore()).posts}/></div></>}
