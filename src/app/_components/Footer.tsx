"use client";

import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Book,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import ContactForm from "./ContactForm";
import { NewsletterForm } from "./NewsletterForm";

const menuItems = [
  { title: "Hem", href: "/" },
  { title: "Böcker", href: "/bocker" },
  { title: "ALMA", href: "/ALMA" },
  { title: "Föreläsningar", href: "/forelasningar" },
  { title: "Om mig", href: "/om-mig" },
];

export function Footer() {
  return (
    <footer className="z-50 w-full bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kristina Collén</h3>
            <Separator className="bg-gray-700" />
            <p className="text-sm text-gray-300">
              Författare av både barnböcker och skönlitteratur. Medlem i
              Sveriges Författarförbund och aktiv föreläsare inom sociala
              frågor och kreativt skrivande.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com/in/kristina-collén-99518518b"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/kristinacollen_forfattare?igsh=MWdtNWNweng2d2JoNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-pink-400"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/1AJsMpGGDe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-500"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Meny</h3>
            <Separator className="bg-gray-700" />
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
              <div className="py-1">
                <ContactForm
                  title="Kontakta mig"
                  description="Fyll i formuläret nedan så återkommer jag till dig."
                  triggerText="Kontakt"
                />
              </div>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Prenumerera på nyhetsbrevet
            </h3>
            <Separator className="bg-gray-700" />
            <p className="text-sm text-gray-300">
              Få uppdateringar om nya böcker, föreläsningar och andra
              aktiviteter direkt till din inbox. 🙂
            </p>
            <NewsletterForm />
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
          <div className="mb-4 flex items-center space-x-2 md:mb-0">
            <Book size={16} />
            <span>© {new Date().getFullYear()} Kristina Collén</span>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/integritetspolicy"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Integritetspolicy
            </Link>
            <Link
              href="/cookies"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
