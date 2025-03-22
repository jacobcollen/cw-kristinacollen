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
      <BreadcrumbNav items={breadcrumbItems} />
      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lectures.map((lecture) => {
          const titleLines = lecture.title.length > 50 ? 3 : lecture.title.length > 30 ? 2 : 1;
          const descLines = titleLines === 3 ? 3 : 2;

          return (
            <motion.div
              key={lecture.id}
              whileHover={{ scale: 1.008 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="h-full"
            >
              <Link href={`/forelasningar/${lecture.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col hover:cursor-pointer">
                  <CardHeader className="p-0">
                    <img
                      src={lecture.imgUrl}
                      alt={lecture.title}
                      className="h-48 w-full rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <CardTitle className="mb-2 flex-none text-xl leading-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                      {lecture.title}
                    </CardTitle>
						<CardDescription
						className="overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:var(--desc-lines)]"
						style={{
							"--desc-lines": lecture.title.length > 40 ? 3 : lecture.title.length > 25 ? 4 : 5,
							maxHeight: lecture.title.length > 40 ? "4.5rem" : "7.5rem",
						} as React.CSSProperties}
						>
						{Array.isArray(lecture.description)
							? lecture.description.join(" ")
							: lecture.description}
						</CardDescription>
                    <div className="mt-auto pt-4">
                      <Button className="w-full">Läs mer</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
