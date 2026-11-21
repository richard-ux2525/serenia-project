import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logoImage from '../assets/Logo (1).png'
import chevronDown from '../icons/Vector.svg'
import Dropdown from './Dropdown'

// Tune open/close speed (ms) and easing curve here
const OPEN_DURATION_MS = 1200
const CLOSE_DURATION_MS = 900
const GENTLE_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

function Nav() {
  // isOpen keeps the portal active/interactive; isVisible drives the animated end state
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Track current route to close the drawer automatically on navigation
  const location = useLocation()

  // Refs store timer and animation frame IDs without causing extra re-renders
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number | null>(null)

  // Cancel any pending timers or animation frames before starting a new action
  const clearAllTimers = () => {
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current)
    if (animTimerRef.current) clearTimeout(animTimerRef.current)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }

  // Animate out first (isVisible -> false), then hide/disable (isOpen -> false)
  const closeMenu = () => {
    clearAllTimers()
    setIsVisible(false)
    animTimerRef.current = setTimeout(() => {
      setIsOpen(false)
    }, CLOSE_DURATION_MS)
  }

  // Reset drawer state immediately whenever the URL path changes
  useEffect(() => {
    clearAllTimers()
    setIsVisible(false)
    setIsOpen(false)
  }, [location.pathname])

  // Clean up all timers when Nav unmounts
  useEffect(() => {
    return () => clearAllTimers()
  }, [])

  // Wait two animation frames after isOpen becomes true so initial closed styles paint first
  useEffect(() => {
    if (!isOpen) {
      setIsVisible(false)
      return
    }

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        setIsVisible(true)
      })
    })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isOpen])

  // Lock page scroll while the drawer is open and restore previous overflow on cleanup
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  // Begin the drawer entrance transition
  const startGentleReveal = () => {
    setIsOpen(true)
  }

  // Scroll smoothly to the top first, pause briefly, then gently open the drawer
  const handleOpenMobileMenu = () => {
    clearAllTimers()

    if (window.scrollY <= 10) {
      startGentleReveal()
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })

    const startTime = Date.now()
    const checkScrollTop = () => {
      if (window.scrollY <= 10 || Date.now() - startTime > 1200) {
        settleTimerRef.current = setTimeout(startGentleReveal, 350)
      } else {
        scrollTimerRef.current = setTimeout(checkScrollTop, 60)
      }
    }

    scrollTimerRef.current = setTimeout(checkScrollTop, 220)
  }

  // Match active route path for desktop underline indicator
  const isActive = (path: string) => location.pathname === path

  // Match transition speed to whether the drawer is opening or closing
  const activeDuration = isVisible ? `${OPEN_DURATION_MS}ms` : `${CLOSE_DURATION_MS}ms`

  // Render backdrop and slide-over drawer into document.body via createPortal
  const mobileDrawer =
    typeof document !== 'undefined'
      ? createPortal(
          <div
            aria-hidden={!isVisible}
            style={{
              transitionDuration: activeDuration,
              transitionTimingFunction: GENTLE_EASE,
            }}
            className={`fixed inset-0 z-[9999] flex justify-end transition-opacity md:hidden ${
              isOpen ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
            }`}
          >
            {/* Dimmed backdrop layer */}
            <div
              onClick={closeMenu}
              style={{
                transitionDuration: activeDuration,
                transitionTimingFunction: GENTLE_EASE,
              }}
              className={`fixed inset-0 bg-stone-900/50 transition-opacity ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Slide-over drawer panel animated via GPU-composited transform */}
            <aside
              style={{
                transitionDuration: activeDuration,
                transitionTimingFunction: GENTLE_EASE,
              }}
              className={`relative z-10 flex h-full w-[85%] max-w-sm flex-col justify-between bg-white p-6 shadow-2xl transition-transform will-change-transform ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div>
                {/* Drawer top bar with logo and close button */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-5">
                  <Link to="/" onClick={closeMenu}>
                    <img src={logoImage} alt="Logo" className="h-7 w-auto" />
                  </Link>
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#F3F3F3] text-stone-800 transition-colors hover:bg-stone-200"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Drawer navigation links */}
                <ul className="mt-6 flex flex-col space-y-2 text-lg font-medium text-stone-800">
                  <div className="rounded-sm bg-stone-50/80 px-4 py-3">
                    <Dropdown />
                  </div>

                  <li>
                    <Link
                      to="/amenities"
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-sm px-4 py-3.5 transition-colors hover:bg-stone-50"
                    >
                      <span>Amenities</span>
                      <ArrowUpRight className="h-4 w-4 text-stone-400" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/gallery"
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-sm px-4 py-3.5 transition-colors hover:bg-stone-50"
                    >
                      <span className="flex items-center">
                        Gallery <img src={chevronDown} alt="chevron" className="ml-2.5 h-3 w-3" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-stone-400" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Drawer bottom action buttons */}
              <div className="flex flex-col gap-3 border-t border-stone-100 pt-6">
                <Link to="/contact" onClick={closeMenu}>
                  <button
                    type="button"
                    className="w-full rounded-sm border border-stone-200 p-3.5 text-center font-medium text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-900"
                  >
                    Contact us
                  </button>
                </Link>

                <Link to="" onClick={closeMenu}>
                  <button
                    type="button"
                    data-tour-trigger
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#F3F3F3] p-3.5 font-medium text-stone-900 transition-colors hover:bg-stone-200"
                  >
                    <span>Request tour</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </aside>
          </div>,
          document.body
        )
      : null

  return (
    <>
      {/* Sticky top navigation bar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between p-5 text-lg text-stone-800">
          {/* Brand logo */}
          <Link to="/" onClick={closeMenu}>
            <img src={logoImage} alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-12">
              <Dropdown />

              <li className="relative flex h-full items-center py-2">
                <Link
                  to="/amenities"
                  className={`transition-colors ${
                    isActive('/amenities') ? 'font-semibold text-stone-950' : ''
                  }`}
                >
                  Amenities
                </Link>
                {isActive('/amenities') && (
                  <div className="absolute right-0 bottom-[-22px] left-0 h-[2px] bg-stone-900" />
                )}
              </li>

              <li className="relative flex h-full items-center py-2">
                <Link
                  to="/gallery"
                  className={`flex items-center transition-colors ${
                    isActive('/gallery') ? 'font-semibold text-stone-950' : ''
                  }`}
                >
                  Gallery <img src={chevronDown} alt="chevron" className="ml-3 h-3 w-3" />
                </Link>
                {isActive('/gallery') && (
                  <div className="absolute right-0 bottom-[-22px] left-0 h-[2px] bg-stone-900" />
                )}
              </li>
            </ul>
          </div>

          {/* Desktop action buttons */}
          <div className="hidden gap-6 md:flex">
            <Link to="/contact">
              <button type="button" className="p-2 text-stone-500 hover:text-stone-700">
                Contact us
              </button>
            </Link>

            <button
              type="button"
              data-tour-trigger
              className="rounded-sm bg-[#F3F3F3] p-3 font-medium"
            >
              Request tour
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={handleOpenMobileMenu}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#F3F3F3] text-stone-800 transition-colors hover:bg-stone-200 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mount portaled mobile drawer outside <nav> */}
      {mobileDrawer}
    </>
  )
}

export default Nav