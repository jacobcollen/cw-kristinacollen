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
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
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
    [pathname, searchParams]
  );

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <DrawerHeader>
          <DrawerTitle className="text-xl">Meny</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-full p-4">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <div key={item.title} className="w-full">
                {item.subItems ? (
                  <Collapsible
                    open={openCategories[item.title]}
                    onOpenChange={() => toggleCategory(item.title)}
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant={isActive(item.href) ? "secondary" : "ghost"}
                        className="w-full justify-between text-base font-medium"
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openCategories[item.title] ? "rotate-180" : ""
                          )}
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1">
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col space-y-1 pl-4"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "py-2 text-base font-medium transition-colors",
                                isActive(subItem.href, subItem.title)
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-primary"
                              )}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Button
                    asChild
                    variant={isActive(item.href) ? "secondary" : "ghost"}
                    className="w-full justify-start text-base font-medium"
                  >
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      {item.title}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <ContactForm
                title="Kontakta oss"
                description="Fyll i formuläret nedan så återkommer jag till dig."
                triggerText="Kontakt"
              />
            </div>
          </div>
        </ScrollArea>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Stäng</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
