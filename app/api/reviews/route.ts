import { NextResponse } from "next/server";
import { createId,updateStore,type Review } from "@/lib/admin-store";

const clean=(value:unknown,max:number)=>String(value||"").trim().slice(0,max);

export async function POST(request:Request){
  const body=await request.json();
  if(body.website)return NextResponse.json({ok:true});
  const name=clean(body.name,80);
  const city=clean(body.city,80);
  const email=clean(body.email,160);
  const text=clean(body.text,1500);
  const event=clean(body.event,80);
  const rating=Math.max(1,Math.min(5,Number(body.rating)||0));
  if(!name||!city||!email||!text||!event||!body.consent||rating<1)return NextResponse.json({ok:false,error:"Uzupełnij wymagane pola."},{status:400});
  const review:Review={id:createId(),name,city,email,text,event,rating,visible:false,status:"Nowa",createdAt:new Date().toISOString()};
  await updateStore(store=>{store.reviews.unshift(review);store.events.unshift({id:createId(),createdAt:review.createdAt!,type:"form_submit",path:"/opinie",label:"Nowa opinia",source:"Website"})});
  return NextResponse.json({ok:true,message:"Opinia została przekazana do moderacji."},{status:201});
}
