import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { uglybush, whiteladyrunning, uglychild } from '../imports'
const facilitiesItems = [
  {
    title: 'Landscaped Parks',
    description: 'Green spaces with trees and walking paths.',
    image: uglybush,
    imgClass: 'h-130 w-full object-cover',
  },
  {
    title: 'Jogging track',
    description: 'Dedicated path for running and walking.',
    image: whiteladyrunning,
    imgClass: 'h-130 w-full object-cover',
  },
  {
    title: 'Central Playground',
    description: 'A shared play area for children and families.',
    image: uglychild,
    imgClass: 'h-130 w-full object-cover shadow-image',
  },
]

function GeminiCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? facilitiesItems.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % facilitiesItems.length)
  }

  const orderedItems = [
    ...facilitiesItems.slice(activeIndex),
    ...facilitiesItems.slice(0, activeIndex),
  ]

  const progressWidth = `${((activeIndex + 1) / facilitiesItems.length) * 100}%`

  return (
    <>
      <div className="reveal bg-slate h-70 text-center p-15 font-medium text-5xl w-full">
        <h1>
          Facilities &amp; <br /> amenities in this <br /> cluster
        </h1>
      </div>

      <section className="mt-10 bg-slate">
        <div className="w-370 max-w-full mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-300">
            {orderedItems.map((item) => (
              <div
                key={item.title}
                className="bg-white p-4 items-start transition-transform duration-300"
              >
                <div className="p-3 h-20 flex flex-col justify-between">
                  <h2 className="text-3xl text-stone-800 font-semibold">{item.title}</h2>
                  <span className="text-[16px] text-stone-700">{item.description}</span>
                </div>
                <div>
                  <img src={item.image} alt={item.title} className={item.imgClass} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex gap-3 bg-white p-10 items-center justify-between">
        <div className="flex-1">
          <div className="w-full max-w-330 h-0.5 bg-black/20">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous facility"
            className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next facility"
            className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}
export default GeminiCarousel