import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo (1).png'
import { Info, ArrowLeft } from 'lucide-react'

function Forgotpwd() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [formNotice, setFormNotice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) return
    setFormNotice('A password reset link has been sent to your email address.')
    setTimeout(() => {
      navigate('/admin/reset_password')
    }, 1500)
  }

  return (
    <main className="account-page bg-stone-200 px-2 sm:px-4 min-h-screen flex flex-col justify-center items-center font-sans antialiased">
      <div className="mb-6">
        <Link to="/">
          <img src={logo} alt="logo" className="h-6 mx-auto" />
        </Link>
      </div>

      <section className="account-panel mt-35 w-full max-w-md bg-white p-5 border border-stone-200 shadow-xs">

        <div className="text-xs text-stone-600 mb-4">
          Enter your registered email, and we&apos;ll send you a reset link to recover your account.
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="forgot-email" className="block text-xs font-medium text-gray-900 mb-1.5">
              Email address
            </label>
            <input
              id="forgot-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block h-10 w-full p-2 border border-stone-300 bg-white text-xs outline-none focus:border-[#53583C]"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="h-10 w-full bg-[#53583C] text-white text-xs font-semibold hover:bg-[#434930] transition-colors cursor-pointer"
            >
              Send reset link
            </button>
            <Link
              to="/contact"
              className="flex h-10 w-full items-center justify-center bg-stone-100 text-gray-900 text-xs font-medium hover:bg-stone-200 transition-colors"
            >
              Didn&apos;t get the link? Contact us
            </Link>
          </div>
          {formNotice && <p role="status" aria-live="polite" className="mt-3 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2 border border-emerald-200">{formNotice}</p>}
        </form>

        <div className="mt-6 flex min-h-16 w-full items-start gap-2 border border-[#F0CD86] bg-[#FFF8EB] p-3">
          <div className="shrink-0 p-0.5">
            <Info className="h-4 w-4 text-amber-600" />
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <h2 className="font-semibold text-xs text-amber-900">Important!</h2>
            <span className="text-[11px] font-normal leading-relaxed text-amber-800">
              Make sure you enter the correct email address, and if you forget which email address
              you registered with, contact the system administrator.
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Forgotpwd
