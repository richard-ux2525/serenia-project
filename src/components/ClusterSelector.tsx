import { useState } from 'react'
import { ArrowUpRight, BedDouble, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import arunaImage from '../assets/aruna.png'
import navaImage from '../assets/nava.png'
import propertyImage from '../assets/Image Container.png'
import serayaImage from '../assets/seraya.png'
import veloraImage from '../assets/velora.png'

const clusters = [
  {     
    name: 'Liora estate',   
    image: propertyImage,   
    detail: 'Elegant homes with a private clubhouse and 24/7 security.',  
    beds: '3–5 bedrooms',  
    to: '/properties'  
  },
  {   
    name: 'Nava heights',   
    image: navaImage,   
    detail: 'Eco-minded residences surrounded by open green space.',  
    beds: '2–4 bedrooms',  
    to: '/properties'  
    
  },
  {   
    name: 'Aruna residence',  
    image: arunaImage,   
    detail: 'Minimalist family homes beside parks and playgrounds.',  
    beds: '2–4 bedrooms',  
    to: '/properties/aruna'  
    
  },
  {   
    name: 'Velora park',  
    image: veloraImage,  
    detail: 'Contemporary homes close to shopping and dining.',  
    beds: '2–4 bedrooms',  
    to: '/properties'  
    
  },
  {   
    name: 'Seraya grove',   
    image: serayaImage,   
    detail: 'A green community near schools and shared facilities.',  
    beds: '3–4 bedrooms',  
    to: '/properties'  
    
  },
]

function ClusterSelector() {
  const [activeIndex, setActiveIndex] = useState(2)
  const activeCluster = clusters[activeIndex]

  return (
    <div className="absolute left-0 top-full z-50 mt-4 grid max-h-[calc(100dvh-6rem)] w-[min(900px,calc(100vw-32px))] grid-cols-1 overflow-y-auto border border-slate-200 bg-white shadow-xl md:grid-cols-[210px_minmax(0,1fr)_minmax(0,1fr)]">
      <div className="grid min-w-0 grid-cols-2 bg-slate-50 md:grid-cols-1">
        {clusters.map((cluster, index) => (
          <button
            key={cluster.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
            className={`flex items-center justify-between border-b border-r border-slate-200 px-3 py-3 text-left text-xs font-medium sm:px-4 md:min-h-14 md:text-sm ${activeIndex === index ? 'bg-white text-slate-900' : 'text-slate-500 hover:bg-white'}`}
          >
            <span>{cluster.name}</span>
            <sup className="ml-2 text-[10px] text-slate-400">0{index + 1}</sup>
          </button>
        ))}
      </div>

      <div className="relative hidden min-h-64 bg-slate-100 md:block">
        <img src={activeCluster.image} alt={activeCluster.name} className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/45 px-3 py-1 text-[10px] text-white">Serenia communities</span>
      </div>

      <div className="flex min-w-0 flex-col justify-between gap-5 p-4 sm:p-6">
        <div>
          <h2 className="text-lg font-medium text-slate-900 sm:text-2xl">{activeCluster.name}</h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{activeCluster.detail}</p>
        </div>
        <div className="space-y-3 text-xs font-medium text-slate-700">
          <p className="flex items-center gap-3"><BedDouble aria-hidden="true" className="h-4 w-4" />{activeCluster.beds}</p>
          <p className="flex items-center gap-3"><MapPin aria-hidden="true" className="h-4 w-4" />Serenia residential community</p>
          <Link to={activeCluster.to} className="inline-flex items-center gap-2 border-b border-[#56593B]/50 pb-1 text-[#56593B] hover:border-[#56593B]">
            Explore community <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClusterSelector