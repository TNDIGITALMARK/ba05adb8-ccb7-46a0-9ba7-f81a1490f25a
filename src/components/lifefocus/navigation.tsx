"use client";

import { Home, TrendingUp, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      icon: Home,
      label: "Today",
    },
    {
      href: "/progress",
      icon: TrendingUp,
      label: "Progress",
    },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="flex items-center justify-around py-2 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors",
                    isActive
                      ? "text-sky-600"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Link href="/add">
        <Button
          size="icon"
          className="fixed bottom-20 right-6 md:bottom-8 h-14 w-14 rounded-full gradient-primary text-white shadow-lg hover:shadow-xl transition-all z-50"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-6 right-6 z-50">
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                  isActive
                    ? "bg-gradient-to-r from-[hsl(var(--color-mint))] to-[hsl(var(--color-sky))] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
