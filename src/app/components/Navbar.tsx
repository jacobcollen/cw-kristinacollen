"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();

  // Definiera färger för varje sida
  const pageColors: Record<string, string> = {
    "/": "bg-gradient-to-b from-[#2e026d] to-[#2e026d]",
    "/böcker": "bg-blue-700",
    "/föreläsningar": "bg-green-700",
    "/ALMA": "bg-red-700",
    "/kontakt": "bg-purple-700",
  };

  // Standardfärg om sidan inte matchar
  const navBgColor = pageColors[pathname] || "bg-gray-900";

  return (
    <nav
      className={`flex w-full items-center justify-between p-4 ${navBgColor}`}
    >
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo_vit.svg"
            alt="Kristina Collén logotyp"
            width={160}
            height={50}
            priority
          />
        </Link>
      </div>

      <div className="flex items-center gap-7">
        {[
          { href: "/böcker", label: "Böcker" },
          { href: "/ALMA", label: "ALMA" },
          { href: "/föreläsningar", label: "Föreläsningar" },
          { href: "/om-mig", label: "Om mig" },
          { href: "/kontakt", label: "Kontakt" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative text-xl text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
