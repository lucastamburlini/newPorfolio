"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const Navigation = () => {
  const t = useTranslations("NavLinks");

  const navItems = [
    {
      key: "experience",
      section: "/#experience",
    },
    {
      key: "projects",
      section: "/#projects",
    },
    {
      key: "about-me",
      section: "/#about-me",
    },
  ];

  return (
    <ul className="flex gap-4">
      {navItems.map(({ key, section }) => (
        <li key={key}>
          <Link href={section}>{t(key)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
