import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import brandLogo from '../assets/gglolgo.png'
import footerImage from '../assets/footer.png'

function Footer() {
  const [subscribeNotice, setSubscribeNotice] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribeNotice('Email subscriptions are not connected yet. Please contact us by email.')
  }

  return (
    <footer className="relative overflow-hidden bg-gallery text-white">
      {/* Top CTA Hero Band */}
      <div className="reveal mx-auto flex flex-col items-center justify-between gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:px-14 lg:py-20">
        <div className="w-full min-w-0 max-w-xl text-center lg:text-left">
          <h2 className="mb-8 text-4xl font-normal leading-[1.15] tracking-tight sm:text-5xl lg:mb-10 lg:text-[65px]">
            Create rare
            
            moments with
            <br className="hidden lg:inline" /> your family now
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
            <button
              type="button"
              data-tour-trigger
              className="w-full cursor-pointer bg-white px-7 py-3.5 text-sm font-medium text-gray-900 transition-colors hover:bg-stone-100 sm:w-auto"
            >
              Schedule a tour
            </button>
            <Link
              to="/properties"
              className="w-full bg-ink-muted px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/15 sm:w-auto"
            >
              View clusters
            </Link>
          </div>
        </div>

        {/* Hidden on mobile to match compact mobile CTA stack, visible from tablet/desktop up */}
        <div className="image-zoom relative hidden h-72 w-full max-w-[30rem] overflow-hidden rounded-2xl sm:block lg:h-96">
          <img src={footerImage} alt="Serenia homes" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Main Dark Footer Surface */}
      <section className="bg-ink px-4 py-8 sm:px-6 lg:p-8">
        <div className="reveal mx-auto max-w-full rounded-2xl border border-white/5 bg-ink-black/40 p-6 text-gray-400 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-10 lg:flex-row">
            <div>
              <div className="mb-8 flex items-center gap-2 text-2xl font-bold text-white sm:mb-12">
                <img src={brandLogo} alt="Serenia" className="h-9 w-auto sm:h-10" />
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <a
                    href="mailto:sereniasupport@serenia.com"
                    className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    sereniasupport@serenia.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+13453345005"
                    className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    (+1) 345 - 3345 - 005
                  </a>
                </p>
              </div>
            </div>

            <div className="w-full max-w-md">
              <h3 className="mb-5 text-xl font-normal leading-snug text-white sm:mb-6 sm:text-2xl">
                Subscribe to get the
                <br />
                latest information from
                <br />
                us
              </h3>
              <form onSubmit={handleSubscribe} className="flex min-w-0 flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-subscribe-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-subscribe-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 border border-white/10 bg-ink-black px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-white/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full shrink-0 cursor-pointer whitespace-nowrap bg-white px-6 py-3.5 text-sm font-medium text-gray-900 transition-colors hover:bg-stone-100 sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
              {subscribeNotice && (
                <p role="status" aria-live="polite" className="mt-3 text-xs text-gray-300">
                  {subscribeNotice}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-10 text-sm md:grid-cols-4 md:gap-8 md:pt-12">
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6">
                Company
              </h4>
              <ul className="space-y-3.5 text-gray-300 sm:space-y-4">
                <li>
                  <Link to="/" className="transition hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="transition hover:text-white">
                    Press &amp; Media
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Opportunity
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6">
                Services
              </h4>
              <ul className="space-y-3.5 text-gray-300 sm:space-y-4">
                <li>
                  <Link to="/properties" className="transition hover:text-white">
                    Property listings
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Progress tracking
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="transition hover:text-white">
                    Virtual tours
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6">
                Resources
              </h4>
              <ul className="space-y-3.5 text-gray-300 sm:space-y-4">
                <li>
                  <Link to="/gallery" className="transition hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/#home-faq-title" className="transition hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="transition hover:text-white">
                    Guide &amp; Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6">
                Legal
              </h4>
              <ul className="space-y-3.5 text-gray-300 sm:space-y-4">
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Cookie policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:text-white">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer