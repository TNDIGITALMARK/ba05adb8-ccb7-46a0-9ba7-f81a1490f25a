"use client";

import { useState } from "react";
import { Check, Circle, Clock, Flag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high" | "urgent";
  dueDate?: string;
  category?: string;
  onToggle?: (id: string, completed: boolean) => void;
  className?: string;
}

const priorityConfig = {
  low: {
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: "text-blue-500",
  },
  medium: {
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    icon: "text-yellow-500",
  },
  high: {
    color: "bg-orange-100 text-orange-700 border-orange-200",
    icon: "text-orange-500",
  },
  urgent: {
    color: "bg-red-100 text-red-700 border-red-200",
    icon: "text-red-500",
  },
};

export function TaskCard({
  id,
  title,
  description,
  completed,
  priority,
  dueDate,
  category,
  onToggle,
  className,
}: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onToggle?.(id, newState);
  };

  return (
    <Card
      className={cn(
        "p-4 transition-all duration-300 hover:shadow-card cursor-pointer",
        "border border-gray-200 rounded-2xl",
        isChecked && "opacity-60 bg-gray-50",
        className
      )}
      onClick={handleToggle}
    >
      <div className="flex items-start gap-3">
        <div className="pt-1">
          <Checkbox
            checked={isChecked}
            onCheckedChange={handleToggle}
            className="h-5 w-5 rounded-full border-2"
          />
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3
              className={cn(
                "font-semibold text-base",
                isChecked && "line-through text-gray-500"
              )}
            >
              {title}
            </h3>
            {priority && (
              <Badge
                variant="outline"
                className={cn("text-xs px-2 py-0.5", priorityConfig[priority].color)}
              >
                <Flag className={cn("w-3 h-3 mr-1", priorityConfig[priority].icon)} />
                {priority}
              </Badge>
            )}
          </div>

          {description && (
            <p
              className={cn(
                "text-sm text-gray-600",
                isChecked && "line-through text-gray-400"
              )}
            >
              {description}
            </p>
          )}

          <div className="flex items-center gap-3 text-xs text-gray-500">
            {dueDate && (
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{dueDate}</span>
              </div>
            )}
            {category && (
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
