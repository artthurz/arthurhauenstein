"use server";

import LogoIcon from "@/assets/LogoIcon";

export async function Footer() {
  return (
    <footer className="bg-background pb-16 text-sm px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto divide-y mt-16 border-t border-t-slate-200 dark:border-t-slate-700">
        <div className="flex justify-between pt-10 divide-y ">
          <LogoIcon className="w-auto h-5" /> © 2024
        </div>
      </div>
    </footer>
  );
}
