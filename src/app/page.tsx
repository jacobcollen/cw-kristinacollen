import { getNews } from "@/server/queries";
import { NewsFeed } from "@/app/_components/NewsFeed";
import About from "@/app/_components/About";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const news = await getNews();

  return (
    <main>
      <About />
      <NewsFeed news={news} />
      <About />
    </main>
  );
}
