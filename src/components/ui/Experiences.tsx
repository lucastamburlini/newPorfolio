import { FaBuffer } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Subtitles } from "lucide-react";

export default function Experiences() {
  const t = useTranslations("experiences");

  const experiences = [
    {
      title: t("item1.title"),
      subtitle: t("item1.subtitle"),
      description: [t("item1.description1"), t("item1.description2")],
    },
    {
      title: t("item2.title"),
      subtitle: t("item2.subtitle"),
      description: [t("item2.description1"), t("item2.description2")],
    },
    {
      title: t("item3.title"),
      subtitle: t("item3.subtitle"),
      description: [
        t("item3.description1"),
        t("item3.description2"),
        t("item3.description3"),
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="py-section-y">
        <h2 className="flex items-center gap-2 sm:gap-4 text-3xl font-bold sm:text-2xl md:text-3xl">
          <FaBuffer className="size-6" /> {t("sectionTitle")}
        </h2>
        <div className="mt-8 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 border-l-2">
              <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
              <p className="mt-1 text-secondary-foreground ">
              {exp.subtitle} 
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                {exp.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
