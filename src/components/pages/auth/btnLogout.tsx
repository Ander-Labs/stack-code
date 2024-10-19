"use client";
import { useRouter } from "next/navigation";
import { useUserState } from "@/client/auth/userSate";
import { Button } from "@/components/ui/button";
import { useSignOut } from "@nhost/nextjs";


export default function LogoutButton() {
  const router = useRouter();
  const { signOut } = useSignOut(); // Hook para cerrar sesión en Nhost

  const handleLogout = async () => {
    try {
      // Cerrar sesión de Nhost
      await signOut();

      // Llamar al endpoint que eliminará la cookie
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Limpiar el estado global de Zustand
      useUserState.getState().clearUser();

      // Redirigir al usuario a la página de inicio de sesión
      router.push("/auth");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return <Button onClick={handleLogout}>Cerrar Sesión</Button>;
}
