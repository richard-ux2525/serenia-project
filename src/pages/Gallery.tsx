import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import clusterIcon from '../icons/clusterIcon.svg'
import caretDown from '../icons/Vector.svg'
import {
  imageA1,
  imageA2,
  imageA3,
  imageA4,
  imageB1,
  imageB2,
  imageB3,
  imageB4,
  imageC1,
  imageC2,
  imageC3,
  imageC4,
} from '../imports'

const segments = [
  'Outlook',
  'Park',
  'Bedroom',
  'Rooftop',
  'Playground',
  'Kitchen',
  'Bathroom',
  'Family room',
  'Clubhouse',
  'Street',
]

const galleryImages = [
  { src: imageA1, alt: 'Kitchen interior detail' },
  { src: imageB1, alt: 'Modern kitchen sink and counter' },
  { src: imageC1, alt: 'Fresh ingredients on a kitchen counter' },
  { src: imageA2, alt: 'Kitchen counter detail' },
  { src: imageB2, alt: 'Kitchen and dining space' },
  { src: imageC2, alt: 'Bright kitchen island' },
  { src: imageA3, alt: 'Kitchen workspace' },
  { src: imageB3, alt: 'Kitchen accessories on the counter' },
  { src: imageC3, alt: 'Kitchen utensils and finishes' },
  { src: imageA4, alt: 'Kitchen sink and countertop' },
  { src: imageB4, alt: 'Kitchen with modern lighting' },
  { src: imageC4, alt: 'Contemporary kitchen island' },
]

const questions = [
  {
    question: 'Are the furniture and decorations in the gallery included in the purchase?',
    answer: (
      <>
        <p>
          The standard purchase includes the house structure and built-in features only. Furniture
          and decorations shown in the gallery are for illustration purposes and are not part of the
          purchase.
        </p>
        <p>
          However, we do offer optional furnishing packages if you would like a move-in-ready home.
          These packages typically include:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong className="font-medium text-neutral-900">Living Room :</strong> Sofa set, coffee
            table, TV cabinet, lighting fixtures.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Dining Area :</strong> Dining table,
            chairs, accent decor.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Bedrooms :</strong> Beds, wardrobes,
            side tables, bedding options.
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Kitchen &amp; Pantry :</strong> Extra
            storage units, selected appliances, bar stools (depending on package).
          </li>
          <li>
            <strong className="font-medium text-neutral-900">Decorations :</strong> Wall art, rugs,
            and accessories to complete the look.
          </li>
        </ul>
        <p>
          This way, you can either fully personalize your interiors or choose from our curated
          packages for added convenience.
        </p>
      </>
    ),
  },
  {
    question: 'Will the property I purchase look exactly like the gallery images?',
    answer: (
      <p>
        Gallery images are intended to illustrate the design and finishes. Final details may vary
        by property and selected package.
      </p>
    ),
  },
  {
    question: 'Can I visit a show unit to see the interiors in person?',
    answer: (
      <p>
        Contact our team to ask about current show-home availability and arrange a visit.
      </p>
    ),
  },
  {
    question: 'Can I request changes to the kitchen, bedroom, or living room layouts?',
    answer: (
      <p>
        Available customization options depend on the property and stage of construction. Our team
        can provide details for a specific home.
      </p>
    ),
  },
  {
    question: 'Do you provide different design themes for the interiors?',
    answer: (
      <p>
        Contact our team for information about the design themes and finish packages available for
        each property.
      </p>
    ),
  },
]

