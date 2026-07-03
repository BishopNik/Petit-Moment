import Link from "next/link";
import { InstagramLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/data/siteConfig";
export default function Footer(){ return <footer className="public-site-chrome bg-[#29211d] text-[#f7f1e8] pt-20 pb-8">
  <div className="container-site grid lg:grid-cols-[1.3fr_.7fr_.7fr] gap-14 pb-16 border-b border-white/15">
    <div><p className="serif text-4xl max-w-md leading-tight">Ubrania, które zostają we wspomnieniach.</p><p className="text-white/60 max-w-md mt-5 leading-relaxed">Krótkie serie, indywidualne projekty i spokojna pomoc w wyborze stroju na ważny dzień.</p><a href={siteConfig.instagram} className="inline-flex mt-7 items-center gap-2 text-sm"><InstagramLogo size={20}/> @littleceremony.boutique</a></div>
    <div><p className="text-[11px] uppercase tracking-[.18em] text-[#c8aa7c] mb-5">Odkrywaj</p><div className="flex flex-col gap-3 text-sm text-white/75"><Link href="/kolekcje">Kolekcje</Link><Link href="/szycie-na-zamowienie">Szycie na zamówienie</Link><Link href="/pomoz-mi-wybrac">Pomóż mi wybrać</Link><Link href="/umow-przymiarke">Umów przymiarkę</Link><Link href="/poradnik">Poradnik</Link><Link href="/o-nas">O nas</Link></div></div>
    <div><p className="text-[11px] uppercase tracking-[.18em] text-[#c8aa7c] mb-5">Kontakt</p><div className="flex flex-col gap-3 text-sm text-white/75"><span>{siteConfig.address.street}</span><span>{siteConfig.address.postalCode} {siteConfig.address.city}</span><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><Link href="/kontakt" className="inline-flex items-center gap-1 text-white mt-2">Napisz do nas <ArrowUpRight size={14}/></Link></div></div>
  </div>
  <div className="container-site pt-7 flex flex-col md:flex-row gap-3 justify-between text-[11px] text-white/45"><span>© {new Date().getFullYear()} {siteConfig.name}</span><div className="flex gap-5"><Link href="/polityka-prywatnosci">Polityka prywatności</Link><Link href="/regulamin">Regulamin</Link></div></div>
</footer> }
