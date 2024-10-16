
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Eliminar la cookie
  response.cookies.set("auth-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0), // Esto elimina la cookie inmediatamente
  });

  return response;
}
