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
import { motion } from "framer-motion";

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
        <CardContent className="grid gap-6 p-6 md:grid-cols-3">
          {/* Img */}
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
          {/* Text */}
          <div className="flex flex-col justify-between md:col-span-2">
            <CardHeader className="space-y-2 p-0">
              <CardTitle className="text-xl md:text-2xl">
                {news.title}
              </CardTitle>
              <CardDescription className="text-base">
                {news.text}
              </CardDescription>
            </CardHeader>
            {/* Btn */}
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
      </Card>
  );
}
