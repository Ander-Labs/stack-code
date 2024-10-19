"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { nhost } from "@/lib/nhost";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function SignInGitHub() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleGitHubLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      // Iniciar sesión con GitHub usando Nhost
      const result = await nhost.auth.signIn({
        provider: "github",
      });

      if (result.error) {
        setError(result.error.message || "Error al iniciar sesión con GitHub.");
        setIsLoading(false);
        return;
      }

      // Si todo es correcto, redirige al dashboard
      router.push("/dashboard");
    } catch {
      setError(
        "Hubo un problema al iniciar sesión con GitHub. Inténtalo nuevamente."
      );
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <Button
        onClick={handleGitHubLogin}
        disabled={isLoading}
        variant={"outline"}
      >
        <GitHubLogoIcon />{" "}
        <span className="px-2">
          {isLoading ? "Iniciando sesión..." : "Iniciar sesión con GitHub"}
        </span>
      </Button>
    </>
  );
}
