import { NewsCard } from "./NewsCard";
import { Card } from "@/components/ui/card";
import type { NewsFeedProps } from "@/app/_types/newsfeed";

export function NewsFeed({ news }: NewsFeedProps) {
  return (
    <section className="w-full bg-card">
      <div className="container mx-auto max-w-5xl pt-20">
        <h2 className="text-col my-16 mb-6 md:mb-8 px-2 md:p-4 text-left text-3xl md:text-4xl font-bold text-black">
          Aktuellt
        </h2>
        <div className="mb-16 space-y-8">
          {news.length > 0 ? (
            news.map((item) => <NewsCard key={item.id} news={item} />)
          ) : (
            <Card className="p-6 text-center">
              <p>Inga nyheter ännu.</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
