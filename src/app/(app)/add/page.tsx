"use client";

import { useState } from "react";
import { Plus, Target, CheckSquare, Calendar, Flag, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export default function AddPage() {
  const router = useRouter();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "medium",
    category: "",
    dueDate: "",
  });

  const [habitData, setHabitData] = useState({
    title: "",
    description: "",
    category: "personal",
    targetDays: "30",
  });

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in real app would save to database
    console.log("Task created:", taskData);
    router.push("/dashboard");
  };

  const handleHabitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in real app would save to database
    console.log("Habit created:", habitData);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--color-mint))] via-[hsl(var(--color-sky))] to-[hsl(var(--color-purple))] py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-white space-y-2">
          <h1 className="text-4xl font-bold">Quick Add ✨</h1>
          <p className="text-lg opacity-90">
            Create new tasks or habits to keep your momentum going
          </p>
        </div>

        {/* Main Content */}
        <Card className="bg-white/95 backdrop-blur-sm overflow-hidden">
          <Tabs defaultValue="task" className="w-full">
            <TabsList className="w-full grid grid-cols-2 p-2 bg-gray-100 rounded-none">
              <TabsTrigger
                value="task"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg py-3"
              >
                <CheckSquare className="w-4 h-4 mr-2" />
                New Task
              </TabsTrigger>
              <TabsTrigger
                value="habit"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg py-3"
              >
                <Target className="w-4 h-4 mr-2" />
                New Habit
              </TabsTrigger>
            </TabsList>

            {/* Task Form */}
            <TabsContent value="task" className="p-6 space-y-6">
              <form onSubmit={handleTaskSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="task-title" className="text-base font-semibold">
                    Task Title *
                  </Label>
                  <Input
                    id="task-title"
                    placeholder="What needs to be done?"
                    value={taskData.title}
                    onChange={(e) =>
                      setTaskData({ ...taskData, title: e.target.value })
                    }
                    className="text-base h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="task-description" className="text-base font-semibold">
                    Description
                  </Label>
                  <Textarea
                    id="task-description"
                    placeholder="Add more details..."
                    value={taskData.description}
                    onChange={(e) =>
                      setTaskData({ ...taskData, description: e.target.value })
                    }
                    className="min-h-24 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold flex items-center gap-2">
                      <Flag className="w-4 h-4" />
                      Priority
                    </Label>
                    <Select
                      value={taskData.priority}
                      onValueChange={(value) =>
                        setTaskData({ ...taskData, priority: value })
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Due Date
                    </Label>
                    <Input
                      type="date"
                      value={taskData.dueDate}
                      onChange={(e) =>
                        setTaskData({ ...taskData, dueDate: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Category
                  </Label>
                  <Input
                    placeholder="e.g., Work, Personal, Health"
                    value={taskData.category}
                    onChange={(e) =>
                      setTaskData({ ...taskData, category: e.target.value })
                    }
                    className="h-12"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 gradient-primary text-white h-12 text-base font-semibold rounded-full shadow-button"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Task
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => router.push("/dashboard")}
                    className="h-12 px-8 rounded-full"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </TabsContent>

            {/* Habit Form */}
            <TabsContent value="habit" className="p-6 space-y-6">
              <form onSubmit={handleHabitSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="habit-title" className="text-base font-semibold">
                    Habit Title *
                  </Label>
                  <Input
                    id="habit-title"
                    placeholder="What habit do you want to build?"
                    value={habitData.title}
                    onChange={(e) =>
                      setHabitData({ ...habitData, title: e.target.value })
                    }
                    className="text-base h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="habit-description" className="text-base font-semibold">
                    Description
                  </Label>
                  <Textarea
                    id="habit-description"
                    placeholder="Why is this habit important to you?"
                    value={habitData.description}
                    onChange={(e) =>
                      setHabitData({ ...habitData, description: e.target.value })
                    }
                    className="min-h-24 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Category
                    </Label>
                    <Select
                      value={habitData.category}
                      onValueChange={(value) =>
                        setHabitData({ ...habitData, category: value })
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Health 💪</SelectItem>
                        <SelectItem value="work">Work 💼</SelectItem>
                        <SelectItem value="personal">Personal 🌟</SelectItem>
                        <SelectItem value="mindfulness">Mindfulness 🧘</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Target Days
                    </Label>
                    <Select
                      value={habitData.targetDays}
                      onValueChange={(value) =>
                        setHabitData({ ...habitData, targetDays: value })
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">1 Week (7 days)</SelectItem>
                        <SelectItem value="14">2 Weeks (14 days)</SelectItem>
                        <SelectItem value="21">3 Weeks (21 days)</SelectItem>
                        <SelectItem value="30">1 Month (30 days)</SelectItem>
                        <SelectItem value="60">2 Months (60 days)</SelectItem>
                        <SelectItem value="90">3 Months (90 days)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>💡 Tip:</strong> Research shows it takes 21-66 days to form a new
                    habit. Start with a 30-day goal for best results!
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 gradient-primary text-white h-12 text-base font-semibold rounded-full shadow-button"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Habit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => router.push("/dashboard")}
                    className="h-12 px-8 rounded-full"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Quick Tips */}
        <Card className="p-6 bg-white/90 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Tips</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">•</span>
              <span>
                Break large tasks into smaller, actionable steps for better progress tracking
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold">•</span>
              <span>
                Set realistic due dates to maintain motivation and avoid overwhelm
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                Link habits to existing routines (e.g., "after morning coffee") for better success
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
