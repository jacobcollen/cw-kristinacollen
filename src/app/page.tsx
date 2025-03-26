import { PageThemeWrapper } from "./_components/PageThemeWrapper";
import { getNews } from "@/server/queries";
import { NewsFeed } from "@/app/_components/NewsFeed";
import About from "@/app/_components/About";
import { Hero } from "@/app/_components/Hero";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const news = await getNews();

  return (
    <PageThemeWrapper>
      <main>
        <Hero
          hero="https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTmvnXl5hw3uhJyItiYaz8xQ5dsLPMVjw2S9Ce"
          title="Rosenträdgården"
          description="Vill du ha en stunds trevlig lättläst läsning med en klurig och spännande historia är det här boken för dej! Boken påminner om Damernas detektivbyrå och engelsk feelgood. Historien ringlar sig fram till en oväntad upplösning. Ser fram emot en fortsättning! @Roselover, december 2022"
        />
        <NewsFeed news={news} />
        <About />
      </main>
    </PageThemeWrapper>
  );
}
