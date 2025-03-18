import { BreadcrumbNav } from "../_components/ui/BreadcrumbNav";

export default function LecturesPage() {
  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Föreläsningar", href: "/forelasningar" },
  ];

  return (
    <div className="container mx-auto max-w-6xl content-center p-6">
      <BreadcrumbNav items={breadcrumbItems} />
      <h1>Föreläsningar</h1>
      <h2>Flicker med NPF</h2>
      Så skapar du en inkluderande skolmiljö med förbättrat stöd och bemötande
      På senare tid har uppmärksamheten kring flickor med NPF-diagnos ökat. En
      viktig insikt är att de får sin diagnos betydligt senare än pojkar. Tyvärr
      missar skolmiljön ofta att uppmärksamma flickors svårigheter relaterade
      till NPF, vilket kan få allvarliga konsekvenser för deras
      kunskapsutveckling, välbefinnande och rätten till en inkluderande och
      jämlik utbildning. Genom att höja medvetenheten hos skolpersonal kan vi
      bättre identifiera och förstå de specifika utmaningar som dessa flickor
      står inför och sätta in adekvat stöd och anpassningar i ett tidigt skede.
      Vilka symptom är vanligare hos flickor med NPF jämfört med pojkar och hur
      kan vi säkerställa att flickor med NPF inte hamnar i skymundan? Vilka
      kunskaper behöver lärare om NPF hos flickor och vilka konsekvenser får det
      för elevernas skolgång om vi inte upptäcker det i tid? Hur kan vi
      förbättra bemötandet, anpassa undervisningen och stötta lärandet för
      flickor med NPF?
    </div>
  );
}
