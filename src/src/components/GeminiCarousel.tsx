import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { uglybush, whiteladyrunning, uglychild } from '../imports'

const facilitiesItems = [
  { title: 'Landscaped Parks', description: 'Green spaces with trees and walking paths.', image: uglybush },
  { title: 'Jogging track', description: 'Dedicated path for running and walking.', image: whiteladyrunning },
  { title: 'Central Playground', description: 'A shared play area for children and families.', image: uglychild },
]

function GeminiCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const lastIndex = facilitiesItems.length - 1

  // Going back from the first card jumps to the last one, and the other way round
  const goPrev = () => setActiveIndex(activeIndex === 0 ? lastIndex : activeIndex - 1)
  const goNext = () => setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1)

  // Put the active card first and move the cards before it to the end
  const orderedItems = facilitiesItems.slice(activeIndex).concat(facilitiesItems.slice(0, activeIndex))

  return (
    <>
      <div className="reveal bg-slate w-full px-4 py-10 text-center text-3xl font-medium sm:py-14 sm:text-4xl lg:p-15 lg:text-5xl">
        <h1>
          Facilities &amp; <br /> amenities in this <br /> cluster
        </h1>
      </div>

      <section className="mt-6 bg-slate px-4 sm:mt-10 sm:px-6 xl:px-0">
        <div className="mx-auto w-full max-w-[92rem] overflow-hidden">
          <div className="grid grid-cols-1 gap-6 transition-all duration-300 md:grid-cols-3 lg:gap-10">
            {orderedItems.map((item) => (
              <div key={item.title} className="items-start bg-white p-4">
                <div className="flex min-h-20 flex-col justify-between gap-2 p-3">
                  <h2 className="text-2xl font-semibold text-stone-800 sm:text-3xl">{item.title}</h2>
                  <span className="text-base text-stone-700">{item.description}</span>
                </div>
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover sm:h-96 lg:h-130" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between gap-3 bg-white p-5 sm:p-10">
        <div className="h-0.5 flex-1 bg-black/20">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / facilitiesItems.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous facility"
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next facility"
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default GeminiCarousel
