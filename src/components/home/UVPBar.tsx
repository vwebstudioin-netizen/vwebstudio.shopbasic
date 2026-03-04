import { Truck, RefreshCw, Shield, Headphones } from "lucide-react";
import { UVP_ITEMS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
};

export default function UVPBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-fluid py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {UVP_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 justify-center text-center lg:text-left lg:justify-start animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                {iconMap[item.icon]}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
