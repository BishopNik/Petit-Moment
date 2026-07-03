import type { Metadata } from "next";import { redirect } from "next/navigation";import { cookies } from "next/headers";import AdminLogin from "@/components/admin/AdminLogin";import { sessionCookie,verifySession } from "@/lib/admin-auth";
export const metadata:Metadata={title:"Logowanie — Panel administracyjny",robots:{index:false,follow:false}};
export default async function Login(){if(verifySession((await cookies()).get(sessionCookie)?.value))redirect("/admin");return <AdminLogin/>}
