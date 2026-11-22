import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import Facilities from '../components/Facilities'
import smalltennisCourt from '../assets/smelltenniscourtnet.png'
import basketBallCourt from '../assets/basketballcourtwithhunchback.png'
import stupidGym from '../assets/stupidgym.png'
import crazyChildren from '../assets/crazychildren.png'
import avoidMe from '../assets/deadzone.png'
import dirtyPool from '../assets/dirtypool.png'
import uglyKeke from '../assets/uglykeke.png'
import supidPool from '../assets/supidpool.png'
import thatLady from '../assets/thatladyagain.png'
import unnamedResturant from '../assets/unnamedresturant.png'
import { uglybush } from '../imports'

const heroColumns = [
  {
    id: 'col-1',
    direction: 'up',
    duration: '34s',
    images: [
      { src: smalltennisCourt, label: 'Championship Tennis Court', className: 'w-70' },
      { src: basketBallCourt, label: 'Outdoor Basketball Court', className: 'w-70' },
      { src: stupidGym, label: 'Wellness & Fitness Studio', className: 'w-70' },
    ],
  },
  {
    id: 'col-2',
    direction: 'down',
    duration: '40s',
    images: [
      { src: stupidGym, label: 'Wellness & Fitness Studio', className: 'w-90' },
      { src: crazyChildren, label: 'Kids Creative Play Zone', className: 'w-90' },
      { src: dirtyPool, label: 'Resort Horizon Pool', className: 'w-90' },
    ],
  },
  {
    id: 'col-3',
    direction: 'up',
    duration: '44s',
    images: [
      { src: unnamedResturant, label: 'Artisan Dining & Cafe', className: 'w-90' },
      { src: uglyKeke, label: 'Central Community Park', className: 'w-90' },
      { src: thatLady, label: 'Scenic Jogging Promenade', className: 'w-90' },
    ],
  },
  {
    id: 'col-4',
    direction: 'down',
    duration: '38s',
    images: [
      { src: thatLady, label: 'Scenic Jogging Promenade', className: 'w-90' },
      { src: avoidMe, label: 'Botanical Lawn & Fairway', className: 'w-90' },
      { src: crazyChildren, label: 'Kids Creative Play Zone', className: 'w-90' },
    ],
  },
  {
    id: 'col-5',
    direction: 'up',
    duration: '34s',
    images: [
      { src: dirtyPool, label: 'Resort Horizon Pool', className: 'w-90' },
      { src: uglybush, label: 'Landscaped Garden Walk', className: 'w-70' },
      { src: basketBallCourt, label: 'Outdoor Basketball Court', className: 'w-70' },
    ],
  },
]

const staggeredOffsets = [
  'h-165',
  'h-165 mt-49',
  'h-165 mt-75',
  'h-165 mt-49',
  'h-165',
]

