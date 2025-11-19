import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Clock, CheckCircle2, Flame, Calendar } from "lucide-react";

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--color-mint))] via-[hsl(var(--color-sky))] to-[hsl(var(--color-purple))]">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Target className="w-8 h-8" />
            <span className="text-2xl font-bold">LifeFocus</span>
          </div>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 shadow-button"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Potential.<br />Achieve Your Goals.
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Turn overwhelming daily chaos into clear, actionable progress through intelligent task prioritization and habit tracking.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-button"
              >
                Start Your Journey Today
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Unlock Your Best Self
            </h2>
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

          {/* Life Metrics Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Life Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: CheckCircle2, label: "Daily Tasks", color: "bg-teal-100 text-teal-600" },
                { icon: Clock, label: "Focus Time", color: "bg-sky-100 text-sky-600" },
                { icon: Flame, label: "Habit Streak", color: "bg-orange-100 text-orange-600" },
                { icon: Calendar, label: "Mindfulness", color: "bg-purple-100 text-purple-600" },
              ].map((metric, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${metric.color}`}>
                      <metric.icon className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="p-12 bg-white/95 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands who are finding clarity and success
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="gradient-primary text-white px-8 py-6 text-lg font-semibold rounded-full shadow-button hover:shadow-lg transition-all"
              >
                Get Started Free
              </Button>
            </Link>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 bg-teal-dark">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-sm">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 opacity-90">
                  <li>Download App</li>
                  <li>Features</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2 opacity-90">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 opacity-90">
                  <li>Blog</li>
                  <li>Help Center</li>
                  <li>Community</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2 opacity-90">
                  <li>Privacy Policy</li>
                  <li>Terms</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </footer>
    </div>
  );
}
