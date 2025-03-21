"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import books from "@/app/_data/books";
import FormDrawer from "@/app/_components/FormDrawer";

// Hämta unika kategorier från böckerna
const categories = [...new Set(books.map((book) => book.category))];

// Definiera menyalternativen
const menuItems = [
  { title: "Hem", href: "/" },
  {
    title: "Böcker",
    href: "/bocker",
    subItems: [
      { title: "Alla böcker", href: "/bocker" },
      ...categories
        .sort((a, b) => {
          if (a === "Böcker för barn") return -1;
          if (b === "Böcker för barn") return 1;
          return 0;
        })
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

export function TopNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = (href: string, category?: string) => {
    if (href === pathname && !category) {
      return true;
    }

    if (href.includes("?")) {
      const [basePath, query] = href.split("?");
      const currentQuery = searchParams.toString();
      const currentCategory = searchParams.get("category");

      if (category && currentCategory === category) {
        return true;
      }
      return pathname === basePath && currentQuery === query;
    }

    return false;
  };

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.subItems ? (
                <>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/50",
                      isActive(item.href) && "bg-accent/50"
                    )}
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.ul
                      className="grid w-[200px] gap-1 p-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.subItems.map((subItem) => (
                        <motion.li
                          key={subItem.title}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block rounded-md px-4 py-2 hover:bg-accent/50",
                                isActive(subItem.href, subItem.title) &&
                                  "bg-accent/50"
                              )}
                            >
                              {subItem.title}
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-accent/50",
                        isActive(item.href) && "bg-accent/50"
                      )}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}

          {/* Fixad Kontakt-knapp med FormDrawer */}
          <NavigationMenuItem>
            <FormDrawer
              title="Kontakta oss"
              description="Fyll i formuläret nedan så återkommer vi till dig."
              triggerText="Kontakt"
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
