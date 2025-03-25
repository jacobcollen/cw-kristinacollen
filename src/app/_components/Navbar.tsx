"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

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

function isDropdownActive(searchParams: URLSearchParams, dropdownTitle: string) {
  const cat = searchParams.get("category");
  if (!cat || cat === "Alla böcker") return dropdownTitle === "Alla böcker";
  return cat === dropdownTitle;
}

export function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const renderNavItems = () => {
    return menuItems.map((item) => {
      const mainActive = isMainNavActive(pathname, item.href);

      if (item.subItems) {
        return (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-black dark:text-white",
                "hover:bg-[hsl(var(--secondary))] hover:text-black dark:hover:text-white",
                mainActive &&
                  "bg-[hsl(var(--secondary))] text-black dark:text-white"
              )}
            >
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                {item.title}
              </motion.span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[250px] gap-1 p-2">
                {item.subItems.map((subItem) => (
                  <ListItem
                    key={subItem.title}
                    href={subItem.href}
                    title={subItem.title}
                    active={isDropdownActive(searchParams, subItem.title)}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      } else {

        return (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-black dark:text-white",
                  "hover:bg-[hsl(var(--secondary))] hover:text-black dark:hover:text-white",
                  mainActive && "bg-[hsl(var(--secondary))] text-black dark:text-white"
                )}
                active={mainActive}
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  {item.title}
                </motion.span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        );
      }
    });
  };

  if (!isDesktop) {
    return <MobileNav />;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {renderNavItems()}
        <NavigationMenuItem>

          <ContactForm
            title="Kontakta oss"
            description="Fyll i formuläret nedan så återkommer jag till dig."
            triggerText="Kontakt"
            triggerClassName={cn(
              navigationMenuTriggerStyle(),
              "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] no-underline"
            )}
            triggerVariant="ghost"
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type ListItemProps = {
  title: string;
  active?: boolean;
} & React.ComponentPropsWithoutRef<"a">;

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, active, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors",
              "bg-transparent text-black dark:text-white",
              "hover:bg-[hsl(var(--secondary))] hover:text-black dark:hover:text-white",
              active && "bg-[hsl(var(--secondary))] text-black dark:text-white",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
