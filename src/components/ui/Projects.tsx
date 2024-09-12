import { useTranslations } from "next-intl";
import Image from "next/image";
import { HiMiniBriefcase } from "react-icons/hi2";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <section id="projects">
      <div className="py-section-y">
        <h2 className="flex items-center gap-2 sm:gap-4 text-3xl font-bold sm:text-2xl md:text-3xl">
          <HiMiniBriefcase className="size-6" /> {t("title")}
        </h2>
        <p className="mt-2 text-muted-foreground">{t("description")}</p>

        <div className="mt-8 flex flex-col gap-8">
          <div className="relative flex flex-col md:flex-row items-center place-content-center md:justify-between p-4 rounded-lg overflow-hidden md:h-[420px] gap-5 shadow-2xl shadow-white/30">
            {/* Background overlay */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] "></div>

            <picture>
              <source srcSet="/projects/planify2.webp" type="image/webp" />
              <Image
                src="/projects/planify2.jpg"
                width={350}
                height={400}
                alt="Project 2"
                className="rounded-lg w-[210px]"
              />
            </picture>
            <picture>
              <source srcSet="/projects/planify1.webp" type="image/webp" />
              <Image
                src="/projects/planify1.jpg"
                width={350}
                height={400}
                alt="Project 1"
                className="rounded-lg w-[210px]"
              />
            </picture>
            <picture>
              <source srcSet="/projects/planify3.webp" type="image/webp" />
              <Image
                src="/projects/planify3.jpg"
                width={350}
                height={400}
                alt="Project 3"
                className="rounded-lg w-[210px]"
              />
            </picture>
          </div>
          <h3 className="mt-4 text-xl font-bold">E-commerce Website</h3>
          <p className="mt-2 text-muted-foreground">
            A modern e-commerce website built with React, Next.js, and Tailwind
            CSS. It features a sleek and responsive design, a user-friendly
            shopping experience, and advanced e-commerce functionalities.
          </p>
        </div>
      </div>
    </section>
  );
}
