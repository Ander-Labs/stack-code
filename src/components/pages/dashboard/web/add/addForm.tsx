
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WebTec, WebTecType } from "@/Schema/addWebStack";
// import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  //   FormControl,
  //   FormDescription,
  //   FormField,
  //   FormItem,
  //   FormLabel,
  //   FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";

const GeneralInfo = dynamic(() => import("./generalInfo"));

export default function AddForm() {
  const register = useForm({
    resolver: zodResolver(WebTec),
    defaultValues: {
      name: "",
      descripcion: "",
      categoria: "",
      sub_categoria: "",
      username: "",
      stack_tec: {
        icon_name: "",
        tec_name: "",
      },
      icon_name: "",
    },
  });

  const onSubmit = (data: WebTecType) => {
    console.log(data);
    // Lógica para enviar los datos
  };

  return (
    <>
      <Form {...register}>
        <form onSubmit={register.handleSubmit(onSubmit)} className="space-y-8">
          <GeneralInfo control={register.control} />
          {/* <FormField
            control={register.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del Stack</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del stack" {...field} />
                </FormControl>
                <FormDescription>Nombre que le das al stack</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <Button type="submit">Agregar</Button>
        </form>
      </Form>
    </>
  );
}
