import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import books from "@/data/books";
import { BreadcrumbNav } from "@/app/_components/ui/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  return books.map(({ slug }) => ({ slug }));
}

export default async function BookDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = books.find(({ slug }) => slug === params.slug);

  if (!book) return notFound();

  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Böcker", href: "/bocker" },
    {
      label: book.category,
      href: `/bocker?category=${encodeURIComponent(book.category)}`,
    },
    { label: book.title, href: `/bocker/${book.slug}` },
  ];

  return (
    <div className="container mx-auto max-w-6xl p-4 sm:p-6">
      <BreadcrumbNav items={breadcrumbItems} />
      <Card className="border-0 bg-transparent py-8 shadow-none">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
            {/* Img */}
            <div className="relative mx-auto h-fit w-full max-w-md overflow-hidden rounded-md shadow-lg">
              <Image
                src={book.imgUrl}
                alt={book.title}
                className="rounded-sm"
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {/* Content */}
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {book.title}
                </h1>
                <div className="flex flex-wrap gap-2 text-muted-foreground">
                  {[book.year, book.publisher, book.category].map((item) => (
                    <Badge key={item} variant="outline" className="px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Om boken</h2>
                <div className="leading-relaxed text-muted-foreground">
                  {Array.isArray(book.description) ? (
                    book.description.map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p>{book.description}</p>
                  )}
                </div>
              </div>
              {book.review && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Från en läsare</h2>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="italic leading-relaxed text-muted-foreground">
                      {book.review}
                    </p>
                  </div>
                </div>
              )}
              <div className="mt-auto pt-4">
                <Button
                  className="w-full bg-purple-900 hover:bg-purple-950 sm:w-auto"
                  size="lg"
                  asChild
                >
                  <a
                    href={book.purchaseLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Köp boken <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
