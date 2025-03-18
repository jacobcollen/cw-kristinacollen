"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["Alla böcker", "Böcker för barn", "Böcker för vuxna"];

export default function BookNavbar({ title }: { title: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="py-2">
      <h1 className="py-3 text-3xl font-bold">{title}</h1>
      <Tabs defaultValue="Alla böcker" className="mb-6">
        <TabsList>
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} asChild>
              <Link
                href={
                  cat === "Alla böcker"
                    ? "/bocker"
                    : `/bocker?category=${encodeURIComponent(cat)}`
                }
                className={cn(
                  "data-[state=active]:bg-accent data-[state=active]:text-accent-foreground", // Shadcn/ui standardklasser
                )}
              >
                {cat}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
