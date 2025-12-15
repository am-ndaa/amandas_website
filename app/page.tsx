import IntroSection from "@/components/sections/IntroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ResumeSection from "@/components/sections/ResumeSection"

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
    </main>
  )
}