import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logoImage from '../assets/Logo (1).png'
import chevronDown from '../icons/Vector.svg'
import Dropdown from './Dropdown'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const isActive = (path: string) => pathname === path

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Stop the page behind the menu from scrolling, and close the menu on wide screens
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const closeOnWide = () => (window.innerWidth >= 1024 ? setIsOpen(false) : null)
    window.addEventListener('resize', closeOnWide)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', closeOnWide)
    }
  }, [isOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between p-4 text-lg text-stone-800 sm:p-5">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="h-7 w-auto sm:h-8" />
          </Link>

          {/* Desktop links (shown from 1024px, so tablets use the menu button) */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-12">
              <Dropdown />

              <li className="relative flex h-full items-center py-2">
                <Link to="/amenities" className={isActive('/amenities') ? 'font-semibold text-stone-950' : ''}>
                  Amenities
                </Link>
                {isActive('/amenities') ? (
                  <div className="absolute right-0 bottom-[-22px] left-0 h-[2px] bg-stone-900" />
                ) : null}
              </li>

              <li className="relative flex h-full items-center py-2">
                <Link
                  to="/gallery"
                  className={`flex items-center ${isActive('/gallery') ? 'font-semibold text-stone-950' : ''}`}
                >
                  Gallery <img src={chevronDown} alt="chevron" className="ml-3 h-3 w-3" />
                </Link>
                {isActive('/gallery') ? (
                  <div className="absolute right-0 bottom-[-22px] left-0 h-[2px] bg-stone-900" />
                ) : null}
              </li>
            </ul>
          </div>

          <div className="hidden gap-6 lg:flex">
            <Link to="/contact" className="p-2 text-stone-500 hover:text-stone-700">
              Contact us
            </Link>
            <button type="button" data-tour-trigger className="rounded-sm bg-[#F3F3F3] p-3 font-medium">
              Request tour
            </button>
          </div>

          {/* Menu button (phones and tablets) */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#F3F3F3] text-stone-800 transition-colors hover:bg-stone-200 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Slide-in menu: always on the page, only its classes change */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[9999] flex justify-end transition-[opacity,visibility] lg:hidden ${
          isOpen ? 'visible opacity-100 duration-700' : 'invisible opacity-0 duration-500'
        }`}
      >
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-stone-900/50" />

        <aside
          className={`relative z-10 flex h-full w-[85%] max-w-sm flex-col justify-between overflow-y-auto bg-white p-5 shadow-2xl transition-transform sm:p-6 ${
            isOpen ? 'translate-x-0 duration-700' : 'translate-x-full duration-500'
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-5">
              <Link to="/">
                <img src={logoImage} alt="Logo" className="h-7 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#F3F3F3] text-stone-800 transition-colors hover:bg-stone-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-6 flex flex-col space-y-2 text-lg font-medium text-stone-800">
              <div className="rounded-sm bg-stone-50/80 px-4 py-3">
                <Dropdown />
              </div>

              <li>
                <Link
                  to="/amenities"
                  className="flex items-center justify-between rounded-sm px-4 py-3.5 transition-colors hover:bg-stone-50"
                >
                  <span>Amenities</span>
                  <ArrowUpRight className="h-4 w-4 text-stone-400" />
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
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

          <div className="mt-8 flex flex-col gap-3 border-t border-stone-100 pt-6">
            <Link
              to="/contact"
              className="w-full rounded-sm border border-stone-200 p-3.5 text-center font-medium text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-900"
            >
              Contact us
            </Link>
            <button
              type="button"
              data-tour-trigger
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#F3F3F3] p-3.5 font-medium text-stone-900 transition-colors hover:bg-stone-200"
            >
              <span>Request tour</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Nav
