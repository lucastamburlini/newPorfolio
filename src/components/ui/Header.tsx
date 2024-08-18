import Link from "next/link";
import { GlobeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn/dropdownMenu";
import { Button } from "../shadcn/button";
import Logo from "../common/Logo";

export default function Header() {
  return (
    <header className="w-full py-4 md:py-6 h-auto">
      <nav className="flex items-center justify-between max-w-5xl m-auto">
        <Logo />
        <div className="flex items-center gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <GlobeIcon className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
}
