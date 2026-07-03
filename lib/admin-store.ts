import { promises as fs } from "node:fs";
import path from "node:path";
import { products as seedProducts, type Product } from "@/data/products";
import { faq as seedFaq } from "@/data/faq";
import { blogPosts as seedPosts, type BlogPost } from "@/data/blogPosts";

export type Role = "Admin" | "Manager" | "Content Editor";
export type InquiryStatus = "Nowe" | "W trakcie" | "Odpowiedziano" | "Zamówienie" | "Zamknięte" | "Spam";
export type Inquiry = {
  id: string; createdAt: string; name: string; phone: string; email: string; product?: string;
  size?: string; age?: string; event?: string; message: string; formType: string; status: InquiryStatus;
  source: string; note?: string; nextContact?: string; history: { date: string; text: string }[];
};
export type ManagedFaq = { id: string; question: string; answer: string; category: string; visible: boolean; order: number };
export type ManagedPost = BlogPost & { id: string; status: "Szkic" | "Opublikowany" | "Ukryty"; seoTitle: string; seoDescription: string };
export type MediaItem = { id: string; url: string; filename: string; alt: string; group: string; createdAt: string; size: number };
export type Appointment = { id: string; createdAt: string; name: string; phone: string; date: string; time: string; age: string; lookingFor: string; status: InquiryStatus };
export type AnalyticsEvent = { id: string; createdAt: string; type: string; path: string; label?: string; source: string; product?: string; category?: string };
export type Review = { id: string; name: string; city: string; text: string; rating: number; event: string; photo?: string; visible: boolean };
export type Promotion = { id: string; name: string; code?: string; description: string; active: boolean; startsAt?: string; endsAt?: string };
export type ManagedProduct = Product & { id: string; visible: boolean; seoTitle: string; seoDescription: string; alt: string; badges: string[]; images: string[]; createdAt: string; updatedAt: string };
export type CmsStore = { products: ManagedProduct[]; inquiries: Inquiry[]; faq: ManagedFaq[]; posts: ManagedPost[]; media: MediaItem[]; appointments: Appointment[]; events: AnalyticsEvent[]; reviews: Review[]; promotions: Promotion[] };

const storePath = path.join(process.cwd(), "data", "cms-store.json");
const now = () => new Date().toISOString();
const id = () => `${Date.now().toString(36)}-${crypto.randomUUID().slice(0, 8)}`;

function seedStore(): CmsStore {
  return {
    products: seedProducts.map((product) => ({ ...product, id: product.slug, visible: true, seoTitle: product.name, seoDescription: product.description, alt: `${product.name} — elegancka odzież dziecięca`, badges: product.featured ? ["Bestseller"] : [], images: [product.image], createdAt: "2026-01-10T10:00:00.000Z", updatedAt: now() })),
    inquiries: [
      { id: "demo-1", createdAt: now(), name: "Anna Kowalska", phone: "+48 600 123 456", email: "anna@example.com", product: "Sukienka komunijna Aurora", size: "140", age: "10 lat", event: "Komunia", message: "Czy możemy umówić przymiarkę w przyszłym tygodniu?", formType: "product", status: "Nowe", source: "Google", history: [] },
      { id: "demo-2", createdAt: new Date(Date.now()-86400000).toISOString(), name: "Marta Nowak", phone: "+48 500 222 111", email: "marta@example.com", product: "Garnitur chłopięcy Milano", size: "146", age: "12 lat", event: "Wesele", message: "Czy garnitur jest dostępny w granacie?", formType: "product", status: "W trakcie", source: "Instagram", history: [{ date: now(), text: "Wysłano informację o dostępnych terminach." }] },
    ],
    faq: seedFaq.map((item, index) => ({ id: `faq-${index+1}`, ...item, category: "Zakupy", visible: true, order: index+1 })),
    posts: seedPosts.map((post, index) => ({ ...post, id: `post-${index+1}`, status: "Opublikowany", seoTitle: post.title, seoDescription: post.excerpt })),
    media: [
      { id: "media-hero", url: "/images/hero-boutique.png", filename: "hero-boutique.png", alt: "Dzieci w eleganckich stylizacjach", group: "Strona główna", createdAt: now(), size: 0 },
      { id: "media-aurora", url: "/images/sukienka-aurora.png", filename: "sukienka-aurora.png", alt: "Sukienka komunijna Aurora", group: "Produkty", createdAt: now(), size: 0 },
      { id: "media-milano", url: "/images/garnitur-milano.png", filename: "garnitur-milano.png", alt: "Garnitur chłopięcy Milano", group: "Produkty", createdAt: now(), size: 0 },
    ], appointments: [], events: [], reviews: [], promotions: [],
  };
}

let writeQueue = Promise.resolve();
export async function readStore(): Promise<CmsStore> {
  try { const raw = await fs.readFile(storePath, "utf8"); return { ...seedStore(), ...JSON.parse(raw) } as CmsStore; }
  catch { return seedStore(); }
}
export async function writeStore(store: CmsStore) {
  writeQueue = writeQueue.then(async () => { await fs.mkdir(path.dirname(storePath), { recursive: true }); await fs.writeFile(storePath, JSON.stringify(store, null, 2), "utf8"); });
  await writeQueue;
}
export async function updateStore(mutator: (store: CmsStore) => void | Promise<void>) { const store = await readStore(); await mutator(store); await writeStore(store); return store; }
export const createId = id;
export async function getManagedProducts() { return (await readStore()).products.filter((product) => product.visible); }
export async function getManagedProduct(slug: string) { return (await readStore()).products.find((product) => product.slug === slug && product.visible); }
export async function getManagedFaq() { return (await readStore()).faq.filter((item) => item.visible).sort((a,b) => a.order-b.order); }
export async function getManagedPosts() { return (await readStore()).posts.filter((post) => post.status === "Opublikowany"); }
export async function getManagedPost(slug: string) { return (await readStore()).posts.find((post) => post.slug === slug && post.status === "Opublikowany"); }
