import { PageThemeWrapper } from "./_components/PageThemeWrapper";
import { getNews } from "@/server/queries";
import { NewsFeed } from "@/app/_components/NewsFeed";
import About from "@/app/_components/About";
import Hero from "./_components/Hero";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const news = await getNews();

  return (
    <PageThemeWrapper>
      <main>
        <About />
        <NewsFeed news={news} />
        <Hero />
      </main>
    </PageThemeWrapper>
  );
}
