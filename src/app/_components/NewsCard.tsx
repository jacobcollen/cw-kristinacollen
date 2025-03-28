import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { NewsCardProps } from "@/app/_types/newscard";

export function NewsCard({ news }: NewsCardProps) {
  return (
      <Card className="mb-6 white bg-card">
        <div className="container p-2 md:p-4 flex flex-col space-y-6">
          <CardContent className="grid gap-6 p-0 md:grid-cols-3">

            {news.imageUrl && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-start-3 md:row-start-1">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}

            <div className="flex flex-col justify-between md:col-span-2">
              <CardHeader className="p-0">
                <CardTitle className="text-xl md:text-2xl mb-4">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {news.text}
                </CardDescription>
              </CardHeader>

              {news.link && (
                <CardFooter className="p-0 pt-4">
                  <Button asChild>
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Läs hela artikeln <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
  );
}
