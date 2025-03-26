"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactForm from "./ContactForm";
import { menuItems } from "./Navbar";

export function MobileNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>({});

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = React.useCallback(
    (href: string, category?: string) => {
      if (href === pathname && !category) return true;
      if (href.includes("?")) {
        const [basePath, query] = href.split("?");
        const currentQuery = searchParams.toString();
        const currentCategory = searchParams.get("category");
        if (category && currentCategory === category) return true;
        return pathname === basePath && currentQuery === query;
      }
      return false;
    },
    [pathname, searchParams],
  );

  return (
    <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Öppna meny"
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="max-h-[90dvh] pb-8"
        onInteractOutside={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("[data-vaul-drawer]")) {
            e.preventDefault();
          }
        }}
      >
        <DrawerHeader>
          <DrawerTitle className="text-xl">Meny</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-full p-4">
          <nav aria-label="Huvudmeny">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.subItems ? (
                    <div>
                      <Button
                        variant={isActive(item.href) ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-between text-base font-medium bg-transparent text-foreground no-underline",
                        )}
                        onClick={() => toggleCategory(item.title)}
                        aria-expanded={openCategories[item.title]}
                        aria-controls={`collapsible-${item.title}`}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.title}
                        </motion.span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openCategories[item.title] ? "rotate-180" : "",
                          )}
                          aria-hidden="true"
                        />
                      </Button>
                      <Collapsible open={openCategories[item.title]}>
                        <CollapsibleContent id={`collapsible-${item.title}`}>
                          <AnimatePresence>
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex flex-col space-y-1 pl-4"
                            >
                              {item.subItems.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                      "block py-2 text-base font-medium no-underline",
                                      isActive(subItem.href, subItem.title)
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground",
                                    )}
                                    aria-current={
                                      isActive(subItem.href, subItem.title)
                                        ? "page"
                                        : undefined
                                    }
                                  >
                                    <motion.span
                                      whileHover={{ scale: 1.05 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      {subItem.title}
                                    </motion.span>
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          </AnimatePresence>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  ) : (
                    <Button
                      asChild
                      variant={isActive(item.href) ? "secondary" : "ghost"}
                      className="w-full justify-start text-base font-medium bg-transparent text-foreground no-underline"
                      onClick={(e) => {
                        setOpen(false);
                        e.currentTarget.blur();
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.title}
                        </motion.span>
                      </Link>
                    </Button>
                  )}
                </li>
              ))}
              <li className="mt-4 border-t pt-4">
                <ContactForm
                  title="Kontakta oss"
                  description="Fyll i formuläret nedan så återkommer jag till dig."
                  triggerText="Kontakt"
                  triggerClassName="w-full justify-start text-base font-medium bg-primary text-primary-foreground"
                  onSuccess={() => setOpen(false)}
                />
              </li>
            </ul>
          </nav>
        </ScrollArea>
        <DrawerClose asChild className="p-4 mt-8 mx-4">
          <Button variant="outline" onClick={(e) => e.currentTarget.blur()}>
            Stäng meny
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
