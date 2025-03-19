import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import books from "@/_data/books";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ContactFormPopover } from "@/app/_components/Popover";

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = books.find((book) => book.slug === slug);

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
            {/* Bild */}
            <div className="relative mx-auto h-fit w-full max-w-md overflow-hidden rounded-md">
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

            {/* Innehåll */}
            <div className="flex flex-col space-y-6">
              {/* Titel och metadata */}
              <div>
                <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {book.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {[book.year, book.publisher].map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Desc */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Om boken</h2>
                <div className="text-muted-foreground">
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

              {/* Review */}
              {book.review && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Från en läsare</h2>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="italic text-muted-foreground">
                      {book.review}
                    </p>
                  </div>
                </div>
              )}

              {/* Buy btn or contact form */}
              <div className="mt-auto pt-4">
                {book.purchaseLink ? (
                  <Button className="w-full sm:w-auto" size="lg" asChild>
                    <a
                      href={book.purchaseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Köp boken <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Denna bok går tyvärr inte att köpa på internet! Tips,
                      kontakta Kristina. Det finns kanske möjlighet att köpa den
                      direkt från henne.
                    </p>
                    <ContactFormPopover />
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
