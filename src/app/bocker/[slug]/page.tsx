import Image from "next/image";
import { notFound } from "next/navigation";
import books from "@/app/_data/books";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import ContactForm from "@/app/_components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function BookPage({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) return notFound();

  const breadcrumbItems = [
    { label: "Böcker", href: "/bocker" },
    { label: book.category, href: `/bocker?category=${encodeURIComponent(book.category)}` },
    { label: book.title, href: `/bocker/${book.slug}` },
  ];

  return (
    <>
      <BreadcrumbNav items={breadcrumbItems} />
      <div
        className="container mx-auto mb-8 min-h-screen max-w-5xl"
        style={{ minHeight: "calc(100vh - 12rem)" }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{book.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
              <div className="relative mx-auto h-fit w-full max-w-sm overflow-hidden rounded-sm">
                <Image
                  src={book.imgUrl}
                  alt={book.title}
                  width={400}
                  height={600}
                  className="rounded-sm"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {[book.year, book.publisher].map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  {book.purchaseLink ? (
                    <Button asChild>
                      <a
                        href={book.purchaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Köp boken <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild>
                      <ContactForm
                        title={`Köp boken ${book.title}`}
                        description="Kontakta mig för att köpa boken."
                        triggerText="Köp boken"
                      />
                    </Button>
                  )}
                </div>
                <Separator className="my-6" />
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold">Om boken</h2>
                    <p className="text-muted-foreground">
                      {Array.isArray(book.description)
                        ? book.description.join(" ")
                        : book.description}
                    </p>
                  </div>
                  {book.review && (
                    <div>
                      <h2 className="text-xl font-semibold">Från en läsare</h2>
                      <blockquote className="mt-2 text-muted-foreground">
                        {book.review}
                      </blockquote>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
