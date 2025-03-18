import { getNews } from "@/server/queries";
import { NewsFeed } from "@/app/_components/NewsFeed";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const news = await getNews();

  return (
    <main className="bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-white">
      {/* Hero - här kan du lägga till en hero-sektion om du vill */}

      {/* Neewsfeed */}
      <NewsFeed news={news} />
    </main>
  );
}
