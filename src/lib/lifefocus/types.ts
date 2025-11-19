export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type TaskStatus = "pending" | "in_progress" | "completed";
export type HabitCategory = "health" | "work" | "personal" | "mindfulness";

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: TaskPriority;
  dueDate?: string;
  category?: string;
  status: TaskStatus;
  createdAt: string;
}

export interface Habit {
  id: string;
  title: string;
  description?: string;
  currentStreak: number;
  targetDays: number;
  completedToday: boolean;
  category: HabitCategory;
  completedDates: string[];
  createdAt: string;
}

export interface FocusSession {
  id: string;
  type: "work" | "short_break" | "long_break";
  duration: number;
  completed: boolean;
  startedAt?: string;
  completedAt?: string;
}

export interface DailyStats {
  date: string;
  tasksCompleted: number;
  tasksPlanned: number;
  focusMinutes: number;
  habitsCompleted: number;
  habitsPlanned: number;
  productivityScore: number;
}

export interface WeeklyStats {
  weekStart: string;
  weekEnd: string;
  totalTasksCompleted: number;
  totalTasksPlanned: number;
  totalFocusHours: number;
  longestStreak: {
    habitTitle: string;
    days: number;
  };
  mostProductiveDay: {
    date: string;
    tasksCompleted: number;
  };
  dailyStats: DailyStats[];
}
