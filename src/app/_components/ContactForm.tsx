"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormProps } from "../_types/contact";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema } from "@/server/db/contactFormSchema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { toast } from "sonner";

export default function ContactForm({
  title,
  description,
  triggerText,
  triggerClassName,
  triggerVariant = "default",
  onSuccess,
}: ContactFormProps) {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
  setIsSubmitting(true);
  
  const toastId = toast.loading('Skickar ditt meddelande...', {
    description: 'Var god vänta en stund'
  });

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      let errorMessage = "Något gick fel vid e-postutskick.";

      if (result.details?.fieldErrors) {
        const errors = Object.entries(result.details.fieldErrors)
          .map(([field, messages]) => {
            if (Array.isArray(messages)) {
              return `${field}: ${messages.join(", ")}`;
            }
            return `${field}: ${messages}`;
          })
          .join("\n");
        errorMessage = `Ogiltig inmatning:\n${errors}`;
      } else if (result.error) {
        errorMessage = result.error;
      }

      throw new Error(errorMessage);
    }

    toast.success('Tack för ditt meddelande!', {
      id: toastId,
      description: 'Jag återkommer till dig snarast.',
      duration: 5000,
    });

    form.reset();
    setOpen(false);
    onSuccess?.();
  } catch (error) {
    console.error("Fel vid skickning:", error);
    
    toast.error('Kunde inte skicka meddelandet', {
      id: toastId,
      description: error instanceof Error ? error.message : 'Något gick fel vid skickning',
      duration: 5000,
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const FormContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Namn</FormLabel>
              <FormControl>
                <Input placeholder="Ditt namn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-post</FormLabel>
              <FormControl>
                <Input placeholder="Din e-postadress" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meddelande</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ditt meddelande"
                  className="min-h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
          aria-label={
            isSubmitting ? "Skickar meddelande..." : "Skicka meddelande"
          }
        >
          {isSubmitting ? "Skickar..." : "Skicka"}
        </Button>
      </form>
    </Form>
  );

  const TriggerButton = (
    <Button
      variant={triggerVariant}
      className={triggerClassName}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls={isDesktop ? "contact-form-dialog" : "contact-form-drawer"}
      onClick={(e) => {
        e.currentTarget.blur();
      }}
    >
      {triggerText}
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
        <DialogContent id="contact-form-dialog" className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {FormContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground={false}>
      <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
      <DrawerContent
        id="contact-form-drawer"
        onInteractOutside={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("[data-vaul-drawer]")) {
            e.preventDefault();
          }
        }}
      >
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </DrawerHeader>
        <div className="p-4">{FormContent}</div>
        <DrawerClose asChild className="p-4">
          <Button variant="outline" onClick={(e) => e.currentTarget.blur()}>
            Stäng
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
