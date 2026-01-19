import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Que webs puedo monitorizar?",
    answer: "Cualquier pagina publica: Tiendas online, Landing pages de servicios o Webs corporativas.",
    value: "item-1",
  },
  {
    question: "Necesito saber programar?",
    answer: "No. Tu nos das la URL y nosotros nos encargamos de la tecnologia.",
    value: "item-2",
  },
  {
    question: "Como recibo las alertas?",
    answer: "Recibiras un email semanal, o una alerta inmediata si hay cambios drasticos de precio.",
    value: "item-3",
  },
  {
    question: "Cuantos competidores puedo monitorizar?",
    answer: "En el plan Beta puedes monitorizar hasta 5 competidores. Pronto ampliaremos los limites.",
    value: "item-4",
  },
  {
    question: "El informe incluye capturas de pantalla?",
    answer: "Si, cada viernes recibiras un resumen ejecutivo con capturas del antes y despues de los cambios.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          PREGUNTAS FRECUENTES
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Resolvemos tus dudas
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
