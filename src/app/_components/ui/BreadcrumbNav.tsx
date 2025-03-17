"use client";

import * as React from "react";
import Link from "next/link";
import { useMediaQuery } from "use-media-query-react";
import { ChevronDown, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const items: { href: string; label: string }[] = [
  { href: "/bocker", label: "Alla Böcker" },
  { href: "/bocker/barn", label: "Böcker för barn" },
  { href: "/bocker/vuxna", label: "Böcker för vuxna" },
];

export function BreadcrumbResponsive() {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(items[0]);
  const [isClient, setIsClient] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Hem */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Hem</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="h-4 w-4 text-gray-500" />
        </BreadcrumbSeparator>

        {/* Dropdown eller Drawer beroende på skärm */}
        <BreadcrumbItem>
          {isDesktop ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                {selectedItem.label} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {items.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    onClick={() => setSelectedItem(item)}
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger aria-label="Open menu">
                <ChevronDown className="h-5 w-5" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>Bokkategorier</DrawerTitle>
                  <DrawerDescription>Välj en kategori</DrawerDescription>
                </DrawerHeader>
                <div className="grid gap-3 px-4">
                  {items.map((item) => (
                    <Link key={item.href} href={item.href} className="text-lg">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <DrawerFooter className="pt-4">
                  <DrawerClose asChild>
                    <Button variant="outline">Stäng</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="h-4 w-4 text-gray-500" />
        </BreadcrumbSeparator>

        {/* Dynamiskt */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={selectedItem.href}>{selectedItem.label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
