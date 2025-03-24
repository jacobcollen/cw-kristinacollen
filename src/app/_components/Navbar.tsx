"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import books from "@/app/_data/books";
import ContactForm from "./ContactForm";
import { MobileNav } from "./MobileNav";

// Extract categories once for reuse
const categories = [...new Set(books.map((book) => book.category))];

// Define menu items to share between desktop and mobile navigation
export const menuItems = [
  { title: "Hem", href: "/" },
  {
    title: "Böcker",
    href: "/bocker",
    subItems: [
      { title: "Alla böcker", href: "/bocker" },
      ...categories
        .sort((a, b) => (a === "Böcker för barn" ? -1 : b === "Böcker för barn" ? 1 : 0))
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

export function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Helper function to determine if a link is active
  const isActive = React.useCallback(
    (href: string, category?: string) => {
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
    },
    [pathname, searchParams]
  );

  // Render desktop navigation items
  const renderNavItems = () => {
    return menuItems.map((item) => (
      <NavigationMenuItem key={item.title}>
        {item.subItems ? (
          <>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent text-base font-medium hover:bg-accent/50", 
                isActive(item.href) && "bg-accent/50"
              )}
            >
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                className="grid w-[250px] gap-1 p-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.subItems.map((subItem) => (
                  <motion.li key={subItem.title} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={subItem.href}
                        className={cn(
                          "block rounded-md px-4 py-2 text-base font-medium hover:bg-accent/50",
                          isActive(subItem.href, subItem.title) && "bg-accent/50"
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className={cn(
                  "block px-4 py-2 text-base font-medium bg-transparent hover:bg-accent/50",
                  isActive(item.href) && "bg-accent/50"
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          </NavigationMenuLink>
        )}
      </NavigationMenuItem>
    ));
  };

  if (!isDesktop) {
    return (
      <MobileNav />
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-2">
        {renderNavItems()}

        <NavigationMenuItem>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
            <ContactForm 
              title="Kontakta oss" 
              description="Fyll i formuläret nedan så återkommer jag till dig." 
              triggerText="Kontakt" 
            />
          </motion.div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
