// components/BreadcrumbNav.tsx
"use client";

import Link from "next/link";
import { Slash } from "lucide-react";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: (BreadcrumbItem | null)[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <Breadcrumb className="mb-10">
      <BreadcrumbList>
        {items.map((item, index) => {
          if (!item) return null;

          return (
            <Fragment key={item.href}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {index < items.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash className="h-4 w-4 text-gray-500" />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
