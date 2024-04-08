import { cn } from "@/lib/utils";
import React from "react";

export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full flex rounded-3xl flex-col md:flex-row shadow-xl bg-base-200/70  ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0",
        className
      )}
    >
      {children}
    </div>
  );
}
