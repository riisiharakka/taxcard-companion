import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Kirjaudu OmaVeroon",
    description: "Käytä pankkitunnuksia tai mobiilivarmennetta kirjautumiseen"
  },
  {
    title: "Siirry verokorttiosioon",
    description: "Etsi verokortti-osio henkilökohtaiselta sivultasi"
  },
  {
    title: "Täytä tarvittavat tiedot",
    description: "Anna tulotietosi ja muut tarvittavat tiedot"
  },
  {
    title: "Lataa verokorttisi",
    description: "Saat verokorttisi heti PDF-muodossa"
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
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-finland-green w-6 h-6 mr-2" />
                <span className="text-sm text-gray-500">Vaihe {index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-finland-black">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};