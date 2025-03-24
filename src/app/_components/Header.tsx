// Header.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { MobileNav } from "./MobileNav";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full border-b-2 border-border p-4">
            <div className="flex items-center justify-between">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/logotype_dark.svg"
                            alt="Kristina Collén logotyp"
                            width={150}
                            height={42.5}
                            priority
                            className="dark:invert"
                        />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <Navbar />
                </div>
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
