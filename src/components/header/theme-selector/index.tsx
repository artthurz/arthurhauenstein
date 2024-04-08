"use client";
import { useTheme } from "next-themes";
import React from "react";
import { DarkIcon, LightIcon, SystemIcon } from "./icons";
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
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost px-2">
        <span className="dark:hidden">
          <LightIcon isActive={theme === "light"} />
        </span>
        <span className="hidden dark:inline">
          <DarkIcon isActive={theme === "dark"} />
        </span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
      >
        <li
          className={cn(
            "gap-2 flex cursor-pointer",
            theme === "light" ? "text-accent" : ""
          )}
          onClick={() => {
            setTheme("light");
          }}
        >
          <a>
            <LightIcon isActive={theme === "light"} />
            Light
          </a>
        </li>
        <li
          className={cn(
            "gap-2 flex cursor-pointer",
            theme === "dark" ? "text-accent" : ""
          )}
          onClick={() => setTheme("dark")}
        >
          <a>
            <DarkIcon isActive={theme === "dark"} />
            Dark
          </a>
        </li>
        <li
          className={cn(
            "gap-2 flex cursor-pointer",
            theme === "system" ? "text-accent" : ""
          )}
          onClick={() => setTheme("system")}
        >
          <a>
            <SystemIcon isActive={theme === "system"} />
            System
          </a>
        </li>
      </ul>
    </div>
  );
}
