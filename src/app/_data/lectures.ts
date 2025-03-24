const lectures = [
  {
    id: 1,
    title: "Almamodellen. Förskola och skola för flickor med NPF",
    slug: "almamodellen-forskola-och-skola-for-flickor-med-npf",
    imgUrl: "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTaeYMmMLTiUJYmXzVFBn7ly4vu2DfetKscoR0",
    description: [
      "Föreläsningen fokuserar på flickor med autism och ADHD (NPF) och deras specifika styrkor och svårigheter och hur vi tillsammans kan arbeta för en hållbar förskole- och skolsituation för dem i syfte att stärka deras psykiska hälsa.",
      "Föreläsningen ger ett inifrånperspektiv och ett barnperspektiv på hur det är att vara flicka och leva med NPF, utifrån böckerna om detektiv Alma. Vi arbetar också praktiskt tillsammans för att tillgängliggöra den specifika fysiska miljön så att den bättre passar flickornas behov."
    ],
    bulletPoints: [
      "Föreläsningen ges till personal i förskola och grundskola.",
      "Föreläsningen kan ges till pedagoger eller alla vuxna som möter eleverna, såsom ledningspersoner, elevhälsopersonal och elevassistenter.",
      "Föreläsningen kan ges som en fristående inspirationsföreläsning.",
      "Efterföljande workshops erbjuds för att utveckla den specifika miljön på förskolan/skolan."
    ],
    forWho: ["Förskola", "Grundskola"],
    length: "2-6 timmar"
  },
  {
    id: 2,
    title: "Sexualitet, samtycke och relationer, anpassad skola",
    slug: "sexualitet-samtycke-och-relationer-anpassad-skola",
    imgUrl: "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_1280.jpg",
    description: [
      "Föreläsningen tar upp flera teman som kunskap kring funktionsnedsättningar och diagnoser, sexualitet, relationer och samtycke, attityder och förhållningssätt, samt ungdomarnas aktivitet på internet.",
      "Föreläsningen utgår från teorier och forskning och tillhandahåller metoder och material, både existerande och sådana vi skapar tillsammans."
    ],
    bulletPoints: [
      "Föreläsningen ges till personal inom anpassad grundskola eller anpassat gymnasium.",
      "Den kan ges till pedagogerna på skolan eller inkludera alla vuxna som möter eleverna.",
      "Föreläsningen kan ges som en inspirationsföreläsning för att starta utvecklingsarbetet inom ämnet.",
      "För att fördjupa temat erbjuds efterföljande workshops, 2-3 gånger per termin à 2 timmar."
    ],
    forWho: ["Anpassad grundskola", "Anpassat gymnasium"],
    length: "2-4 timmar"
  },
  {
    id: 3,
    title: "Flickor och unga tjejer med ADHD",
    slug: "flickor-och-unga-tjejer-med-adhd",
    imgUrl: "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTsTtOA65aQdrUILXw2geG89vc7KBZ0nHEAfml",
    description: [
      "Föreläsningen fokuserar på flickor och unga tjejer med ADHD och hur deras situation skiljer sig från pojkar med samma diagnos.",
      "Vi går igenom den senaste forskningen och diskuterar vad som kan göras för att minska risken för psykisk ohälsa hos dessa flickor."
    ],
    bulletPoints: [
      "Föreläsningen riktar sig till personer som möter flickor och unga kvinnor med ADHD i skola, vuxenutbildning eller på behandlingshem.",
      "Vi går igenom varför flickor och kvinnor med ADHD är extra utsatta och hur autism och kognitiv nedsättning ofta förekommer samtidigt.",
      "Föreläsningen syftar till att öka förståelsen och stärka den psykiska hälsan hos flickor och kvinnor med ADHD."
    ],
    forWho: ["Skola", "Folkhögskola", "Behandlingshem"],
    length: "2-4 timmar"
  },
  {
    id: 4,
    title: "Anhörig till en person med funktionsnedsättning",
    slug: "anhorig-till-en-person-med-funktionsnedsattning",
    imgUrl: "https://cdn.pixabay.com/photo/2017/08/07/13/40/people-2603928_1280.jpg",
    description: [
      "Att vara anhörig, förälder, syskon eller barn till en person med kognitiva funktionsnedsättningar kan innebära ett livslångt engagemang.",
      "Föreläsningen behandlar kognition, kognitiva nedsättningar och vilka utmaningar som kan uppstå i vardagen."
    ],
    bulletPoints: [
      "Föreläsningen vänder sig till anhöriga till personer med kognitiva nedsättningar, såsom intellektuell funktionsnedsättning, ADHD, autism eller psykisk sjukdom.",
      "Föreläsningen kan följas upp med gruppdiskussioner där vi ger varandra tips och stöd.",
      "Den kan också anpassas för personal som i sitt arbete möter anhöriga."
    ],
    forWho: ["Anhörig", "Personal"],
    length: "2-3 timmar"
  },
  {
    id: 5,
    title: "Krisberedskap och bemötande vid svåra händelser",
    slug: "krisberedskap-och-bemotande-vid-svara-handelser",
    imgUrl: "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTwy6WHIkBwyHsRvC6S04gN3xcKbrufUdkFLE7",
    description: [
      "Föreläsningen fördjupar flera teman inom området, exempelvis olika slags kriser, krisreaktioner, sorg och sorgreaktioner.",
      "Hur reagerar barn i olika åldrar vid kriser och vilka andra sårbara grupper finns som behöver särskild hänsyn? Vad skiljer en kris från trauma?"
    ],
    bulletPoints: [
      "Föreläsningen vänder sig till personal inom kommunen, exempelvis POSOM-grupper.",
      "Den kan även anpassas till personal inom frivilligorganisationer eller kyrkan som möter människor i kris och sorg."
    ],
    forWho: ["Kommun", "POSOM", "Kyrka"],
    length: "2-4 timmar"
  },
  {
    id: 6,
    title: "Workshop i kreativt skrivande",
    slug: "workshop-i-kreativt-skrivande",
    imgUrl: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    description: [
      "Workshopen behandlar barnbokens roll i samhället, kön och kultur i barnboksvärlden samt det speciella med att skriva för och med barn.",
      "Vi genomför skrivövningar som öppnar upp för fantasin och som sedan kan appliceras i undervisning och barnverksamhet."
    ],
    bulletPoints: [
      "Föreläsningen ges till pedagoger i skolan men även till fritidshem och andra verksamheter där man arbetar med barn.",
      "Vi genomför egna kreativa skrivövningar."
    ],
    forWho: ["Pedagoger", "Fritidshem", "Fritidsverksamhet"],
    length: "2-4 timmar"
  }
];

export default lectures;
