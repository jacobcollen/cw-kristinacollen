"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import books from "@/app/_data/books";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageThemeWrapper } from "../_components/PageThemeWrapper";
import BookNavbar from "../_components/BookTabs";

function BookCard({ book }: { book: any }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [clampLines, setClampLines] = useState(3);
  const totalTextAreaHeight = 120;
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
  }, [book.title]);

  return (
    <motion.div
      whileHover={{ scale: 1.008 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="h-full space-y-4"
    >
      <Link href={`/bocker/${book.slug}`} className="group block h-full">
        <Card className="flex h-full flex-col hover:cursor-pointer">
          <CardHeader className="p-6">
            <img
              src={book.imgUrl}
              alt={book.title}
              className="w-full rounded-sm object-contain"
              style={{ aspectRatio: "3/4" }}
            />
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-6 pt-0">
            <div className="flex flex-1 flex-col">
              <CardTitle ref={titleRef} className="mb-2 text-xl font-bold">
                {book.title}
              </CardTitle>
              <CardDescription
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: clampLines,
                }}
              >
                {Array.isArray(book.description)
                  ? book.description.join(" ")
                  : book.description}
              </CardDescription>
            </div>
          </CardContent>
          <CardFooter className="mt-auto p-6 pt-0">
            <Button className="w-full">Läs mer</Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function BooksPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const filteredBooks = category
    ? books.filter((book) => book.category === category)
    : books;

  return (
    <PageThemeWrapper>
      <div className="container mx-auto mb-8 max-w-7xl">
        <BookNavbar title={category || "Alla böcker"} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </PageThemeWrapper>
  );
}
