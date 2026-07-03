import FAQ from "@/components/FAQ";import { getManagedFaq } from "@/lib/admin-store";
export default async function ManagedFAQ(){const items=(await getManagedFaq()).map(({question,answer})=>({question,answer}));return <FAQ items={items}/>}
