	import { z } from "zod";	
	
	export const contactFormSchema = z.object({	
		name: z.string().min(2, "Namnet måste vara minst 2 tecken."),	
		email: z.string().email("Ogiltig e-postadress."),	
		message: z.string().min(10, "Meddelandet måste vara minst 10 tecken."),	
	});
