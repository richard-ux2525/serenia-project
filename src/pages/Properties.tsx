import type { FormEvent } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { arunaImage, navaImage, propertyImage, serayaImage, veloraImage } from '../imports'
import { Search, ShieldCheck, MapPin, Trees, Building, Car, Sparkles, ArrowUpRight } from 'lucide-react'
import bedroomIcon from '../icons/Bedroom.svg'
import boulevard from '../icons/boulevard.svg'
import nextImage from '../icons/Facilities.svg'
import lifestyle from '../icons/Lifestyle Icon.svg'

const properties = [
  {
    name: 'Liora estate',
    image: propertyImage,
    alt: 'Liora estate residence',
    badge: 'Elegant living, redefined',
    description:
      'Premium cluster with modern architecture, a private clubhouse, and 24/7 security — offering both style and peace of mind for residents.',
    features: ['3–5 Bedroom options', 'Private gate & 24/7 security', 'Near lifestyle center'],
    price: 120000,
    to: '/contact?community=liora-estate',
  },
  {
    name: 'Nava heights',
    image: navaImage,
    alt: 'Nava heights community',
    badge: 'Nature meets lifestyle',
    description:
      'Designed for eco-living with wide open scenic jogging tracks and elevated views that bring nature closer to home.',
    features: ['2–4 Bedroom options', 'Wide roads & open spaces', 'Scenic jogging tracks'],
    price: 98000,
    to: '/contact?community=nava-heights',
  },
  {
    name: 'Aruna residence',
    image: arunaImage,
    alt: 'Aruna residence homes',
    badge: 'The modern comfort',
    description:
      'Spacious homes with minimalist design, surrounded by lush parks and playgrounds — the perfect place for families to grow and thrive.',
    features: ['2–4 Bedroom options', 'Family-friendly facilities', 'Easy access to main boulevard'],
    price: 85000,
    to: '/properties/aruna',
  },
  {
    name: 'Velora park',
    image: veloraImage,
    alt: 'Velora park homes',
    badge: 'Dynamic living, urban vibe',
    description:
      'Contemporary cluster with stylish facades, pocket parks, and direct access to shopping and dining hubs.',
    features: ['2–4 Bedroom options', 'Pocket parks & community spaces', 'Trendy design homes'],
    price: 105000,
    to: '/contact?community=velora-park',
  },
  {
    name: 'Seraya grove',
    image: serayaImage,
    alt: 'Seraya grove community',
    badge: 'Living with a natural touch',
    description:
      'A vibrant cluster blending modern housing with lush greenery, close to schools and community spaces.',
    features: ['3–4 Bedroom options', 'Central park & kids area', 'Easy access to public facilities'],
    price: 95000,
    to: '/contact?community=seraya-grove',
  },
]

