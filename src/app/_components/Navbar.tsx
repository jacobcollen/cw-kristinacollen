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
          a === "Böcker för barn" ? -1 : b === "Böcker för barn" ? 1 : 0,
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

export function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
    [pathname, searchParams],
  );

  const renderNavItems = () => {
    return menuItems.map((item) => (
      <NavigationMenuItem key={item.title}>
        {item.subItems ? (
          <>
            <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
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
                    className={
                      isActive(subItem.href, subItem.title)
                        ? "bg-accent/50"
                        : "bg-transparent"
                    }
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </>
        ) : (
          <Link href={item.href} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              active={isActive(item.href)}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.span>
            </NavigationMenuLink>
          </Link>
        )}
      </NavigationMenuItem>
    ));
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
              "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer dark:hover:bg-button/90",
            )}
            triggerVariant="ghost"
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
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
});
ListItem.displayName = "ListItem";
