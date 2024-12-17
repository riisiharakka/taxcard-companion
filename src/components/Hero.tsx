import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-finland-green text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.2'
        }}
      />
      <div className="relative z-10 py-20">
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
    </div>
  );
};