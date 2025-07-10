import z from "zod";
export const contactTypeOptions = [
  "Familiar",
  "Trabajo",
  "Amigo",
  "Otro",
] as const;
export const contactSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Nombre requerido" }),
  lastname: z.string().min(1, { message: "Apellido requerido" }),
  email: z
    .string()
    .min(1, { message: "Email requerido" })
    .email("Correo invalido"),
  type: z.enum([...contactTypeOptions], {
    errorMap: () => ({ message: "Seleccione tipo" }),
  }),
});

export type Contact = z.infer<typeof contactSchema>;
