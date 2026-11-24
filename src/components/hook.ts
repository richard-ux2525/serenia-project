import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Adds the class "is-visible" to every ".reveal" element when it scrolls into view
function useRevealAnimation() {
  const { pathname } = useLocation()

  useEffect(() => {
    const items = document.querySelectorAll('.reveal:not(.is-visible)')
    const showAll = () => items.forEach((item) => item.classList.add('is-visible'))

    // Phones that ask for less motion (or old browsers) just see everything at once
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      showAll()
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
      { threshold: 0.05 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [pathname])
}

export default useRevealAnimation
