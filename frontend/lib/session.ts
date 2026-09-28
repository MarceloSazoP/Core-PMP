import { cookies } from "next/headers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3011";

export type Session = {
  email: string;
  tenantId: string;
  tenantName: string;
};

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const res = await fetch(`${BACKEND_URL}/api/auth/session`, {
    headers: { cookie: cookieStore.toString() },
    cache: "no-store",
  });
  if (!res.ok) return null;

  const data = await res.json();
  return data.user ?? null;
}
