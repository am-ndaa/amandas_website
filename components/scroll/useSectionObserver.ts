/* this tracks where the user is in the story*/
/* i updated the section wrapper to take in the id of which section we're on and the sections to pass in ids to the section wrapper */

"use client"

import { useEffect, useState } from "react"

export function useSectionObserver(ids: string[]){
    const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return activeId 
}