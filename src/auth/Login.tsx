import { useState } from 'react'
import type { FormEvent } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import ggLogo from '../assets/gglolgo.png'
import gggLogo from '../assets/ddvdfd.png'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [formNotice, setFormNotice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || !password) {
      setFormNotice('Please enter both email address and password.')
      return
    }
    // Simulate successful authentication and navigate to dashboard
    navigate('/admin/user/dashboard')
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-[#f5f1ea] text-gray-800 font-sans antialiased">
      <title>Login - Serenia Real Estate</title>
      <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">
        {/* Left Hero Panel */}
        <section className="relative hidden overflow-hidden lg:block">
          <img src={gggLogo} alt="Serenia Residence" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

          <div className="absolute inset-x-0 top-10 z-10 px-10">
            <Link to="/">
              <img src={ggLogo} alt="Serenia logo" className="mx-auto w-36" />
            </Link>
          </div>

          <div className="absolute inset-x-0 bottom-10 z-10 px-8">
            <div className="flex items-center justify-between gap-6 text-white/90">
              <span className="text-2xl font-medium">Serenia House</span>
              <span className="max-w-md text-right text-xs leading-relaxed text-white/75">
                Every house is built with sincerity and enthusiasm to help families create moments
                together inside it.
              </span>
            </div>
          </div>
        </section>

        {/* Right Form Panel */}
        <section className="flex items-center justify-center bg-white px-4 py-8 sm:px-6 sm:py-10">
          <div className="w-full max-w-sm bg-[#fffdfb] p-6 sm:p-8 border border-stone-200">
            <div className="mb-8">
              <h1 className="text-3xl font-medium text-gray-900 sm:text-4xl">Welcome back!</h1>
              <p className="mt-2 text-xs text-gray-500">
                Please log in to manage your properties and clusters
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email address */}
              <div>
                <label htmlFor="login-email" className="mb-2 block text-xs font-semibold text-gray-900">
                  Email address
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-w-0 border border-stone-300 bg-white px-4 py-3 text-xs text-gray-900 outline-none transition focus:border-[#53583C]"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="login-password" className="mb-2 block text-xs font-semibold text-gray-900">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full min-w-0 border border-stone-300 bg-white px-4 py-3 pr-12 text-xs text-gray-900 outline-none transition focus:border-[#53583C]"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#53583C] cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <Eye aria-hidden="true" className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Form Notice */}
              {formNotice ? (
                <p role="status" aria-live="polite" className="text-xs text-red-600 font-medium">
                  {formNotice}
                </p>
              ) : null}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#53583C] px-4 py-3.5 text-xs font-semibold text-white transition hover:bg-[#434930] focus:outline-none cursor-pointer"
              >
                Login now
              </button>

              <div className="text-center pt-2">
                <Link
                  to="/admin/forgot_password"
                  className="inline-block text-xs font-medium text-gray-700 transition hover:text-[#53583C]"
                >
                  Forgot password?
                </Link>
              </div>
            </form>

            <div className="mt-8 border-t border-stone-200 pt-6 text-center text-xs text-gray-500">
              If you don&apos;t have an account, please{' '}
              <Link
                to="/contact"
                className="mx-1 font-semibold text-gray-900 underline underline-offset-4 hover:text-[#53583C]"
              >
                contact
              </Link>{' '}
              the system administrator to request access.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login
