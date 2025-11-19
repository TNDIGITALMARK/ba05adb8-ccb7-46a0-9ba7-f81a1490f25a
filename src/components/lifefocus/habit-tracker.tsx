"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface HabitTrackerProps {
  id: string;
  title: string;
  description?: string;
  currentStreak: number;
  targetDays: number;
  completedToday: boolean;
  category: "health" | "work" | "personal" | "mindfulness";
  onToggle?: (id: string, completed: boolean) => void;
  className?: string;
}

const categoryColors = {
  health: "from-green-400 to-emerald-500",
  work: "from-blue-400 to-sky-500",
  personal: "from-purple-400 to-violet-500",
  mindfulness: "from-teal-400 to-cyan-500",
};

const categoryIcons = {
  health: "💪",
  work: "💼",
  personal: "🌟",
  mindfulness: "🧘",
};

export function HabitTracker({
  id,
  title,
  description,
  currentStreak,
  targetDays,
  completedToday,
  category,
  onToggle,
  className,
}: HabitTrackerProps) {
  const [isCompleted, setIsCompleted] = useState(completedToday);
  const progressPercentage = (currentStreak / targetDays) * 100;

  const handleToggle = () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    onToggle?.(id, newState);
  };

  return (
    <Card
      className={cn(
        "p-6 transition-all duration-300 hover:shadow-card cursor-pointer",
        "rounded-2xl border-2",
        isCompleted ? "border-green-400 bg-green-50" : "border-gray-200",
        className
      )}
      onClick={handleToggle}
    >
      <div className="space-y-4">
        {/* Header with icon and status */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center text-2xl",
                `bg-gradient-to-br ${categoryColors[category]}`
              )}
            >
              {categoryIcons[category]}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              {description && (
                <p className="text-sm text-gray-600 mt-0.5">{description}</p>
              )}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            className="transition-transform hover:scale-110"
          >
            {isCompleted ? (
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            ) : (
              <Circle className="w-8 h-8 text-gray-300" />
            )}
          </button>
        </div>

        {/* Streak indicator */}
        <div className="flex items-center gap-2">
          <Flame className={cn(
            "w-5 h-5",
            currentStreak > 0 ? "text-orange-500" : "text-gray-300"
          )} />
          <span className="text-sm font-medium">
            {currentStreak} day{currentStreak !== 1 ? "s" : ""} streak
          </span>
          {currentStreak >= 7 && (
            <span className="text-xs text-orange-600 font-semibold">🔥 On fire!</span>
          )}
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-600">
            <span>Progress to goal</span>
            <span className="font-medium">
              {currentStreak} / {targetDays} days
            </span>
          </div>
          <Progress
            value={progressPercentage}
            className="h-2"
          />
        </div>
      </div>
    </Card>
  );
}
