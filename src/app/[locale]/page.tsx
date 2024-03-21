"use server";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { SkillsSection } from "@/components/sections/skills";
import { WelcomeSection } from "@/components/sections/welcome";
import { AcademicSection } from "@/components/sections/academic";
import { CoursesSection } from "@/components/sections/courses";
import { ContactSection } from "@/components/sections/contact";

export default async function Home() {
  return (
    <main className="bg-background min-h-full flex flex-col antialiased overflow-hidden [overflow-anchor:none]">
      {/* @ts-expect-error Server Component */}
      <Header />
      <WelcomeSection />
      <div className="pt-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:gap-y-32 md:pt-40 md:gap-y-40">
        <SkillsSection />
        <AcademicSection />
        <CoursesSection />
        <ContactSection />
      </div>
      {/* @ts-expect-error Server Component */}
      <Footer />
    </main>
  );
}
