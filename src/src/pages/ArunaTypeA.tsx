import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  EllipsisVertical,
  Share,
  ArrowRight,
  Ruler,
  Home,
  Layers,
  BedDouble,
  Bath,
  Building2,
  GraduationCap,
  ShoppingBag,
  Hospital,
  Train,
  type LucideIcon,
} from 'lucide-react'
import arunaMain from '../assets/arunamain.png'
import aruna1 from '../assets/aruna1.png'
import aruna2 from '../assets/aruna2.png'
import aruna3 from '../assets/aruna3.png'
import aruna4 from '../assets/aruna4.png'
import aruna5 from '../assets/aruna5.png'
import aruna6 from '../assets/aruna6.png'
import mapAruna from '../assets/maparuna.png'
import mainBed from '../assets/mainbed.png'
import bedroom1 from '../assets/bedroom (1).png'
import bedroom2 from '../assets/bedroom (2).png'
import bedroom3 from '../assets/bedroom (3).png'
import floorplan3d from '../assets/stupidbox.png'
import preview3dImg from '../assets/imagevideo.png'

const HERO_SLIDES = [
  { id: 'main', src: arunaMain, alt: 'Aruna Type A Exterior' },
  { id: '1', src: aruna1, alt: 'Aruna exterior view 1' },
  { id: '2', src: aruna2, alt: 'Aruna exterior view 2' },
  { id: '3', src: aruna3, alt: 'Aruna exterior view 3' },
  { id: '4', src: aruna4, alt: 'Aruna exterior view 4' },
  { id: '5', src: aruna5, alt: 'Aruna exterior view 5' },
  { id: '6', src: aruna6, alt: 'Aruna exterior view 6' },
]

const SPECS: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Ruler, label: 'Land & building size', value: '2,000 ft²' },
  { icon: Home, label: 'House style', value: 'Modern minimalist' },
  { icon: Layers, label: 'Total floor', value: 'Double floor' },
  { icon: BedDouble, label: 'Bedrooms', value: '3 bedrooms' },
  { icon: Bath, label: 'Bathrooms', value: '2 bathrooms' },
  { icon: Building2, label: 'Cluster', value: 'Aruna residence' },
]

const NEARBY_PLACES: { name: string; distance: string; icon: LucideIcon }[] = [
  {
    name: 'Greenfield International School',
    distance: '2.1 km • 5 min drive',
    icon: GraduationCap,
  },
  {
    name: 'Selhurst Mall & Lifestyle Center',
    distance: '3.4 km • 10 min drive',
    icon: ShoppingBag,
  },
  {
    name: 'Royal Care Hospital',
    distance: '4.8 km • 12 min drive',
    icon: Hospital,
  },
  {
    name: 'Selhurst Central Station',
    distance: '2.7 km • 8 min drive',
    icon: Train,
  },
]

const GALLERY_CATEGORIES = [
  'Outside',
  'Bedroom',
  'Bathroom',
  'Kitchen',
  'Backyard',
  'Family room',
  'Street',
] as const

type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

const GALLERY_BY_CATEGORY: Record<
  GalleryCategory,
  { main: { src: string; alt: string }; side: { src: string; alt: string }[] }
