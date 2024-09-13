import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Progress from "@/components/common/Progress";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Tamburlini - Desarrollador y programador web Full Stack",
  description:
    "Soy Lucas Tamburlini, un desarrollador Full Stack con una sólida experiencia en tecnologías web. Me especializo en crear aplicaciones eficientes y escalables, ofreciendo soluciones digitales innovadoras con un enfoque en la usabilidad y el rendimiento. Explora mi portfolio para ver proyectos destacados y descubre cómo puedo ayudarte a transformar tus ideas en realidades digitales.",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = params.locale;
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <div className="max-w-[100%] mx-auto absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="flex flex-col min-h-screen container max-w-3xl m-auto">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
        <Progress />
        {/* Integración de Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            (function() {
              var gtag = function() { window.dataLayer.push(arguments); };
              window.dataLayer = window.dataLayer || [];
              gtag('js', new Date());
              gtag('config', 'G-7DLCC42JBW');
            })();
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7DLCC42JBW"
        />
      </body>
    </html>
  );
}
