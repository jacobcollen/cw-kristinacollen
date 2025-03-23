import Image from "next/image";
import { notFound } from "next/navigation";
import books from "@/app/_data/books";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import FormDrawer from "@/app/_components/FormDrawer";

export default async function BookPage({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) return notFound();

  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Böcker", href: "/bocker" },
    { label: book.category, href: `/bocker?category=${encodeURIComponent(book.category)}` },
    { label: book.title, href: `/bocker/${book.slug}` },
  ];

  return (
    <div className="container mx-auto max-w-5xl p-6">
      <BreadcrumbNav items={breadcrumbItems} />
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div className="relative mx-auto h-fit w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
            <Image
              src={book.imgUrl}
              alt={book.title}
              className="rounded-lg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="flex flex-col space-y-6">
            <h1>{book.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {[book.year, book.publisher].map((item) => (
                  <Badge key={item} variant="outline">
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
                <FormDrawer
                  title="Köp boken"
                  description="Kontakta Kristina för att köpa boken."
                  triggerText="Köp boken"
                />
              )}
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h2>Om boken</h2>
              {Array.isArray(book.description) ? (
                book.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{book.description}</p>
              )}
            </div>

            {/* Recension */}
            {book.review && (
              <div className="space-y-4">
                <h2>Från en läsare</h2>
                <blockquote className="mt-4">{book.review}</blockquote>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
