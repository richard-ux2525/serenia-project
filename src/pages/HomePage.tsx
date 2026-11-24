import { useState } from 'react'
import profileImage from '../assets/Avatar.png'
import caretDown from '../icons/Vector.svg'
import {  MessageSquare,
  Bell,  MoreVertical,
  Calendar,
  Phone,
  Mail,  Menu as MenuIcon,
  CircleArrowUp,
  CircleArrowDown,
} from 'lucide-react'

import Aside from '../components/Aside'

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [timeFilter, setTimeFilter] = useState('This year')
  const [hoveredBar, setHoveredBar] = useState<string | null>('Nava heights')

  // Cluster breakdown data
  const clusterUnitsData = [
    { name: 'Liora estate', units: 34, percent: '28.3%', color: 'bg-[#7A521A]' },
    { name: 'Nava heights', units: 26, percent: '21.7%', color: 'bg-[#966723]' },
    { name: 'Aruna residence', units: 22, percent: '18.3%', color: 'bg-[#B07B2D]' },
    { name: 'Velora park', units: 20, percent: '16.7%', color: 'bg-[#C28C36]' },
    { name: 'Seraya grove', units: 18, percent: '15.0%', color: 'bg-[#D9A34A]' },
  ]

  // Bar chart tour request breakdown per cluster
  const tourBarData = [
    { name: 'Liora...', label: 'Liora estate', value: 42, height: '84%' },
    { name: 'Nava...', label: 'Nava heights', value: 36, height: '72%', active: true },
    { name: 'Arun...', label: 'Aruna residence', value: 28, height: '56%' },
    { name: 'Velor...', label: 'Velora park', value: 22, height: '44%' },
    { name: 'Sera...', label: 'Seraya grove', value: 18, height: '36%' },
  ]

  // Latest tour requests list
  const latestRequests = [
    {
      id: 1,
      initials: 'HR',
      name: 'Alex Johnson',
      subtitle: 'Liora estate • Unit A-18',
      email: 'alexjohn@gmail.com',
      phone: '+1 202 555 0147',
      date: 'Mon, June 12, 2025',
      time: '08:00 am - 10:00 am',
    },
    {
      id: 2,
      initials: 'MA',
      name: 'Miya Agustine',
      subtitle: 'Aruna residence • Unit B-11',
      email: 'miaagustine@gmail.com',
      phone: '+1 090 207 044',
      date: 'Tue, June 13, 2025',
      time: '10:00 am - 12:00 pm',
    },
  ]

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[#F9FAFB] text-gray-900 font-sans antialiased">
      {/* Mobile Sidebar Overlay */}
      <title>Dashboard - Serenia Real Estate</title>


      {/* LEFT SIDEBAR */}
      <Aside sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* MAIN CONTAINER */}
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
            <h1 className="text-base font-bold text-gray-900">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 shadow-boxxx rounded-full hover:bg-gray-100">
              <MessageSquare className="h-4 w-4" />
            </button>
            <button className="relative p-2 text-gray-500 shadow-boxxx rounded-full hover:bg-gray-100">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            <div className="ml-2 shadow-boxxx rounded-3xl flex w-35 justify-between items-center gap-2.5 cursor-pointer p-1">
              <div className='flex items-center gap-2'>
                <img
                src={profileImage}
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

        {/* DASHBOARD CONTENT SCROLLABLE */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* ROW 1: 4 KPI CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="shadow-boxxx bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600">
                    Total properties
                  </span>
                  <button className="p-1 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-3xl font-semibold text-gray-900">160</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold text-[#049228]">
                    <CircleArrowUp className="text-white fill-[#049228] h-4 w-4" />
                    8% <span className="font-normal text-gray-500">From last month</span>
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="shadow-boxxx bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600">
                    Available units
                  </span>
                  <button className="p-1 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-gray-900">120</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold text-rose-700">
                    <CircleArrowDown className="h-4 w-4 text-white fill-rose-500" />
                    5% <span className="font-normal text-gray-500">From last month</span>
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="shadow-boxxx bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600">
                    Upcoming tours
                  </span>
                  <button className="p-1 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-3xl font-semibold text-gray-900">45</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold text-[#049228]">
                    <CircleArrowDown className="h-4 w-4 text-white fill-[#049228]" />
                    12% <span className="font-normal text-gray-500">From last month</span>
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="shadow-boxxx bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600">
                    New request
                  </span>
                  <button className="p-1  hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-3xl font-semibold text-gray-900">21</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold text-[#049228]">
                    <CircleArrowDown className="h-4 w-4 text-white fill-[#049228]" />
                    20% <span className="font-normal text-gray-500">From last month</span>
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 2: TOUR REQUEST LINE CHART & UNITS BREAKDOWN */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Left Line Chart Card (8 cols) */}
              <div className="shadow-boxxx bg-white p-6 lg:col-span-8">
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <h2 className="text-sm font-bold text-gray-900">Tour request</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 shadow-boxxx bg-white px-3 py-1.5 text-xs text-gray-700">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      <select
                        value={timeFilter}
                        onChange={(e) => setTimeFilter(e.target.value)}
                        className="bg-transparent focus:outline-none text-xs font-medium appearance-none inset-0  h-full w-30 cursor-pointer"
                      >
                        <option value="This year">This year</option>
                        <option value="This month">This month</option>
                        <option value="This week">This week</option>
                      </select>
                    </div>
                    <button className="p-1 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* SVG Line Chart View */}
                <div className="mt-6 relative h-64 w-full">
                  <svg
                    className="h-full w-full overflow-visible"
                    viewBox="0 0 600 200"
                    preserveAspectRatio="none"
                  >
                    {/* Horizontal Grid lines */}
                   <div>
                    <span>60</span>
                     <line x1="0" y1="20" x2="600" y2="20" stroke="#f3f4f6" strokeDasharray="3 3" />
                   </div>
                    <line x1="0" y1="60" x2="600" y2="60" stroke="#f3f4f6" strokeDasharray="3 3" />
                    <line x1="0" y1="100" x2="600" y2="100" stroke="#f3f4f6" strokeDasharray="3 3" />
                    <line x1="0" y1="140" x2="600" y2="140" stroke="#f3f4f6" strokeDasharray="3 3" />
                    <line x1="0" y1="180" x2="600" y2="180" stroke="#e5e7eb" />

                    {/* Gradient Fill under line */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#85924C" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#85924C" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <polygon
                      points="20,150 80,100 140,120 200,100 260,75 320,100 380,100 440,60 500,25 500,180 20,180"
                      fill="url(#chartGradient)"
                    />

                    {/* Green trend line */}
                    <polyline
                      fill="none"
                      stroke="#85924C"
                      strokeWidth="2.5"
                      points="20,150 80,100 140,120 200,100 260,75 320,100 380,100 440,60 500,25"
                    />

                    {/* Data Points / Squares */}
                    {[
                      { x: 20, y: 150 },
                      { x: 80, y: 100 },
                      { x: 140, y: 120 },
                      { x: 200, y: 100 },
                      { x: 260, y: 75 },
                      { x: 320, y: 100 },
                      { x: 380, y: 100 },
                      { x: 440, y: 60 },
                      { x: 500, y: 25 },
                    ].map((pt, i) => (
                      <rect
                        key={i}
                        x={pt.x - 3.5}
                        y={pt.y - 3.5}
                        width="7"
                        height="7"
                        fill="#ffffff"
                        stroke="#85924C"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>

                  {/* X Axis Months */}
                  <div className="mt-2 flex justify-between text-[11px] text-gray-400 font-medium">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span className="font-bold text-gray-900">May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                  </div>
                </div>
              </div>

              {/* Right Available Units per Cluster Card (4 cols) */}
              <div className="shadow-boxxx bg-white p-6 lg:col-span-4">
                <div className="flex items-center justify-between pb-3">
                  <h2 className="text-sm font-bold text-gray-900">
                    Available units per cluster
                  </h2>
                  <button className="p-1 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                {/* Big Unit Stat */}
                <div className="mt-1 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">120</span>
                    <span className="text-base text-gray-400 font-normal"> /160</span>
                  </div>
                  <span className="text-[11px] text-gray-400">Total units of all clusters</span>
                </div>

                {/* Segmented Color Bar */}
                <div className="mt-4 flex h-6 w-full gap-1 overflow-hidden">
                  <div className="w-[28%] bg-[#D0A560]" />
                  <div className="w-[22%] bg-[#D3942F]" />
                  <div className="w-[18%] bg-[#BA9B6B]" />
                  <div className="w-[17%] bg-[#996C2C]" />
                  <div className="w-[15%] bg-[#7A521A]" />
                </div>

                {/* List breakdown */}
                <div className="mt-6 space-y-7">
                  {clusterUnitsData.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`h-2 w-2 ${item.color}`} />
                        <span className="font-semibold text-gray-800">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-gray-500 font-medium">
                        {item.units} • {item.percent}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 3: LATEST REQUEST, BAR CHART & CUSTOMER INQUIRIES */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* 1. Latest Request (4 cols) */}
              <div className="shadow-boxxx bg-white p-6 lg:col-span-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <h2 className="text-sm font-bold text-gray-900">Latest request</h2>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  {latestRequests.map((req) => (
                    <div
                      key={req.id}
                      className="border border-gray-100 bg-white p-2 space-y-3"
                    >
                      <div className="p-2 bg-slate">
                        <div className='flex items-center justify-between'>
                          <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center rounded-full justify-center bg-gold-cream text-gold text-xs font-bold border border-amber-200">
                            {req.initials}
                          </div>
                          <div>
                            <h3 className="text-xs font-bold text-gray-900">
                              {req.name}
                            </h3>
                            <span className="text-[11px] text-gray-400">
                              {req.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-1.5">
                          <button className="p-1.5 bg-stone text-gray-600 hover:bg-gray-100">
                            <Phone className="h-3.5 w-3.5" />
                          </button>
                          <button className="p-1.5  bg-stone text-gray-600 hover:bg-gray-100">
                            <Mail className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] border-t border-gray-200/60 pt-2.5">
                        <div>
                          <span className="text-gray-400 block">Email address</span>
                          <span className="font-medium text-gray-800 truncate block">
                            {req.email}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Phone number</span>
                          <span className="font-medium text-gray-800 block">
                            {req.phone}
                          </span>
                        </div>
                        <div className="mt-1">
                          <span className="text-gray-400 block">Date tour</span>
                          <span className="font-semibold text-gray-900 block">
                            {req.date}
                          </span>
                        </div>
                        <div className="mt-1">
                          <span className="text-gray-400 block">Time tour</span>
                          <span className="font-semibold text-gray-900 block">
                            {req.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Tour request Bar Chart per cluster (4 cols) */}
              <div className="shadow-boxxx bg-white p-6 lg:col-span-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2">
                  <h2 className="text-sm font-bold text-gray-900">Tour request</h2>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                {/* Bar Chart relative area */}
                <div className="relative mt-6 h-56 w-full flex items-end justify-between px-2 pb-6 border-b border-gray-200">
                  {/* Tooltip Banner over active bar */}
                  {hoveredBar === 'Nava heights' ? (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1.5 text-center shadow-lg border border-gray-800 z-10">
                      <span className="block text-[10px] text-gray-300">Nava heights</span>
                      <span className="block text-xs font-bold">36 Tour request</span>
                    </div>
                  ) : null}

                  {tourBarData.map((bar) => {
                    const isSelected = hoveredBar === bar.label
                    return (
                      <div
                        key={bar.label}
                        onMouseEnter={() => setHoveredBar(bar.label)}
                        className="flex flex-col items-center gap-2 group cursor-pointer"
                        style={{ height: '100%', justifyContent: 'flex-end' }}
                      >
                        <div
                          className={`w-10 relative flex items-start justify-center transition-all ${
                            isSelected || bar.active
                              ? 'bg-[#85924C]'
                              : 'bg-stone-200/80 hover:bg-stone-300'
                          }`}
                          style={{ height: bar.height }}
                        >
                          <span
                            className={`text-[10px] font-bold mt-1 ${
                              isSelected || bar.active ? 'text-white' : 'text-gray-600'
                            }`}
                          >
                            {bar.value}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-500 font-medium truncate w-12 text-center">
                          {bar.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 3. Customer inquiries Donut Chart (4 cols) */}
              <div className="shadow-boxxx bg-white p-6 lg:col-span-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2">
                  <h2 className="text-sm font-bold text-gray-900">
                    Customer inquiries
                  </h2>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                {/* Donut Chart SVG */}
               <div>
                 <div className="relative my-4 flex items-center justify-center">
                  <svg className="h-48 w-48 -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#E5E7EB"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    {/* Segment 1: Answered (180/240 = 75%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#85924C"
                      strokeWidth="10"
                      strokeDasharray="179 239"
                      strokeDashoffset="0"
                      fill="transparent"
                    />
                    {/* Segment 2: Pending (45/240 = 18.75%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#D9A34A"
                      strokeWidth="10"
                      strokeDasharray="44 239"
                      strokeDashoffset="-179"
                      fill="transparent"
                    />
                  </svg>

                  {/* Donut Center Text */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] text-gray-400">Total of</span>
                    <span className="text-sm font-bold text-gray-900">
                      240 Inquiries
                    </span>
                  </div>
                </div>
               </div>

                {/* Bottom Legend Stats Grid */}
               <div className='flex'>
                      <div className='border w-1/3 border-gray-200 p-3'>
                        <div className='flex gap-3 relative left-3'>
                    <div className='bg-[#98A134] h-9 w-[2px]'> </div>
                    <div className=''>
                      <span className="block text-[10px] text-gray-400">Answered</span>
                    <span className="block text-xs font-bold text-gray-900">180</span>
                    </div>
                  </div>
                      </div>

                       <div className='border-y w-1/3 border-gray-200 p-3'>
                        <div className='flex gap-3 relative left-3'>
                    <div className='bg-[#D29C30] h-9 w-[2px]'> </div>
                    <div className=''>
                      <span className="block text-[10px] text-gray-400">Answered</span>
                    <span className="block text-xs font-bold text-gray-900">180</span>
                    </div>
                  </div>
                      </div>

                       <div className='border w-1/3 border-gray-200 p-3'>
                        <div className='flex gap-3 relative left-3'>
                    <div className='bg-[#D8D9D9] h-9 w-[2px]'> </div>
                    <div className=''>
                      <span className="block text-[10px] text-gray-400">Answered</span>
                    <span className="block text-xs font-bold text-gray-900">180</span>
                    </div>
                  </div>
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
