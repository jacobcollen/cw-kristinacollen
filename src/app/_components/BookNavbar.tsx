"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const links = [
  { href: "/bocker", label: "Alla Böcker" },
  { href: "/bocker/barn", label: "Böcker för barn" },
  { href: "/bocker/vuxna", label: "Böcker för vuxna" },
];

export default function BookNavbar({ title }: { title: string }) {
  const pathname = usePathname();

  return (
    <div className="py-2">
      <h1 className="py-3 text-3xl font-bold">{title}</h1>
      <Menubar className="mb-6">
        {links.map(({ href, label }) => (
          <MenubarMenu key={href}>
            <MenubarTrigger asChild>
              <Link
                href={href}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {label}
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
}
