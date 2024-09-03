import Link from "next/link";
import { GlobeIcon } from "lucide-react";

import { Button } from "../shadcn/button";
import Logo from "../common/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const LenguageSelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="text-sm text-foreground bg-transparent font-medium w-8 h-8 focus:outline-none"
        >
          <GlobeIcon className="h-5 w-5" />
          <span>Español</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Español</DropdownMenuItem>
        <DropdownMenuItem>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const navItems = [
  {
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
];

export default function Header() {
  return (
    <nav className="flex w-full items-center max-w-5xl m-auto">
      <div className="flex w-full items-center gap-4 sm:gap-6 justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="text-sm text-foreground font-medium hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <LenguageSelector />
        </div>
      </div>
    </nav>
  );
}
