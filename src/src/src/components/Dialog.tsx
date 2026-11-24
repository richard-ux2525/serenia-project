import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

// Turns a Date into "2026-11-05" so it can be stored and compared as text
function formatDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

const clusters = [
  { value: 'aruna', label: 'Aruna residence' },
  { value: 'liora', label: 'Liora estate' },
  { value: 'nava', label: 'Nava heights' },
  { value: 'velora', label: 'Velora park' },
  { value: 'seraya', label: 'Seraya grove' },
]

const propertyTypes = [
  { value: 'villa', label: 'Villa' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'penthouse', label: 'Penthouse' },
]

const units = [
  { value: '101', label: '101' },
  { value: '102', label: '102' },
  { value: '201', label: '201' },
  { value: '304', label: '304' },
]

function Dialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState('')
  const [formNotice, setFormNotice] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selectedDate) {
      setFormNotice('Please choose a tour date before continuing.')
      return
    }
    setIsSuccess(true)
    setFormNotice('Tour request submitted successfully! Our sales team will reach out shortly.')
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    // Any element with data-tour-trigger opens this dialog
    const openFromTrigger = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest('[data-tour-trigger]')
      if (!trigger) return

      event.preventDefault()
      setIsSuccess(false)
      setFormNotice('')
      if (!dialog.open) dialog.showModal()
    }

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

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPreviousMonth = new Date(year, month, 0).getDate()

  // 42 boxes = 6 weeks. Days from the last/next month are shown greyed out
  const calendarDays = []
  for (let index = 0; index < 42; index++) {
    const dayNumber = index - firstWeekday + 1
    const inMonth = dayNumber >= 1 && dayNumber <= daysInMonth
    calendarDays.push({
      day: dayNumber < 1 ? daysInPreviousMonth + dayNumber : dayNumber > daysInMonth ? dayNumber - daysInMonth : dayNumber,
      date: inMonth ? new Date(year, month, dayNumber) : null,
    })
  }

  const changeMonth = (amount: number) => {
    setCurrentMonth((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1))
  }

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          #tour-request-modal {
            width: calc(100vw - 16px);
            max-height: calc(100dvh - 16px);
          }

          #tour-request-modal .tour-request-content {
            grid-template-columns: minmax(0, 1fr);
            overflow-y: auto;
            overscroll-behavior: contain;
          }

          #tour-request-modal .tour-request-schedule,
          #tour-request-modal .tour-request-fields {
            min-height: auto;
          }
        }
      `}</style>
      <dialog
        ref={dialogRef}
        id="tour-request-modal"
        className="tour-request-dialog"
        aria-labelledby="tour-request-title"
      >
        <div className="tour-request-shell">
          <header className="tour-request-header">
            <h2 id="tour-request-title">Request tour</h2>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close tour request form">
              &times;
            </button>
          </header>

          <form onSubmit={handleSubmit} className="tour-request-form">
            <div className="tour-request-content">
              <section className="tour-request-schedule" aria-label="Choose a tour date and time">
                <div className="tour-date-calendar">
                  <div className="tour-request-section-heading"><span>Select date</span></div>
                  <div className="tour-calendar-navigation">
                    <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">
                      <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <h3 aria-live="polite">{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                    <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">
                      <ChevronRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="tour-calendar-weekdays" aria-hidden="true">
                    {weekdays.map((weekday) => <span key={weekday}>{weekday}</span>)}
                  </div>
                  <div className="tour-calendar-days">
                    {calendarDays.map(({ day, date }, index) =>
                      date ? (
                        <button
                          key={formatDate(date)}
                          type="button"
                          aria-label={date.toDateString()}
                          aria-pressed={selectedDate === formatDate(date)}
                          onClick={() => {
                            setSelectedDate(formatDate(date))
                            setFormNotice('')
                          }}
                        >
                          {day}
                        </button>
                      ) : (
                        <span key={`outside-${index}`} aria-hidden="true">{day}</span>
                      ),
                    )}
                  </div>
                </div>

                <div className="tour-time-card">
                  <div className="tour-request-section-heading">
                    <Clock aria-hidden="true" />
                    <span>Select time</span>
                  </div>
                  <div className="tour-time-field">
                    <label htmlFor="tour-time">Preferred time</label>
                    <select id="tour-time" name="tour-time" defaultValue="" required>
                      <option value="">Select time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:30">05:30 PM</option>
                    </select>
                  </div>
                </div>
              </section>

              <div className="tour-request-fields">
                <input type="hidden" name="tour-date" value={selectedDate} />
                <div className="tour-form-field">
                  <label htmlFor="tour-full-name">Full name</label>
                  <input id="tour-full-name" name="full-name" type="text" placeholder="Enter your name" autoComplete="name" required />
                </div>
                <div className="tour-form-field">
                  <label htmlFor="tour-email">Email address</label>
                  <input id="tour-email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
                </div>
                <div className="tour-form-field">
                  <label htmlFor="tour-phone">Phone number</label>
                  <div className="tour-phone-field">
                    <div className="tour-country-code">
                      <span aria-hidden="true">🇺🇸</span>
                      <select name="country-code" aria-label="Country calling code" defaultValue="+1">
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                        <option value="+971">+971</option>
                      </select>
                    </div>
                    <input id="tour-phone" name="phone" type="tel" placeholder="Enter your number" autoComplete="tel-national" required />
                  </div>
                </div>
                <div className="tour-form-field">
                  <label htmlFor="tour-cluster">Cluster</label>
                  <select id="tour-cluster" name="cluster" defaultValue="aruna">
                    <option value="">Select cluster</option>
                    {clusters.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="tour-property-fields">
                  <div className="tour-form-field">
                    <label htmlFor="tour-property-type">Property type</label>
                    <select id="tour-property-type" name="property-type" defaultValue="villa">
                      <option value="">Select type</option>
                      {propertyTypes.map((pt) => (
                        <option key={pt.value} value={pt.value}>
                          {pt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="tour-form-field">
                    <label htmlFor="tour-unit">Unit</label>
                    <select id="tour-unit" name="unit" defaultValue="101">
                      <option value="">Select unit</option>
                      {units.map((u) => (
                        <option key={u.value} value={u.value}>
                          {u.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="tour-form-field">
                  <label htmlFor="tour-note">Note</label>
                  <textarea id="tour-note" name="note" placeholder="Enter message" rows={3} />
                </div>
              </div>
            </div>

            <footer className="tour-request-footer">
              {formNotice ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mr-auto text-xs px-4 ${
                    isSuccess ? 'text-emerald-700 font-medium' : 'text-gray-600'
                  }`}
                >
                  {formNotice}
                </p>
              ) : null}
              <button type="submit">Submit</button>
            </footer>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Dialog
