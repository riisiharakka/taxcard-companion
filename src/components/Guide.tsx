import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Log in to Tax Administration",
    description: "Use your Finnish bank credentials or mobile ID to log in",
  },
  {
    title: "Navigate to Tax Card Section",
    description: "Find the tax card (verokortti) section in your personal dashboard",
  },
  {
    title: "Fill Required Information",
    description: "Provide your income details and other necessary information",
  },
  {
    title: "Download Your Tax Card",
    description: "Get your tax card immediately in PDF format",
  },
];

export const Guide = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-finland-blue">
          How to Get Your Tax Card
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-finland-blue w-6 h-6 mr-2" />
                <span className="text-sm text-gray-500">Step {index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};