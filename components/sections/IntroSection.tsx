import SectionWrapper from "@/components/scroll/SectionWrapper"
import { ReactNode, useState } from "react"
import TextType from "@/components/animations/TypingText"
import "../sections/sections.css"
import Aurora from "@/components/animations/AuroraBackground"


// section wrapper is to wrap each section in a scroll animation
export default function IntroSection({ children }: { children?: ReactNode }) {
    const [scrollHintShown, setScrollHintShown] = useState(false);
    return(
        <SectionWrapper id="intro">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className="intro-text">
                < TextType
                    text={["Amanda Tantalean", "Aspiring Software Engineer <3", "Graduating May 2027!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    onSentenceComplete={(sentence, index) => {
                        if(index === 2 && !scrollHintShown){
                            setScrollHintShown(true)
                        }
                    }}
                    />
            </div>
            {scrollHintShown && (
                <div className = "scroll-hint">
                    <span>Scroll to explore</span>
                    <span className= "arrow">↓</span>
                </div>
            )}
            {children}
        </SectionWrapper>
    )
}