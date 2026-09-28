import { NextResponse, type NextRequest } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3011";

// ponytail: auto-login de desarrollo — si no hay cookie de sesión, la pide al backend
// (que solo la otorga cuando NODE_ENV !== production) y la reenvía al navegador.
export async function proxy(request: NextRequest) {
  if (request.cookies.has("session")) return NextResponse.next();

  const res = await fetch(`${BACKEND_URL}/api/auth/session`, {
    headers: { cookie: request.headers.get("cookie") ?? "" },
  });

  const response = NextResponse.next();
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) response.headers.set("set-cookie", setCookie);
  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
