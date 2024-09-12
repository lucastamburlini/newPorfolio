import Link from "next/link";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer>
      <div className="py-section-y flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex md:flex-col gap-5">
          <div className="flex min-w-10 items-center justify-start">
            <Image
              src="/brand/webLogo.png"
              alt="web-logo"
              width={40}
              height={40}
            />
          </div>
          <div className="max-w-sm">
            <p>
              {new Date().getFullYear()} - {t("text")}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary transition-all duration-transitionDuration">
            <Link
              href="https://www.instagram.com/l.tamburlini/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram size={24} className="text-white" />
            </Link>
          </div>
          <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary transition-all duration-transitionDuration">
            <Link
              href="https://www.linkedin.com/in/lucastamburlini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size={24} className="text-white" />
            </Link>
          </div>
          <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary transition-all duration-transitionDuration">
            <Link
              href="https://github.com/lucastamburlini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
