"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import lectures from "@/_data/lectures";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BookingDrawer from "@/app/_components/BookingDrawer";
import React from "react";

export default function LecturePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const lecture = lectures.find((lecture) => lecture.slug === slug);

  if (!lecture) return notFound();

  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Föreläsningar", href: "/forelasningar" },
    { label: lecture.title, href: `/forelasningar/${lecture.slug}` },
  ];

  return (
    <div className="container mx-auto max-w-6xl p-4 sm:p-6">
      <BreadcrumbNav items={breadcrumbItems} />
      <Card className="border-0 bg-transparent py-8 shadow-none">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
            {/* Bild */}
            <div className="relative mx-auto h-fit w-full max-w-md overflow-hidden rounded-sm">
              <Image
                src={lecture.imgUrl}
                alt={lecture.title}
                className="rounded-sm"
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Innehåll */}
            <div className="flex flex-col space-y-6">
              {/* Titel */}
              <div>
                <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {lecture.title}
                </h1>
              </div>

              <Separator />

              {/* Beskrivning */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Om föreläsningen</h2>
                <div className="text-muted-foreground">
                  {Array.isArray(lecture.description) ? (
                    lecture.description.map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p>{lecture.description}</p>
                  )}
                </div>
              </div>

              {/* Bokningsknapp */}
              <div className="mt-auto pt-4">
                <BookingDrawer lectureTitle={lecture.title} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
