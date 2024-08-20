import { CheckIcon } from "lucide-react";
import { Button } from "../shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcn/card";
import { TypographyH3 } from "../shadcn/typographyH3";

const pricingOptions = [
  {
    title: "Página Estática",
    description: "Perfecto para sitios web sencillos.",
    price: "$9.999",
    period: "mes",
    features: [
      "Pago mensual",
      "Diseño Responsivo",
      "Optimización SEO Básica",
      "2 cambios mesuales",
    ],
    textButton: "Solicitar",
  },
  {
    title: "Página Estática",
    description:
      "Renueva tu sitio web cada año con las últimas actualizaciones.",
    price: "$99.990",
    period: "año",
    features: [
      "Un sólo pago",
      "Diseño Responsivo",
      "Optimización SEO Básica",
      "Actualizaciones Anuales",
      "Sin límites de cambios",
    ],
    textButton: "Solicitar",
  },
  {
    title: "Aplicación Personalizada",
    description: "Para negocios que necesitan funcionalidades avanzadas.",
    features: [
      "Precio personalizado",
      "Diseño a medida",
      "SEO Avanzado",
      "Soporte y Mantenimiento diario",
    ],
    textButton: "Solicitar",
  },
];

type PricingCardProps = {
  title: string;
  description: string;
  price?: string;
  period?: string;
  features: string[];
  textButton: string;
};

const PricingCard = ({
  title,
  description,
  price,
  period,
  features,
  textButton,
}: PricingCardProps) => (
  <Card className="p-6 shadow-md">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-end gap-2">
        {price && <span className="text-4xl font-bold">{price}</span>}
        {period && <span className="text-muted-foreground">{period}</span>}
      </div>
      <ul className="space-y-2 text-muted-foreground">
        {features.map((feature: string, index: number) => (
          <li key={index}>
            <CheckIcon className="mr-2 inline-block h-4 w-4" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={"accent"}
        className="w-full hover:bg-gradient-primary-secondary"
      >
        {textButton}
      </Button>
    </CardContent>
  </Card>
);

const title = "Encuentra los mejores precios";
const description =
  "Nuestros paquetes de desarrollo web comienzan desde solo $9.999 pesos, ofreciendo soluciones accesibles y de alta calidad para tu negocio. Elige el plan que mejor se adapte a tus necesidades y comienza a mejorar tu presencia en línea.";

export default function Prices() {
  return (
    <section className="w-full py-10 sm:py-20 lg:py-28">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <TypographyH3 text={title} />
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            description={option.description}
            price={option.price}
            period={option.period}
            features={option.features}
            textButton={option.textButton}
          />
        ))}
      </div>
    </section>
  );
}
