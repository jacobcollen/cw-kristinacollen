"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenuComponent } from "./ui/Navigation-menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-7 py-4">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logotype_dark.svg"
              alt="Kristina Collén logotyp"
              width={150}
              height={42.5}
              priority
            />
          </Link>
        </div>
        <NavigationMenuComponent />
	</div>
    </header>
  );
}
