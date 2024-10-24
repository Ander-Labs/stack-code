import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconSchema, IconsTypes } from "@/Schema/iconsTypes";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function AddForm() {
  const { toast } = useToast();
  const register = useForm({
    resolver: zodResolver(IconSchema),
    defaultValues: {
      name: "",
      descripcion: "",
      icon_name: "",
    },
  });

  // Definir la mutación utilizando TanStack Query con fetch
  const mutation = useMutation({
    mutationFn: async (data: IconsTypes) => {

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HASURA_API_REST}/icons`,
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "x-hasura-admin-secret": "SFOh$90smuJWfmBq5);%7TE3NdB0F5D#",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            object: {
              name: data.name,
              descripcion: data.descripcion,
              icon_name: data.icon_name,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit data");
      }

      return response.json();
    },
    onSuccess: (data) => {
      console.log("Datos enviados con éxito:", data);
      toast({
        title: "Éxito",
        description: "Los datos han sido enviados con éxito.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
    onError: (error) => {
      console.error("Error al enviar los datos:", error.message);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar los datos.",
        action: (
          <ToastAction altText="Try again">Inténtalo de nuevo</ToastAction>
        ),
      });
    },
  });

  const onSubmit = (data: IconsTypes) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Form {...register}>
        <form onSubmit={register.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={register.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la tecnologia</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de la tecnologia" {...field} />
                </FormControl>
                <FormDescription>Nombre de la tecnologia</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={register.control}
            name="descripcion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripcion de la Tecnologia</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Donde se puede usar la tecnologia"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Breve descripcion de la tecnologia
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={register.control}
            name="icon_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del icono</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del Icono" {...field} />
                </FormControl>
                <FormDescription>Nombre Icono en Iconify</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Agregando..." : "Agregar"}
          </Button>

          {mutation.isError && (
            <p className="text-red-500">Error al enviar los datos</p>
          )}
        </form>
      </Form>
    </>
  );
}
