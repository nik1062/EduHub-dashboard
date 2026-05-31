import { LucideIcon } from "lucide-react";
import { Card } from "./Card";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: string;
  index?: number;
}

export function StatCard({ label, value, icon: Icon, trend, color, index = 0 }: StatCardProps) {
  return (
    <Card 
      className="flex items-center gap-5 border-none shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      delay={index * 0.1}
    >
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} bg-opacity-15 shadow-inner`}>
        <Icon className={`h-7 w-7 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-2xl font-black text-gray-900 tracking-tight">{value}</h4>
          {trend && (
            <div className={`flex items-center text-[10px] font-black px-1.5 py-0.5 rounded-md ${trend.isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
