import SectionWrapper from "@/components/scroll/SectionWrapper"
import { ReactNode } from "react"
import TextType from "@/components/animations/TypingText"
import "../sections/sections.css"

// section wrapper is to wrap each section in a scroll animation
export default function IntroSection({ children }: { children?: ReactNode }) {
    return(
        <SectionWrapper id="intro">
            <div className="intro-text">
                < TextType
                    text={["Amanda Tantalean", "Aspiring Software Engineer <3", "Graduating May 2027!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    />
            </div>
            {children}
        </SectionWrapper>
    )
}