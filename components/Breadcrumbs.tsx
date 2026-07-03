import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
export type Crumb={label:string;href?:string};
export default function Breadcrumbs({items}:{items:Crumb[]}){return <nav aria-label="Okruszki" className="flex items-center flex-wrap gap-2 text-[11px] uppercase tracking-[.1em] text-[#766b63]">{items.map((item,i)=><span key={item.label} className="flex items-center gap-2">{i>0&&<CaretRight size={10}/>} {item.href?<Link href={item.href} className="hover:text-[#29211d]">{item.label}</Link>:<span>{item.label}</span>}</span>)}</nav>}
