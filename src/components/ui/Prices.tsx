import { CheckIcon } from "lucide-react";
import { Button } from "../shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcn/card";

export default function Prices() {
  return (
    <section className="w-full py-8 md:py-10 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Pricing that Fits Your Budget
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our web development services start at just $5,000 pesos, making it
            easy to get the professional website your business deserves.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <Card className="p-6 shadow-md">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>
              Perfect for small businesses and startups.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end justify-between">
              <span className="text-4xl font-bold">$5,000</span>
              <span className="text-muted-foreground">pesos</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Responsive design
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Basic SEO optimization
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />1 year of
                hosting
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </CardContent>
        </Card>
        <Card className="p-6 shadow-md">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              Ideal for growing businesses and e-commerce.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end justify-between">
              <span className="text-4xl font-bold">$10,000</span>
              <span className="text-muted-foreground">pesos</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Responsive design
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Advanced SEO optimization
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />2 years of
                hosting
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                E-commerce integration
              </li>
            </ul>
            <Button variant={"gradient"} className="w-full">Get Started</Button>
          </CardContent>
        </Card>
        <Card className="p-6 shadow-md">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>
              For large businesses and complex projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end justify-between">
              <span className="text-4xl font-bold">$20,000</span>
              <span className="text-muted-foreground">pesos</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Responsive design
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Comprehensive SEO optimization
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />3 years of
                hosting
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Custom integrations and features
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
