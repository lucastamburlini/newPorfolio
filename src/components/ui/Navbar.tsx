import Logo from "../common/Logo";
import Navigation from "./Navigation";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center max-w-5xl m-auto py-4 sm:py-6">
      <div className="flex w-full items-center gap-4 sm:gap-6 justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-4 sm:gap-10">
          <Navigation />
        </div>
        <div>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
