import { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/Avatar.png'
import caretDown from '../icons/Vector.svg'
import {
  MessageSquare,
  Bell,
  MoreVertical,
  Pencil,


  Home,
  Layers,
  BedDouble,
  Bath,
  Grid,
  DoorClosed,
  Zap,
  School,
  ShoppingBag,
  Hospital,
  Train,

  Menu as MenuIcon,
  UploadCloud,
  ChartNoAxesColumnIncreasing,
  TriangleRight,
  HousePlus,
  Birdhouse
} from 'lucide-react'

import { arunapropertyimg, maparuna } from '../imports'
import Aside from '../components/Aside'

export default function Details() {
  const [activeTab, setActiveTab] = useState('About')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // History timeline data matching the design
  const historyUpdates = [
    {
      id: 1,
      author: 'Harrison Wells',
      avatar: 'avatar',
      timestamp: 'June 16, 2025 • 08:30 am',
      content:
        'Change the tagline of the cluster from The Comfort zone into The modern comfort, and change the price From $115.000 into From $120.000',
    },
    {
      id: 2,
      author: 'Harrison Wells',
      avatar: 'avatar',
      timestamp: 'June 14, 2025 • 02:15 pm',
      content:
        'Updated the total units in Velora Park from 60 units into 64 units, and adjusted the total types from 10 into 12.',
    },
    {
      id: 3,
      author: 'Harrison Wells',
      avatar: 'avatar',
      timestamp: 'June 10, 2025 • 09:45 am',
      content:
        'Changed the cluster name from "Harmony Residence" into "Aruna Residence", tagline updated into "The modern comfort".',
    },
    {
      id: 4,
      author: 'Harrison Wells',
      avatar: 'avatar',
      timestamp: 'June 5, 2025 • 04:05 pm',
      content:
        'Modified the location address of Naha Heights from Willow Avenue No. 6 into Willow Avenue No. 8, Selhurst, London, England.',
    },
    {
      id: 5,
      author: 'Harrison Wells',
      avatar: 'avatar',
      timestamp: 'June 2, 2025 • 10:30 am',
      content:
        'Updated the cluster status of Seraya Grove from Planned into Opened, tagline changed into "Living with natural touch".',
    },
  ]

  // Specifications matching the grid in design
  const specifications = [
    {
      icon: <TriangleRight className="h-4 w-4 text-gray-500" />,
      title: 'Land & building size',
      value: '2,000 ft²',
    },
    {
      icon: <Birdhouse className="h-4 w-4 text-gray-500" />,
      title: 'House style',
      value: 'Modern minimalist',
    },
    {
      icon: <Layers className="h-4 w-4 text-gray-500" />,
      title: 'Total floor',
      value: 'Double floor',
    },
    {
      icon: <BedDouble className="h-4 w-4 text-gray-500" />,
      title: 'Bedrooms',
      value: '3 bedrooms',
    },
    {
      icon: <Bath className="h-4 w-4 text-gray-500" />,
      title: 'Bathrooms',
      value: '2 bathrooms',
    },
    {
      icon: <Grid className="h-4 w-4 text-gray-500" />,
      title: 'Floor type',
      value: '60×60 granite tiles',
    },
    {
      icon: <ChartNoAxesColumnIncreasing className="h-4 w-4 text-gray-500" />,
      title: 'Stairs',
      value: 'Lightweight steel frame',
    },
    {
      icon: <DoorClosed className="h-4 w-4 text-gray-500" />,
      title: 'Door/Window',
      value: 'Solid wood/alumunium',
    },
    {
      icon: <Zap className="h-4 w-4 text-gray-500" />,
      title: 'Electricity capacity',
      value: '2200 VA',
    },
    {
      icon: <HousePlus className="h-4 w-4 text-gray-500" />,
      title: 'Special amenities',
      value: '4 amenities',
    },
  ]

  // Nearest places data
  const nearestPlaces = [
    {
      name: 'Greenfield International School',
      distance: '2.1 km',
      time: '5 min drive',
      icon: <School className="h-4 w-4 text-gray-600" />,
    },
    {
      name: 'Selhurst Mall & Lifestyle Center',
      distance: '3.4 km',
      time: '10 min drive',
      icon: <ShoppingBag className="h-4 w-4 text-gray-600" />,
    },
    {
      name: 'Royal Care Hospital',
      distance: '4.8 km',
      time: '12 min drive',
      icon: <Hospital className="h-4 w-4 text-gray-600" />,
    },
    {
      name: 'Selhurst Central Station',
      distance: '2.7 km',
      time: '8 min drive',
      icon: <Train className="h-4 w-4 text-gray-600" />,
    },
  ]

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F9FAFB] text-gray-900 font-sans antialiased">
      {/* LEFT SIDEBAR */}
      <title>Cluster Details - Serenia Real Estate</title>
      <Aside sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN LAYOUT WRAPPER */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* TOP HEADER */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="hover:text-gray-700 cursor-pointer">All clusters</span>
              <span>/</span>
              <span className="bg-stone rounded-3xl p-2 text-xs font-medium text-stone-700">
                Cluster details
              </span>
              
            </div>
          </div>

          {/* User Controls */}
              <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 shadow-boxxx rounded-full hover:bg-gray-100">
              <MessageSquare className="h-4 w-4" />
            </button>
            <button className="relative p-2 text-gray-500 shadow-boxxx rounded-full hover:bg-gray-100">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            <div className="ml-2 shadow-boxxx rounded-3xl flex w-35 flex justify-between items-center gap-2.5 cursor-pointer p-1">
              <div className='flex items-center gap-2'>
                <img
                src={avatar}
                alt="Harrison"
                className="h-8 rounded-full w-8 object-cover shadow-boxxx"
              />
              <span className="hidden text-xs font-medium text-gray-800 sm:inline">
                Harrison
              </span>
              </div>
              <img src={caretDown} className='h-2 w-2 mr-3' alt="" />
            </div>
          </div>
        </header>

        {/* CONTENT SCROLLABLE AREA */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-7xl">
            {/* GRID LAYOUT: Center main (8 cols) + Right stats (4 cols) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* LEFT & CENTER COLUMN (8 cols) */}
              <div className="space-y-6 lg:col-span-8">
                {/* 1. CLUSTER HERO CARD */}
                <div className="border border-gray-200 bg-white p-5 shadow-xs">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    {/* Cluster Image */}
                    <div className="h-50 w-full shrink-0 overflow-hidden bg-gray-100 sm:w-56">
                      <img
                        src={arunapropertyimg}
                        alt="Aruna residence"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Cluster Info */}
                    <div className="flex flex-1 flex-col justify-between self-stretch">
                      <div>
                        {/* Header badges & menu */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="border font-medium border-gray-200 bg-white px-2 py-0.5 text-[11px] font-mono font-medium text-gray-700">
                              CL-ARU-003
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-emerald-50 p-1 w-15 text-xs font-medium text-emerald-700">
                              <span className="h-1 rounded-full w-1 bg-emerald-500" />
                              Active
                            </span>
                          </div>
                          <button className="p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Title & Address */}
                        <h1 className="mt-10 text-2xl font-semibold tracking-tight text-gray-900">
                          Aruna residence
                        </h1>
                        <p className="mt-1 text-xs leading-relaxed text-gray-500">
                          Serenia Residences, Harmony Street No. 12,
                          <br />
                          Selhurst, London, England
                        </p>
                      </div>

                      {/* Footer Row */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3 text-xs">
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <UploadCloud className="h-3.5 w-3.5 text-gray-400" />
                          <span>Last update : <strong className="font-medium text-gray-700">June 27, 2025</strong></span>
                        </div>
                        <Link
                          to="/admin/properties/create"
                          className="inline-flex items-center gap-1.5 bg-stone px-3 py-1.5 text-xs font-medium text-gray-700 shadow-xs hover:bg-gray-50 transition-colors"
                        >
                          <Pencil className="h-3.5 w-3.5 " />
                          Edit cluster
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. TABS BAR */}
                <div className="bg-gray-100 p-1">
                  <nav className="flex space-x-1" aria-label="Tabs">
                    {['About', 'Units', 'Amenities', 'Gallery', 'Document'].map(
                      (tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`flex-1 py-2 text-center text-xs font-medium transition-all ${
                            activeTab === tab
                              ? 'bg-white text-gray-900 shadow-xs font-semibold'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                          }`}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </nav>
                </div>

                {/* 3. ABOUT CLUSTER SECTION */}
                <div className="border border-gray-200 bg-white p-6 shadow-xs">
                  <div className="flex items-center justify-between pb-4">
                    <h2 className="text-sm font-semibold text-gray-900">
                      About cluster
                    </h2>
                    <button className="p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Name & Tagline Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <span className="text-xs text-stone-400">Name</span>
                        <p className="mt-0.5 text-xs text-stone-900">
                          Aruna residence
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-stone-400">Tagline</span>
                        <p className="mt-0.5 text-xs text-stone-900">
                          The modern comfort
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <span className="text-xs text-stone-400">Description</span>
                      <p className="mt-1 text-xs leading-relaxed text-stone-900">
                        Aruna Residence offers modern residences with minimalist designs
                        that blend in with the green surroundings, providing comfort for
                        dynamic families. Each unit is designed with an open layout that
                        maximizes natural light and air circulation. With a spacious living
                        room that connects directly to the backyard, this house supports a healthy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. SPECIFICATIONS SECTION */}
                <div className="border border-gray-200 bg-white p-6 shadow-xs">
                  <div className="flex items-center justify-between pb-4">
                    <h2 className="text-sm font-semibold text-gray-900">
                      Specifcations
                    </h2>
                    <button className="p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Specifications Grid Box */}
                  <div className="overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:divide-y">
                      {specifications.map((spec, idx) => (
                        <div
                          key={spec.title}
                          className={`flex items-center gap-3.5 p-4 border-b border-gray-200 ${
                            idx >= specifications.length - 2 ? 'sm:border-b-0' : ''
                          }`}
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                            {spec.icon}
                          </div>
                          <div>
                            <span className="block text-[11px] text-gray-400 font-normal">
                              {spec.title}
                            </span>
                            <span className="block text-xs font-medium text-gray-900 mt-0.5">
                              {spec.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. CLUSTER LOCATION SECTION */}
                <div className="border border-gray-200 bg-white p-6 shadow-xs">
                  <div className="flex items-center justify-between pb-4">
                    <h2 className="text-sm font-semibold text-gray-900">
                      Cluster location
                    </h2>
                    <button className="p-1 hover:bg-gray-100 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                    {/* Left Map Display */}
                    <div className="relative h-64 overflow-hidden border border-gray-200 bg-stone-100 lg:col-span-7">
                      <img
                        src={maparuna}
                        alt="Cluster Map"
                        className="h-full w-full object-cover"
                      />
                      {/* Map Pins overlay indicator */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex h-8 w-8 items-center justify-center bg-gray-900 text-white shadow-lg ring-4 ring-white/60">
                          <Home className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Right Nearest Places List */}
                    <div className="shadow-boxxx bg-white p-4 lg:col-span-5">
                      <h3 className="mb-3 text-xs font-semibold text-gray-900">
                        Nearest place
                      </h3>

                      <div className="divide-y divide-gray-100">
                        {nearestPlaces.map((place) => (
                          <div
                            key={place.name}
                            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                          >
                            <div className="pr-2">
                              <h4 className="text-xs font-medium text-gray-900">
                                {place.name}
                              </h4>
                              <p className="mt-0.5 text-[11px] text-gray-400">
                                {place.distance} • {place.time}
                              </p>
                            </div>
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-gray-200 bg-gray-50">
                              {place.icon}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR COLUMN (4 cols) */}
              <div className="space-y-6 lg:col-span-4">
                {/* 1. UNIT STATS CARD */}
                <div className="border border-gray-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-900">
                      Unit stats
                    </h2>
                    <button className="p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>

                  {/* 2x2 Stats Grid with borders */}
                  <div className="mt-4 grid grid-cols-2 divide-x divide-y divide-gray-200 border border-gray-200">
                    {/* Total */}
                    <div className="p-4">
                      <span className="text-xs text-gray-400">Total</span>
                      <p className="mt-2 text-2xl font-semibold text-gray-900">
                        120
                      </p>
                    </div>
                    {/* Available */}
                    <div className="p-4">
                      <span className="text-xs text-gray-400">Available</span>
                      <p className="mt-2 text-2xl font-semibold text-gray-900">
                        85
                      </p>
                    </div>
                    {/* Sold unit */}
                    <div className="p-4">
                      <span className="text-xs text-gray-400">Sold unit</span>
                      <p className="mt-2 text-2xl font-semibold text-gray-900">
                        35
                      </p>
                    </div>
                    {/* On repair */}
                    <div className="p-4">
                      <span className="text-xs text-gray-400">On repair</span>
                      <p className="mt-2 text-2xl font-semibold text-gray-900">
                        0
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. HISTORY UPDATE CARD */}
                <div className="border border-gray-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-900">
                      History update
                    </h2>
                  </div>

                  {/* Timeline list */}
                  <div className="relative mt-4 space-y-6 before:absolute before:left-4 before:top-3 before:bottom-3 before:w-px before:bg-gray-200">
                    {historyUpdates.map((item) => (
                      <div key={item.id} className="relative flex items-start gap-3">
                        {/* User Avatar pin */}
                        <img
                          src={avatar}
                          alt={item.author}
                          className="relative z-10 h-8 w-8object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col">
                            <h3 className="text-xs font-semibold text-gray-900">
                              {item.author}
                            </h3>
                            <span className="text-[11px] text-gray-400">
                              {item.timestamp}
                            </span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600 font-normal">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
