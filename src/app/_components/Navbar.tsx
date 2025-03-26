"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import books from "@/app/_data/books";
import ContactForm from "./ContactForm";
import { MobileNav } from "./MobileNav";

const categories = [...new Set(books.map((book) => book.category))];

export const menuItems = [
  { title: "Hem", href: "/" },
  {
    title: "Böcker",
    href: "/bocker",
    subItems: [
      { title: "Alla böcker", href: "/bocker" },
      ...categories
        .sort((a, b) =>
          a === "Böcker för barn" ? -1 : b === "Böcker för barn" ? 1 : 0
        )
        .map((category) => ({
          title: category,
          href: `/bocker?category=${encodeURIComponent(category)}`,
        })),
    ],
  },
  { title: "ALMA", href: "/ALMA" },
  { title: "Föreläsningar", href: "/forelasningar" },
  { title: "Om mig", href: "/om-mig" },
];

function isMainNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const searchParams = useSearchParams();

  if (!isDesktop) {
    return <MobileNav />;
  }

  return (
    <NavigationMenu className="flex w-full items-center gap-4">
      <NavigationMenuList>
        {menuItems.map((item) => {
          const mainActive = isMainNavActive(pathname, item.href);

          if (!item.subItems) {

            return (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-foreground",
                      "hover:bg-secondary/90 hover:text-secondary-foreground",
                      mainActive && "bg-secondary text-secondary-foreground",
                    )}
                  >
                    <motion.span whileHover={{ scale: 1.05 }}>
                      {item.title}
                    </motion.span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          } else {

            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger
                  className={cn(
                    "group",
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground",
                    "hover:bg-secondary/90 hover:text-secondary-foreground",
                    mainActive && "bg-secondary text-secondary-foreground",
                  )}
                >
                  <motion.span whileHover={{ scale: 1.05 }}>
                    {item.title}
                  </motion.span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex w-48 flex-col gap-1 p-2">
                    {item.subItems.map((subItem) => {
                      const currentCategory =
                        searchParams.get("category") || "Alla böcker";
                      const subActive =
                        subItem.title === currentCategory ||
                        (subItem.title === "Alla böcker" &&
                          pathname === "/bocker" &&
                          !currentCategory);

                      return (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm hover:bg-muted hover:text-muted-foreground",
                                subActive &&
                                  "bg-secondary text-secondary-foreground",
                              )}
                            >
                              {subItem.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
        })}

        <NavigationMenuItem>
          <ContactForm
            title="Kontakta oss"
            description="Fyll i formuläret nedan så återkommer jag till dig."
            triggerText="Kontakt"
            triggerClassName={cn(
              navigationMenuTriggerStyle(),
              "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
            triggerVariant="ghost"
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
