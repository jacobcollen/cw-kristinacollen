"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
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
import books from "@/data/books";

const categories = [...new Set(books.map((book) => book.category))];

const menuItems = [
  { title: "Hem", href: "/" },
  {
    title: "Böcker",
    href: "/bocker",
    subItems: [
      { title: "Alla böcker", href: "/bocker" },
      ...categories.map((category) => ({
        title: category,
        href: `/bocker?category=${encodeURIComponent(category)}`,
      })),
    ],
  },
  { title: "ALMA", href: "/ALMA" },
  { title: "Föreläsningar", href: "/forelasningar" },
  { title: "Kontakt", href: "/kontakt" },
];

export function TopNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = (href: string) => {
    // Kontrollera om länken matchar den aktuella sökvägen
    if (href === pathname) {
      return true;
    }

    // Kontrollera om länken har query-parametrar och matchar den aktuella sökvägen
    if (href.includes("?")) {
      const [basePath, query] = href.split("?");
      const currentQuery = searchParams.toString();
      return pathname === basePath && currentQuery === query;
    }

    return false;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map(({ title, href, subItems }) => (
          <NavigationMenuItem key={title}>
            {subItems ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive(href) && "bg-accent text-accent-foreground",
                  )}
                >
                  {title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px]">
                    {subItems.map((sub) => (
                      <li key={sub.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={sub.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(sub.href) && "bg-accent text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {sub.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive(href) && "bg-accent text-accent-foreground",
                  )}
                >
                  {title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
