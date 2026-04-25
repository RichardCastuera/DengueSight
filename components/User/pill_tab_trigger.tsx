"use client";

import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface PillTabTriggerProps {
  value: string;
  children?: React.ReactNode;
}

export function PillTabTrigger({ value, children }: PillTabTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "px-4 py-1 rounded-full border border-gray-300 text-gray-700 transition-colors",
        "hover:bg-gray-100",
        "data-[state=active]:border-[var(--accent-violet)]",
        "data-[state=active]:text-[var(--accent-violet)]",
        "data-[state=active]:bg-[var(--accent-violet)]/10",
      )}
    >
      {children}
    </TabsTrigger>
  );
}
