import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Mikä on verokortti?",
    answer: "Verokortti on virallinen asiakirja, joka määrittää, kuinka paljon veroa pidätetään tuloistasi Suomessa. Työnantajasi tarvitsee tämän pidättääkseen oikean määrän veroa palkastasi.",
  },
  {
    question: "Milloin tarvitsen uuden verokortin?",
    answer: "Tarvitset uuden verokortin, kun aloitat uuden työn, tulosi muuttuvat merkittävästi tai vuoden vaihtuessa. Verokortti on tyypillisesti voimassa helmikuun 1. päivästä alkaen.",
  },
  {
    question: "Miten saan verokortin verkossa?",
    answer: "Voit hankkia verokortin verkossa Verohallinnon OmaVero-palvelusta. Kirjaudu sisään pankkitunnuksillasi tai mobiilivarmenteella, siirry verokorttiosioon ja seuraa ohjeita.",
  },
  {
    question: "Onko verokortin hankkiminen maksullista?",
    answer: "Ei, verokortin hankkiminen on täysin maksutonta. Verohallinto tarjoaa tämän palvelun ilman veloitusta.",
  },
];

export const FAQ = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-finland-green">
          Usein kysytyt kysymykset
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-finland-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};