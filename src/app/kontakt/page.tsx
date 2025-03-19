import { AboutCard } from "@/app/_components/AboutCard";
import { ContactForm } from "../_components/ContactForm";
import { images } from "@/_data/images";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {/* AboutCard */}
        <AboutCard
          imageUrl={images.about}
          title="Om oss"
          description="Vi är ett team av experter som brinner för att hjälpa människor med ADHD och autism."
        />
        {/* ContactForm */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Kontakta oss</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
