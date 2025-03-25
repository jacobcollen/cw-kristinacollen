"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import { BookTabProps } from "../_types/booktab";

const availableCategories = ["Alla böcker", "Böcker för vuxna", "Böcker för barn"];

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
    <div className="flex flex-wrap gap-4 py-6">
      <Tabs
        value={currentCategory}
        onValueChange={handleChange}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-3">
          {availableCategories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
