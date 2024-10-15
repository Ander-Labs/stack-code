import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token } = await request.json();

  if (!token) {
    return NextResponse.json(
      { error: "Token no proporcionado" },
      { status: 400 }
    );
  }

  try {
    // Almacenar el token en la cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "No se pudo almacenar la cookie" },
      { status: 500 }
    );
  }
}
