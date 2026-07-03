import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Product } from "@/data/products";import WishlistButton from "@/components/WishlistButton";
export default function ProductCard({product}:{product:Product}){return <article className="group image-zoom relative"><WishlistButton slug={product.slug} compact/>
  <Link href={`/produkty/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-[#e7ddd0]">
    <Image src={product.image} alt={`${product.name} — elegancka odzież dziecięca`} fill sizes="(max-width:768px) 85vw, 32vw" className="object-cover" style={{objectPosition:product.imagePosition||"center"}}/>
    <span className="absolute top-4 left-4 z-10 bg-[#f8f5ef]/90 backdrop-blur px-3 py-2 text-[10px] uppercase tracking-[.12em]">{product.availability}</span>
    <span className="absolute bottom-4 right-4 z-10 h-11 w-11 bg-[#f8f5ef] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={16}/></span>
  </Link>
  <div className="pt-4"><div className="flex justify-between items-start gap-3"><div><p className="text-[10px] uppercase tracking-[.14em] text-[#967a5a] mb-1">{product.category}</p><h3 className="serif text-xl"><Link href={`/produkty/${product.slug}`}>{product.name}</Link></h3></div><p className="text-sm whitespace-nowrap mt-5">{product.price}</p></div><p className="text-sm text-[#756b64] mt-2 line-clamp-2">{product.description}</p></div>
</article>}
