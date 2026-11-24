
import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  slides: { title: string; image: string }[]
}

function Carousel({ slides }: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mainRef, mainApi] = useEmblaCarousel({ loop: true })
  const [thumbsRef, thumbsApi] = useEmblaCarousel({ containScroll: 'keepSnaps', dragFree: true, loop: true })

  // Keep the big picture, the small thumbnails and the progress bar in sync
  useEffect(() => {
    if (!mainApi) return

    const onSelect = () => {
      const index = mainApi.selectedScrollSnap()
      setSelectedIndex(index)
      thumbsApi?.scrollTo(index)
    }

    onSelect()
    mainApi.on('select', onSelect)
    return () => {
      mainApi.off('select', onSelect)
    }
  }, [mainApi, thumbsApi])

  if (!slides.length) return null

  return (
    <div
      className="w-full min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Serenia gallery"
    >
      <div className="relative isolate overflow-hidden">

        {/* Main carousel */}
        <div className="overflow-hidden" ref={mainRef}>
          <div className="flex touch-pan-y">

            {slides.map((slide, index) => (
              <div
                className="min-w-full flex-[0_0_100%]"
                key={`${slide.title}-${index}`}
                aria-hidden={index !== selectedIndex}
              >
                <div className="relative block aspect-[4/3] w-full overflow-hidden bg-stone-100 sm:aspect-[16/9] lg:max-h-[50rem]">

                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 block h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      index === selectedIndex
                        ? 'scale-[1.04]'
                        : 'scale-100'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Cinematic bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t sm:h-64 from-black/50 via-black/15 to-transparent" />

        {/* Bottom overlay */}
        <div className="relative z-10 w-full">

          <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-12 sm:px-6">

            {/* Thumbnails */}
            <div
              className="relative mb-2 flex min-w-0 justify-between overflow-hidden p-1 sm:mb-4 sm:mr-5 sm:p-2"
              ref={thumbsRef}
            >
              <div className="ml-0 flex w-fit max-w-full gap-2 rounded-sm border border-white/15 bg-black/30 p-1.5 shadow-xl backdrop-blur-xl sm:ml-20 sm:gap-3 sm:p-2">

                {slides.map((slide, index) => (
                  <div
                    className="min-w-0 flex-[0_0_3.5rem] sm:flex-[0_0_6rem]"
                    key={`${slide.title}-thumb-${index}`}
                  >
                    <button
                      type="button"
                      aria-label={`Go to ${slide.title}`}
                      aria-current={
                        index === selectedIndex ? 'true' : undefined
                      }
                      onClick={() => mainApi?.scrollTo(index)}
                      className={`group relative block h-10 w-full overflow-hidden border transition-all duration-500 ease-out sm:h-20 ${
                        index === selectedIndex
                          ? 'border-white shadow-[0_0_14px_rgba(255,255,255,0.25)]'
                          : 'border-white/30 opacity-65 hover:border-white/80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt=""
                        draggable={false}
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                          index === selectedIndex
                            ? 'scale-105'
                            : 'scale-100'
                        }`}
                      />

                      <div
                        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                          index === selectedIndex
                            ? 'opacity-0'
                            : 'opacity-15 group-hover:opacity-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex w-20 shrink-0 items-end gap-2 sm:mb-5 sm:translate-y-7">

              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => mainApi?.scrollPrev()}
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/40 bg-white/80  shadow-lg transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-gray-900 active:scale-95"
              >
                <ChevronLeft aria-hidden="true" size={19} />
              </button>

              <button
                type="button"
                aria-label="Next slide"
                onClick={() => mainApi?.scrollNext()}
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/40 bg-white/80 shadow-lg transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-gray-900 active:scale-95"
              >
                <ChevronRight aria-hidden="true" size={19} />
              </button>

            </div>

            </div>

            {/* Navigation buttons */}
            
            {/* Progress bar */}
            <div>
              <div
                className="relative h-[2px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/30"
                role="progressbar"
                aria-label="Carousel progress"
                aria-valuemin={0}
                aria-valuemax={slides.length}
                aria-valuenow={selectedIndex + 1}
              >

                <div
                  className="h-full rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-[width] duration-700 ease-out"
                  style={{
                    width: `${((selectedIndex + 1) / slides.length) * 100}%`,
                  }}
                />

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Carousel
