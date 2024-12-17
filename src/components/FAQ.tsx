import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a tax card (verokortti)?",
    answer: "A tax card (verokortti) is an official document that determines how much tax should be withheld from your income in Finland. Your employer needs this to deduct the correct amount of tax from your salary.",
  },
  {
    question: "When do I need a new tax card?",
    answer: "You need a new tax card when you start a new job, your income changes significantly, or at the beginning of each year. The tax card for each year is typically valid from February 1st.",
  },
  {
    question: "How can I get my tax card online?",
    answer: "You can get your tax card online through the Finnish Tax Administration's website (vero.fi). Log in using your Finnish bank credentials or mobile ID, navigate to the tax card section, and follow the instructions.",
  },
  {
    question: "Is there a fee for getting a tax card?",
    answer: "No, getting a tax card is completely free. The Finnish Tax Administration provides this service without any charge.",
  },
];

export const FAQ = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-finland-blue">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
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