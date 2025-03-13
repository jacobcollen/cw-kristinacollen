"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);

  const pageColors: Record<string, string> = {
    "/": "bg-gradient-to-b from-[#2e026d] to-[#2e026d]",
    "/bocker": "bg-[#2e026d]",
    "/forelasningar": "bg-green-700",
    "/ALMA": "bg-red-700",
    "/kontakt": "bg-purple-700",
  };

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
            layout="intrinsic"
            width={160}
            height={160 / 3.53}
            priority
          />
        </Link>
      </div>

      <div className="flex items-center gap-7">
        {[
          { href: "/", label: "Hem" },
          { href: "/bocker", label: "Böcker" },
          { href: "/ALMA", label: "ALMA" },
          { href: "/forelasningar", label: "Föreläsningar" },
          { href: "/kontakt", label: "Kontakt" },
        ].map(({ href, label }) => (
          <div
            key={href}
            onMouseEnter={() =>
              label === "Böcker" && setShowBooksDropdown(true)
            }
            onMouseLeave={() =>
              label === "Böcker" && setShowBooksDropdown(false)
            }
            className="relative"
          >
            <Link
              href={href}
              className="relative text-xl text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
            {label === "Böcker" && showBooksDropdown && (
              <div className="absolute left-0 top-full mt-2 rounded-lg bg-white shadow-lg">
                <Link
                  href="/bocker/vuxna"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Böcker för vuxna
                </Link>
                <Link
                  href="/bocker/barn"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Böcker för barn
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
