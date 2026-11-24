import { useNavigate } from 'react-router-dom'
import notFoundImage from '../assets/404error.png'

function NotFound() {
  const navigate = useNavigate()

  // Go back one page, or to the home page if there is no page to go back to
  const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate('/'))

  return (
    <main className="flex min-h-dvh bg-stone flex-col">
        <title>NotFound - Serenia Real Estate</title>

      <div className="flex min-h-[60vh] w-full flex-1">
        <img
          src={notFoundImage}
          className="not-found-art h-full w-full mx-auto object-cover"
          alt="Page not found illustration"
        />
      </div>

      <section className="not-found-layout bg-white mt-auto flex w-full gap-6 p-4">
        <h1 className="w-1/2 p-4 text-2xl font-semibold sm:p-6 md:pl-10 md:text-[40px]">
          Oops, it seems <br /> you&apos;ve gotten lost.
        </h1>

        <div className="ml-auto flex w-1/3 flex-col justify-center p-4">
          <p>
            The page you are looking for is not available or has been
            <br className="hidden sm:block" /> moved. Don&apos;t worry, let&apos;s go back to the
            previous page.
          </p>
          <button
            type="button"
            onClick={goBack}
            className="mt-5 h-10 w-full max-w-35 bg-[#e3dede] transition hover:brightness-90"
          >
            Back to previous
          </button>
        </div>
      </section>
    </main>
  )
}

export default NotFound