const clustersData = [
  {
    name: 'Liora estate',
    cardClass: 'bg-white shadow-bocx p-10 transition-shadow duration-300 hover:shadow-md',
    titleClass: 'text-3xl font-medium text-gray-900',
    items: [
      {
        title: 'Infinity Swimming Pool',
        description: (
          <>
            A stylish pool that blends seamlessly with the horizon, offering breathtaking <br />{' '}
            scenic views. It&apos;s designed for both relaxation and leisure swims, creating a
            good <br />
            serene atmosphere where you can unwind and enjoy moments of tranquility.
          </>
        ),
        image: supidPool,
      },
      {
        title: "Residents' Lounge & Coffee Corner",
        description:
          'A cozy communal space with freshly brewed coffee, comfortable seating, and quiet corners for reading or casual meetups.',
      },
      {
        title: "Children's Creative Playground",
        description:
          'An imaginative outdoor play zone equipped with safe, modern structures designed to inspire active play.',
      },
      {
        title: 'Private Jogging Loop',
        description:
          'A dedicated tree-lined running and walking track circling the cluster for peaceful morning and evening exercise.',
      },
    ],
  },
  {
    name: 'Nava heights',
    cardClass: 'bg-white shadow-bocx p-10 transition-shadow duration-300 hover:shadow-md',
    titleClass: 'text-2xl font-bold text-gray-900',
    items: [
      {
        title: 'Sky Deck Viewing Terrace',
        description:
          'An elevated panoramic terrace overlooking the surrounding greenery and skyline.',
      },
      {
        title: 'Rooftop Yoga & Wellness Area',
        description:
          'An open-air wellness deck crafted for sunrise stretching, meditation, and group yoga sessions.',
      },
      {
        title: 'Indoor Gym & Fitness Studio',
        description:
          'Fully equipped with cardio machines, free weights, and functional training gear for residents.',
      },
      {
        title: 'BBQ & Outdoor Dining Pavilion',
        description:
          'Shaded outdoor grilling stations and dining tables ideal for weekend family gatherings.',
      },
    ],
  },
  {
    name: 'Aruna residence',
    cardClass: 'bg-white p-10 shadow-bocx transition-shadow duration-300 hover:shadow-md',
    titleClass: 'text-3xl font-medium text-gray-900',
    items: [
      {
        title: 'Central Playground with Smart Play Equipment',
        description:
          'Interactive and safe play installations situated at the heart of the Aruna neighborhood.',
      },
      {
        title: 'Multipurpose Community Hall',
        description:
          'A spacious indoor venue for neighborhood events, workshops, and private celebrations.',
      },
      {
        title: 'Mini Market & Daily Needs Kiosk',
        description:
          'Convenient access to fresh groceries and everyday household essentials right inside the cluster.',
      },
      {
        title: 'Cycling Track',
        description:
          'A smooth, dedicated bicycle path connecting residential lanes to green open parks.',
      },
    ],
  },
  {
    name: 'Velora park',
    cardClass: 'bg-white shadow-bocx p-10 transition-shadow duration-300 hover:shadow-md',
    titleClass: 'text-2xl font-bold text-gray-900',
    items: [
      {
        title: 'Basketball Court',
        description:
          'A full-sized outdoor court built with high-grip surfacing for casual shootarounds and friendly matches.',
      },
      {
        title: 'Skate & Roller Park',
        description:
          'Smooth ramps and rails tailored for skaters and inline enthusiasts of all skill levels.',
      },
      {
        title: 'Open Green Amphitheater',
        description:
          'Tiered grassy seating for outdoor movie nights, acoustic performances, and community talks.',
      },
      {
        title: 'Community Garden Plots',
        description:
          'Shared planter beds where neighbors can grow herbs, flowers, and organic produce together.',
      },
    ],
  },
  {
    name: 'Seraya grove',
    cardClass: 'bg-white shadow-bocx p-10 transition-shadow duration-300 hover:shadow-md',
    titleClass: 'text-2xl font-bold text-gray-900',
    items: [
      {
        title: 'Exclusive Clubhouse',
        description:
          'A private residents-only social hub featuring lounge seating, meeting rooms, and concierge support.',
      },
      {
        title: 'Reading Pavilion & Library Corner',
        description:
          'A tranquil garden pavilion stocked with curated books and quiet study nooks.',
      },
      {
        title: 'Pet-Friendly Park',
        description:
          'A fenced, landscaped green lawn with agility features and shaded benches for pets and owners.',
      },
      {
        title: "Outdoor Swimming Pool with Kids' Splash Area",
        description:
          'A resort-style lap pool paired with a shallow, supervised splash zone for younger children.',
      },
    ],
  },
]

