import { createHmac, timingSafeEqual } from "node:crypto";
import type { Role } from "@/lib/admin-store";

export const sessionCookie = "little-ceremony-admin";
const allowDemo = process.env.NODE_ENV !== "production" || process.env.ALLOW_DEMO_ADMIN === "true";
const secret = process.env.ADMIN_SECRET || (allowDemo ? "change-this-secret-before-production" : crypto.randomUUID());
const users = [
  { email: process.env.ADMIN_EMAIL || (allowDemo?"admin@littleceremony.pl":""), password: process.env.ADMIN_PASSWORD || (allowDemo?"LittleCeremony2026!":""), name: "Właściciel", role: "Admin" as Role },
  { email: process.env.MANAGER_EMAIL || (allowDemo?"manager@littleceremony.pl":""), password: process.env.MANAGER_PASSWORD || (allowDemo?"Manager2026!":""), name: "Manager", role: "Manager" as Role },
  { email: process.env.EDITOR_EMAIL || (allowDemo?"editor@littleceremony.pl":""), password: process.env.EDITOR_PASSWORD || (allowDemo?"Editor2026!":""), name: "Redaktor", role: "Content Editor" as Role },
];
type Session = { email: string; name: string; role: Role; expires: number };
const sign = (value: string) => createHmac("sha256", secret).update(value).digest("base64url");
export function authenticate(email: string, password: string) { if(!email||!password)return undefined; return users.find((user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password); }
export function createSession(user: Omit<Session,"expires">) { const payload = Buffer.from(JSON.stringify({ ...user, expires: Date.now()+1000*60*60*12 })).toString("base64url"); return `${payload}.${sign(payload)}`; }
export function verifySession(token?: string | null): Session | null { if(!token)return null; const [payload,signature]=token.split("."); if(!payload||!signature)return null; const expected=sign(payload); try { if(!timingSafeEqual(Buffer.from(signature),Buffer.from(expected)))return null; const session=JSON.parse(Buffer.from(payload,"base64url").toString()) as Session; return session.expires>Date.now()?session:null; } catch { return null; } }
export function can(role: Role, area: "products"|"inquiries"|"faq"|"blog"|"media"|"analytics"|"settings") { if(role==="Admin")return true; if(role==="Manager")return ["products","inquiries","faq","media"].includes(area); return ["blog","media"].includes(area); }
