import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'

function Brochure() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [formNotice, setFormNotice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormNotice('Brochure delivery is not connected yet. Please contact us by email or phone.')
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    // Any element with data-brochure-trigger opens this dialog
    const openFromTrigger = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest('[data-brochure-trigger]')
      if (!trigger) return

      event.preventDefault()
      if (!dialog.open) dialog.showModal()
    }

    // Clicking the dark area around the box closes it
    const closeOnBackdrop = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close()
    }

    document.addEventListener('click', openFromTrigger)
    dialog.addEventListener('click', closeOnBackdrop)

    return () => {
      document.removeEventListener('click', openFromTrigger)
      dialog.removeEventListener('click', closeOnBackdrop)
    }
  }, [])

  return (
    <>
      <style>{`
        #brochure-request-modal {
          max-height: min(90dvh, 700px);
        }

        @media (max-width: 380px) {
          #brochure-request-modal .brochure-type-options {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
      <dialog
        ref={dialogRef}
        id="brochure-request-modal"
        className="brochure-request-dialog"
        aria-labelledby="brochure-request-title"
      >
        <header className="brochure-request-header">
        <h2 id="brochure-request-title">Brochure request</h2>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close brochure request form"
          autoFocus
        >
          &times;
        </button>
        </header>
        <form onSubmit={handleSubmit} className="brochure-request-form">
        <div className="brochure-request-fields">
          <div className="brochure-form-field">
            <label htmlFor="brochure-full-name">Full name</label>
            <input id="brochure-full-name" name="full-name" type="text" placeholder="Enter your name" autoComplete="name" required />
          </div>
          <div className="brochure-form-field">
            <label htmlFor="brochure-email">Email address</label>
            <input id="brochure-email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
          </div>
          <div className="brochure-form-field">
            <label htmlFor="brochure-phone">Phone number</label>
            <div className="brochure-phone-field">
              <div className="brochure-country-code">
                <span aria-hidden="true">🇺🇸</span>
                <select name="country-code" aria-label="Country calling code">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
              </div>
              <input id="brochure-phone" name="phone" type="tel" placeholder="Enter your number" autoComplete="tel-national" required />
            </div>
          </div>
          <div className="brochure-form-field">
            <label htmlFor="brochure-cluster">Cluster</label>
            <select id="brochure-cluster" name="cluster" required>
              <option value="">Select cluster</option>
              <option value="A">Cluster A</option>
              <option value="B">Cluster B</option>
            </select>
          </div>
          <fieldset className="brochure-choice-group">
            <legend>Brochure type</legend>
            <div className="brochure-choice-grid brochure-type-options">
              <label className="brochure-choice">
                <input type="radio" name="brochure-type" value="full-brochure" required />
                <span>
                  <i className="fa-solid fa-book" aria-hidden="true"></i>
                  <span>Full brochure</span>
                </span>
              </label>
              <label className="brochure-choice">
                <input type="radio" name="brochure-type" value="floorplan" />
                <span>
                  <i className="fa-solid fa-chart-simple" aria-hidden="true"></i>
                  <span>Floorplan Only</span>
                </span>
              </label>
              <label className="brochure-choice">
                <input type="radio" name="brochure-type" value="pricing-sheet" />
                <span>
                  <i className="fa-regular fa-rectangle-list" aria-hidden="true"></i>
                  <span>Pricing Sheet</span>
                </span>
              </label>
            </div>
          </fieldset>
          <fieldset className="brochure-choice-group">
            <legend>Send via</legend>
            <div className="brochure-choice-grid brochure-delivery-options">
              <label className="brochure-choice">
                <input type="radio" name="delivery-method" value="email" required />
                <span>
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <span>Email</span>
                </span>
              </label>
              <label className="brochure-choice">
                <input type="radio" name="delivery-method" value="whatsapp" />
                <span>
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  <span>Whatsapp</span>
                </span>
              </label>
            </div>
          </fieldset>
        </div>
        <footer className="brochure-request-footer">
          {formNotice ? <p role="status" aria-live="polite" className="mr-auto text-xs text-gray-600">{formNotice}</p> : null}
          <button type="submit">Submit request</button>
        </footer>
        </form>
      </dialog>
    </>
  )
}

export default Brochure
