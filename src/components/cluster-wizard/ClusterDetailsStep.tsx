import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { maparuna } from '../../imports'

export interface ClusterDetailsData {
  name: string
  tagline: string
  description: string
  country: string
  city: string
  district: string
  address: string
  pinLocation: { x: number; y: number } | null
}
export const ClusterDetailsData = {}

interface ClusterDetailsStepProps {
  subStep: number // 0 = Basic info, 1 = Cluster location
  data: ClusterDetailsData
  onChange: (field: keyof ClusterDetailsData, value: any) => void
}

export default function ClusterDetailsStep({
  subStep,
  data,
  onChange,
}: ClusterDetailsStepProps) {
  const [pinSet, setPinSet] = useState(data.pinLocation !== null)

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    onChange('pinLocation', { x, y })
    setPinSet(true)
  }

  if (subStep === 0) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Details cluster</h2>
          <p className="mt-1 text-xs text-gray-500">
            Provide a name, tagline, and description for your cluster, so customers will know.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          {/* Cluster Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Cluster name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder="Enter name"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Tagline
            </label>
            <input
              type="text"
              value={data.tagline}
              onChange={(e) => onChange('tagline', e.target.value)}
              placeholder="Enter tagline"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Description
            </label>
            <textarea
              rows={4}
              value={data.description}
              onChange={(e) => onChange('description', e.target.value)}
              placeholder="Let's customer know about this cluster"
              className="mt-1.5 w-full border border-gray-200 p-3.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Details cluster</h2>
        <p className="mt-1 text-xs text-gray-500">
          Provide a name, tagline, and description for your cluster, so customers will know.
        </p>
      </div>

      <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
        {/* Country */}
        <div>
          <label className="block text-xs font-semibold text-gray-800">
            Country <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1.5">
            <select
              value={data.country}
              onChange={(e) => onChange('country', e.target.value)}
              className="w-full appearance-none border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            >
              <option value="United States of America">🇺🇸 United States of America</option>
              <option value="United Kingdom">🇬🇧 United Kingdom</option>
              <option value="Canada">🇨🇦 Canada</option>
              <option value="Australia">🇦🇺 Australia</option>
            </select>
          </div>
        </div>

        {/* City & District */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              City
            </label>
            <input
              type="text"
              value={data.city}
              onChange={(e) => onChange('city', e.target.value)}
              placeholder="Type or select city"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              District
            </label>
            <input
              type="text"
              value={data.district}
              onChange={(e) => onChange('district', e.target.value)}
              placeholder="Enter area"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-xs font-semibold text-gray-800">
            Address
          </label>
          <textarea
            rows={2}
            value={data.address}
            onChange={(e) => onChange('address', e.target.value)}
            placeholder="Enter full address"
            className="mt-1.5 w-full border border-gray-200 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
          />
        </div>

        {/* Map Pin Box */}
        <div>
          <label className="block text-xs font-semibold text-gray-800 mb-1.5">
            Map Pin
          </label>
          <div
            onClick={handleMapClick}
            className="relative h-48 w-full cursor-pointer border border-gray-200 bg-gray-100 group overflow-hidden"
          >
            <img
              src={maparuna}
              alt="Location Map"
              className="h-full w-full object-cover"
            />

            {/* Click pin marker */}
            {data.pinLocation ? (
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                style={{
                  left: `${data.pinLocation.x}%`,
                  top: `${data.pinLocation.y}%`,
                }}
              >
                <div className="flex h-7 w-7 items-center justify-center bg-red-600 text-white shadow-lg ring-4 ring-white/60">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            ) : null}

            {/* Map Action Banner at Bottom */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/95 px-3 py-2 text-xs backdrop-blur-xs shadow-xs border border-gray-200">
              <span className="text-gray-600">
                {pinSet ? 'Location selected on map' : 'Click on map to change position'}
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-1 bg-gray-900 px-2.5 py-1 text-[11px] font-medium text-white"
              >
                <MapPin className="h-3 w-3" />
                {pinSet ? 'PIN Set' : 'Set PIN'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
