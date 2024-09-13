"use client";
import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import LanguageSelector from "./LanguageSelector";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation = ({ isOpen, onClose }: NavigationProps) => {
  const t = useTranslations("navLinks");

  const navItems = [
    { key: "experience", section: "/#experience" },
    { key: "projects", section: "/#projects" },
    { key: "stacks", section: "/#stacks" },
  ];

  return (
    <ul
      className={`flex flex-col md:flex-row gap-4 md:gap-6 ${
        isOpen ? "block" : "hidden"
      } md:flex`}
    >
      {navItems.map(({ key, section }) => (
        <li
          key={key}
          onClick={onClose}
          className="hover:text-secondary transition-all duration-transitionDuration"
        >
          <Link href={section}>{t(key)}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-full items-center max-w-5xl m-auto py-4 sm:py-6 relative">
      <div className="flex w-full items-center justify-between">
        <Image src="/brand/webLogo.png" alt="web-logo" width={40} height={40} />
        <div className="hidden md:flex items-center gap-4 sm:gap-10">
          <Navigation isOpen={false} onClose={() => setIsOpen(false)} />
          <LanguageSelector />
        </div>
        <button
          onClick={toggleMenu}
          className="block md:hidden text-2xl text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div
        className={`fixed inset-0 h-screen bg-background z-40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center h-screen justify-center py-4">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl text-white"
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
          <Navigation isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <div className="mt-4">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
