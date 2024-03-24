"use server";

import { AcademicSection } from "@/components/sections/academic";
import { ContactSection } from "@/components/sections/contact";
import { CoursesSection } from "@/components/sections/courses";
import { SkillsSection } from "@/components/sections/skills";
import { WelcomeSection } from "@/components/sections/welcome";

export default async function Home() {
  return (
    <main className="bg-base-100 min-h-full flex flex-col antialiased overflow-hidden [overflow-anchor:none]">
      <WelcomeSection />
      <div className="pt-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:gap-y-32 md:pt-40 md:gap-y-40">
        <SkillsSection />
        <AcademicSection />
        <CoursesSection />
        <ContactSection />
      </div>
    </main>
  );
}
