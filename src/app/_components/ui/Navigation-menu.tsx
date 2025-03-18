"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const menuItems = [
  { title: "Hem", href: "/" },
  {
    title: "Böcker",
    href: "/bocker",
    subItems: [
      { title: "Alla böcker", href: "/bocker" },
      { title: "Böcker för barn", href: "/bocker/barn" },
      { title: "Böcker för vuxna", href: "/bocker/vuxna" },
    ],
  },
  { title: "ALMA", href: "/ALMA" },
  { title: "Föreläsningar", href: "/forelasningar" },
  { title: "Kontakt", href: "/kontakt" },
];

export function NavigationMenuComponent() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
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
                    pathname.startsWith(href) &&
                      "bg-accent text-accent-foreground",
                  )}
                >
                  {title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 space-y-2 p-4">
                    {subItems.map((sub) => (
                      <li key={sub.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={sub.href}
                            className={cn(
                              "hover:bg-accent hover:text-accent-foreground block rounded p-2 text-base font-medium transition-colors",
                              pathname === sub.href &&
                                "bg-accent text-accent-foreground",
                            )}
                          >
                            {sub.title}
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
