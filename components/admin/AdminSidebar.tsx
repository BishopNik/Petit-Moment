"use client";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import { SquaresFour,TShirt,ChatsCircle,Question,Article,Images,ChartLineUp,Megaphone,Gear,SignOut,List,X } from "@phosphor-icons/react";
import { useState } from "react";
import type { Role } from "@/lib/admin-store";

const items=[
  {href:"/admin",label:"Dashboard",icon:SquaresFour,roles:["Admin","Manager","Content Editor"]},
  {href:"/admin/produkty",label:"Produkty",icon:TShirt,roles:["Admin","Manager"]},
  {href:"/admin/zgloszenia",label:"Zgłoszenia",icon:ChatsCircle,roles:["Admin","Manager"]},
  {href:"/admin/faq",label:"FAQ",icon:Question,roles:["Admin","Manager"]},
  {href:"/admin/blog",label:"Poradnik",icon:Article,roles:["Admin","Content Editor"]},
  {href:"/admin/media",label:"Media",icon:Images,roles:["Admin","Manager","Content Editor"]},
  {href:"/admin/marketing",label:"Marketing",icon:Megaphone,roles:["Admin"]},
  {href:"/admin/analityka",label:"Analityka",icon:ChartLineUp,roles:["Admin"]},
  {href:"/admin/ustawienia",label:"Ustawienia",icon:Gear,roles:["Admin"]},
] as const;

export default function AdminSidebar({name,role}:{name:string;role:Role}){
  const pathname=usePathname();
  const router=useRouter();
  const [open,setOpen]=useState(false);
  async function logout(){await fetch("/api/admin/logout",{method:"POST"});router.push("/admin/login");router.refresh()}
  return <>
    <button onClick={()=>setOpen(!open)} aria-label={open?"Zamknij menu":"Otwórz menu administracyjne"} aria-expanded={open} className="lg:hidden fixed z-[80] top-4 right-4 w-11 h-11 rounded-lg bg-[#29211d] text-white flex items-center justify-center">{open?<X/>:<List/>}</button>
    <aside className={`fixed z-[70] inset-y-0 left-0 w-64 bg-[#25211f] text-white flex flex-col transition-transform lg:translate-x-0 ${open?"translate-x-0":"-translate-x-full"}`}>
      <div className="p-6 border-b border-white/10"><p className="serif text-2xl">Little Ceremony</p><p className="text-[9px] uppercase tracking-[.25em] text-[#c8aa7c] mt-1">Panel boutique</p></div>
      <nav className="p-3 flex-1 space-y-1 overflow-y-auto">{items.filter(x=>x.roles.includes(role as never)).map(({href,label,icon:Icon})=>{const active=href==="/admin"?pathname===href:pathname.startsWith(href);return <Link key={href} onClick={()=>setOpen(false)} href={href} className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition ${active?"bg-white !text-[#29211d]":"text-white/65 hover:bg-white/10 hover:text-white"}`}><Icon size={19}/>{label}</Link>})}</nav>
      <div className="p-4 border-t border-white/10"><p className="text-sm font-medium">{name}</p><p className="text-[11px] text-white/45 mt-1">{role}</p><button onClick={logout} className="flex items-center gap-2 text-xs text-white/60 mt-4 hover:text-white"><SignOut size={16}/> Wyloguj się</button></div>
    </aside>
  </>
}
