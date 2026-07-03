import AdminInquiries from "@/components/admin/AdminInquiries";import { readStore } from "@/lib/admin-store";
export const dynamic="force-dynamic";export const metadata={title:"Zgłoszenia"};
export default async function InquiriesAdmin(){return <><header><p className="text-xs uppercase tracking-[.15em] text-[#8b6d4d]">CRM</p><h1 className="serif text-4xl mt-2">Zgłoszenia</h1><p className="text-sm text-[#69717b] mt-2">Zapytania z formularzy, notatki i historia kontaktu z klientami.</p></header><div className="mt-8"><AdminInquiries initialItems={(await readStore()).inquiries}/></div></>}
