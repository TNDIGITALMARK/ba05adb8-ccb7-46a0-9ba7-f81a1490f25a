import { Task, Habit, DailyStats, WeeklyStats } from "./types";

// Mock Tasks
export const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Finish quarterly review",
    description: "Complete Q4 performance analysis and prepare presentation",
    completed: false,
    priority: "urgent",
    dueDate: "Today, 5:00 PM",
    category: "Work",
    status: "in_progress",
    createdAt: "2024-11-19T09:00:00Z",
  },
  {
    id: "task-2",
    title: "Call dentist appointment",
    description: "Schedule cleaning for next month",
    completed: false,
    priority: "high",
    dueDate: "Today, 2:00 PM",
    category: "Personal",
    status: "pending",
    createdAt: "2024-11-19T08:30:00Z",
  },
  {
    id: "task-3",
    title: "Review team proposals",
    description: "Evaluate 3 project proposals from the development team",
    completed: false,
    priority: "medium",
    dueDate: "Tomorrow",
    category: "Work",
    status: "pending",
    createdAt: "2024-11-18T15:00:00Z",
  },
  {
    id: "task-4",
    title: "Update project documentation",
    description: "Document recent API changes",
    completed: true,
    priority: "medium",
    dueDate: "Yesterday",
    category: "Work",
    status: "completed",
    createdAt: "2024-11-17T10:00:00Z",
  },
  {
    id: "task-5",
    title: "Grocery shopping",
    description: "Weekly groceries and meal prep ingredients",
    completed: false,
    priority: "low",
    dueDate: "This weekend",
    category: "Personal",
    status: "pending",
    createdAt: "2024-11-19T07:00:00Z",
  },
];

// Mock Habits
export const mockHabits: Habit[] = [
  {
    id: "habit-1",
    title: "Daily Reading",
    description: "Read for 30 minutes",
    currentStreak: 12,
    targetDays: 30,
    completedToday: true,
    category: "personal",
    completedDates: ["2024-11-19", "2024-11-18", "2024-11-17"],
    createdAt: "2024-11-07T00:00:00Z",
  },
  {
    id: "habit-2",
    title: "Morning Exercise",
    description: "20 minutes of workout or yoga",
    currentStreak: 8,
    targetDays: 21,
    completedToday: true,
    category: "health",
    completedDates: ["2024-11-19", "2024-11-18"],
    createdAt: "2024-11-11T00:00:00Z",
  },
  {
    id: "habit-3",
    title: "Meditation",
    description: "10 minutes mindfulness practice",
    currentStreak: 5,
    targetDays: 14,
    completedToday: false,
    category: "mindfulness",
    completedDates: ["2024-11-18", "2024-11-17"],
    createdAt: "2024-11-14T00:00:00Z",
  },
  {
    id: "habit-4",
    title: "Deep Work Session",
    description: "2 hours of focused work",
    currentStreak: 15,
    targetDays: 30,
    completedToday: true,
    category: "work",
    completedDates: ["2024-11-19", "2024-11-18", "2024-11-17"],
    createdAt: "2024-11-04T00:00:00Z",
  },
];

// Mock Daily Stats
export const mockDailyStats: DailyStats[] = [
  {
    date: "2024-11-13",
    tasksCompleted: 4,
    tasksPlanned: 5,
    focusMinutes: 120,
    habitsCompleted: 3,
    habitsPlanned: 4,
    productivityScore: 85,
  },
  {
    date: "2024-11-14",
    tasksCompleted: 6,
    tasksPlanned: 7,
    focusMinutes: 150,
    habitsCompleted: 4,
    habitsPlanned: 4,
    productivityScore: 92,
  },
  {
    date: "2024-11-15",
    tasksCompleted: 8,
    tasksPlanned: 8,
    focusMinutes: 180,
    habitsCompleted: 4,
    habitsPlanned: 4,
    productivityScore: 98,
  },
  {
    date: "2024-11-16",
    tasksCompleted: 5,
    tasksPlanned: 8,
    focusMinutes: 90,
    habitsCompleted: 2,
    habitsPlanned: 4,
    productivityScore: 68,
  },
  {
    date: "2024-11-17",
    tasksCompleted: 7,
    tasksPlanned: 9,
    focusMinutes: 135,
    habitsCompleted: 3,
    habitsPlanned: 4,
    productivityScore: 82,
  },
  {
    date: "2024-11-18",
    tasksCompleted: 6,
    tasksPlanned: 7,
    focusMinutes: 165,
    habitsCompleted: 4,
    habitsPlanned: 4,
    productivityScore: 94,
  },
  {
    date: "2024-11-19",
    tasksCompleted: 3,
    tasksPlanned: 6,
    focusMinutes: 75,
    habitsCompleted: 3,
    habitsPlanned: 4,
    productivityScore: 75,
  },
];

// Mock Weekly Stats
export const mockWeeklyStats: WeeklyStats = {
  weekStart: "2024-11-13",
  weekEnd: "2024-11-19",
  totalTasksCompleted: 23,
  totalTasksPlanned: 28,
  totalFocusHours: 12.58,
  longestStreak: {
    habitTitle: "Daily Reading",
    days: 12,
  },
  mostProductiveDay: {
    date: "Tuesday",
    tasksCompleted: 8,
  },
  dailyStats: mockDailyStats,
};

// Helper functions for mock data manipulation
export function getActiveTasks(): Task[] {
  return mockTasks.filter((task) => !task.completed);
}

export function getCompletedTasks(): Task[] {
  return mockTasks.filter((task) => task.completed);
}

export function getActiveHabits(): Habit[] {
  return mockHabits;
}

export function getTodayStats(): DailyStats {
  return mockDailyStats[mockDailyStats.length - 1];
}

export function getWeeklyStats(): WeeklyStats {
  return mockWeeklyStats;
}
