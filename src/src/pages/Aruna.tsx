import {
  ArrowUpRight,
  Bed,
  Building,
  Building2,
  BusFront,
  Calendar,
  CarFront,
  ChevronLeft,
  ChevronRight,
  Hospital,
  LandPlot,
  Road,
  Rotate3D,
  ShoppingBag,
  ShowerHead,
} from 'lucide-react';
import mapPin from '../icons/mapPin.svg';
import {
  aruna1,
  aruna2,
  aruna3,
  aruna4,
  aruna5,
  aruna6,
  arunamain,
  arunapropertyimg,
  arunathirdone,
  arunatypeb1,
  arunatypeb2,
  arunatypeb3,
  arunatypeb4,
  arunatypeb5,
  arunatypeb6,
  arunatypebmain,
  arunatypec,
  arunatypec1,
  arunatypec2,
  arunatypec3,
  arunatypec4,
  arunatypec5,
  arunatypec6,
  smellyswing,
  stupidmap,
  stupidtree,
  uglychair,
} from '../imports';
import { Link } from 'react-router-dom';
import handHeart from '../icons/handHeart.svg';
import GeminiCarousel from '../components/GeminiCarousel';

export default function Aruna() {
  return (
    <main className="aruna-page overflow-x-hidden">
      <title>Aruna Residence - Serenia Real Estate</title>
      {/* Hero + Overlapping Summary Card */}
      <section className="relative w-full">
        <div className="w-full overflow-hidden">
          <img
            src={arunapropertyimg}
            alt="Aruna residence"
            className="mx-auto h-[320px] w-full max-w-[1516px] object-cover sm:h-[620px] lg:h-[820px]"
          />
        </div>

        <div className="relative z-10 mx-auto -mt-10 max-w-325 px-4 sm:-mt-24 sm:px-8 lg:-mt-86">
          <div className="flex flex-col bg-white shadow-bocx lg:flex-row">
            <div className="reveal flex w-full flex-col justify-between bg-white p-5 sm:p-10 lg:w-1/2">
              <div className="mb-6 text-xs font-semibold text-slate-400 sm:mb-10 sm:text-sm">
                <span className="text-stone-400">All clusters / </span>
                <span className="ml-1 rounded-2xl bg-stone px-2.5 py-1.5 text-stone-800 sm:m-2 sm:p-2">
                  Aruna residence
                </span>
              </div>
              <div>
                <h1 className="mb-3 text-3xl font-medium leading-tight text-gray-900 sm:mb-4 sm:text-6xl">
                  Aruna <br /> residence
                </h1>
                <div className="text-xs text-slate-500 sm:text-sm">
                  Starts from{' '}
                  <span className="font-semibold text-[#424d31] sm:font-medium sm:text-slate-600">
                    $98,000
                  </span>
                </div>
              </div>
            </div>

            <div className="reveal delay-1 w-full bg-paper p-3 sm:p-6 lg:w-1/2">
              <div className="mx-auto flex h-full flex-col justify-between bg-white p-4 shadow-bocx sm:p-6">
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 py-2.5 text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <i className="fa-solid fa-bed text-slate-400"></i> Bedrooms
                  </span>
                  <span className="text-right font-semibold text-gray-900">
                    2&ndash;4 Bedroom options
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 py-2.5 text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <i className="fa-solid fa-layer-group text-slate-400"></i> Wall
                  </span>
                  <span className="text-right font-semibold text-gray-900">
                    Lightweight bricks, plaster, paint
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 py-2.5 text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <i className="fa-solid fa-border-all text-slate-400"></i> Floor
                  </span>
                  <span className="text-right font-semibold text-gray-900">
                    60 x 60 granite tiles
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 py-2.5 text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <i className="fa-solid fa-stairs text-slate-400"></i> Stairs
                  </span>
                  <span className="text-right font-semibold text-gray-900">
                    Lightweight steel frame
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 py-2.5 text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <i className="fa-solid fa-door-open text-slate-400"></i> Door/Window
                  </span>
                  <span className="text-right font-semibold text-gray-900">
                    Solid wood &amp; aluminium
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 py-2.5 text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-slate-500">
                    <i className="fa-solid fa-bolt text-slate-400"></i> Electricity Supply
                  </span>
                  <span className="text-right font-semibold text-gray-900">2200 VA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Comfort Intro */}
      <section className="reveal mt-10 px-4 sm:mt-16 lg:mt-28">
        <div className="w-full">
          <img
            src={arunathirdone}
            alt="Aruna residence street view"
            className="mx-auto h-52 -mt-30 w-full max-w-309 object-cover sm:h-80 lg:h-90"
          />
        </div>

        <div className="mx-auto mb-16 max-w-full space-y-5 text-center sm:mb-32 sm:space-y-6">
          <div className="mt-6 inline-flex h-11 items-center gap-2 bg-gold-cream px-3.5 py-2 text-xs font-semibold text-gold sm:mt-10 sm:h-15 sm:p-3 sm:text-sm">
            <img src={handHeart} alt="" className="h-4 w-4 sm:h-5 sm:w-5" /> The modern comfort
          </div>
          <h2 className="text-lg font-medium leading-snug text-gray-900 sm:text-3xl sm:leading-relaxed">
            Aruna Residence offers modern <br className="hidden sm:inline" /> residences with an elegant
            touch, <br className="hidden sm:inline" />
            designed{' '}
            <span className="text-[#a1a1a1]">
              to provide maximum comfort for <br className="hidden sm:inline" /> families. With
              functional layouts, optimal
              <br className="hidden sm:inline" /> natural lighting, and high-quality{' '}
              <br className="hidden sm:inline" /> materials.
            </span>
          </h2>
          <div>
            <button
              type="button"
              data-brochure-trigger
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 bg-stone px-6 py-3 text-xs font-semibold text-gray-900 transition-colors hover:bg-stone-200 sm:w-auto sm:text-sm"
            >
              Request brochure <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Available Home Types */}
      <section className="mx-auto max-w-380 bg-stone px-4 py-10 sm:px-8 sm:p-14 lg:p-20">
        <div className="mb-8 flex flex-col justify-between gap-3 pb-4 sm:mb-12 sm:flex-row sm:items-center sm:gap-4 sm:pb-6">
          <div>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-gray-900 sm:text-[44px] sm:leading-15">
              Available <br /> home types
            </h2>
          </div>
          <p className="text-xs leading-relaxed tracking-tight text-slate-500 sm:text-[16px] sm:leading-5">
            Find the type of house that suits your needs in <br className="hidden sm:inline" /> this
            cluster, use the 360&deg; preview for a better <br className="hidden sm:inline" />{' '}
            experience, here the types:
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {/* Type-A */}
         <Link to="/properties/aruna/type-a">
          <div className="reveal flex w-full flex-col items-stretch gap-4 bg-white p-3 sm:p-4 lg:h-180 lg:flex-row lg:items-center lg:gap-2">
            <div className="order-2 flex h-full w-full flex-col justify-between space-y-5 bg-white p-3 sm:p-8 lg:order-1 lg:w-1/2 lg:space-y-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Link
                    to="/properties/aruna/type-a"
                    className="text-2xl font-medium text-gray-900 hover:text-[#56593B] sm:text-4xl"
                  >
                    Aruna Type-A
                  </Link>
                  <span className="bg-gold-cream px-3 py-1.5 text-xs font-medium text-gold sm:h-10 sm:py-2.5 sm:text-sm">
                    12 Unit available
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-stone-800 sm:text-base">
                  Compact &amp; efficient living &ndash; minimalist housing for{' '}
                  <br className="hidden sm:inline" /> practical young families.
                </p>

                <div className="space-y-3 p-3 text-xs shadow-boxxx sm:space-y-5 sm:p-4 sm:pt-2 sm:text-sm">
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <LandPlot className="h-4 w-4 shrink-0" /> Land area
                    </span>
                    <span className="text-gray-900">2,000 ft&sup2;</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Building className="h-4 w-4 shrink-0" /> Building Area
                    </span>
                    <span className="text-gray-900">1,200 ft&sup2;</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Bed className="h-4 w-4 shrink-0" /> Bedrooms
                    </span>
                    <span className="text-gray-900">3 bedrooms</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <ShowerHead className="h-4 w-4 shrink-0" /> Bathrooms
                    </span>
                    <span className="text-gray-900">2 bathroom</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <CarFront className="h-4 w-4 shrink-0" /> Carport
                    </span>
                    <span className="text-gray-900">For 1 car</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Road className="h-4 w-4 shrink-0" /> Floors
                    </span>
                    <span className="text-gray-900">2 floors</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:items-center sm:gap-3 lg:mt-25">
                <button
                  type="button"
                  data-tour-trigger
                  className="flex flex-1 items-center justify-center gap-2 border border-slate-200 bg-[#424d31] p-3 text-xs font-medium text-white transition-colors hover:bg-[#343e26] sm:text-sm"
                >
                  <Calendar className="h-4 w-4" /> Schedule tour
                </button>
               <Link to="/properties/aruna/type-a/ground-floor">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 border border-slate-200 bg-slate-100 p-3 text-xs font-medium text-gray-800 transition-colors hover:bg-slate-200 sm:text-sm"
                >
                  <Rotate3D className="h-4 w-4" /> Preview 360&deg;
                </button>
               </Link>
              </div>
            </div>

            <div className="relative order-1 w-full space-y-2 sm:space-y-4 lg:order-2 lg:h-full lg:w-1/2">
              <div className="image-zoom relative overflow-hidden">
                <img
                  src={arunamain}
                  alt="Aruna Type-A main"
                  className="h-64 w-full object-cover p-1 sm:h-112 sm:p-2 lg:h-172"
                />
                <button
                  type="button"
                  aria-label="Previous Type-A photo"
                  className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/80 text-slate-700 shadow-sm sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next Type-A photo"
                  className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/80 text-slate-700 shadow-sm sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="z-10 sm:p-3 lg:absolute lg:inset-x-4 lg:bottom-4 lg:p-5">
                <div className="grid grid-cols-6 items-center gap-1.5 bg-black/25 p-2 backdrop-blur-lg sm:gap-3 sm:p-4">
                  <img src={aruna1} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={aruna2} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={aruna3} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={aruna4} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={aruna5} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={aruna6} className="h-10 w-full object-cover sm:h-20" alt="" />
                </div>
              </div>
            </div>
          </div>

         </Link>
          {/* Type-B */}
          <div className="reveal delay-1 flex w-full flex-col items-stretch gap-4 bg-white p-3 sm:p-4 lg:h-180 lg:flex-row lg:items-center lg:gap-2">
            <div className="order-2 flex h-full w-full flex-col justify-between space-y-5 bg-white p-3 sm:p-8 lg:order-1 lg:w-1/2 lg:space-y-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-medium text-gray-900 sm:text-4xl">Aruna Type-B</h3>
                  <span className="bg-gold-cream px-3 py-1.5 text-xs font-medium text-gold sm:h-10 sm:py-2.5 sm:text-sm">
                    8 Unit available
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-stone-800 sm:text-base">
                  Spacious &amp; stylish living &ndash; perfect for growing{' '}
                  <br className="hidden sm:inline" />
                  families who need more room and modern comfort.
                </p>

                <div className="space-y-3 p-3 text-xs shadow-boxxx sm:space-y-5 sm:p-6 sm:pt-2 sm:text-sm">
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <LandPlot className="h-4 w-4 shrink-0" /> Land area
                    </span>
                    <span className="text-gray-900">2,500 ft&sup2;</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Building className="h-4 w-4 shrink-0" /> Building Area
                    </span>
                    <span className="text-gray-900">1,600 ft&sup2;</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Bed className="h-4 w-4 shrink-0" /> Bedrooms
                    </span>
                    <span className="text-gray-900">4 bedrooms</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <ShowerHead className="h-4 w-4 shrink-0" /> Bathrooms
                    </span>
                    <span className="text-gray-900">3 bathroom</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <CarFront className="h-4 w-4 shrink-0" /> Carport
                    </span>
                    <span className="text-gray-900">For 2 car</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Road className="h-4 w-4 shrink-0" /> Floors
                    </span>
                    <span className="text-gray-900">2 floors</span>
                  </div>
                 </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:items-center sm:gap-3 lg:mt-25">
                <button
                  type="button"
                  data-tour-trigger
                  className="flex flex-1 items-center justify-center gap-2 border border-slate-200 bg-[#424d31] p-3 text-xs font-medium text-white transition-colors hover:bg-[#343e26] sm:text-sm"
                >
                  <Calendar className="h-4 w-4" /> Schedule tour
                </button>
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 border border-slate-200 bg-slate-100 p-3 text-xs font-medium text-gray-800 transition-colors hover:bg-slate-200 sm:text-sm"
                >
                  <Rotate3D className="h-4 w-4" /> Preview 360&deg;
                </button>
              </div>
            </div>

            <div className="relative order-1 w-full space-y-2 sm:space-y-4 lg:order-2 lg:h-full lg:w-1/2">
              <div className="relative overflow-hidden">
                <img
                  src={arunatypebmain}
                  alt="Aruna Type-B main"
                  className="h-64 w-full object-cover p-1 sm:h-112 sm:p-2 lg:h-172"
                />
                <button
                  type="button"
                  aria-label="Previous Type-B photo"
                  className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/80 text-slate-700 shadow-sm sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next Type-B photo"
                  className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/80 text-slate-700 shadow-sm sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="z-10 sm:p-3 lg:absolute lg:inset-x-4 lg:bottom-4 lg:p-5">
                <div className="grid grid-cols-6 items-center gap-1.5 bg-black/25 p-2 backdrop-blur-lg sm:gap-3 sm:p-4">
                  <img src={arunatypeb1} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypeb2} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypeb3} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypeb4} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypeb5} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypeb6} className="h-10 w-full object-cover sm:h-20" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Type-C */}
          <div className="reveal delay-2 flex w-full flex-col items-stretch gap-4 bg-white p-3 sm:p-4 lg:flex-row lg:items-center lg:gap-2">
            <div className="order-2 flex h-full w-full flex-col justify-between space-y-5 bg-white p-3 sm:p-8 lg:order-1 lg:w-1/2 lg:space-y-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-medium text-gray-900 sm:text-4xl">Aruna Type-C</h3>
                  <span className="bg-gold-cream px-3 py-1.5 text-xs font-medium text-gold sm:h-10 sm:py-2.5 sm:text-sm">
                    11 Unit available
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-stone-800 sm:text-base">
                  Premium &amp; elegant living &ndash; designed for larger
                  <br className="hidden sm:inline" /> households seeking luxury and comfort.
                </p>

                <div className="space-y-3 p-3 text-xs shadow-boxxx sm:space-y-5 sm:p-4 sm:pt-2 sm:text-sm">
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <LandPlot className="h-4 w-4 shrink-0" /> Land area
                    </span>
                    <span className="text-gray-900">3,000 ft&sup2;</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Building className="h-4 w-4 shrink-0" /> Building Area
                    </span>
                    <span className="text-gray-900">2,000 ft&sup2;</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Bed className="h-4 w-4 shrink-0" /> Bedrooms
                    </span>
                    <span className="text-gray-900">2 bedrooms</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <ShowerHead className="h-4 w-4 shrink-0" /> Bathrooms
                    </span>
                    <span className="text-gray-900">1 bathroom</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <CarFront className="h-4 w-4 shrink-0" /> Carport
                    </span>
                    <span className="text-gray-900">For 1 car</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="flex items-center gap-2 text-text-stone">
                      <Road className="h-4 w-4 shrink-0" /> Floors
                    </span>
                    <span className="text-gray-900">2 floors</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:items-center sm:gap-3 lg:mt-25">
                <button
                  type="button"
                  data-tour-trigger
                  className="flex flex-1 items-center justify-center gap-2 border border-slate-200 bg-[#424d31] p-3 text-xs font-medium text-white transition-colors hover:bg-[#343e26] sm:text-sm"
                >
                  <Calendar className="h-4 w-4" /> Schedule tour
                </button>
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 border border-slate-200 bg-slate-100 p-3 text-xs font-medium text-gray-800 transition-colors hover:bg-slate-200 sm:text-sm"
                >
                  <Rotate3D className="h-4 w-4" /> Preview 360&deg;
                </button>
              </div>
            </div>

            <div className="relative order-1 w-full space-y-2 sm:space-y-4 lg:order-2 lg:h-full lg:w-1/2">
              <div className="relative overflow-hidden">
                <img
                  src={arunatypec}
                  alt="Aruna Type-C main"
                  className="h-64 w-full object-cover p-1 sm:h-112 sm:p-2 lg:h-172"
                />
                <button
                  type="button"
                  aria-label="Previous Type-C photo"
                  className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/80 text-slate-700 shadow-sm sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next Type-C photo"
                  className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/80 text-slate-700 shadow-sm sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="z-10 sm:p-3 lg:absolute lg:inset-x-4 lg:bottom-4 lg:p-5">
                <div className="grid grid-cols-6 items-center gap-1.5 bg-black/25 p-2 backdrop-blur-lg sm:gap-3 sm:p-4">
                  <img src={arunatypec1} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypec2} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypec3} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypec4} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypec5} className="h-10 w-full object-cover sm:h-20" alt="" />
                  <img src={arunatypec6} className="h-10 w-full object-cover sm:h-20" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose This Cluster */}
      <section className="bg-gallery px-4 py-14 text-white sm:px-6 lg:min-h-270 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-350">
          <h2 className="reveal mb-8 max-w-lg text-2xl font-medium leading-tight sm:mb-12 sm:text-3xl lg:text-4xl">
            The reasons why <br /> must choose this <br /> clusters
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <div className="reveal space-y-6 bg-white/5 p-6 sm:space-y-12 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center text-xl text-amber-400 sm:h-12 sm:w-12">
                <img src={stupidtree} alt="" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium sm:mb-3 sm:text-[25px]">
                  Green living environment
                </h3>
                <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                  Surrounded by landscaped parks and open spaces, offering fresh air and a healthier
                  lifestyle.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="reveal delay-1 space-y-6 bg-white/5 p-6 sm:space-y-12 sm:p-8 md:translate-y-14 lg:translate-y-55">
              <div className="flex h-10 w-10 items-center justify-center text-xl text-amber-400 sm:h-12 sm:w-12">
                <img src={uglychair} alt="" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-medium sm:text-[25px]">Modern minimalist design</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:mt-3 sm:text-sm">
                  Homes designed for comfort and functionality, blending aesthetics with practical
                  living.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="reveal delay-2 space-y-6 bg-white/5 p-6 sm:space-y-12 sm:p-8 md:translate-y-28 lg:translate-y-110">
              <div className="flex h-10 w-10 items-center justify-center text-xl text-amber-400 sm:h-12 sm:w-12">
                <img src={smellyswing} alt="" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium sm:mb-3 sm:text-[25px]">
                  Family-oriented lifestyle
                </h3>
                <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                  Safe playgrounds and community spaces that nurture connection, growth, and
                  togetherness.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location & Nearby Places */}
      <section className="mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:h-100">
          <div className="flex w-full flex-col justify-center px-4 py-8 sm:p-8 lg:w-1/2">
            <div className="mb-4 inline-flex h-10 w-fit items-center gap-2 bg-gold-cream p-3 text-xs font-semibold text-gold sm:mb-6 sm:text-sm">
              <img src={mapPin} alt="" className="h-4 w-4" /> Strategic location
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-3xl font-medium leading-tight text-gray-900 sm:text-5xl">
                Discover the <br /> Aruna <br /> residence
              </h2>
              <p className="text-xs text-stone-600 sm:text-sm">
                Serenia Residences, Harmony Street No. 12, <br />
                Selhurst, London, England
              </p>
            </div>
          </div>

          <div className="w-full bg-stone px-4 py-6 sm:p-8 lg:w-1/2">
            <div className="mx-auto my-2 w-full max-w-160 bg-white p-4 shadow-bocx sm:my-6 sm:p-8 lg:mt-10 lg:mb-12">
              <div className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 py-2.5">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">
                      Greenfield International School
                    </span>
                    <span className="text-[11px] text-slate-400 sm:text-xs">
                      2.1 km &bull; 5 min drive
                    </span>
                  </div>
                  <Building2 className="h-4 w-4 shrink-0 text-slate-600 sm:h-5 sm:w-5" />
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 py-2.5">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">
                      Selhurst Mall &amp; Lifestyle Center
                    </span>
                    <span className="text-[11px] text-slate-400 sm:text-xs">
                      3.4 km &bull; 10 min drive
                    </span>
                  </div>
                  <ShoppingBag className="h-4 w-4 shrink-0 text-slate-600 sm:h-5 sm:w-5" />
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 py-2.5">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">Royal Cave Hospital</span>
                    <span className="text-[11px] text-slate-400 sm:text-xs">
                      4.8 km &bull; 12 min drive
                    </span>
                  </div>
                  <Hospital className="h-4 w-4 shrink-0 text-slate-600 sm:h-5 sm:w-5" />
                </div>
                <div className="flex items-center justify-between gap-3 py-2.5">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">Selhurst Central Station</span>
                    <span className="text-[11px] text-slate-400 sm:text-xs">
                      2.7 km &bull; 8 min drive
                    </span>
                  </div>
                  <BusFront className="h-4 w-4 shrink-0 text-slate-600 sm:h-5 sm:w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={stupidmap}
            alt="Aruna residence map"
            className="mx-auto h-64 w-full object-cover sm:h-120 lg:h-230"
          />
        </div>
      </section>

      <GeminiCarousel />
    </main>
  );
}