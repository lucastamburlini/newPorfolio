import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "next-intl";

const ContactList = () => {
  return (
    <div className="flex flex-wrap gap-4 ">
      <button className="relative items-center justify-center overflow-hidden text-sm rounded-full group bg-gradient-to-br from-primary to-secondary group-hover:from-primary group-hover:to-secondary text-white border border-white">
        <Link
          href={"https://www.linkedin.com/in/lucastamburlini/"}
          target="_blank"
          className="flex items-center gap-2 px-4 py-1.5 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0"
        >
          <FaLinkedin className="size-4" />
          LinkedIn
        </Link>
      </button>
      <button className="relative items-center justify-center overflow-hidden text-sm rounded-full group bg-gradient-to-br from-primary to-secondary group-hover:from-primary group-hover:to-secondary text-white border border-white">
        <Link
          href="https://github.com/lucastamburlini"
          target="_blank"
          className="flex items-center  gap-2 px-4 py-1.5 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0"
        >
          <FaGithub className="size-4" />
          GitHub
        </Link>
      </button>
      <button className="relative items-center justify-center overflow-hidden text-sm rounded-full group bg-gradient-to-br from-primary to-secondary group-hover:from-primary group-hover:to-secondary text-white border border-white">
        <Link
          href="mailto:lucastamburlini@gmail.com"
          target="_blank"
          className="flex items-center gap-2 px-4 py-1.5 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0"
        >
          <FaEnvelope className="size-4" />
          lucastamburlini@gmail.com
        </Link>
      </button>
    </div>
  );
};

export default function Hero() {
  const t = useTranslations();

  return (
    <header className="flex flex-col w-full py-16 sm:py-24 lg:py-36">
      <div className="flex flex-col gap-2 md:gap-4 max-w-2xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {t("hero.greeting")}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t("hero.description")} |{" "}
          <span className="text-secondary">{t("hero.role")} </span>|{" "}
          {t("hero.location")}
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("hero.contacts")}
        </p>
        <ContactList />
      </div>
    </header>
  );
}
