import { NewsCard } from "./NewsCard";
import { Card } from "@/components/ui/card";
import type { NewsFeedProps } from "@/app/_types/newsfeed";

export function NewsFeed({ news }: NewsFeedProps) {
  return (
    <section className="w-full bg-card">
      <div className="container mx-auto max-w-5xl p-6 py-16">
        <h2 className="mb-8 text-left text-col text-black text-4xl font-bold">Aktuellt</h2>

        {news.length > 0 ? (
          news.map((item) => <NewsCard key={item.id} news={item} />)
        ) : (
          <Card className="p-6 text-center">
            <p>Inga nyheter ännu.</p>
          </Card>
        )}
      </div>
    </section>
  );
}
