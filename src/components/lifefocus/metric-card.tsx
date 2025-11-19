"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  trend?: {
    direction: "up" | "down";
    value: string;
  };
  className?: string;
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  iconColor = "text-sky-600",
  iconBgColor = "bg-sky-100",
  trend,
  className,
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300",
        "border border-gray-100 bg-white",
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        {/* Icon Circle */}
        <div
          className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center",
            iconBgColor
          )}
        >
          <Icon className={cn("w-8 h-8", iconColor)} strokeWidth={2} />
        </div>

        {/* Value */}
        <div className="space-y-1">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600 font-medium">{title}</div>
        </div>

        {/* Trend Indicator (optional) */}
        {trend && (
          <div
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              trend.direction === "up"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            )}
          >
            {trend.direction === "up" ? "↑" : "↓"} {trend.value}
          </div>
        )}
      </div>
    </Card>
  );
}
