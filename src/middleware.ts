import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Puedes verificar el JWT aquí si es necesario

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/protected-route"], // Añadir las rutas protegidas
};
