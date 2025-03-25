"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import lectures from "@/app/_data/lectures";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageThemeWrapper } from "../_components/PageThemeWrapper";

function LectureCard({ lecture }: { lecture: any }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [clampLines, setClampLines] = useState(3);
  const totalTextAreaHeight = 150; 
  const lineHeight = 24;

  useLayoutEffect(() => {
    function recalcClamp() {
      if (titleRef.current) {
        const titleHeight = titleRef.current.getBoundingClientRect().height;
        const available = totalTextAreaHeight - titleHeight - 8;
        const lines = Math.max(Math.floor(available / lineHeight), 1);
        setClampLines(lines);
      }
    }
    recalcClamp();
    window.addEventListener("resize", recalcClamp);
    return () => window.removeEventListener("resize", recalcClamp);
  }, [lecture.title]);

  return (
    <motion.div
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
          <CardContent className="flex flex-col flex-1 p-6">
            <div className="flex flex-col flex-1">
              <CardTitle ref={titleRef} className="mb-2 text-xl font-bold">
                {lecture.title}
              </CardTitle>
              <CardDescription
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: clampLines,
                }}
              >
                {Array.isArray(lecture.description)
                  ? lecture.description.join(" ")
                  : lecture.description}
              </CardDescription>
            </div>
            <div className="mt-auto pt-4">
              <Button className="w-full">Läs mer</Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function LecturesPage() {
  return (
    <PageThemeWrapper>
      <div className="container max-w-7xl">
        <h1 className="py-6 text-3xl font-bold">Föreläsningar</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </div>
    </PageThemeWrapper>
  );
}
