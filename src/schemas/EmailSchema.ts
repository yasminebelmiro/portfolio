
import { z } from "zod";

export const EmailSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email é obrigatório"),
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export type EmailSchemaType = z.infer<typeof EmailSchema>;