> = {
  Outside: {
    main: { src: arunaMain, alt: 'Aruna outside view' },
    side: [
      { src: aruna1, alt: 'Exterior detail 1' },
      { src: aruna2, alt: 'Exterior detail 2' },
      { src: aruna3, alt: 'Exterior detail 3' },
    ],
  },
  Bedroom: {
    main: { src: mainBed, alt: 'Master Bedroom' },
    side: [
      { src: bedroom1, alt: 'Bedroom detail' },
      { src: bedroom2, alt: 'Bedroom window' },
      { src: bedroom3, alt: 'Closet space' },
    ],
  },
  Bathroom: {
    main: { src: mainBed, alt: 'Bathroom layout' },
    side: [
      { src: bedroom1, alt: 'Vanity area' },
      { src: bedroom2, alt: 'Shower enclosure' },
      { src: bedroom3, alt: 'Storage details' },
    ],
  },
  Kitchen: {
    main: { src: arunaMain, alt: 'Kitchen and dining space' },
    side: [
      { src: aruna4, alt: 'Countertop finishes' },
      { src: aruna5, alt: 'Cabinetry detail' },
      { src: aruna6, alt: 'Kitchen lighting' },
    ],
  },
  Backyard: {
    main: { src: aruna2, alt: 'Backyard lawn' },
    side: [
      { src: aruna3, alt: 'Patio access' },
      { src: aruna5, alt: 'Garden edge' },
      { src: aruna6, alt: 'Outdoor view' },
    ],
  },
  'Family room': {
    main: { src: mainBed, alt: 'Family room seating' },
    side: [
      { src: bedroom2, alt: 'Natural daylight' },
      { src: bedroom1, alt: 'Lounge corner' },
      { src: bedroom3, alt: 'Built-in shelving' },
    ],
  },
  Street: {
    main: { src: aruna1, alt: 'Neighborhood street' },
    side: [
      { src: aruna4, alt: 'Tree-lined avenue' },
      { src: aruna5, alt: 'Cluster frontage' },
      { src: aruna6, alt: 'Walkway view' },
    ],
  },
}

const FULL_SPEC_SECTIONS = [
  {
    id: 'interior',
    title: 'Interior Features',
    items: [
      {
        label: 'Flooring',
        detail: 'Polished 60x60 cm granite tiles throughout living and dining areas.',
      },
      {
        label: 'Lightning',
        detail: 'LED fixtures with dimmable switches in living room and bedrooms.',
      },
      {
        label: 'Appliances',
        detail:
          'Included built-in electric stove, range hood, and sink in an open-concept kitchen.',
      },
      {
        label: 'Design Details',
        detail: 'Vaulted ceiling in living area; large corner windows for ample natural light.',
      },
      {
        label: 'Smart Elements',
        detail: 'Wi-Fi-enabled smart lighting control and keyless smart door lock system.',
      },
    ],
  },
  {
    id: 'layout',
    title: 'Property & Layout',
    items: [
      { label: 'Plot Configuration', detail: 'Standard corner and mid-block 2,000 ft² lots.' },
      { label: 'Ceiling Height', detail: '3.2m floor-to-ceiling clearance across primary rooms.' },
    ],
  },
  {
    id: 'construction',
    title: 'Construction & Materials',
    items: [
      { label: 'Structure', detail: 'Reinforced concrete frame with insulated masonry walls.' },
      { label: 'Roofing', detail: 'Weather-resistant concrete roof tiles with thermal foil.' },
    ],
  },
  {
    id: 'utilities',
    title: 'Utilities & Green Energy',
    items: [
      { label: 'Water & Power', detail: 'Municipal water supply and 3,500VA underground electrical.' },
      { label: 'Eco Ready', detail: 'Pre-wired conduit provision for solar rooftop panels.' },
    ],
  },
  {
    id: 'community',
    title: 'Community & Amenities',
    items: [
      { label: 'Security', detail: '24/7 guarded main gate with CCTV perimeter monitoring.' },
      { label: 'Recreation', detail: 'Jogging tracks, pocket parks, and clubhouse access.' },
    ],
  },
]

const FLOOR_PLAN_ZONES = [
  { num: 1, title: 'Bedroom', desc: 'Private and bright sleeping space for rest' },
  { num: 2, title: 'Kitchen', desc: 'Functional modern kitchen for cooking' },
  { num: 3, title: 'Family room', desc: 'Spacious living area for gathering' },
  { num: 4, title: 'Dining area', desc: 'Cozy dining spot for meals' },
  { num: 5, title: 'Sliding door', desc: 'Wide access to fresh air and light' },
  { num: 6, title: 'Balcony', desc: 'Relaxing outdoor corner with view' },
]

