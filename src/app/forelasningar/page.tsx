"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import lectures from "@/_data/lectures";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LecturesPage() {
  // Breadcrumb-items
  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Föreläsningar", href: "/forelasningar" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <BreadcrumbNav items={breadcrumbItems} />

      {/* Grid med föreläsningar */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lectures.map((lecture) => (
          <Link key={lecture.id} href={`/forelasningar/${lecture.slug}`}>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={lecture.imgUrl}
                      alt={lecture.title}
                      fill
                      className="rounded-t-lg object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-6">
                  {/* Titel */}
                  <CardTitle className="mb-2 flex-none text-xl">
                    {lecture.title}
                  </CardTitle>
                  {/* Beskrivning */}
                  <CardDescription className="line-clamp-3 flex-1">
                    {Array.isArray(lecture.description)
                      ? lecture.description.join(" ")
                      : lecture.description}
                  </CardDescription>
                  {/* Knapp */}
                  <Button className="mt-4 w-full">Läs mer</Button>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
