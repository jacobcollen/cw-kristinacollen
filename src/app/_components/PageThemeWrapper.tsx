"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function PageThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  useEffect(() => {
    const darkModePages = ["/", "/ALMA", "/om-mig"];
    const lightModePages = ["/bocker", "/forelasningar"];

    if (darkModePages.includes(pathname)) {
      setTheme("dark");
    } else if (lightModePages.includes(pathname)) {
      setTheme("light");
    }
  }, [pathname, setTheme]);

  return <>{children}</>;
}
