"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { nhost } from "@/lib/nhost";
import { NhostProvider } from "@nhost/react";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Schema de validación con zod
const signUpSchema = z.object({
  email: z.string().email("Debe ser un correo electrónico válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function FormRegister() {
  const { signUpEmailPassword } = useSignUpEmailPassword();
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SignUpFormData) => {
    setError(null);
    try {
      const { error } = await signUpEmailPassword(data.email, data.password);
      if (error) {
        setError(error.message); // Manejar errores de registro
      } else {
        // Manejar el éxito
      }
    } catch {
      setError("Hubo un problema en el registro. Intente nuevamente.");
    }
  };

  return (
    <>
      <NhostProvider nhost={nhost} >
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
              <FormDescription>
                Tu correo será usado para iniciar sesión.
              </FormDescription>
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
              <FormDescription>Mínimo 6 caracteres.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <p className="text-red-500">{error}</p>}

        <Button type="submit" disabled={form.formState.isSubmitting}>
          Registrarse
        </Button>
      </form>
      </Form></NhostProvider>
    </>
  );
}
