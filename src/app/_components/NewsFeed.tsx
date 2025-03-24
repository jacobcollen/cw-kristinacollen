import { NewsCard } from "./NewsCard";
import { Card } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  text: string;
  imageUrl: string | null;
  link: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

interface NewsFeedProps {
  news: NewsItem[];
}

export function NewsFeed({ news }: NewsFeedProps) {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 bg-card">
      <h2 className="mb-8 text-left text-3xl font-bold ">
        Aktuellt
      </h2>

      {news.length > 0 ? (
        news.map((item) => <NewsCard key={item.id} news={item} />)
      ) : (
        <Card className="p-6 text-center">
          <p>Inga nyheter ännu.</p>
        </Card>
      )}
    </section>
  );
}
