"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserPen } from "lucide-react";
import { useUserState } from "@/client/auth/userSate";

import axios from "axios";

type FormData = {
  displayName: string;
  email: string;
};

const updateUser = async (id: string, data: FormData) => {
  const response = await axios.post(
    `https://qyazskktpylpyqdgnchh.hasura.sa-east-1.nhost.run/api/rest/users/${id}`,
    {
      displayName: data.displayName,
      email: data.email,
    }
  );
  return response.data;
};

export default function SheetAccountEdit() {
  const user = useUserState((state) => state.user); // Estado global para obtener el id del usuario
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      displayName: user?.displayName || "",
      email: user?.email || "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormData) => updateUser(user?.id || "", data),
    onSuccess: () => {
      alert("Perfil actualizado exitosamente");
      // Aquí podrías actualizar el estado global o realizar otras acciones
      reset(); // Reinicia el formulario
    },
    onError: (error) => {
      alert(`Error al actualizar el perfil: ${(error as Error).message}`);
    },
  });

  const onSubmit = (data: FormData) => {
    if (user?.id) {
      mutation.mutate(data);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <UserPen />
          Editar
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Perfil</SheetTitle>
          <SheetDescription>
            Cambia tu nombre y correo electrónico aquí. Haz clic en
            &quot;Guardar cambios&quot; cuando termines.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="displayName" className="text-right">
              Nombre
            </Label>
            <Input
              id="displayName"
              {...register("displayName", {
                required: "Este campo es obligatorio",
              })}
              className="col-span-3"
            />
            {errors.displayName && (
              <p className="text-red-500 col-span-4">
                {errors.displayName.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Este campo es obligatorio" })}
              className="col-span-3"
            />
            {errors.email && (
              <p className="text-red-500 col-span-4">{errors.email.message}</p>
            )}
          </div>
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={mutation.status === "pending" || mutation.isPending}
            >
              {mutation.status === "pending"
                ? "Guardando..."
                : "Guardar cambios"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
