import { useState } from 'react'
import type { FormEvent } from 'react'
import { Check, Eye, EyeOff, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo (1).png'

function Resetpwd() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formNotice, setFormNotice] = useState('')
  const hasPassword = password.length > 0
  const canCheckConfirmation = hasPassword && confirmPassword.length > 0
  const passwordsMatch = canCheckConfirmation && password === confirmPassword

  const requirements = [
    { label: 'At least 1 symbol', valid: /[^A-Za-z0-9\s]/.test(password) },
    { label: 'Minimum 8 characters', valid: password.length >= 8 },
    { label: 'At least 1 number', valid: /\d/.test(password) },
    { label: 'At least 1 capital letter', valid: /[A-Z]/.test(password) },
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!requirements.every(({ valid }) => valid) || !passwordsMatch) return
    setFormNotice('Password updated successfully!')
    setTimeout(() => {
      navigate('/admin/updated')
    }, 1200)
  }

  return (
    <main className="account-page bg-stone-200 px-3 sm:px-0 min-h-dvh flex flex-col justify-center items-center font-sans antialiased">
     <title>Reset Password - Serenia Real Estate</title>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="h-6 mx-auto mb-6" />
        </Link>
      </div>

      <div className="account-panel w-full max-w-md bg-white p-5 sm:p-6 border border-stone-200 shadow-xs">
        <h1 className="text-xl font-semibold text-stone-900 mb-1">Reset your Password</h1>
        <p className="text-xs text-[#5A5B5B] mb-5">Enter a new password for your Serenia Admin account.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-900 mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="block h-10 w-full min-w-0 p-2 pr-10 border border-stone-300 bg-white text-xs outline-none focus:border-[#56593B]"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-[#56593B]"
              >
                {showPassword ? <EyeOff aria-hidden="true" className="h-4 w-4" /> : <Eye aria-hidden="true" className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="w-full bg-[#fafafa] p-3 text-xs text-gray-700 border border-stone-200">
            <p className="font-semibold text-gray-900 mb-2">Make sure your password is:</p>
            <ul className="grid grid-cols-1 gap-y-2 sm:grid-cols-2" aria-live="polite">
              {requirements.map(({ label, valid }) => (
                <li key={label} className="flex items-center gap-2">
                  <span
                    className={`grid h-4 w-4 rounded-full shrink-0 place-items-center ${
                      !hasPassword
                        ? 'border border-gray-300 bg-white'
                        : valid
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                    }`}
                  >
                    {hasPassword &&
                      (valid ? (
                        <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                      ) : (
                        <X aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                      ))}
                  </span>
                  <span className="text-[11px]">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-xs font-semibold text-gray-900 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                id="confirm-password"
                name="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                minLength={8}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="block h-10 w-full min-w-0 p-2 pr-10 border border-stone-300 bg-white text-xs outline-none focus:border-[#56593B]"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((visible) => !visible)}
                aria-label={
                  showConfirmPassword ? 'Hide confirmation password' : 'Show confirmation password'
                }
                aria-pressed={showConfirmPassword}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-[#56593B]"
              >
                {showConfirmPassword ? <EyeOff aria-hidden="true" className="h-4 w-4" /> : <Eye aria-hidden="true" className="h-4 w-4" />}
              </button>
            </div>
            {canCheckConfirmation ? (
              <p
                className={`mt-2 flex items-center gap-1.5 text-xs ${
                  passwordsMatch ? 'text-emerald-700 font-semibold' : 'text-rose-600'
                }`}
                aria-live="polite"
              >
                <span
                  className={`grid h-4 w-4 place-items-center ${
                    passwordsMatch ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}
                >
                  {passwordsMatch ? (
                    <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                  ) : (
                    <X aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                  )}
                </span>
                <span>{passwordsMatch ? 'Passwords match' : 'Passwords do not match'}</span>
              </p>
            ) : null}
          </div>

          <hr className="border-stone-200" />
          {formNotice ? (
            <p role="status" aria-live="polite" className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2 border border-emerald-200">
              {formNotice}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={!requirements.every(({ valid }) => valid) || !passwordsMatch}
            className="h-10 w-full bg-[#56593B] text-white text-xs font-semibold hover:bg-[#43462e] transition-colors disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Update Password
          </button>
        </form>
      </div>
    </main>
  )
}

export default Resetpwd
