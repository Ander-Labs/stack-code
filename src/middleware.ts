import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access-token");

  const { pathname } = req.nextUrl; // Obtener la ruta actual
  
  // Si no hay token y el usuario está intentando acceder a una ruta protegida, redirigir a /auth
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Si hay token y el usuario está intentando acceder a /auth, redirigir a /dashboard
  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Continuar con la solicitud
  return NextResponse.next();
}
  
export const config = {
  matcher: ["/dashboard/:path*", "/auth", "/protected-route"], // Añadir las rutas protegidas
};
