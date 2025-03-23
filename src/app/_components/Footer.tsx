"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Facebook,
  Instagram, 
  Linkedin, 
  Book
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FormDrawer from "@/app/_components/FormDrawer";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  { title: "Hem", href: "/" },
  { title: "Böcker", href: "/bocker" },
  { title: "ALMA", href: "/ALMA" },
  { title: "Föreläsningar", href: "/forelasningar" },
  { title: "Om mig", href: "/om-mig" },
];

const formSchema = z.object({
  email: z.string().email({ message: "Ogiltig e-postadress" }),
});

export function Footer() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error("Något gick fel");
      }
      
      toast({
        title: "Prenumerationen lyckades!",
        description: "Du är nu anmäld till nyhetsbrevet.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Något gick fel",
        description: "Det gick inte att slutföra prenumerationen, försök igen senare.",
        variant: "destructive",
      });
    }
  }

  return (
    <footer className="w-full bg-gray-950 text-white mt-0">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Col 1 about */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kristina Collén</h3>
            <Separator className="bg-gray-700" />
            <p className="text-gray-300 text-sm">
              Författare av både barnböcker och skönlitteratur. Medlem i Sveriges Författarförbund och 
              aktiv föreläsare inom litteratur och kreativt skrivande.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://linkedin.com/in/kristina-collén-99518518b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/kristinacollen_forfattare?igsh=MWdtNWNweng2d2JoNg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1AJsMpGGDe/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Col 2 menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Meny</h3>
            <Separator className="bg-gray-700" />
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link 
                  key={item.title} 
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <div className="py-1">
                <FormDrawer
                  title="Kontakta oss"
                  description="Fyll i formuläret nedan så återkommer vi till dig."
                  triggerText="Kontakt"
                />
              </div>
            </nav>
          </div>

          {/* Col 3 newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Prenumerera på nyhetsbrevet</h3>
            <Separator className="bg-gray-700" />
            <p className="text-gray-300 text-sm">
              Få uppdateringar om nya böcker, föreläsningar och andra aktiviteter direkt till din inbox. 🥰
            </p>
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
                            className="bg-gray-900 border-gray-700 focus:border-gray-500 rounded-r-none"
                            {...field} 
                          />
                          <Button 
                            type="submit" 
                            className="rounded-l-none"
                          >
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
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Book size={16} />
            <span>© {new Date().getFullYear()} Kristina Collén. Alla rättigheter förbehållna.</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/integritetspolicy" className="hover:text-white transition-colors">
              Integritetspolicy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
