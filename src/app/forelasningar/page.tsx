"use client";

import lectures from "@/app/_data/lectures";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ForelasningarPage() {
  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Föreläsningar", href: "/forelasningar" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <BreadcrumbNav items={breadcrumbItems} />
      {/* Grid*/}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lectures.map((lecture) => (
          <Link key={lecture.id} href={`/forelasningar/${lecture.slug}`}>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Card className="flex h-full flex-col">
                <CardHeader className="p-0">
                  <img
                    src={lecture.imgUrl}
                    alt={lecture.title}
                    className="h-48 w-full rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
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
