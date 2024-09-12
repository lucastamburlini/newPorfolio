import { useTranslations } from "next-intl";
import {
  HiCode,
  HiServer,
  HiDatabase,
  HiBadgeCheck,
  HiOutlineSparkles,
} from "react-icons/hi";
import { HiMiniBriefcase } from "react-icons/hi2";

export default function Stacks() {
  const t = useTranslations("stacks");

  return (
    <section id="stacks" className="py-12 md:py-16 lg:py-20">
      <div className="py-section-y">
        <h2 className="flex items-center gap-2 sm:gap-4 text-3xl font-bold sm:text-2xl md:text-3xl">
          <HiMiniBriefcase className="size-6" /> {t("title")}
        </h2>
        <p className="mt-2 text-muted-foreground">{t("description")}</p>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="flex flex-wrap w-full m-auto justify-center gap-10">
            {/* Front-End */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-primary">
                <HiCode className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center text-base font-semibold text-secondary-foreground sm:text-2xl">
                  {t("items.frontend.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {t("items.frontend.description")}
                </dd>
              </div>
            </div>

            {/* Back-End */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-primary">
                <HiServer className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center text-base font-semibold text-secondary-foreground sm:text-2xl">
                  {t("items.backend.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {t("items.backend.description")}
                </dd>
              </div>
            </div>

            {/* Databases */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-primary">
                <HiDatabase className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center text-base font-semibold text-secondary-foreground sm:text-2xl">
                  {t("items.databases.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {t("items.databases.description")}
                </dd>
              </div>
            </div>

            {/* Design and Tools */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-primary">
                <HiOutlineSparkles
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center text-base font-semibold text-secondary-foreground sm:text-2xl">
                  {t("items.design-tools.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {t("items.design-tools.description")}
                </dd>
              </div>
            </div>

            {/* Testing */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-primary">
                <HiBadgeCheck
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center text-base font-semibold text-secondary-foreground sm:text-2xl">
                  {t("items.testing.title")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {t("items.testing.description")}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
