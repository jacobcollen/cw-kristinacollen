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

interface NewsItem {
  id: number;
  title: string;
  text: string;
  imageUrl: string | null;
  link: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="mb-8">
      <CardContent className="grid items-start gap-6 space-y-4 p-6 md:grid-cols-3 md:space-y-0">
        {news.imageUrl && (
          <div className="relative h-40 w-full overflow-hidden rounded-md md:col-start-3 md:row-start-1 md:h-48">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="flex h-full flex-col justify-between md:col-span-2">
          <CardHeader className="space-y-2 p-0">
            <CardTitle className="md:text-2xl">{news.title}</CardTitle>
            <CardDescription className="md:text-base">
              {news.text}
            </CardDescription>
          </CardHeader>
          {news.link && (
            <CardFooter className="mt-auto p-0 pt-4">
              <Button asChild>
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                  Läs hela artikeln <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
