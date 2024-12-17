import { Card } from "@/components/ui/card";

export const AdBanner = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <Card className="p-6 border-2 border-finland-green">
          <p className="text-xs text-gray-500 mb-2">Mainos</p>
          <div className="flex items-center justify-center min-h-[120px]">
            {/* Ad content would go here */}
            <p className="text-gray-600">Mainostila saatavilla</p>
          </div>
        </Card>
      </div>
    </div>
  );
};