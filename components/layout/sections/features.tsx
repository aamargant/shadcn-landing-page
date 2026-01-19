import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Target",
    title: "1. Tu eliges los objetivos",
    description:
      "Peganos las URLs de los competidores o productos que quieres vigilar.",
  },
  {
    icon: "Eye",
    title: "2. Nosotros vigilamos 24/7",
    description:
      "Nuestro sistema escanea las webs a diario detectando cambios de precios y diseno.",
  },
  {
    icon: "Mail",
    title: "3. Recibes la inteligencia",
    description:
      "Cada viernes recibes un resumen ejecutivo en tu email con capturas del antes y despues.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        COMO FUNCIONA
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        3 Pasos para controlar tu mercado
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-3 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center text-base">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