const getFeatureIcon = (feature: string) => {
  const text = feature.toLowerCase()
  if (text.includes('bedroom')) {
    return <img src={bedroomIcon} alt="Bedrooms" className="h-5 w-5 shrink-0" />
  }
  if (text.includes('security') || text.includes('gate')) {
    return <ShieldCheck className="h-5 w-5 shrink-0 text-stone-500" />
  }
  if (text.includes('park') || text.includes('jogging') || text.includes('greenery')) {
    return <Trees className="h-5 w-5 shrink-0 text-stone-500" />
  }
  if (text.includes('roads') || text.includes('open') || text.includes('wide')) {
    return <Car className="h-5 w-5 shrink-0 text-stone-500" />
  }
  if (text.includes('lifestyle') || text.includes('center') || text.includes('near')) {
    return <img src={lifestyle} alt="" className="h-5 w-5 shrink-0" />
  }
  if (text.includes('boulevard')) {
    return <img src={boulevard} alt="" className="h-5 w-5 shrink-0" />
  }
  if (text.includes('facilities')) {
    return <Building className="h-5 w-5 shrink-0 text-stone-500" />
  }
  if (text.includes('homes')) {
    return <img src={nextImage} alt="" className="h-5 w-5 shrink-0" />
  }
  return <MapPin className="h-5 w-5 shrink-0 text-stone-500" />
}

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams()
  const cluster = searchParams.get('cluster') ?? ''
  const price = searchParams.get('price') ?? ''
  const address = searchParams.get('address') ?? ''
  const normalizedAddress = address.trim().toLowerCase()

  const filteredProperties = properties.filter((property) => {
    const matchesCluster = !cluster || property.name.toLowerCase() === cluster.toLowerCase()
    const matchesAddress = !normalizedAddress || property.name.toLowerCase().includes(normalizedAddress)
    const matchesPrice =
      !price ||
      (price === 'under-100000' && property.price < 100000) ||
      (price === '100000-120000' && property.price >= 100000 && property.price <= 120000) ||
      (price === 'over-120000' && property.price > 120000)

    return matchesCluster && matchesAddress && matchesPrice
  })

  const applyFilters = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const nextParams = new URLSearchParams()

    for (const key of ['cluster', 'price', 'address']) {
      const value = String(data.get(key) ?? '').trim()
      if (value) nextParams.set(key, value)
    }

    setSearchParams(nextParams)
  }

  return (
    <main className="properties-page overflow-hidden">
      <title>Properties - Serenia Real Estate</title>
      <section className="properties-hero reveal bg-white px-5 py-12 text-center sm:px-6 sm:py-16 lg:py-24">
        <h1 className="mx-auto max-w-2xl text-[32px] font-medium leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
          Every community <br />
          have their unique
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm font-normal leading-relaxed text-gray-600 sm:mt-6 sm:max-w-3xl sm:text-lg sm:text-gray-800 lg:text-xl">
          Explore thoughtfully designed residences that combine{' '}
          <br className="hidden lg:inline" /> comfort, style, and a sense of belonging.
        </p>
      </section>

      <section className="bg-stone px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
        <form
          key={searchParams.toString()}
          onSubmit={applyFilters}
          className="mx-auto mb-6 flex w-full max-w-7xl flex-col items-stretch justify-between gap-4 text-gray-700 sm:mb-10 lg:flex-row lg:items-center"
        >
          {/* Left side: Location and Price dropdowns (desktop/tablet, cleanly collapsible on mobile) */}
          <div className="hidden w-full flex-col items-center gap-4 sm:flex sm:flex-row sm:gap-6 lg:w-auto">
            <label className="flex w-full cursor-pointer items-center gap-2 bg-white p-3 sm:w-auto">
              <span className="font-normal text-gray-500">Location :</span>
              <select
                name="cluster"
                defaultValue={cluster}
                onChange={(e) => {
                  const form = e.currentTarget.form
                  if (form) form.requestSubmit()
                }}
                className="cursor-pointer bg-transparent py-2 pr-4 font-medium text-gray-900 focus:outline-none"
              >
                <option value="">All location</option>
                {properties.map((property) => (
                  <option key={property.name} value={property.name}>
                    {property.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex w-full cursor-pointer items-center gap-2 bg-white p-3 sm:w-auto">
              <span className="font-normal text-gray-500">Price :</span>
              <select
                name="price"
                defaultValue={price}
                onChange={(e) => {
                  const form = e.currentTarget.form
                  if (form) form.requestSubmit()
                }}
                className="cursor-pointer bg-transparent py-2 pr-4 font-medium text-gray-900 focus:outline-none"
              >
                <option value="">All price</option>
                <option value="under-100000">Under $100,000</option>
                <option value="100000-120000">$100,000 – $120,000</option>
                <option value="over-120000">Over $120,000</option>
              </select>
            </label>
          </div>

          {/* Search Bar: Full-width compact bar on mobile matching mockup, right-aligned on desktop */}
          <div className="w-full lg:w-auto">
            <div className="relative flex w-full items-center lg:w-80">
              <div className="pointer-events-none absolute left-3.5 text-gray-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                id="address"
                name="address"
                defaultValue={address}
                placeholder="Search cluster name"
                onInput={(e) => {
                  const form = e.currentTarget.form
                  if (form) form.requestSubmit()
                }}
                className="h-12 w-full border border-gray-200/80 bg-white pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none sm:h-15 sm:placeholder-gray-500"
              />
            </div>
          </div>
        </form>

        {filteredProperties.length > 0 ? (
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8">
            {filteredProperties.map((property, index) => (
              <article
                key={property.name}
                className={`property-card reveal flex min-h-0 flex-col overflow-hidden border border-gray-100 bg-white p-3 lg:min-h-[560px] lg:flex-row ${
                  index ? `delay-${Math.min(index, 3)}` : ''
                }`}
              >
                {/* Top/Left Image */}
                <div className="image-zoom aspect-[4/3] w-full overflow-hidden bg-stone-100 sm:aspect-auto sm:min-h-[340px] lg:min-h-0 lg:w-1/2">
                  <img
                    src={property.image}
                    alt={property.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Bottom/Right Details */}
                <div className="flex w-full flex-col justify-between px-2 pb-3 pt-5 sm:p-8 lg:w-1/2 lg:p-12">
                  <div>
                    <span className="mb-4 inline-flex items-center gap-1.5 bg-gold-cream px-3 py-1.5 text-xs font-medium text-gold sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
                      <Sparkles className="h-3.5 w-3.5 shrink-0" />
                      {property.badge}
                    </span>
                    <h2 className="mb-2.5 text-2xl font-semibold capitalize text-gray-900 sm:mb-4 sm:text-4xl">
                      {property.name}
                    </h2>
                    <p className="max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
                      {property.description}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm text-gray-600 sm:mt-10 sm:text-base">
                      {property.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          {getFeatureIcon(feature)}
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Full-Width Mobile CTA */}
                  <div className="mt-6 border-t border-gray-100 pt-4 sm:mt-8 sm:pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-gray-400 sm:hidden">Starts from</span>
                      <div className="hidden sm:block">
                        <span className="mb-1 block text-sm text-gray-400">Starts from</span>
                        <span className="text-3xl font-bold text-gray-900">
                          ${property.price.toLocaleString('en-US')}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-gray-900 sm:hidden">
                        ${property.price.toLocaleString('en-US')}
                      </span>

                      <Link
                        to={property.to}
                        className="secondary-btn hidden items-center gap-2.5 bg-[#f3f3f3] px-6 py-3.5 text-sm font-medium text-gray-900 transition-colors hover:bg-[#e7e7e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 sm:inline-flex"
                      >
                        {property.name === 'Aruna residence' ? 'Discover' : 'Request details'}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <Link
                      to={property.to}
                      className="secondary-btn mt-4 flex w-full items-center justify-center gap-2 bg-[#f3f3f3] py-3.5 text-sm font-medium text-gray-900 transition-colors hover:bg-[#e7e7e7] sm:hidden"
                    >
                      Discover
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-7xl border border-gray-200 bg-white px-6 py-12 text-center">
            <h2 className="text-xl font-medium text-gray-900">No matching communities</h2>
            <p className="mt-2 text-sm text-gray-500">Try changing or clearing your filters.</p>
            <button
              type="button"
              onClick={() => setSearchParams({})}
              className="mt-5 border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Properties