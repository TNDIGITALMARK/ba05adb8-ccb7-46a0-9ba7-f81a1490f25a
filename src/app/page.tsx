import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Clock, CheckCircle2, Flame, Calendar, Sparkles, BarChart3, Users, Zap, Award, Heart, Brain, Star } from "lucide-react";

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-hero">
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
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-button hover:scale-105 transition-all duration-300"
              >
                Start Your Journey Today
              </Button>
            </Link>

            {/* Hero Illustration */}
            <div className="mt-16 relative">
              <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm">
                <Image
                  src="/generated/hero-illustration.png"
                  alt="LifeFocus Dashboard Preview"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Unlock Your Best Self
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 gradient-card-mint text-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Habit Mastery</h3>
                  <p className="text-base opacity-95 leading-relaxed">
                    Build positive routines that stick and transform your life through intelligent tracking and reinforcement
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                    <Sparkles className="w-4 h-4" />
                    <span>21-day habit formation</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 gradient-card-blue text-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Smart Goal Setting</h3>
                  <p className="text-base opacity-95 leading-relaxed">
                    Break down big dreams into achievable daily actions with SMART goal framework and progress tracking
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                    <BarChart3 className="w-4 h-4" />
                    <span>Visual progress tracking</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 gradient-card-purple text-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Focused Productivity</h3>
                  <p className="text-base opacity-95 leading-relaxed">
                    Eliminate distractions and achieve deep work states with Pomodoro timer and focus sessions
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                    <Zap className="w-4 h-4" />
                    <span>Deep focus mode</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Life Metrics Preview */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Track What Matters Most
            </h2>
            <p className="text-xl text-white/90 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive metrics that give you a complete picture of your personal growth journey
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, label: "Daily Tasks", value: "24 Completed", color: "bg-gradient-card-mint" },
                { icon: Clock, label: "Focus Time", value: "3.5 Hours", color: "bg-gradient-card-blue" },
                { icon: Flame, label: "Habit Streak", value: "14 Days", color: "bg-gradient-card-orange" },
                { icon: Brain, label: "Mindfulness", value: "Daily Practice", color: "bg-gradient-card-purple" },
              ].map((metric, index) => (
                <Card
                  key={index}
                  className="p-8 bg-white/95 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center ${metric.color} text-white`}>
                      <metric.icon className="w-10 h-10" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose LifeFocus Section */}
          <div className="mb-20">
            <Card className="p-12 bg-white/95 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                Why Choose LifeFocus?
              </h2>
              <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Built by productivity experts, backed by behavioral science, trusted by thousands
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Science-Backed Methods",
                    description: "Our approach is rooted in psychological research and proven behavioral change techniques"
                  },
                  {
                    icon: Users,
                    title: "Community Support",
                    description: "Join thousands of like-minded individuals on their journey to personal excellence"
                  },
                  {
                    icon: BarChart3,
                    title: "Detailed Analytics",
                    description: "Track your progress with comprehensive metrics and beautiful visualizations"
                  },
                  {
                    icon: Heart,
                    title: "Holistic Approach",
                    description: "Balance work, health, relationships, and personal growth in one unified platform"
                  },
                  {
                    icon: Zap,
                    title: "Smart Automation",
                    description: "AI-powered suggestions help you optimize your schedule and prioritize effectively"
                  },
                  {
                    icon: Star,
                    title: "Gamified Experience",
                    description: "Earn rewards, unlock achievements, and stay motivated with our engaging gamification system"
                  }
                ].map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Visual Showcase Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              See Your Success Come to Life
            </h2>
            <p className="text-xl text-white/90 text-center mb-12 max-w-2xl mx-auto">
              Beautiful visualizations that make tracking progress feel effortless and rewarding
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/95 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Celebrate Every Win</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track your achievements and stay motivated with visual feedback that celebrates your progress
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/generated/achievement-illustration.png"
                      alt="Achievement Celebration"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white/95 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Grow Together</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Join a community of achievers and share your journey towards excellence
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/generated/team-collaboration.png"
                      alt="Team Collaboration"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Loved by Productivity Enthusiasts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "LifeFocus completely changed how I approach my goals. I've accomplished more in 3 months than I did all last year!",
                  author: "Sarah Chen",
                  role: "Entrepreneur",
                  rating: 5
                },
                {
                  quote: "The habit tracking feature is incredibly intuitive. I finally broke my procrastination habits and built lasting routines.",
                  author: "Marcus Johnson",
                  role: "Software Developer",
                  rating: 5
                },
                {
                  quote: "As someone who struggles with focus, the deep work timer has been a game-changer. My productivity has tripled!",
                  author: "Emily Rodriguez",
                  role: "Designer",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-8 bg-white/95 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <Card className="p-12 bg-white/95 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "50K+", label: "Active Users" },
                  { value: "2M+", label: "Tasks Completed" },
                  { value: "95%", label: "Success Rate" },
                  { value: "4.9★", label: "User Rating" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Final CTA */}
          <Card className="p-16 bg-gradient-primary text-center text-white">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-2xl mb-10 opacity-95 max-w-3xl mx-auto">
              Join 50,000+ users who are achieving their goals and building better habits every day
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-8 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started Free - No Credit Card Required
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-90">
              ✓ Free forever plan available  •  ✓ Premium features from $9/month  •  ✓ Cancel anytime
            </p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <Card className="p-12 bg-white/95 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <span className="text-xl font-bold text-gray-900">LifeFocus</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transform your potential into achievement with intelligent productivity tools.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-900">Product</h4>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Download App</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Features</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Pricing</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Integrations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-900">Company</h4>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">About Us</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Careers</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Blog</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-900">Support</h4>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Help Center</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Community</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Privacy Policy</li>
                  <li className="hover:text-purple-600 cursor-pointer transition-colors">Terms of Service</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <div>© 2025 LifeFocus. All rights reserved.</div>
              <div className="flex gap-6">
                <span className="hover:text-purple-600 cursor-pointer transition-colors">Twitter</span>
                <span className="hover:text-purple-600 cursor-pointer transition-colors">LinkedIn</span>
                <span className="hover:text-purple-600 cursor-pointer transition-colors">Instagram</span>
                <span className="hover:text-purple-600 cursor-pointer transition-colors">Facebook</span>
              </div>
            </div>
          </Card>
        </div>
      </footer>
    </div>
  );
}
