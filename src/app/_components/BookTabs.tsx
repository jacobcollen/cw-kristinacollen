"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import { BookTabProps } from "../_types/booktab";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const availableCategories = ["Alla böcker", "Böcker för barn", "Böcker för vuxna"];

export default function BookTabs({ title }: BookTabProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category") || "Alla böcker";

  const handleChange = (value: string) => {
    if (value === "Alla böcker") {
      router.push("/bocker");
    } else {
      router.push(`/bocker?category=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-4">{currentCategory}</h1>
      <Tabs value={currentCategory} onValueChange={handleChange} className="w-fit">
        <TabsList className="flex gap-4">
          {availableCategories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className={cn(
                "rounded-md px-3 py-1 transition-colors",
                currentCategory === cat
                  ? "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
                  : "hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))]"
              )}
            >
              <motion.span
                whileHover={currentCategory === cat ? undefined : { scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {cat}
              </motion.span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
