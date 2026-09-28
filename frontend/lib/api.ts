import { cookies } from "next/headers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3011";

export async function apiFetch(path: string, init?: RequestInit) {
  const cookieStore = await cookies();
  return fetch(`${BACKEND_URL}${path}`, {
    ...init,
    headers: { ...init?.headers, cookie: cookieStore.toString() },
    cache: "no-store",
  });
}
