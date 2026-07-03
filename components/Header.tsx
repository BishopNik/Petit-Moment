"use client";
import Link from "next/link";
import { useState } from "react";
import { List, X, Phone, ArrowUpRight, Heart } from "@phosphor-icons/react";
import { siteConfig } from "@/data/siteConfig";

const nav = [
  ["Kolekcje", "/kolekcje"], ["Komunia", "/kategorie/ubrania-komunijne"], ["Sukienki", "/kategorie/sukienki-dla-dziewczynek"], ["Garnitury", "/kategorie/garnitury-i-koszule"], ["Szycie na zamówienie", "/szycie-na-zamowienie"], ["Poradnik", "/poradnik"],
];
export default function Header() {
  const [open,setOpen]=useState(false);
  return <>
    <div className="public-site-chrome bg-[#29211d] text-[#f8f5ef] text-[11px] tracking-[.12em] uppercase py-2 text-center">Butik w Dąbrowie Tarnowskiej · Umów przymiarkę <span className="ml-2">→</span></div>
    <header className="public-site-chrome sticky top-0 z-50 border-b hairline bg-[#f8f5ef]/92 backdrop-blur-xl">
      <div className="container-site h-[76px] flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0 leading-none" aria-label="Little Ceremony Boutique — strona główna">
          <span className="serif text-[22px] md:text-[25px] tracking-[-.02em]">Little Ceremony</span><span className="block text-[8px] uppercase tracking-[.38em] mt-1 text-[#876f5c]">Boutique</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-6 text-[12px] font-medium" aria-label="Główna nawigacja">{nav.map(([label,href])=><Link key={href} href={href} className="hover:text-[#a17e57] transition-colors">{label}</Link>)}</nav>
        <div className="flex items-center gap-2">
          <Link href="/ulubione" className="hidden md:flex h-10 w-10 items-center justify-center border hairline" aria-label="Ulubione"><Heart size={17}/></Link>
          <a href={`tel:${siteConfig.phoneHref}`} className="hidden md:flex h-10 w-10 items-center justify-center border hairline" aria-label="Zadzwoń"><Phone size={17}/></a>
          <Link href="/kontakt" className="btn btn-dark min-h-10 py-2 px-4 max-sm:!hidden">Kontakt <ArrowUpRight size={14}/></Link>
          <button onClick={()=>setOpen(!open)} className="xl:hidden h-10 w-10 flex items-center justify-center border hairline" aria-expanded={open} aria-label="Otwórz menu">{open?<X size={20}/>:<List size={20}/>}</button>
        </div>
      </div>
      {open&&<div className="xl:hidden absolute left-0 right-0 top-full bg-[#f8f5ef] border-b hairline shadow-2xl">
        <nav className="container-site py-6 flex flex-col" aria-label="Menu mobilne">{nav.map(([label,href],i)=><Link key={href} onClick={()=>setOpen(false)} href={href} className="serif text-2xl py-3 border-b hairline flex justify-between"><span>{label}</span><span className="text-sm text-[#a88962]">0{i+1}</span></Link>)}<Link onClick={()=>setOpen(false)} href="/sklep-dabrowa-tarnowska" className="btn btn-dark mt-6">Odwiedź butik</Link></nav>
      </div>}
    </header>
  </>;
}