function Amenities() {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    'Liora estate-0': true,
  })

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <main className="bg-stone">
      <title>Amenities - Serenia Real Estate</title>
      <style>{`
        @keyframes sereniaScrollUp {
          0% {
            transform: translate3d(0, 0%, 0);
          }
          100% {
            transform: translate3d(0, -50%, 0);
          }
        }

        @keyframes sereniaScrollDown {
          0% {
            transform: translate3d(0, -50%, 0);
          }
          100% {
            transform: translate3d(0, 0%, 0);
          }
        }

        .serenia-marquee-up {
          animation-name: sereniaScrollUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .serenia-marquee-down {
          animation-name: sereniaScrollDown;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .serenia-marquee-mask {
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 88%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 88%,
            transparent 100%
          );
        }
      `}</style>

      <section className="max-w-full overflow-hidden pt-16 pb-12 text-center">
        <h1 className="mx-auto max-w-2xl text-7xl font-medium leading-[1.1] tracking-tight text-gray-900">
          Facilities
          <br />
          designed around
          <br />
          your needs
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-gray-800">
          Discover thoughtfully planned amenities and modern <br /> facilities designed to support a
          vibrant, comfortable, <br /> and connected lifestyle within Serenia.
        </p>

        <section
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false)
            setHoveredCard(null)
          }}
          className="serenia-marquee-mask flex h-210 w-full justify-center gap-3 overflow-hidden"
        >
          {heroColumns.map((column, colIdx) => {
            const loopedImages = [...column.images, ...column.images]
            const animClass =
              column.direction === 'down' ? 'serenia-marquee-down' : 'serenia-marquee-up'

            return (
              <div
                key={column.id}
                className={`${staggeredOffsets[colIdx]} overflow-hidden`}
              >
                <div
                  style={{
                    animationDuration: column.duration,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                  className={`${animClass} flex flex-col space-y-5 will-change-transform`}
                >
                  {loopedImages.map((img, imgIdx) => {
                    const cardId = `${column.id}-${imgIdx}`
                    const isDimmed = hoveredCard && hoveredCard !== cardId

                    return (
                      <div
                        key={cardId}
                        onMouseEnter={() => setHoveredCard(cardId)}
                        className={`group relative shrink-0 overflow-hidden bg-stone-200/60 shadow-sm transition-all duration-500 ease-out ${
                          isDimmed ? 'opacity-65 scale-[0.99]' : 'opacity-100'
                        }`}
                      >
                        <img
                          src={img.src}
                          className={`${img.className} block transition-transform duration-700 ease-out group-hover:scale-105`}
                          alt={img.label}
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 py-3 text-left opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="text-xs font-medium tracking-wide text-white">
                            {img.label}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
      </section>

      <section className="max-w-full -translate-y-40 bg-stone pt-20">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-semibold tracking-tight text-gray-900">
            General facilities
          </h1>
          <p className="text-md mx-auto mt-5 max-w-sm leading-relaxed text-gray-800">
            Facilities and amenities available in all types of <br />
            clusters, from Type-A to Type-C
          </p>
        </div>
        <Facilities />
        <section className="border-t border-gray-100 bg-[#f9f9f9] px-6 py-20 lg:px-16">
          <div className="mx-auto max-w-350">
            <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-sm text-start text-4xl font-medium leading-tight tracking-tight text-gray-900 lg:text-4xl">
                Exclusive <br /> facilities in each <br /> cluster
              </h2>
              <p className="max-w-xs text-start text-xs leading-relaxed text-gray-500">
                Every cluster is thoughtfully designed with its own <br /> set of facilities,
                ensuring comfort and convenience <br /> for residents in every neighborhood.
              </p>
            </div>

            <div className="space-y-12">
              {clustersData.map((cluster) => (
                <div key={cluster.name} className={cluster.cardClass}>
                  <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    <div className="pt-2 lg:col-span-4">
                      <h3 className={cluster.titleClass}>{cluster.name}</h3>
                    </div>
                    <div className="overflow-hidden border border-gray-200/80 bg-white shadow-sm lg:col-span-8">
                      {cluster.items.map((item, idx) => {
                        const key = `${cluster.name}-${idx}`
                        const isOpen = !!openAccordions[key]
                        const isLast = idx === cluster.items.length - 1

                        return isOpen ? (
                          <div
                            key={key}
                            className={`p-6 transition-colors duration-200 ${!isLast ? 'border-b border-gray-100' : ''}`}
                          >
                            <div
                              onClick={() => toggleAccordion(key)}
                              className="mb-3 flex cursor-pointer items-center justify-between"
                            >
                              <h4 className="text-3xl font-medium text-gray-900">{item.title}</h4>
                              <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200">
                                <Minus className="h-3.5 w-3.5" />
                              </div>
                            </div>
                            <p className="mb-4 max-w-xl text-justify text-sm leading-relaxed text-gray-500">
                              {item.description}
                            </p>
                            {item.image && (
                              <div className="h-65 w-full overflow-hidden bg-slate-100 sm:h-65">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                                />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            key={key}
                            onClick={() => toggleAccordion(key)}
                            className={`group flex cursor-pointer items-center justify-between px-6 py-4 transition-colors duration-200 ${
                              !isLast ? 'border-b border-gray-100' : ''
                            } hover:bg-slate-50`}
                          >
                            <span className="text-sm font-semibold text-gray-800 transition-transform duration-200 group-hover:translate-x-1">
                              {item.title}
                            </span>
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#424d31] group-hover:text-white">
                              <Plus className="h-3.5 w-3.5" />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Amenities