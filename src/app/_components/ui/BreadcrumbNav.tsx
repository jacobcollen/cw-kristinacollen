"use client";

import * as React from "react";
import Link from "next/link";
import { useMediaQuery } from "use-media-query-react";
import { ChevronDown, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export function BreadcrumbResponsive() {
  const [selectedCategory, setSelectedCategory] = React.useState("Alla böcker"); // Sätt initial kategori
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Hem */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Hem</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <Slash className="h-4 w-4 text-gray-500" />
        </BreadcrumbSeparator>

        {/* Böcker (förblir statiskt) */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/bocker">Böcker</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <Slash className="h-4 w-4 text-gray-500" />
        </BreadcrumbSeparator>

        {/* Dynamiskt val av kategori */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={`/bocker/${selectedCategory.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {selectedCategory}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>

      {/* DropdownMenu i Navbar */}
      <div className="mt-4">
        <DropdownMenu onSelect={setSelectedCategory} />
      </div>
    </Breadcrumb>
  );
}
