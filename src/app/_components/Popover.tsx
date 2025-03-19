"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";
import { contactFormSchema } from "@/lib/schemas/formSchemas";

export function PopoverWithForm() {
  const handleSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log("Formulär skickat:", data);
    alert("Tack för ditt meddelande! Kristina kommer att kontakta dig.");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default">Kontakta Kristina</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ContactForm onSubmit={handleSubmit} />
      </PopoverContent>
    </Popover>
  );
}
