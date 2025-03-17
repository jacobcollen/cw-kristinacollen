"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef } from "react";

function Navbar() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<NodeJS.Timeout | null>(null);

/**
 * Handles the mouse enter event for a navigation section.
 * Cancels any pending dropdown hide timeout and sets the 
 * dropdown to show the specified section.
 *
 * @param section - The section to display in the dropdown.
 */

  const handleMouseEnter = (section: string) => {
    if (dropdownRef.current) clearTimeout(dropdownRef.current);
    setShowDropdown(section);
  };

  const handleMouseLeave = () => {
    dropdownRef.current = setTimeout(() => setShowDropdown(null), 200);
  };

  const isSectionActive = (section: string) =>
    section === "/" ? pathname === "/" : pathname.startsWith(section);

  return (
    <nav className="flex w-full items-center justify-between bg-gray-800 px-7 py-4">
      {/* Logotype */}
      <div className="logo">
        <Link href="/">
          <Image
            src="/logotype.svg"
            alt="Kristina Collén logotyp"
            width={150}
            height={42.5}
            priority
          />
        </Link>
      </div>

      {/* Nav */}
      <div className="flex items-center gap-7">
        {[
          { href: "/", label: "Hem" },
          {
            href: "/bocker",
            label: "Böcker",
            dropdown: [
              { href: "/bocker/barn", label: "Böcker för barn" },
              { href: "/bocker/vuxna", label: "Böcker för vuxna" },
            ],
          },
          { href: "/ALMA", label: "ALMA" },
          { href: "/forelasningar", label: "Föreläsningar" },
          { href: "/kontakt", label: "Kontakt" },
        ].map(({ href, label, dropdown }) => (
          <div
            key={href}
            className="relative"
            onMouseEnter={dropdown ? () => handleMouseEnter(label) : undefined}
            onMouseLeave={dropdown ? handleMouseLeave : undefined}
          >
            {/* Huvudlänk */}
            <Link
              href={href}
              className={`relative text-xl text-gray-300 transition-colors hover:text-white ${isSectionActive(href) ? "text-white" : ""} ${
                !isSectionActive(href)
                  ? "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  : ""
              } `}
            >
              {label}
            </Link>

            {/* Dropdown */}
            {dropdown && showDropdown === label && (
              <div
                className="absolute left-0 top-full mt-3 min-w-max rounded-lg bg-white shadow-lg"
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={handleMouseLeave}
              >
                {dropdown.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block rounded-lg px-6 py-3 text-gray-800 hover:bg-gray-200 ${
                      isSectionActive(href) ? "font-semibold" : ""
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
