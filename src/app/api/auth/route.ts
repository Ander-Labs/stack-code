import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { accessToken, refreshToken } = await request.json();

 if (!accessToken || !refreshToken) {
   return NextResponse.json(
     { error: "Tokens no proporcionados" },
     { status: 400 }
   );
 }

    try {
      const response = NextResponse.json({ success: true });
      response.cookies.set("access-token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 semana
      });
      response.cookies.set("refresh-token", refreshToken, {
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
