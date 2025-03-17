const books = [
  {
    id: 1,
    title: "Rosenträdgården",
    slug: "rosentradgarden",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTmvnXl5hw3uhJyItiYaz8xQ5dsLPMVjw2S9Ce",
    category: "Böcker för vuxna",
    year: 2022,
    publisher: "Lava förlag",
    description:
      "Detta är en sorts deckare à la Agatha Christie i modern tappning. Personliga porträtt av invånarna i byn och deras förehavande blir till ett bildspel med målande bilder att se på sin inre filmduk.",
    review:
      "Vill du ha en stunds trevlig lättläst läsning med en klurig och spännande historia är det här boken för dej! Boken påminner om Damernas detektivbyrå och engelsk feelgood. Historien ringlar sig fram till en oväntad upplösning. Ser fram emot en fortsättning! @Roselover, 2022-12-28",
    purchaseLink: "https://www.vulkanmedia.se/rosentradgarden/",
  },
  {
    id: 2,
    title: "Relationer i socialt arbete",
    slug: "relationer-i-socialt-arbete",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVvA0rHS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
    category: "Böcker för vuxna",
    year: 2018,
    publisher: "Liber",
    description:
      "Relationsskapande komponenter för personer med intellektuella funktionshinder.",
    review: null,
    purchaseLink:
      "https://www.adlibris.com/se/bok/relationer-i-socialt-arbete-i-granslandet-mellan-profession-och-person-9789147113118",
  },
  {
    id: 3,
    title: "Alma och Spökeriet på Slottet",
    slug: "alma-och-spokeriet-pa-slottet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTkkzH5CQ6wu3YtfRPBLKdUIEO9C5xqMae08jo",
    category: "Böcker för barn",
    year: 2024,
    publisher: "Visto förlag",
    description:
      "Julen närmar sig, eller som morbror Tage säger, det lackar mot jul. Alma och hennes två kusiner förbereder sig för det årliga luciafirandet på det stora, gamla slottet som ligger i mormors by. Ett kraftigt snöoväder gör att allt ställs på ända. Flickorna och Tage blir insnöade och måste stanna kvar på slottet under natten. Plötsligt börjar det hända mystiska saker. Har det att göra med lucianatten, eller trollnatten som den också kallas? Årets längsta natt då oknytt och andra varelser ställer till oreda i skogen? Eller är det ett spöke på slottet? Det blir ett knivigt fall för detektiv Alma med två A, som i autism och adhd.",
    review:
      "En härlig detektivberättelse med spännade inslag. Väl anpassad till målgruppen, med kluriga mysterier och en liten gnutta kärlek. @bokbyteri, 2024-01-15",
    purchaseLink:
      "https://www.vistoforlag.se/bok/alma-och-spokeriet-pa-slottet/",
  },
  {
    id: 4,
    title: "Rima och Ordfjärilarna",
    slug: "rima-och-ordfjarilarna",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTjhT4sBMSNioes19dTMGurRUApDCvKc6P8qB0",
    category: "Böcker för barn",
    year: 2022,
    publisher: "Idus förlag",
    description:
      "Rima och ordfjärilarna är en varm och lekfull bok som på ett pedagogiskt sätt lyfter frågor kring selektiv mutism och att våga prata.",
    review:
      "Så härligt att selektiv mutism får ta plats bland barnböckerna. Att få känna igen sig och kunna identifiera sig med olika karaktärer kan stärka barnens självbild och självkänsla. @laspedagogen, 2022-12-31",
    purchaseLink: "https://idusforlag.se/bok/rima-och-ordfjarilarna/",
  },
  {
    id: 5,
    title: "Min mamma bor under en sten",
    slug: "min-mamma-bor-under-en-sten",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTzTLHC3I4WIisHx4PZ7O1TEjahz5Ndec09tFA",
    category: "Böcker för barn",
    year: 2021,
    publisher: "Idus förlag",
    description:
      "Hemma hos Siri är det bråkigt... En berättelse om att hitta styrka och mod.",
    review:
      "Beviljades litteraturstöd från Kulturrådet 2021: “Syftet med litteraturstödet är att främja mångfald, kvalitet och fördjupning i utgivningen av litteratur samt främja spridning och läsning av litteratur.",
    purchaseLink:
      "https://www.bokus.com/cgi-bin/product_search.cgi?ac_used=yes&search_word=min+mamma+bor+under+en+sten",
  },
  {
    id: 6,
    title: "Pojken i tornet",
    slug: "pojken-i-tornet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTtCuIREzjL7qHI06VxSvasBd2Q4DRFf5oJG89",
    category: "Böcker för barn",
    year: 2020,
    publisher: "Idus förlag",
    description:
      "Höstterminen i sexan har just börjat... En berättelse om vänskap, teater och mysterier.",
    review:
      "En bok om teater, spöken, panikångest och nätmobbing. En bok som tar upp viktiga ämnen som nätmobbning och dess följder. En bok för alla i slukaråldern och uppåt, med ett stort allvar, men även spänning och glädje. @i_min_bokhylla, 2021-02-17",
    purchaseLink: "https://idusforlag.se/bok/pojken-i-tornet/",
  },
  {
    id: 7,
    title: "Mika och Mille. Den magiska mobilen",
    slug: "mika-och-mille-den-magiska-mobilen",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTk7D9ovQ6wu3YtfRPBLKdUIEO9C5xqMae08jo",
    category: "Böcker för barn",
    year: 2020,
    publisher: "Idus förlag",
    description:
      "Mika och hunden Mille är bästa vänner. De brukar leka i skogen bakom huset som de bor i. En dag hittar Mika en gammal mobil. Det visar sig att mobilen är magisk, och från den får de en massa spännande uppdrag. Både veterinären, bagaren och brandkåren behöver Mikas och Milles hjälp. Kommer de att hinna allt innan de skall åka till farmor och farfar?",
    review: null,
    purchaseLink: null,
  },
  {
    id: 8,
    title: "Alma och flyghunden Otto",
    slug: "alma-och-flyghunden-otto",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVyLG3zS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
    category: "Böcker för barn",
    year: 2019,
    publisher: "Idus förlag",
    description:
      "Det är ett kraftigt åskoväder i mormors skog när det plötsligt hörs ett högt brak. Har åskan slagit ner? Det visar sig vara ett alldeles speciellt flygplan som har kraschat. Ett plan som ska visas upp på Flygets dag kommande lördag. Flygkapten Vera bryter benet i olyckan och kan inte vara till mycket hjälp. Det blir en kamp mot klockan. Ska finurliga Alma med två A, som i autism och ADHD, hitta den viktiga silvernyckeln och få planet flygklart i tid? Och vart har egentligen flyghunden Otto tagit vägen?",
    review:
      "Varm, charmig och med viktigt innehåll. En fin, varm och väldigt mysig berättelse om tjejen Alma med två A, som har autism och ADHD. Almas diagnos är skildrad på ett fint sätt som gör att hennes personligheter med superkraft gör henne till en tjej man vill hänga med. @bettan_bokprataren, 2020-02-07",
    purchaseLink: "https://idusforlag.se/bok/alma-och-flyghunden-otto/",
  },
  {
    id: 9,
    title: "Alma och papegojmysteriet",
    slug: "alma-och-papegojmysteriet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTJtqa6M9jD8dSAOxuUZB5wQgEm6V9RTaCfLeW",
    category: "Böcker för barn",
    year: 2018,
    publisher: "Idus förlag",
    description:
      "Almas två A, A som i autism och A som i ADHD gör Alma speciell. Speciellt bra på vissa saker. Som att lyssna. Och på att vara detektiv. Alma är också djurens väktare som mormor säger och när den operasjungande papegojan Jack försvinner är det bra att Alma finns där. Under jakten på papegojan håller det dock på att gå riktigt illa. Kanske kan Alma nu få användning för den magiska kraft hon just upptäckt att hon har ärvt från sin gammelmorfar Ansgar?",
    review:
      "Det känns verkligen som om författaren själv älskar något barn (eller numera vuxen) med autism och/eller ADHD för berättelsen har en bakomliggande dimension som känns både äkta och kärleksfull. Detta tillsammans med NPF-kompetens som också syns i texten! @barnboksfamiljen, 2019-10-06",
    purchaseLink: "https://idusforlag.se/bok/alma-och-papegojmysteriet/",
  },
];

export default books;
