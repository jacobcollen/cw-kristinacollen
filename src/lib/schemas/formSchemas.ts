import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Namn är obligatoriskt"),
  email: z.string().email("Ogiltig e-postadress"),
  message: z.string().min(1, "Meddelande är obligatoriskt"),
});
