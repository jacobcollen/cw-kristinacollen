"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { cn } from "@/lib/utils";

interface ContactFormProps {
  title: string;
  description: string;
  triggerText: string;
  triggerClassName?: string;
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  onSuccess?: () => void;
}

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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Något gick fel vid e-postutskick.");

      toast.success("Tack! Ditt meddelande har skickats.");
      form.reset();
      setOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error("Fel vid skickning:", error);
      toast.error("Kunde inte skicka meddelandet, försök igen senare.");
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
          aria-label={isSubmitting ? "Skickar meddelande..." : "Skicka meddelande"}
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
        // Prevent focus retention that causes ARIA-hidden errors
        e.currentTarget.blur();
      }}
    >
      {triggerText}
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {TriggerButton}
        </DialogTrigger>
        <DialogContent id="contact-form-dialog" className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          {FormContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        {TriggerButton}
      </DrawerTrigger>
      <DrawerContent 
        id="contact-form-drawer"
        onInteractOutside={(e) => {
          // Prevent focus issues with nested drawers
          const target = e.target as HTMLElement;
          if (target.closest('[data-vaul-drawer]')) {
            e.preventDefault();
          }
        }}
      >
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </DrawerHeader>
        <div className="p-4">
          {FormContent}
        </div>
        <DrawerClose asChild className="p-4">
          <Button 
            variant="outline"
            onClick={(e) => e.currentTarget.blur()}
          >
            Stäng
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
