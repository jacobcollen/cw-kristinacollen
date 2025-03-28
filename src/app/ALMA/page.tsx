"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageThemeWrapper } from "../_components/PageThemeWrapper";
import { almaData } from "@/app/_data/alma";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

function highlightTitle(title: string, highlight?: string) {
  if (!highlight) return title;
  const index = title.indexOf(highlight);
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className="text-[hsl(280,100%,70%)]">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

export default function AlmaPage() {
  return (
    <PageThemeWrapper>
      {almaData.map((section, index) => (
        <motion.section
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
          className="alma-section flex min-h-screen flex-col justify-center py-20 md:py-28"
        >
          <div className="container flex max-w-6xl flex-col space-y-8 p-2 md:space-y-12 md:p-4">
            <h2 className="break-words text-left text-5xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-center md:text-7xl">
              {highlightTitle(section.title, section.highlightSpan)}
            </h2>

            <div className="gap-8 whitespace-pre-line break-words text-base leading-relaxed text-gray-300 md:columns-2 md:text-lg">
              {section.content}
            </div>

            {section.videoEmbedUrl && (
              <div className="mx-auto w-full max-w-3xl p-0 md:p-4">
                <div
                  className="relative overflow-hidden"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src={section.videoEmbedUrl.match(/src="([^"]+)"/)?.[1]}
                    title="Alma video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute left-0 top-0 h-full w-full"
                  />
                </div>
              </div>
            )}

            {section.image && !Array.isArray(section.image) && (
              <div className="flex justify-center p-0 md:p-4">
                <img
                  src={section.image}
                  alt={section.title + " image"}
                  className="mx-auto w-full max-w-3xl rounded-md object-cover"
                />
              </div>
            )}

            {Array.isArray(section.image) && section.image.length > 0 && (
              <div className="mx-auto flex flex-wrap justify-center gap-4 p-0 md:p-4">
                {section.image.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${section.title} image ${i + 1}`}
                    className="w-full max-w-3xl rounded-md object-cover"
                  />
                ))}
              </div>
            )}

            {section.links && section.links.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                {section.links.map((link, i) => (
                  <Button key={i} asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </motion.section>
      ))}

      <style jsx global>{`
        .alma-section {
          padding-top: .5rem;
          padding-bottom: 8rem;
        }

        .alma-section {
          margin-top: 6rem;
          margin-bottom: 6rem;
        }
      `}</style>

    </PageThemeWrapper>
  );
}