const PAYMENT_ROWS = [
  { label: 'Monthly Installment', value: 'From $750 / month' },
  { label: 'Down Payment', value: 'Min. 20%**' },
  { label: 'Loan Tenure', value: '10 / 15 / 20 years' },
  { label: 'Interest Rate', value: '5% fixed (first 3 years)' },
  { label: 'Payment Methods', value: 'Bank Transfer' },
  { label: 'Additional Fees', value: 'Notary, Tax, Admin' },
  { label: 'Special Offers', value: 'Free Legal Fee' },
]

function ArunaTypeA() {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0)
  const [expandedAbout, setExpandedAbout] = useState(false)
  const [activeGalleryTab, setActiveGalleryTab] = useState<GalleryCategory>('Bedroom')
  const [openSpecIds, setOpenSpecIds] = useState<Record<string, boolean>>({ interior: true })
  const [floorLevel, setFloorLevel] = useState<'ground' | 'upper'>('ground')
  const [copiedLink, setCopiedLink] = useState(false)

  const activeSlide = HERO_SLIDES[selectedSlideIndex] ?? HERO_SLIDES[0]
  const thumbnails = HERO_SLIDES.slice(1)
  const activeGallery = GALLERY_BY_CATEGORY[activeGalleryTab]

  const toggleSpec = (id: string) => {
    setOpenSpecIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard?.writeText(window.location.href)
      setCopiedLink(true)
      window.setTimeout(() => setCopiedLink(false), 2000)
    } catch {
      setCopiedLink(false)
    }
  }

  const progressWidthPercent = ((selectedSlideIndex + 1) / HERO_SLIDES.length) * 100

  return (
    <div className="min-h-dvh bg-white text-slate-900 antialiased">
      <main className="mx-auto px-4 py-6 md:px-8 lg:px-12">
        {/* Breadcrumb & Actions */}
              <title>Aruna Type A - Serenia Real Estate</title>
        <div className="mb-4 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2">
            <Link to="/properties" className="hover:text-slate-800">
              All clusters
            </Link>
            <span>/</span>
            <Link to="/properties/aruna" className="hover:text-slate-800">
              Aruna residence
            </Link>
            <span>/</span>
            <span className="w-20 rounded-3xl bg-slate-200 p-2 text-center font-medium text-slate-800">
              Type-A
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="flex h-10 items-center justify-center gap-1.5 border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              <Share className="h-4 w-4" />
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <button
              type="button"
              aria-label="More options"
              className="flex h-10 w-8 items-center justify-center border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50"
            >
              <EllipsisVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Hero Image + Thumbnail Strip */}
        <div className="relative mb-10 w-full">
          <img
            src={activeSlide.src}
            alt={activeSlide.alt}
            className="w-full object-cover sm:h-[520px] lg:h-[1408px]"
          />

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 border border-white/20 bg-black/40 p-2 backdrop-blur-3xl">
            {thumbnails.map((thumb, idx) => {
              const slideIndex = idx + 1
              const isSelected = selectedSlideIndex === slideIndex
              return (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setSelectedSlideIndex(slideIndex)}
                  aria-label={`View ${thumb.alt}`}
                  className={`h-12 w-16 cursor-pointer overflow-hidden transition-opacity ${
                    isSelected
                      ? 'border-2 border-white/80 opacity-100'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={thumb.src} alt={thumb.alt} className="h-full w-full object-cover" />
                </button>
              )
            })}
          </div>

          <div className="absolute bottom-2 left-1/2 h-0.5 w-full max-w-4xl -translate-x-1/2 bg-white/30 px-4">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progressWidthPercent}%` }}
            />
          </div>
        </div>

        {/* Main Content + Sticky Sidebar */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            {/* Title & Quick Specs */}
            <section className="space-y-6 border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
                    Aruna - Type A
                  </h1>
                  <p className="mt-1 text-xs text-slate-500">
                    Serenia Residences, Harmony Street No. 12, Selhurst, London, England
                  </p>
                </div>
                <Link
                  to="/contact?unit=aruna-type-a"
                  className="inline-flex items-center gap-1.5 self-start whitespace-nowrap bg-stone px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-stone-200 sm:self-auto"
                >
                  <span>12 unit available</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="grid grid-cols-1 border border-slate-100 sm:grid-cols-3">
                {SPECS.map((spec) => {
                  const SpecIcon = spec.icon
                  return (
                    <div key={spec.label} className="spec-box border border-slate-200 flex items-center gap-3 p-4">
                      <SpecIcon className="h-5 w-5 shrink-0 text-gray-500" aria-hidden="true" />
                      <div>
                        <span className="block text-[11px] text-slate-400">{spec.label}</span>
                        <span className="text-xs font-bold text-slate-900">{spec.value}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* About */}
            <section className="space-y-3 border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-medium text-slate-900">About properties</h2>
              <p className="text-xs leading-relaxed text-slate-600">
                Aruna Residence offers modern residences with minimalist designs that blend in with
                the green surroundings, providing comfort for dynamic families. Each unit is designed
                with an open layout that maximizes natural light and air circulation. With a spacious
                living room that connects directly to the backyard, this house supports a healthy and
                harmonious lifestyle.
              </p>
              <p className="text-xs leading-relaxed text-slate-600">
                The master bedroom features a private balcony, offering privacy and stunning views of
                the green surroundings. The modern kitchen with an open-concept design makes cooking
                more enjoyable while strengthening family bonding moments. Aruna Residence is the
                perfect choice for young families and professionals seeking a home with a strategic
                location.{' '}
                {expandedAbout ? (
                  <span>
                    Thoughtful cross-ventilation, durable architectural finishes, and easy access to
                    nearby parks make day-to-day living effortless across every season.
                  </span>
                ) : null}{' '}
                <button
                  type="button"
                  onClick={() => setExpandedAbout((prev) => !prev)}
                  className="cursor-pointer border-b border-gray-500 p-1 font-medium text-gray-700"
                >
                  {expandedAbout ? 'Show less' : 'Read more'}
                </button>
              </p>
            </section>

            {/* Locations */}
            <section className="space-y-4 border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-medium text-slate-900">Locations</h2>
              <div className="shadow-box w-full">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="w-full p-4 md:w-1/2">
                    <div className="relative h-64 overflow-hidden bg-slate-50 md:h-72">
                      <img
                        src={mapAruna}
                        alt="Neighborhood Map"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full space-y-4 p-4 md:w-1/2">
                    <div className="mb-2 border-b border-slate-200 p-2 text-lg font-medium text-slate-900">
                      This residence is near with :
                    </div>

                    {NEARBY_PLACES.map((place, index) => {
                      const PlaceIcon = place.icon
                      return (
                        <div
                          key={place.name}
                          className={`flex items-center justify-between ${
                            index < NEARBY_PLACES.length - 1
                              ? 'border-b border-slate-100 pb-3'
                              : ''
                          }`}
                        >
                          <div>
                            <div className="mb-2 font-semibold text-slate-800">{place.name}</div>
                            <div className="text-[11px] text-slate-400">{place.distance}</div>
                          </div>
                          <PlaceIcon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Room Gallery */}
            <section className="space-y-6 border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Gallery</h2>

              <div
                role="tablist"
                aria-label="Room categories"
                className="flex flex-wrap gap-2 border-b border-slate-100 pb-3 text-xs font-medium"
              >
                {GALLERY_CATEGORIES.map((category) => {
                  const isActive = activeGalleryTab === category
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveGalleryTab(category)}
                      className={`cursor-pointer px-4 py-1.5 transition-colors ${
                        isActive
                          ? 'bg-stone font-bold text-slate-900'
                          : 'text-slate-500 hover:bg-stone'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
                <div className="h-[340px] overflow-hidden md:col-span-8">
                  <img
                    src={activeGallery.main.src}
                    alt={activeGallery.main.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex h-[340px] flex-col gap-2.5 md:col-span-4">
                  {activeGallery.side.map((img) => (
                    <div key={img.alt} className="h-1/3 overflow-hidden">
                      <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Full Specifications */}
            <section className="shadow-box space-y-4 bg-white p-6">
              <h2 className="mb-2 text-lg font-medium text-slate-900">Full specifications</h2>

              <div className="space-y-3">
                {FULL_SPEC_SECTIONS.map((section) => {
                  const isOpen = !!openSpecIds[section.id]
                  return (
                    <div key={section.id} className="accordion-box shadow-box overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleSpec(section.id)}
                        aria-expanded={isOpen}
                        className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-left text-xs font-medium text-slate-900 hover:bg-slate-50"
                      >
                        <span>{section.title}</span>
                        <span className="font-bold text-slate-400">{isOpen ? '−' : '+'}</span>
                      </button>

                      {isOpen ? (
                        <div className="space-y-2.5 bg-white p-4 text-xs text-slate-600">
                          {section.items.map((item) => (
                            <div key={item.label} className="flex gap-2">
                              <span className="shrink-0 font-semibold text-slate-800">
                                • {item.label}
                              </span>
                              <span>: {item.detail}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Floor Plan */}
            <section className="space-y-6 border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Floor plan</h2>

              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
                <div className="space-y-4 md:col-span-6">
                  <div className="flex w-max items-center gap-2 bg-stone p-1 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setFloorLevel('ground')}
                      className={`cursor-pointer px-4 py-1.5 transition-colors ${
                        floorLevel === 'ground'
                          ? 'bg-white font-semibold text-slate-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Ground floor
                    </button>
                    <button
                      type="button"
                      onClick={() => setFloorLevel('upper')}
                      className={`cursor-pointer px-4 py-1.5 transition-colors ${
                        floorLevel === 'upper'
                          ? 'bg-white font-semibold text-slate-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Upper floor
                    </button>
                  </div>

                  <div className="relative flex h-72 items-center justify-center overflow-hidden border border-slate-200 bg-slate-50 p-4">
                    <img
                      src={floorplan3d}
                      alt={`${floorLevel === 'ground' ? 'Ground' : 'Upper'} floorplan 3D`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2 text-xs md:col-span-6">
                  {FLOOR_PLAN_ZONES.map((zone, index) => (
                    <div
                      key={zone.num}
                      className={`flex items-start gap-3 ${
                        index < FLOOR_PLAN_ZONES.length - 1
                          ? 'border-b border-slate-100 pb-3'
                          : ''
                      }`}
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#E7E8E8] bg-stone text-[11px] font-bold text-slate-800">
                        {zone.num}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{zone.title}</div>
                        <div className="text-[11px] text-slate-500">{zone.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar: Price & 3D Preview */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
            <div className="space-y-6 border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Price &amp; payment</h2>

              <div className="shadow-boxxx p-4">
                <span className="mb-0.5 block text-xs text-[#5A5B5B]">Total Price</span>
                <div className="text-3xl font-bold text-[#56593B]">$135,000</div>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4 text-xs">
                {PAYMENT_ROWS.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex justify-between py-1 ${
                      index < PAYMENT_ROWS.length - 1 ? 'border-b border-slate-50' : ''
                    }`}
                  >
                    <span className="text-[#5A5B5B]">{row.label}</span>
                    <span className="font-bold text-slate-900">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  data-tour-trigger
                  className="flex w-full cursor-pointer items-center justify-center gap-2 bg-[#424d31] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#343e26]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Schedule a tour</span>
                </button>
                <Link
                  to="/admin/properties/aruna/details"
                  className="block w-full border border-slate-200 bg-stone py-3 text-center text-sm font-semibold text-slate-800 transition-colors hover:bg-stone-200"
                >
                  View more detail
                </Link>
              </div>
            </div>

            <div className="space-y-4 border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">3D Preview</h2>

              <div className="group relative h-70 w-full cursor-pointer border border-slate-200">
                <img
                  src={preview3dImg}
                  alt="3D Virtual Room"
                  className="h-full w-full"
                />
              </div>

            <Link to="/properties/aruna/type-a/ground-floor">
              <button
                type="button"
                className="w-full cursor-pointer border border-slate-200 bg-stone py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-stone-200"
              >
                Try 360 preview
              </button>
            </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default ArunaTypeA