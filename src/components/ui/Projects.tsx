import { useTranslations } from "next-intl";
import Image from "next/image";
import { HiMiniBriefcase } from "react-icons/hi2";
import { Badge } from "../shadcn/badge";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <section id="projects">
      <div className="py-section-y">
        <h2 className="flex items-center gap-2 sm:gap-4 text-3xl font-bold sm:text-2xl md:text-3xl">
          <HiMiniBriefcase className="size-6" /> {t("title")}
        </h2>
        <p className="mt-2 text-muted-foreground">{t("description")}</p>

        <div className="mt-8 space-y-16">
          <div className="flex flex-col gap-8">
            {/* Planify */}
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
            <div className="relative pl-6 border-l-2">
              <h3 className="text-xl font-bold text-secondary"> {t("planify.title")}</h3>
              <p className="mt-1 text-secondary-foreground">
              {t("planify.description")}
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
              {t("planify.details")}
              </div>
              <div className="flex flex-wrap mt-4 gap-2 pb-2">
                <Badge variant={"default"} className="text-accent">
                  Next.js
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  Supabase
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  NestJS
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  TypeScript
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  Tailwind CSS
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* GPI 360 */}

        <div className="mt-16 space-y-16">
          <div className="flex flex-col gap-8">
            {/* Planify */}
            <div className="relative flex flex-col items-center place-content-center  p-4 rounded-lg overflow-hidden md:h-[420px] gap-5 shadow-2xl shadow-white/30">
              {/* Background overlay */}
              <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] "></div>
              {/* Background overlay */}
              <picture>
                <source srcSet="/projects/gpi360.webp" type="image/webp" />
                <Image
                  src="/projects/gpi360.jpg"
                  width={680}
                  height={370}
                  alt="gpi360"
                  className="rounded-lg"
                />
              </picture>
            </div>
            <div className="relative pl-6 border-l-2">
              <h3 className="text-xl font-bold text-secondary">{t("gpi360.title")}</h3>
              <p className="mt-1 text-secondary-foreground">
                {t("gpi360.description")}
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                {t("gpi360.details")}
              </div>
              <div className="flex flex-wrap mt-4 gap-2 pb-2">
                <Badge variant={"default"} className="text-accent">
                  Next.js
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  Node.js
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  Express
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  Sequelize
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  TypeScript
                </Badge>
                <Badge variant={"default"} className="text-accent">
                  Tailwind CSS
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
