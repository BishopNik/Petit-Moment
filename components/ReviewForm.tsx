"use client";
import { useState,type FormEvent } from "react";
import { ArrowRight,Check,Star } from "@phosphor-icons/react";

export default function ReviewForm(){
  const [rating,setRating]=useState(5);
  const [sent,setSent]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setLoading(true);setError("");const form=new FormData(e.currentTarget);const response=await fetch("/api/reviews",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...Object.fromEntries(form),rating,consent:form.get("consent")==="on"})});const result=await response.json();setLoading(false);if(!response.ok){setError(result.error||"Nie udało się wysłać opinii.");return}setSent(true)}
  if(sent)return <div className="paper border hairline p-10 text-center"><span className="w-14 h-14 mx-auto rounded-full bg-[#e2eadf] text-[#395f50] flex items-center justify-center"><Check size={25}/></span><h2 className="serif text-3xl mt-5">Dziękujemy za opinię</h2><p className="text-[#756b64] mt-3">Opinia trafiła do moderacji. Po zatwierdzeniu pojawi się na stronie.</p></div>;
  return <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
    <div><label className="label">Imię *</label><input required name="name" className="field" maxLength={80}/></div>
    <div><label className="label">Miasto *</label><input required name="city" className="field" maxLength={80}/></div>
    <div><label className="label">E-mail *</label><input required name="email" type="email" className="field" maxLength={160}/><p className="text-[11px] text-[#8b827b] mt-1">Adres nie będzie publikowany.</p></div>
    <div><label className="label">Wydarzenie *</label><select required name="event" className="field"><option>Komunia</option><option>Urodziny</option><option>Święta</option><option>Wesele</option><option>Inna uroczystość</option></select></div>
    <div className="md:col-span-2"><span className="label">Ocena *</span><div className="flex gap-2" role="group" aria-label="Ocena od 1 do 5">{[1,2,3,4,5].map(value=><button key={value} type="button" onClick={()=>setRating(value)} aria-label={`${value} z 5`} className="p-1 text-[#b4986d]"><Star size={28} weight={value<=rating?"fill":"regular"}/></button>)}</div></div>
    <div className="md:col-span-2"><label className="label">Twoja opinia *</label><textarea required name="text" className="field resize-y" rows={6} maxLength={1500} placeholder="Napisz, co było dla Ciebie ważne…"/></div>
    <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <label className="md:col-span-2 flex gap-3 text-xs text-[#756b64] leading-relaxed"><input required type="checkbox" name="consent" className="mt-1 accent-[#29211d]"/> Zgadzam się na publikację imienia, miasta, oceny i treści opinii po jej zatwierdzeniu. E-mail pozostanie prywatny.</label>
    {error&&<p className="md:col-span-2 text-sm text-red-700 bg-red-50 p-3">{error}</p>}
    <div className="md:col-span-2"><button disabled={loading} className="btn btn-dark w-full md:w-auto">{loading?"Wysyłanie…":"Wyślij opinię"}<ArrowRight size={16}/></button></div>
  </form>
}
