import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BedDouble, MapPin, TriangleAlert, ArrowUpRight } from 'lucide-react'
import chevronDown from '../icons/Vector.svg'
import arunaImage from '../assets/aruna.png'
import navaImage from '../assets/nava.png'
import propertyImage from '../assets/Image Container.png'
import serayaImage from '../assets/seraya.png'
import veloraImage from '../assets/velora.png'

const clusters = [
  {     
    name: 'Liora estate',   
    image: propertyImage,   
    detail: 'Premium cluster with modern architecture, a private clubhouse, and 24/7 security — offering both style and peace of mind for residents.',  
    beds: '3–5 bedrooms',  
    to: '/properties'  
  },
  {   
    name: 'Nava heights',   
    image: navaImage,   
    detail: 'Premium cluster with modern architecture, a private clubhouse, and 24/7 security — offering both style and peace of mind for residents.',  
    beds: '2–4 bedrooms',  
    to: '/properties'  
  },
  {   
    name: 'Aruna residence',  
    image: arunaImage,   
    detail: 'Spacious homes with minimalist design, surrounded by lush parks and playgrounds — the perfect place for families to grow and thrive.',  
    beds: '2–4 bedrooms',  
    to: '/properties/aruna'  
  },
  {   
    name: 'Velora park',  
    image: veloraImage,  
    detail: 'Contemporary cluster with stylish facades, pocket parks, and direct access to shopping and dining hubs.',  
    beds: '2–4 bedrooms',  
    to: '/properties'  
  },
  {   
    name: 'Seraya grove',   
    image: serayaImage,   
    detail: 'A vibrant cluster blending modern housing with lush greenery, close to schools and community spaces.',  
    beds: '3–4 bedrooms',  
    to: '/properties'  
  },
]

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(2)
  const activeCluster = clusters[activeIndex]
  const desktopRef = useRef(null)
  
  const location = useLocation()
  const isActive = location.pathname.startsWith('/properties')

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopRef.current && !desktopRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <li className="relative list-none">
      
      {/* =========================================================
          1. DESKTOP VIEW (md and up) with Active Under-Stroke
         ========================================================= */}
      <div ref={desktopRef} className="hidden md:flex items-center gap-3 relative h-full py-2">
        <Link 
          to="/properties" 
          className={`transition-colors ${isActive ? 'text-stone-950 font-semibold' : ''}`}
        >
          Properties
        </Link>
        
        <div 
          className="cursor-pointer flex items-center p-1" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <img 
            src={chevronDown} 
            alt="dropdown" 
            className={`h-4 w-3 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>

        {/* Active Under-Stroke Indicator */}
        {isActive && (
          <div className="absolute bottom-[-22px] left-0 right-0 h-[2px] bg-stone-900" />
        )}

        {isOpen && (
          <>
            {/* Blurred Backdrop Overlay */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-x-0 bottom-0 top-32 z-40 bg-black/20 backdrop-blur-lg"
              aria-hidden="true"
            />

            {/* Mega Menu Card */}
            <div className="absolute left-1/2 top-12 mt-3 z-50 h-120 w-300 -translate-x-1/3 -translate-y-3 overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <div className="grid h-full overflow-hidden bg-white md:grid-cols-3">
                
                {/* Left Column: Cluster List */}
                <div className="flex h-full flex-col bg-slate-50 border-r border-slate-200">
                  {clusters.map((cluster, index) => {
                    const isClusterActive = activeIndex === index
                    return (
                      <Link
                        key={cluster.name}
                        to={cluster.to}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setIsOpen(false)}
                        className={`flex flex-1 items-center justify-center border-b border-slate-200 px-4 text-xl font-medium transition-colors last:border-b-0 ${
                          isClusterActive ? 'bg-white text-black' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        {cluster.name}
                        <sup
                          className={`ml-1 align-super text-[13px] ${
                            isClusterActive ? 'text-slate-600' : 'text-slate-400'
                          }`}
                        >
                          0{index + 1}
                        </sup>
                      </Link>
                    )
                  })}
                </div>

                {/* Middle Column: Active Image Preview */}
                <div className="relative h-full w-full overflow-hidden bg-slate-100">
                  <img
                    src={activeCluster.image}
                    alt={activeCluster.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right Column: Active Details & Specs */}
                <div className="flex h-full min-w-0 flex-col justify-between bg-white p-6 sm:p-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold text-slate-900">
                      {activeCluster.name}
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-600">
                      {activeCluster.detail}
                    </p>
                  </div>
                  <div className="space-y-3 text-lg font-medium text-slate-700">
                    <div className="flex items-center gap-3">
                      <BedDouble aria-hidden="true" className="h-5 w-5" />
                      <span>{activeCluster.beds}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TriangleAlert aria-hidden="true" className="h-5 w-5" />
                      <span>Family-friendly facilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin aria-hidden="true" className="h-5 w-5 shrink-0" />
                      <span>Easy access to main boulevard</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </div>

      {/* =========================================================
          2. MOBILE VIEW (Below md)
         ========================================================= */}
      <div className="md:hidden">
        <div className="flex items-center justify-between w-full">
          <Link 
            to="/properties" 
            onClick={() => setMobileOpen(false)}
            className={isActive ? 'font-semibold text-stone-950' : ''}
          >
            Properties
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 cursor-pointer"
          >
            <img 
              src={chevronDown} 
              alt="dropdown" 
              className={`h-4 w-3 transition-transform duration-300 ${
                mobileOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-3 flex flex-col space-y-2 border-l-2 border-stone-200 pl-3">
            {clusters.map((cluster) => (
              <Link
                key={cluster.name}
                to={cluster.to}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between rounded-sm px-3 py-2.5 transition-colors hover:bg-stone-100"
              >
                <div>
                  <p className="text-base font-medium text-stone-900">{cluster.name}</p>
                  <p className="text-xs text-stone-500">{cluster.beds}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-stone-400" />
              </Link>
            ))}

            <div className="mt-2 border-t border-stone-100 pt-2">
              <Link
                to="/properties"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-sm bg-[#F3F3F3] px-3 py-2 text-xs font-medium text-stone-800 transition-colors hover:bg-stone-200"
              >
                <span>View all properties</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

    </li>
  )
}

export default Dropdown