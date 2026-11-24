import line149 from '../assets/Image (1).png'
 interface FacilitiesProps {
  textContent?: string
}
function Facilities({ textContent = 'Facility & amenities' }: FacilitiesProps) {
  return (
    <section className="home-facilities-section">
        <h2 className="reveal my-10 px-4 text-center text-3xl font-medium sm:my-14 sm:text-4xl lg:my-20 lg:text-[45px]">{textContent}</h2>
        <div className="home-facilities flex w-full flex-col lg:h-220 lg:flex-row">
            <div className="home-facilities-image reveal h-72 w-full sm:h-96 lg:h-full lg:w-1/2">
              <img src={line149} alt="Serenia community facilities" className="h-full w-full object-cover object-center" />
            </div>
            <div className="reveal delay-1 w-full lg:h-full lg:w-1/2">
              <div className="flex flex-col divide-y divide-gray-300 lg:h-full">
                <div
                  className="home-facility-link flex-1 py-5 px-8 flex items-center justify-center text-center"
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span className="font-normal">Sports Facilities</span>
                    <span className="text-xs font-medium text-gray-300">01</span>
                  </span>
                </div>

                <div
                  className="home-facility-link flex-1 py-5 px-8 flex items-center justify-center text-center"
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span className="font-normal transition-colors">The Lifestyle Center</span>
                    <span className="text-xs font-medium text-gray-300">02</span>
                  </span>
                </div>

                <div
                  className="home-facility-link flex-1 py-5 px-8 flex items-center justify-center text-center"
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span className="font-normal">Children’s Playground</span>
                    <span className="text-xs font-medium text-gray-400">03</span>
                  </span>
                </div>

                <div
                  className="home-facility-link home-facility-link-featured flex-1 py-7 px-8 flex items-center justify-center text-center"
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span className="text-gray-700 tracking-tight">Golf central playground</span>
                    <span className="text-sm font-medium text-gray-400">04</span>
                  </span>
                </div>

                <div
                  className="home-facility-link flex-1 py-5 px-8 flex items-center justify-center text-center"
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span className="font-normal">Retail & Lifestyle Center</span>
                    <span className="text-xs font-medium">05</span>
                  </span>
                </div>

                <div
                  className="home-facility-link flex-1 py-5 px-8 flex items-center justify-center text-center"
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span className="font-normal">Cluster clubhouse</span>
                    <span className="text-xs font-medium text-gray-300">06</span>
                  </span>
                </div>

                <div
                  className="home-facility-link flex-1 py-8 px-8 flex items-center justify-center text-center"
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span className="font-normal">Jogging track</span>
                    <span className="text-xs font-medium text-gray-300">07</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default Facilities
