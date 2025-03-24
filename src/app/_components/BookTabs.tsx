"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const categories = ["Alla böcker", "Böcker för barn", "Böcker för vuxna"];

export default function BookNavbar({ title }: { title: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="flex flex-col gap-4">
      <h1>{title}</h1>
      <Tabs defaultValue={category || "Alla böcker"} className="pb-6 w-fit">
        <TabsList className="grid w-full grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={
                cat === "Alla böcker"
                  ? "/bocker"
                  : `/bocker?category=${encodeURIComponent(cat)}`
              }
            >
              <motion.div
                whileHover={{ scale: 1.05 }}  // Exakt samma som Navbar
                whileTap={{ scale: 0.95 }}    // Exakt samma som Navbar
                transition={{ duration: 0.2 }} // Exakt samma animation
              >
                <TabsTrigger
                  value={cat}
                  className={cn(
                    "w-full",
                    "hover:bg-accent/10",
                    category === cat || (cat === "Alla böcker" && !category)
                      ? "bg-accent/50"
                      : "bg-transparent"
                  )}
                >
                  {cat}
                </TabsTrigger>
              </motion.div>
            </Link>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