function Gallery() {
  const [activeSegment, setActiveSegment] = useState('Kitchen')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main className="mx-auto max-w-[90rem] px-4 py-10 md:px-8 lg:px-12">
      <title>Gallery - Serenia Real Estate</title>
      <section
        aria-labelledby="gallery-title"
        className="reveal mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
      >
        <div className="mb-2 mt-6 space-y-4">
          <h1
            id="gallery-title"
            className="text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Our gallery
          </h1>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Explore our community&apos;s charm with elegant homes and amenities, designed for your
            family&apos;s comfort.
          </p>
        </div>
        <div className="w-full space-y-2 md:w-auto">
          <span className="block text-lg font-semibold text-slate-700">Clusters</span>
          <div className="relative flex h-13 w-full items-center md:w-90 justify-between border border-gray-200 bg-white transition-colors duration-200 hover:border-gray-400 focus-within:border-gray-900">
            <img
              src={clusterIcon}
              alt=""
              className="pointer-events-none absolute left-2.5 h-7 w-7"
            />

            <select
              name="cluster"
              defaultValue="all"
              className="h-full w-full cursor-pointer appearance-none bg-transparent pl-11 pr-8 text-lg text-gray-900 outline-none"
            >
              <option value="all">All clusters</option>
              <option value="outlook">Outlook</option>
              <option value="park">Park</option>
              <option value="bedroom">Bedroom</option>
              <option value="rooftop">Rooftop</option>
              <option value="playground">Playground</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="family-room">Family room</option>
              <option value="clubhouse">Clubhouse</option>
              <option value="street">Street</option>
            </select>

            <img
              src={caretDown}
              alt=""
              className="pointer-events-none absolute right-3 h-3 w-3 opacity-70"
            />
          </div>
        </div>
      </section>

      <div
        role="tablist"
        aria-label="Gallery segments"
        className="mb-8 flex w-full items-center justify-between overflow-x-auto bg-[#f2f2f2] p-1.5"
      >
        {segments.map((segment) => (
          <button
            key={segment}
            type="button"
            role="tab"
            aria-selected={activeSegment === segment}
            onClick={() => setActiveSegment(segment)}
            className={`min-w-fit flex-1 cursor-pointer whitespace-nowrap px-4 py-2.5 text-sm transition-all duration-200 sm:px-5 ${
              activeSegment === segment
                ? 'bg-white font-medium text-gray-950 shadow-[0_1px_2px_rgba(0,0,0,0.06)]'
                : 'font-normal text-gray-500 hover:text-gray-800'
            }`}
          >
            {segment}
          </button>
        ))}
      </div>

      <section aria-label={`${activeSegment} gallery`} className="reveal delay-1">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[0, 1, 2].map((column) => (
            <div key={column} className={`space-y-4 reveal delay-${column + 1}`}>
              {galleryImages.slice(column * 4, column * 4 + 4).map((image) => (
                <figure key={image.src} className="gallery-photo overflow-hidden bg-slate-100 shadow-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="gallery-faq-title"
        className="reveal -mx-4 mb-10 mt-14 px-4 py-10 sm:mt-24 sm:mb-16 sm:py-16 md:-mx-8 md:min-h-240 md:px-8 lg:-mx-12 lg:px-12"
      >
        <div className="mx-auto w-full max-w-5xl">
          <p
            id="gallery-faq-title"
            className="mx-auto mb-10 max-w-sm text-center text-3xl font-medium leading-[1.15] tracking-tight text-neutral-900 sm:mb-14 sm:text-4xl lg:text-[42px]"
          >
            FAQs after our
            <br />
            customer sees
            <br />
            gallery
          </p>

          <div className="space-y-4">
            {questions.map(({ question, answer }, index) => (
              <div
                key={question}
                className={`bg-white ${openIndex === index ? '' : 'transition-colors hover:bg-neutral-50/70'}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className={`flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-5 text-left text-[15px] font-medium text-neutral-900 sm:px-6 ${
                    openIndex === index ? 'border-b border-neutral-100' : ''
                  }`}
                >
                  <span>{question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#f2f2f2] text-neutral-700">
                    {openIndex === index ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                {openIndex === index ? (
                  <div className="space-y-4 px-4 py-5 text-[13.5px] leading-relaxed text-neutral-600 sm:px-6">
                    {answer}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Gallery