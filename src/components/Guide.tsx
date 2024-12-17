import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Kirjaudu OmaVeroon",
    description: "Käytä pankkitunnuksia tai mobiilivarmennetta kirjautumiseen",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
  },
  {
    title: "Siirry verokorttiosioon",
    description: "Etsi verokortti-osio henkilökohtaiselta sivultasi",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    title: "Täytä tarvittavat tiedot",
    description: "Anna tulotietosi ja muut tarvittavat tiedot",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  },
  {
    title: "Lataa verokorttisi",
    description: "Saat verokorttisi heti PDF-muodossa",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
];

export const Guide = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-finland-green">
          Näin saat verokorttisi
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${step.image})` }}
              />
              <div className="bg-white p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-finland-green w-6 h-6 mr-2" />
                  <span className="text-sm text-gray-500">Vaihe {index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-finland-black">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};