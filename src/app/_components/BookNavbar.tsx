"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <div className="flex gap-4 pb-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative text-[#2e026d] transition-colors ${
              pathname === href
                ? "font-semibold"
                : "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#2e026d] after:transition-all after:duration-300 hover:after:w-full"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
