"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useSignInEmailPassword } from "@nhost/nextjs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Schema de validación
const signInSchema = z.object({
  email: z.string().email("Debe ser un correo electrónico válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function FormLogin() {
  const router = useRouter();
  const { signInEmailPassword } = useSignInEmailPassword();
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SignInFormData) => {
    setError(null);
    try {
      const { error } = await signInEmailPassword(data.email, data.password);
      if (error) {
        setError(error.message); // Mostrar el mensaje de error si ocurre
      } else {
        router.push("/dashboard");
      }
    } catch {
      setError("Hubo un problema en el inicio de sesión. Intente nuevamente.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="ejemplo@correo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <p className="text-red-500">{error}</p>}

        <Button type="submit" disabled={form.formState.isSubmitting}>
          Iniciar Sesión
        </Button>
      </form>
    </Form>
  );
}
