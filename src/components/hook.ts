 import { div } from "framer-motion/client"
import { useEffect } from "react"
 import { useLocation } from "react-router-dom"
 
 function revealAnimaton() {
     const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const revealAll = () => elements.forEach((element) => element.classList.add('is-visible'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

 }
 
 export default revealAnimaton
 