"use client";

import { useRef } from "react";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { contactFormSchema } from "@/lib/schemas/contactFormSchema";

export default function FormDrawer({
  title,
  description,
  triggerText,
}: {
  title: string;
  description: string;
  triggerText: string;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Något gick fel vid e-postutskick.");

    alert("Tack! Ditt meddelande har skickats.");
    form.reset();

  } catch (error) {
    console.error("Fel vid skickning:", error);
    alert("Kunde inte skicka meddelandet, försök igen senare.");
  }
};

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button ref={triggerRef} tabIndex={0}>
          {triggerText}
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="absolute right-4 top-4">
          <DrawerClose className="rounded-sm opacity-70 hover:opacity-100 focus:ring-2">
            <X className="h-6 w-6" />
            <span className="sr-only">Stäng</span>
          </DrawerClose>
        </div>

        <div className="max-w-lg mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
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
                      <Input placeholder="Din e-postadress" {...field} />
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
                      <Textarea placeholder="Ditt meddelande" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter>
                <Button type="submit">Skicka</Button>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
