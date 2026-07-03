import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Category } from "@/data/categories";
export default function CategoryCard({category,large=false}:{category:Category;large?:boolean}){return <Link href={`/kategorie/${category.slug}`} className={`group image-zoom relative overflow-hidden ${large?"aspect-[5/4] md:aspect-[4/3]":"aspect-[4/5]"}`}>
  <Image src={category.image} alt={`${category.name} — Little Ceremony Boutique`} fill className="object-cover" sizes={large?"(max-width:768px) 100vw, 50vw":"(max-width:768px) 70vw, 33vw"}/><div className="absolute inset-0 bg-gradient-to-t from-[#211a16]/75 via-transparent to-transparent"/>
  <span className="absolute top-5 left-5 text-white/75 text-[11px] tracking-[.16em]">{category.accent}</span><div className="absolute left-6 right-6 bottom-6 text-white"><h3 className="serif text-2xl md:text-3xl">{category.shortName}</h3><div className="flex items-center justify-between gap-4 mt-2 text-xs text-white/75"><span>{category.description}</span><ArrowRight className="shrink-0 group-hover:translate-x-1 transition-transform" size={18}/></div></div>
</Link>}
