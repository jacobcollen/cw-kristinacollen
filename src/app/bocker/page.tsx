"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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
      ? [
          {
            label: category,
            href: `/bocker?category=${encodeURIComponent(category)}`,
          },
        ]
      : []),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav items={breadcrumbItems} />
      <BookNavbar title={category ? `Böcker: ${category}` : "Alla böcker"} />
      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <Link key={book.id} href={`/bocker/${book.slug}`}>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <img
                    src={book.imgUrl}
                    alt={book.title}
                    className="h-48 w-full rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  {/* Title */}
                  <CardTitle className="mb-2 flex-none text-xl">
                    {book.title}
                  </CardTitle>
                  {/* Desc */}
                  <CardDescription className="line-clamp-3 flex-1">
                    {Array.isArray(book.description)
                      ? book.description.join(" ")
                      : book.description}
                  </CardDescription>
                  {/* Btn */}
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
