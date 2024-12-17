import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-finland-blue to-secondary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Finnish Tax Card (Verokortti)
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Get your tax card easily through the official Finnish Tax Administration website
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://www.vero.fi/en/individuals/tax-cards-and-tax-returns/tax_card/", "_blank")}
          >
            Get Your Tax Card Now
          </Button>
        </div>
      </div>
    </div>
  );
};