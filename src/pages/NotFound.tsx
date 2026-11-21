import { useNavigate } from 'react-router-dom'
import notFoundImage from '../assets/404error.png'

function NotFound() {
  const navigate = useNavigate()

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    navigate('/')
  }

  return (
    <main className="flex min-h-screen bg-stone flex-col">
        <title>NotFound - Serenia Real Estate</title>

      <div className="flex min-h-[60vh] w-full flex-1">
        <img
          src={notFoundImage}
          className="not-found-art h-full w-full mx-auto object-cover"
          alt="Page not found illustration"
        />
      </div>

      <section className="not-found-layout bg-white mt-auto flex w-full gap-6 p-4">
        <h1 className="w-1/2 p-6 pl-10 text-xl font-semibold md:text-[40px]">
          Oops, it seems <br /> you&apos;ve gotten lost.
        </h1>

        <div className="flex w-1/3 justify-center ml-auto flex-col p-4">
          <p className="">
            The page you are looking for is not available or has been
            <br className="hidden sm:block" /> moved. Don&apos;t worry, let&apos;s go back to the
            previous page.
          </p>
          <button
            type="button"
            onClick={goBack}
            className="mt-5 h-10 w-35 bg-[#e3dede] transition hover:brightness-90"
          >
            Back to previous
          </button>
        </div>
      </section>
    </main>
  )
}

export default NotFound