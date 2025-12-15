"use client"

import IntroSection from "@/components/sections/IntroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ResumeSection from "@/components/sections/ResumeSection"
import { useSectionObserver } from "@/components/scroll/useSectionObserver"

const sectionIds = ["intro", "about", "projects", "resume"]

export default function Home() {
  const activeSection = useSectionObserver(sectionIds)
  return (
    <main>
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        {/* just debugging */}
        Active: {activeSection} 
      </div>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
    </main>
  )
}