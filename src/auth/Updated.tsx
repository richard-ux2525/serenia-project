import { Link } from 'react-router-dom'
import logo from '../assets/Logo (1).png'
import d3logo from '../assets/3D - All.png'

function Updated() {
  return (
    <main className="account-page bg-stone-200 min-h-screen flex flex-col justify-center items-center p-4 font-sans antialiased">
           <title>Updated - Serenia Real Estate</title>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="h-6 mx-auto mb-6" />
        </Link>
      </div>

      <div className="account-panel w-full max-w-md bg-white p-6 sm:p-8 text-center border border-stone-200 shadow-xs">
        <img
          src={d3logo}
          alt="Password updated illustration"
          className="mx-auto mb-5 h-28 object-contain"
        />

        <h1 className="text-xl font-bold text-gray-900 mb-2">Password Updated!</h1>

        <p className="text-xs text-stone-600 leading-relaxed mb-6">
          Your password has been successfully reset. You can now use your new credentials to log in.
        </p>

        <hr className="border-stone-200 mb-5" />

        <Link
          to="/admin/login"
          className="flex h-10 w-full items-center justify-center bg-[#53583C] text-white text-xs font-semibold hover:bg-[#434930] transition-colors"
        >
          Back to login
        </Link>
      </div>
    </main>
  )
}

export default Updated
