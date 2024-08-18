import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 sm:py-24 lg:py-32">
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Elevate Your Web Presence
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our web development services transform your ideas into stunning,
              responsive websites that captivate your audience.
            </p>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src={"/brand/webLogo.png"}
            alt="web-logo"
            width={40}
            height={40}
          />
        </div>
      </div>
    </section>
  );
}

/* 
  <div className="">
      <TypographyLead text={"Encuentra los mejores precios y transforma tu presencia en línea. Descubre cómo llevar tu negocio al siguiente nivel con un diseño web centrado en el detalle."}/>
    </div> */
