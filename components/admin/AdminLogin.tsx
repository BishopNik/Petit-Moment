"use client";
import { useState,type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LockKey,ArrowRight } from "@phosphor-icons/react";

export default function AdminLogin(){
  const router=useRouter();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const demo=process.env.NODE_ENV!=="production";
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setLoading(true);setError("");const data=new FormData(e.currentTarget);const response=await fetch("/api/admin/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:data.get("email"),password:data.get("password")})});const body=await response.json();setLoading(false);if(!response.ok){setError(body.error);return}router.push("/admin");router.refresh()}
  return <div className="admin-surface min-h-screen grid lg:grid-cols-[1fr_1fr] bg-[#f2eee8]">
    <div className="hidden lg:block relative bg-[url('/images/hero-boutique.png')] bg-cover bg-center after:absolute after:inset-0 after:bg-[#29211d]/25"><div className="absolute z-10 bottom-14 left-14 text-white max-w-lg"><p className="serif text-5xl leading-tight">Mały butik.<br/>Wszystko pod kontrolą.</p><p className="mt-5 text-white/75">Produkty, klienci i treści w jednym spokojnym miejscu.</p></div></div>
    <div className="flex items-center justify-center p-6"><div className="w-full max-w-md"><div className="w-12 h-12 rounded-xl bg-[#29211d] text-white flex items-center justify-center"><LockKey size={22}/></div><p className="text-xs uppercase tracking-[.16em] text-[#8b6d4d] mt-7">Little Ceremony</p><h1 className="serif text-4xl mt-2">Panel administracyjny</h1><p className="text-sm text-[#69717b] mt-3">Zaloguj się, aby zarządzać stroną.</p><form onSubmit={submit} className="mt-8 grid gap-5"><div><label className="admin-label">E-mail</label><input className="admin-input" type="email" name="email" defaultValue={demo?"admin@littleceremony.pl":""} required/></div><div><label className="admin-label">Hasło</label><input className="admin-input" type="password" name="password" defaultValue={demo?"LittleCeremony2026!":""} required/></div>{error&&<p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>}<button disabled={loading} className="admin-btn admin-btn-primary w-full">{loading?"Logowanie…":"Zaloguj się"}<ArrowRight size={16}/></button></form><p className="text-xs text-[#8a9199] mt-7 leading-relaxed">{demo?"Dane demonstracyjne są wypełnione. Przed publikacją ustaw zmienne środowiskowe.":"Dostęp jest skonfigurowany przez bezpieczne zmienne środowiskowe."}</p></div></div>
  </div>
}
