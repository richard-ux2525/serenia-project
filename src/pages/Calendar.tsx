import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })
  const [selectedDate, setSelectedDate] = useState('')

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPreviousMonth = new Date(year, month, 0).getDate()
  const days = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstWeekday + 1
    if (day < 1) return { day: daysInPreviousMonth + day, date: '', currentMonth: false }
    if (day > daysInMonth) return { day: day - daysInMonth, date: '', currentMonth: false }
    return { day, date: [year, String(month + 1).padStart(2, '0'), String(day).padStart(2, '0')].join('-'), currentMonth: true }
  })

  const changeMonth = (amount: number) => {
    setCurrentMonth((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1))
  }

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#f9f9f9] px-4 py-8">
      <section className="w-full max-w-[380px] border border-stone-200 bg-white p-5 sm:p-8" aria-label="Choose a date">
        <div className="mb-6 flex items-center justify-between">
          <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month" className="grid h-9 w-9 place-items-center text-gray-500 hover:bg-stone-100 hover:text-gray-900">
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800" aria-live="polite">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h1>
          <button type="button" onClick={() => changeMonth(1)} aria-label="Next month" className="grid h-9 w-9 place-items-center text-gray-500 hover:bg-stone-100 hover:text-gray-900">
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-3 grid grid-cols-7 text-center text-[11px] font-semibold text-gray-500" aria-hidden="true">
          {weekdays.map((weekday) => <span key={weekday}>{weekday}</span>)}
        </div>

        <div className="grid grid-cols-7 justify-items-center gap-y-1">
          {days.map(({ day, date, currentMonth: isCurrentMonth }, index) => {
            if (!isCurrentMonth) {
              return <span key={`outside-${index}`} className="grid aspect-square w-full max-w-10 place-items-center text-sm text-gray-300">{day}</span>
            }

            const isSelected = selectedDate === date
            return (
              <button
                key={date}
                type="button"
                aria-label={new Date(year, month, day).toLocaleDateString('en-US', {
                  weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
                })}
                aria-pressed={isSelected}
                onClick={() => setSelectedDate(date)}
                className={`grid aspect-square w-full max-w-10 place-items-center text-sm transition-colors ${isSelected ? 'bg-[#53583c] font-semibold text-white' : 'text-gray-700 hover:bg-stone-100'}`}
              >
                {day}
              </button>
            )
          })}
        </div>

        <p className="mt-5 min-h-5 border-t border-stone-200 pt-4 text-sm text-gray-600" aria-live="polite">
          {selectedDate ? `Selected: ${new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-US', { dateStyle: 'long' })}` : 'Select a date'}
        </p>
      </section>
    </main>
  )
}

export default Calendar