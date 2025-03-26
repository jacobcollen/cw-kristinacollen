"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type NewsletterFormValues = {
  email: string;
};

export function NewsletterForm() {
  const form = useForm<NewsletterFormValues>({ defaultValues: { email: "" } });

  // The onSubmit logic
  const onSubmit = async (data: NewsletterFormValues) => {
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      const result = await response.json();

      if (response.ok) {
        toast("Prenumeration skickad", {
          description: "Tack för att du prenumererar!",
        });
        form.reset();
      } else {
        toast.error("Fel", {
          description: result.error ?? "Något gick fel.",
        });
      }
    } catch (error) {
      toast.error("Fel", {
        description: "Något gick fel. Försök igen senare.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex">
                  <Input
                    placeholder="Din e-postadress"
                    className="rounded-r-none border-gray-700 bg-gray-900 focus:border-gray-500"
                    {...field}
                  />
                  <Button type="submit" className="rounded-l-none">
                    Anmäl
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
