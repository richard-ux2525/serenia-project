import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { TouchEvent } from 'react'
import boulevard from '../icons/boulevard.svg'
import facilites from '../icons/Facilities.svg'
import bedRoom from '../icons/Bedroom.svg'
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'

import arunaImage from '../assets/aruna.png'
import navaImage from '../assets/nava.png'
import propertyImage from '../assets/Image Container.png'
import serayaImage from '../assets/seraya.png'
import veloraImage from '../assets/velora.png'


// COMMUNITY DATA

const communities = [
  {
    id: 'aruna',
    badge: 'The modern comfort',
    title: 'Aruna Residence',
    description:
    'Spacious homes with minimalist design, surrounded by lush parks and playgrounds — the perfect place for families to grow and thrive.',
    images: [arunaImage, propertyImage, navaImage, veloraImage],
    beds: '2–4 Bedroom options',
    facility: 'Family-friendly facilities',
    location: 'Easy access to main boulevard',
    price: '$85,000',
    to: '/properties/aruna',
  },

  {
    id: 'liora',
    badge: 'Luxury living',
    title: 'Liora Estate',
    description:
      'Premium cluster with modern architecture, a private clubhouse, and 24/7 security — offering both style and peace of mind for residents.',
    images: [propertyImage, arunaImage, serayaImage, veloraImage],
    beds: '3–5 Bedroom options',
    facility: 'Private clubhouse & pool',
    location: 'Gated 24/7 security access',
    price: '$120,000',
    to: '/properties',
  },

  {
    id: 'nava',
    badge: 'Eco-friendly sanctuary',
    title: 'Nava Heights',
    description:
      'Eco-minded residences surrounded by open green spaces, jogging tracks, and sustainable community gardens.',
    images: [navaImage, serayaImage, arunaImage, propertyImage],
    beds: '2–4 Bedroom options',
    facility: 'Lush botanical parks',
    location: '5 mins to central park',
    price: '$95,000',
    to: '/properties',
  },

  {
    id: 'velora',
    badge: 'Contemporary hub',
    title: 'Velora Park',
    description:
      'Contemporary cluster with stylish facades, pocket parks, and direct access to shopping and dining hubs.',
    images: [veloraImage, propertyImage, arunaImage, serayaImage],
    beds: '2–4 Bedroom options',
    facility: 'Pocket parks & lounges',
    location: 'Walkable to retail & dining',
    price: '$110,000',
    to: '/properties',
  },

  {
    id: 'seraya',
    badge: 'Green community',
    title: 'Seraya Grove',
    description:
      'A vibrant cluster blending modern housing with lush greenery, close to schools and community spaces.',
    images: [serayaImage, navaImage, veloraImage, arunaImage],
    beds: '3–4 Bedroom options',
    facility: 'Community learning spaces',
    location: 'Minutes from top schools',
    price: '$90,000',
    to: '/properties',
  },
]


function SignatureCommunities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const current = communities[currentIndex]
  const lastIndex = communities.length - 1

  const goPrev = () => setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1)
  const goNext = () => setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1)

  // Swipe on phones and tablets: a finger moving more than 50px changes the community
  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const distance = event.changedTouches[0].clientX - touchStartX
    return distance < -50 ? goNext() : distance > 50 ? goPrev() : null
  }

  return (
    <section className="bg-paper px-4 py-12 sm:px-6 sm:py-20 lg:px-8">

      {/* HEADING */}

      <div className="mx-auto mb-8 max-w-[1312px] text-center sm:mb-12">

        <h2 className="text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
          Discover signature <br/> communities
        </h2>

      </div>


      {/* CAROUSEL CONTAINER */}

      <div className="mx-auto max-w-[1312px]">

        <div
          onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden bg-stone-200"
        >
          <div key={current.id} className="community-slide grid grid-cols-1 touch-pan-y md:grid-cols-2">

              {/* LEFT SIDE: IMAGE */}

              <div className="group relative h-64 overflow-hidden bg-white p-3 sm:h-80 md:h-auto md:min-h-[32rem]">

                <img
                  src={current.images[0]}
                  alt={`${current.title} property view`}
                  draggable="false"
                  className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />



                {/* IMAGE INDICATORS */}


               
              </div>


              {/* RIGHT SIDE: DETAILS */}

              <div className="flex flex-col justify-between bg-white px-5 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
               <div>
                  {/* BADGE */}

                  <div className="mb-6 inline-flex items-center gap-2 bg-gold-cream px-3 py-2 text-sm font-semibold tracking-wider text-gold">
                    {current.badge}

                  </div>

                  {/* TITLE */}

                  <p className="text-2xl font-medium tracking-tight text-stone-900 sm:text-4xl">
                    {current.title}
                  </p>
                  {/* DESCRIPTION */}

                  <p className="mt-3 max-w-lg text-sm leading-7 text-stone-800">
                    {current.description}
                  </p>

                </div>

                

<div>
    {/* SPECIFICATIONS */}

                  <div className="space-y-2">

                    {/* BEDROOMS */}

                    <div className="flex items-center gap-4">
                      <img src={bedRoom} alt="" className="h-5 w-5 text-stone-600" />
                      <div>
                        <p className="mt-1 text-sm font-medium text-stone-800">
                          {current.beds}
                        </p>
                      </div>
                    </div>


                    {/* AMENITIES */}

                    <div className="flex items-center gap-4">
                      <img src={facilites} alt="" className="h-5 w-5 text-stone-600" />
                      <div>
                        <p className="mt-1 text-sm font-medium text-stone-800">
                          {current.facility}
                        </p>
                      </div>
                    </div>


                    {/* LOCATION */}

                    <div className="flex items-center gap-4">
                      <img src={boulevard} alt="" className="h-5 w-5 text-stone-600" />
                      <div>
                        <p className="mt-1 text-sm font-medium text-stone-800">
                          {current.location}
                        </p>
                      </div>
                    </div>
                </div>
                {/* PRICE AND LINK */}

                  <div className="mt-12 flex flex-wrap items-end justify-between gap-5 border-t border-stone-200 pt-7">

                  <div>

                    <p className="text-sm font-medium text-stone-400">
                      Starts from
                    </p>

                    <p className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                      {current.price}
                    </p>

                  </div>


                  <Link
                    to={current.to}
                    className="group inline-flex items-center gap-3 bg-stone px-6 py-3.5 font-medium transition duration-300 hover:bg-olive hover:text-white"
                  >

                    Discover

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                  </Link>

                </div>

</div>
              </div>

          </div>

        </div>

      </div>


      {/* NAVIGATION */}

      <div className="mx-auto mt-8 flex max-w-[1312px] items-center gap-6 sm:gap-10">

        {/* PROGRESS BAR */}

        <div className="h-[3px] rounded flex-1 overflow-hidden bg-stone-300">

          <div
            className="h-full bg-stone-900 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / communities.length) * 100}%` }}
          />

        </div>


        <div className="flex items-center gap-2">


          {/* PREVIOUS */}

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous community"
            className="flex h-11 w-11 items-center justify-center bg-white text-stone-700 transition hover:border-stone-900 hover:bg-olive hover:text-white"
          >

            <ArrowLeft className="h-5 w-5" />

          </button>


          {/* NEXT */}

          <button
            type="button"
            onClick={goNext}
            aria-label="Next community"
            className="flex h-11 w-11 items-center justify-center bg-white text-stone-700 transition hover:border-stone-900 hover:bg-olive hover:text-white"
          >

            <ArrowRight className="h-5 w-5" />

          </button>

        </div>

      </div>

    </section>
  )
}


export default SignatureCommunities