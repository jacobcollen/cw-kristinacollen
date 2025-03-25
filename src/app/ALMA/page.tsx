"use client";

import React from "react";
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
          className="flex min-h-screen flex-col justify-center px-6 py-16"
        >
          <div className="container max-w-6xl">

            <h2 className="cursor-pointer text-center text-6xl font-bold tracking-tight hover:underline">
              {highlightTitle(section.title, section.highlightSpan)}
            </h2>

            {section.image && !Array.isArray(section.image) && (
              <div className="mt-6 flex justify-center">
                <img
                  src={section.image}
                  alt={section.title + " image"}
                  className="h-80 w-auto rounded-md object-cover"
                />
              </div>
            )}

            {Array.isArray(section.image) && section.image.length > 0 && (
              <div className="mt-6 flex flex-wrap mx-auto justify-center gap-4 p-4">
                {section.image.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${section.title} image ${i + 1}`}
                    className="h-80 w-auto rounded-md object-cover"
                  />
                ))}
              </div>
            )}

            {section.videoEmbedUrl && (
              <div className="mt-6 flex justify-center items-center">
                <div className="max-w-3xl mx-auto">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section.videoEmbedUrl.replace(
                        '<iframe ',
                        "<iframe style='display:block;margin:0 auto;' "
                      ),
                    }}
                  />
                </div>
              </div>
            )}

            {/* Text & Buttons */}
            <div className="mx-auto mt-6 max-w-2xl">
              <p className="whitespace-pre-line text-base leading-relaxed">
                {section.content}
              </p>

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
          </div>
        </motion.section>
      ))}
    </PageThemeWrapper>
  );
}
