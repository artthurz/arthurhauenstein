"use server";

import LogoIcon from "@/assets/LogoIcon";
import { LocaleSelector } from "./locale-selector";
import { ThemeSelector } from "./theme-selector";
import { Nav } from "./nav";
import { Menu } from "./menu";

export async function Header() {
  return (
    <header className="w-full flex items-center justify-between sticky top-0 z-30 h-[72px] px-4 sm:px-6 md:px-8 bg-slate-50 dark:bg-[#0B1120] bg-opacity-50 dark:bg-opacity-50 backdrop-blur dark:backdrop-blur dark:backdrop-filter firefox:bg-opacity-90 dark:firefox:bg-opacity-90 text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <LogoIcon className="w-auto h-5" />
      <div className="flex items-center">
        {/* @ts-expect-error Server Component */}
        <Nav />
        <div className="flex items-center gap-2 md:gap-4 md:border-l md:border-slate-200 ml-6 pl-6 md:dark:border-slate-800">
          <ThemeSelector />
          <LocaleSelector className="hidden md:block" />
          <Menu />
        </div>
      </div>
    </header>
  );
}
