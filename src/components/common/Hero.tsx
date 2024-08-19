import Image from "next/image";
import { Button } from "../shadcn/button";
import { TypographyH1 } from "../shadcn/typographyH1";
import { TypographyLead } from "../shadcn/typographyLead";

const title = "Diseño de Páginas y Aplicaciones Web";
const subTitle =
  "Desarrollamos soluciones digitales que elevan tu presencia en línea y te ayudan a conectar con tus clientes.";

export default function Hero() {
  return (
    <section className="flex flex-col gap-2 md:gap-4 w-full py-10 sm:py-20 lg:py-28 text-center">
      <div className="flex flex-col justify-center space-y-4 max-w-[600px] m-auto">
        <TypographyH1 text={title} />
        <TypographyLead text={subTitle} />
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <Button variant={"accent"} className="w-[200px]">Contáctame</Button>
      </div>
    </section>
  );
}

/* 
  <div className="">
      <TypographyLead text={"Encuentra los mejores precios y transforma tu presencia en línea. Descubre cómo llevar tu negocio al siguiente nivel con un diseño web centrado en el detalle."}/>
    </div> */
