/* section wrapper is a high level wrapper that triggers an animation when a 
section enters view. it also hides all animation logic from the actual content
the sections (intro, bout etc.) don't care how they animate, they just exist*/

//keeps scroll native, adds entrance animation and is easy to upgrade

/*CURRENT FLOW:
browser scrolls normally -> framer motion detects section visibility -> section animates in*/

"use client" // this tells next.js that framer motion needs to use the browser and access to scroll frames, without this framer motion breaks

import { motion } from "framer-motion" 
import { ReactNode } from "react"

export default function SectionWrapper({
  children,}: { children: ReactNode }) 
  {
  return (
    <motion.section
      style={{ height: "100vh" }} // forces each section to be the whole screen height so that scrolling feels like pages
      initial={{ opacity: 0 }} // initially the secion is invisible until it enters viewport
      whileInView={{ opacity: 1 }} // this causes it to fade in when the section is in view.
      // framer motion detects the section and opacity animates from 0 to 1
      viewport={{ once: true, amount: 0.6 }} // this tells us to animate only the first time (prevents flickering when scrolling back up)
      // animation triggers when 60% of the section is visible
      transition={{ duration: 0.6, ease: "easeOut" }} // this eventually can be zoom, slide, scale, blur
    >
      {children} 
    </motion.section>
  )
}