import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-finland-green py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Verokortti
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Hanki verokorttisi helposti Verohallinnon verkkopalvelusta
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-finland-green px-8 py-6 text-lg"
            onClick={() => window.open("https://www.vero.fi/sahkoiset-asiointipalvelut/omavero/", "_blank")}
          >
            Hanki verokortti nyt
          </Button>
        </div>
      </div>
    </div>
  );
};