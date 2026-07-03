import { NextResponse } from "next/server";import { readStore } from "@/lib/admin-store";import { requireAdmin } from "@/lib/admin-api";
export async function GET(){const auth=await requireAdmin("analytics");if(auth.error)return auth.error;return NextResponse.json((await readStore()).events)}
