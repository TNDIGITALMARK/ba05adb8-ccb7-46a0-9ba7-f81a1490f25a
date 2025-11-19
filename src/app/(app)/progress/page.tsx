"use client";

import { Trophy, TrendingUp, Clock, Target, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getWeeklyStats } from "@/lib/lifefocus/mock-data";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export default function ProgressPage() {
  const weeklyStats = getWeeklyStats();

  const chartData = weeklyStats.dailyStats.map((day) => ({
    name: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
    tasks: day.tasksCompleted,
    focus: Math.round(day.focusMinutes / 60),
    score: day.productivityScore,
  }));

  const completionRate = Math.round(
    (weeklyStats.totalTasksCompleted / weeklyStats.totalTasksPlanned) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--color-mint))] via-[hsl(var(--color-sky))] to-[hsl(var(--color-purple))] py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-white space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Weekly Progress 📊</h1>
              <p className="text-lg opacity-90">
                {weeklyStats.weekStart} - {weeklyStats.weekEnd}
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6"
            >
              Export Report
            </Button>
          </div>
        </div>

        {/* Achievement Badges */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Achievement Badges</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            <Card className="p-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white min-w-[180px] flex-shrink-0">
              <div className="flex flex-col items-center space-y-2">
                <Trophy className="w-12 h-12" />
                <span className="font-bold text-lg">Week Warrior</span>
                <span className="text-sm opacity-90">7 days active</span>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-gray-300 to-gray-400 text-white min-w-[180px] flex-shrink-0">
              <div className="flex flex-col items-center space-y-2">
                <Award className="w-12 h-12" />
                <span className="font-bold text-lg">Streak Master</span>
                <span className="text-sm opacity-90">12 day streak</span>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-orange-400 to-red-500 text-white min-w-[180px] flex-shrink-0">
              <div className="flex flex-col items-center space-y-2">
                <Target className="w-12 h-12" />
                <span className="font-bold text-lg">Goal Crusher</span>
                <span className="text-sm opacity-90">23 tasks done</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-green-600 font-semibold text-sm">+12%</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Tasks Completed</p>
                <p className="text-3xl font-bold text-gray-900">
                  {weeklyStats.totalTasksCompleted}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  of {weeklyStats.totalTasksPlanned} planned
                </p>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <span className="text-green-600 font-semibold text-sm">+8%</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Focus Time</p>
                <p className="text-3xl font-bold text-gray-900">
                  {weeklyStats.totalFocusHours.toFixed(1)}h
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ~1.8 hours per day
                </p>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-green-600 font-semibold text-sm">Best!</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Longest Streak</p>
                <p className="text-3xl font-bold text-gray-900">
                  {weeklyStats.longestStreak.days} days
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {weeklyStats.longestStreak.habitTitle}
                </p>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          {/* Tasks Completed Chart */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Daily Task Completion
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    stroke="#6b7280"
                    fontSize={12}
                  />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="tasks"
                    fill="hsl(var(--color-sky))"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Focus Time Chart */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Focus Time (Hours)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    stroke="#6b7280"
                    fontSize={12}
                  />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="focus"
                    fill="hsl(var(--color-purple))"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Insights */}
        <Card className="p-6 bg-white/95 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Insights</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Most Productive Day</p>
                <p className="text-sm text-gray-600">
                  {weeklyStats.mostProductiveDay.date} with {weeklyStats.mostProductiveDay.tasksCompleted} tasks completed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Consistency Score</p>
                <p className="text-sm text-gray-600">
                  You completed tasks 7 out of 7 days this week - excellent consistency!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <Target className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Improvement Area</p>
                <p className="text-sm text-gray-600">
                  Evening routine consistency needs work - try setting reminders for 8 PM
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
