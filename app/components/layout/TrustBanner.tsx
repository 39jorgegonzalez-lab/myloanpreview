import { ShieldCheck, Calculator, Lock, CheckCircle } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    text: "Educational estimates",
  },
  {
    icon: Calculator,
    text: "Free calculators",
  },
  {
    icon: Lock,
    text: "No signup required",
  },
  {
    icon: CheckCircle,
    text: "Clear assumptions",
  },
];

export default function TrustBanner() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.text} className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                <Icon className="h-4 w-4" />
              </div>
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}