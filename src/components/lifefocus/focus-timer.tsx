"use client";

import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface FocusTimerProps {
  sessionType?: "work" | "short_break" | "long_break";
  onSessionComplete?: () => void;
  className?: string;
}

const sessionDurations = {
  work: 25 * 60, // 25 minutes
  short_break: 5 * 60, // 5 minutes
  long_break: 15 * 60, // 15 minutes
};

const sessionColors = {
  work: "from-blue-500 to-sky-600",
  short_break: "from-green-500 to-emerald-600",
  long_break: "from-purple-500 to-violet-600",
};

const sessionNames = {
  work: "Focus Session",
  short_break: "Short Break",
  long_break: "Long Break",
};

export function FocusTimer({
  sessionType = "work",
  onSessionComplete,
  className,
}: FocusTimerProps) {
  const [timeLeft, setTimeLeft] = useState(sessionDurations[sessionType]);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const totalTime = sessionDurations[sessionType];
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            onSessionComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onSessionComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(sessionDurations[sessionType]);
  };

  return (
    <Card
      className={cn(
        "p-8 rounded-3xl shadow-card transition-all duration-300",
        "bg-gradient-to-br",
        sessionColors[sessionType],
        className
      )}
    >
      <div className="space-y-6 text-white">
        {/* Session Type */}
        <div className="text-center">
          <h3 className="text-lg font-medium opacity-90">
            {sessionNames[sessionType]}
          </h3>
        </div>

        {/* Circular Timer Display */}
        <div className="relative">
          {/* Progress Ring */}
          <svg className="w-full h-auto" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="8"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              transform="rotate(-90 100 100)"
              className="transition-all duration-300"
            />
          </svg>

          {/* Time Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold tracking-tight">
                {formatTime(timeLeft)}
              </div>
              <div className="text-sm opacity-75 mt-2">
                {isRunning ? "Time remaining" : "Ready to focus"}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleReset}
            className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <RotateCcw className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            onClick={handlePlayPause}
            className="h-16 w-16 rounded-full bg-white hover:bg-white/90 text-gray-900 shadow-lg"
          >
            {isRunning ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-1" />
            )}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            {soundEnabled ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Session Info */}
        <div className="text-center text-sm opacity-75">
          <p>Stay focused and make progress on your goals</p>
        </div>
      </div>
    </Card>
  );
}
