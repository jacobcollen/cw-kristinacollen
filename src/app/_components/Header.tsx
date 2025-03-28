"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { MobileNav } from "./MobileNav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full items-center justify-between border-b border-border px-2 py-2 dark:border-purple-950
	 md:px-4">
      <div className="logo">
        <Link href="/">
          <Image
            src="/logotype_dark.svg"
            alt="Kristina Collén logotyp"
            width={150}
            height={42.5}
            priority
            className="w-28 dark:invert sm:w-32 md:w-36"
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
