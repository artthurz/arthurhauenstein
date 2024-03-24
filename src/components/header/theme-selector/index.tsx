"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import React from "react";
import { DarkIcon, LightIcon, SystemIcon } from "./icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeSelector() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <React.Fragment />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="dark:hidden">
          <LightIcon isActive={theme === "light"} />
        </span>
        <span className="hidden dark:inline">
          <DarkIcon isActive={theme === "dark"} />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="absolute z-50 right-0 top-full">
        <DropdownMenuItem
          className={cn(
            "gap-2 cursor-pointer",
            theme === "light" ? "text-sky-500" : ""
          )}
          onClick={() => {
            setTheme("light");
          }}
        >
          <LightIcon isActive={theme === "light"} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "gap-2 cursor-pointer",
            theme === "dark" ? "text-sky-500" : ""
          )}
          onClick={() => setTheme("dark")}
        >
          <DarkIcon isActive={theme === "dark"} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "gap-2 cursor-pointer",
            theme === "system" ? "text-sky-500" : ""
          )}
          onClick={() => setTheme("system")}
        >
          <SystemIcon isActive={theme === "system"} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
