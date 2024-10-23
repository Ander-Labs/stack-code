import { z } from "zod";

export const WebTec = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  descripcion: z
    .string()
    .min(20, "La descripción debe tener al menos 20 caracteres"),
  categoria: z.string().min(5, "La categoría debe tener al menos 5 caracteres"),
  sub_categoria: z
    .string()
    .min(6, "La subcategoría debe tener al menos 6 caracteres"),
  username: z
    .string()
    .min(4, "El nombre de usuario debe tener al menos 4 caracteres"),
  stack_tec: z.object({
    icon_name: z.string().min(1, "Debes seleccionar un icono"),
    tec_name: z
      .string()
      .min(3, "El nombre de la tecnología debe tener al menos 3 caracteres"),
  }),
  icon_name: z.string().min(1, "Debes seleccionar un icono"),
});

export type WebTecType = z.infer<typeof WebTec>;
