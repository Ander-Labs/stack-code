import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { WebTecType } from "@/Schema/addWebStack";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GeneralInfoProps {
  control: Control<WebTecType>;
}

export default function GeneralInfo({ control }: GeneralInfoProps) {
  return (
    <>
      {" "}
      <FormField
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Name" required {...field} />
            </FormControl>
            <FormDescription>Nombre de la plataforma o web.</FormDescription>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="descripcion"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Descripcion de la plataforma."
                required
                {...field}
              />
            </FormControl>
            <FormDescription>
              Breve descripción de la plataforma.
            </FormDescription>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="categoria"
        render={({ fieldState }) => (
          <FormItem>
            <FormLabel>Categoria</FormLabel>
            <FormControl>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona la Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fronted">Fronted</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="full_stack">Full Stack</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription>
              Breve descripción de la plataforma.
            </FormDescription>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="sub_categoria"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Sub Categoria</FormLabel>
            <FormControl>
              <Input
                placeholder="React. Angular, Astro, etc."
                required
                {...field}
              />
            </FormControl>
            <FormDescription>
              Puede ser al ecosistema de la tecnologia a la que pertenese, solo
              un ecosistema por stack .
            </FormDescription>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
    </>
  );
}
