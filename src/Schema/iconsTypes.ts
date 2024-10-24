
import { z } from "zod";

export const IconSchema = z.object({
   name: z.string().min(3),
  descripcion: z.string().min(20),
  icon_name: z.string().min(1),
});


export type IconsTypes = z.infer<typeof IconSchema>;