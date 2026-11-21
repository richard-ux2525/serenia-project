import { useState } from "react"
import type { FormEvent } from "react"
import { IdCard, Mail, Phone } from "lucide-react"
import { Buttons, contactImage } from "../imports"

function Contact() {
  const [formNotice, setFormNotice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormNotice('The contact form is not connected yet. Please email or call our team directly.')
  }

  return (
    <main>
      <title> Contact Us - Serenia Real Estate</title>
      <section className="reveal">
        <div>
          <img
            src={contactImage}
            className="contact-hero-image mx-auto h-120 w-full"
            alt="Serenia community homes"
          />
        </div>
      </section>
      <section className="bg-[#f9f9f9]">
        <div className="mx-auto grid max-w-full grid-cols-1 lg:grid-cols-2">
          <div className="reveal bg-white p-8 shadow-box lg:p-12">
            <section className="bg-white px-6 py-16 lg:py-20">
              <h1 className="text-4xl font-medium leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Let’s connect <br />
                with us
              </h1>
              <p className="mt-6 text-lg font-normal leading-relaxed text-gray-500 lg:text-xl">
                Discover Serenia up close. Whether you want to ask a question or schedule a private
                tour, our team is ready to assist you.
              </p>
            </section>
            <div className="contact-details grid w-full grid-cols-1 p-3 text-gray-600 xl:grid-cols-2">
              <div className="grid min-h-20 w-full grid-cols-[20px_minmax(0,1fr)] items-start gap-4 p-4 shadow-box">
                <Mail aria-hidden="true" className="text-gray-800" />
                <div>
                  <p className="mb-1 text-sm text-gray-500">Email address</p>
                  <a href="mailto:sereniasupport@serenia.com" className="block whitespace-nowrap text-xs font-medium text-gray-900 hover:text-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive">
                    sereniasupport@serenia.com
                  </a>
                </div>
              </div>
              <div className="grid min-h-20 w-full grid-cols-[20px_minmax(0,1fr)] items-start gap-4 p-4 shadow-box">
                <Phone aria-hidden="true" className="text-gray-800" />
                <div>
                  <p className="mb-1 text-sm text-gray-500">Phone number</p>
                  <a href="tel:+13453345005" className="block whitespace-nowrap text-xs font-medium text-gray-900 hover:text-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive">
                    (+1) 345 - 3345 - 005
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-1 contact-form-column bg-[#f9f9f9] p-15 shadow-box">
            <div className="bg-white p-4 shadow-box">
              <div className="mb-3 flex h-10 w-full items-center gap-3 border-b border-black/10 p-2 text-[20px]">
                <IdCard aria-hidden="true" className="text-gray-800" />
                <h2 id="quick-contact-title">Quick contact</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-900">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="w-full rounded-none border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-olive focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      className="w-full rounded-none border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-olive focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-gray-900">
                      Phone number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter your number"
                      className="w-full rounded-none border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-olive focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Enter your message here"
                    className="w-full rounded-none border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-olive focus:outline-none"
                    required
                  />
                </div>
                <Buttons
                  type="submit"
                  btnText="Submit"
                  btnstyle="primary-button w-full rounded-none bg-olive px-4 py-3 font-medium text-white hover:bg-olive-dark"
                />
                {formNotice && <p role="status" aria-live="polite" className="text-sm text-gray-600">{formNotice}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
