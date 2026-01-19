import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Clock",
    title: "Ahorra 10h/semana",
    description:
      "Olvidate de abrir 20 pestañas cada lunes. Nosotros lo hacemos por ti.",
  },
  {
    icon: "LineChart",
    title: "Historico de Datos",
    description:
      "Cambiaron el precio ayer y volvieron a subirlo hoy? Lo sabras.",
  },
  {
    icon: "Zap",
    title: "Reaccion Rapida",
    description:
      "Responde a sus ofertas antes de que tus clientes se vayan.",
  },
  {
    icon: "Image",
    title: "Capturas Reales",
    description:
      "No solo texto. Te enviamos capturas de pantalla del cambio exacto.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">BENEFICIOS</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que necesitas esto?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tu competencia no descansa. Tu tampoco deberias... o si, si tienes CompetitorSpy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
