"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import books from "@/app/_data/books";
import { useSearchParams } from "next/navigation";
import BookNavbar from "../_components/BookNavbar";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { motion } from "framer-motion";

export default function BooksPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredBooks = category
    ? books.filter((book) => book.category === category)
    : books;

  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Böcker", href: "/bocker" },
    ...(category
      ? [{ label: category, href: `/bocker?category=${encodeURIComponent(category)}` }]
      : []),
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <BreadcrumbNav items={breadcrumbItems} />
      <BookNavbar title={category ? category : "Alla böcker"} />
      
      {/* Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <motion.div
            key={book.id}
            whileHover={{ scale: 1.008 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="h-full"
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
                <CardContent className="flex-grow p-6 pt-0">
                  <div className="flex h-full flex-col">
                    <CardTitle className="mb-2 text-xl leading-tight [-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box]">
                      {book.title}
                    </CardTitle>

                    <CardDescription
                      className="overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [-webkit-line-clamp:var(--desc-lines,2)] [display:-webkit-box]"
                      style={
                        {
                          "--desc-lines":
                            book.title.length > 50
                              ? 1
                              : book.title.length > 30
                                ? 2
                                : 3,
                          maxHeight:
                            book.title.length > 50
                              ? "1.5rem"
                              : book.title.length > 30
                                ? "3rem"
                                : "4.5rem",
                        } as React.CSSProperties
                      }
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
        ))}
      </div>
    </div>
  );
}
