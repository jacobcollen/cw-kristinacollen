"use client";

import Link from "next/link";
import { ArrowLeft, Slash } from "lucide-react";
import { Fragment } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbNavProps } from "@/app/_types/breadcrumb";

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isDetailPage = /^\/(forelasningar|bocker)\/[^/]+\/?$/.test(pathname);
  if (!isDetailPage || items.length < 2) return null;

  const backTarget = items[items.length - 2] || { label: "Okänt", href: "#" };
  const fromAllBooks = searchParams.get("from") === "alla-bocker";
  const backLabel =
    fromAllBooks && pathname.startsWith("/bocker/")
      ? "Alla böcker"
      : backTarget.label || "Okänt";

  return (
    <div className="mt-8 mx-8 mb-4">

      <div className="md:hidden">
        <Link
          href={backTarget.href || "#"}
          className="flex items-center gap-1 text-sm transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          <span>Tillbaka till {backLabel}</span>
        </Link>
      </div>

      <div className="hidden md:block">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => {
              const label = item?.label || "Okänt";
              const href = item?.href || "#";
              return (
                <Fragment key={href + index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        href={href}
                        className="transition-colors hover:text-primary"
                      >
                        {label}
                      </Link>
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
      </div>
    </div>
  );
}
