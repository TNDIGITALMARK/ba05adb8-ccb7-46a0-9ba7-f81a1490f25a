"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, Clock, Flame, Target, TrendingUp } from "lucide-react";
import { TaskCard } from "@/components/lifefocus/task-card";
import { HabitTracker } from "@/components/lifefocus/habit-tracker";
import { FocusTimer } from "@/components/lifefocus/focus-timer";
import { MetricCard } from "@/components/lifefocus/metric-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getActiveTasks, getActiveHabits, getTodayStats } from "@/lib/lifefocus/mock-data";

export default function DashboardPage() {
  const [tasks, setTasks] = useState(getActiveTasks());
  const [habits, setHabits] = useState(getActiveHabits());
  const todayStats = getTodayStats();

  const handleTaskToggle = (taskId: string, completed: boolean) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed } : task
      )
    );
  };

  const handleHabitToggle = (habitId: string, completed: boolean) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId ? { ...habit, completedToday: completed } : habit
      )
    );
  };

  const completedTasksCount = tasks.filter((t) => t.completed).length;
  const completedHabitsCount = habits.filter((h) => h.completedToday).length;
  const todayProgress = Math.round((completedTasksCount / tasks.length) * 100) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--color-mint))] via-[hsl(var(--color-sky))] to-[hsl(var(--color-purple))] py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-white space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Good Morning! 👋</h1>
              <p className="text-lg opacity-90">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6"
            >
              Sign Up
            </Button>
          </div>

          {/* Daily Progress */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Today's Progress</h3>
                <span className="text-2xl font-bold">{todayProgress}%</span>
              </div>
              <Progress value={todayProgress} className="h-3 bg-white/20" />
              <div className="flex justify-between text-sm opacity-90">
                <span>{completedTasksCount} of {tasks.length} tasks completed</span>
                <span>{completedHabitsCount} of {habits.length} habits done</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Cards Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Unlock Your Best Self</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 gradient-card-mint text-white hover:shadow-lg transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Habit Mastery</h3>
                <p className="text-sm opacity-90">
                  Build positive routines that stick and transform your life
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-card-blue text-white hover:shadow-lg transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Smart Goal Setting</h3>
                <p className="text-sm opacity-90">
                  Break down big dreams into achievable daily actions
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-card-purple text-white hover:shadow-lg transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Focused Productivity</h3>
                <p className="text-sm opacity-90">
                  Eliminate distractions and achieve deep work states
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Focus Timer */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Focus Session</h2>
          <FocusTimer sessionType="work" />
        </div>

        {/* Life Metrics */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Life Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              title="Daily Tasks"
              value={completedTasksCount}
              icon={CheckCircle2}
              iconColor="text-teal-600"
              iconBgColor="bg-teal-100"
            />
            <MetricCard
              title="Focus Time"
              value={`${todayStats.focusMinutes}m`}
              icon={Clock}
              iconColor="text-sky-600"
              iconBgColor="bg-sky-100"
            />
            <MetricCard
              title="Habit Streak"
              value={habits[0]?.currentStreak || 0}
              icon={Flame}
              iconColor="text-orange-600"
              iconBgColor="bg-orange-100"
            />
            <MetricCard
              title="Mindfulness"
              value="5 days"
              icon={Target}
              iconColor="text-purple-600"
              iconBgColor="bg-purple-100"
            />
          </div>
        </div>

        {/* Priority Tasks */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Priority Tasks</h2>
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {tasks.slice(0, 3).map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onToggle={handleTaskToggle}
              />
            ))}
          </div>
        </div>

        {/* Active Habits */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Today's Habits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {habits.slice(0, 2).map((habit) => (
              <HabitTracker
                key={habit.id}
                {...habit}
                onToggle={handleHabitToggle}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands who are finding clarity and success
          </p>
          <Button
            size="lg"
            className="gradient-primary text-white px-8 py-6 text-lg rounded-full shadow-button hover:shadow-lg transition-all"
          >
            Get Started Free
          </Button>
        </Card>
      </div>
    </div>
  );
}
