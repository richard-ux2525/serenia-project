import { useState } from 'react'
import { AlertCircle, Plus, Trash2, Upload, Sparkles, Check } from 'lucide-react'

export interface CustomAmenity {
  id: string
  type: string
  image: string | null
  description: string
}
export const CustomAmenity = {}

export interface ClusterSpecsData {
  clusterType: string
  floorType: string
  singleFloorSize: string
  doubleFloorSize: string
  electricityCapacity: string
  totalPropertyType: string
  totalUnits: string
  propertyTypesAvailable: string[] // e.g. ['House', 'Villa']
  clusterSize: string
  defaultAmenities: string[]
  customAmenities: CustomAmenity[]
}
export const ClusterSpecsData = {}

interface ClusterSpecsStepProps {
  subStep: number // 0 = Detail specification, 1 = Amenities & facilities
  data: ClusterSpecsData
  onChange: (field: keyof ClusterSpecsData, value: any) => void
}

const defaultAmenityOptions = [
  'Playground',
  'Parking area',
  'Garden / Green space',
  'Security Post (24/7)',
  'Jogging Track',
  'Club house',
  'Gym & Fitness Center',
  'Community Hall',
]

const amenityTypeOptions = [
  'Sport center',
  'Swimming pool',
  'Tennis court',
  'Kids playground',
  'Co-working space',
  'Sky deck',
]

export default function ClusterSpecsStep({
  subStep,
  data,
  onChange,
}: ClusterSpecsStepProps) {
  const togglePropertyType = (type: string) => {
    const list = data.propertyTypesAvailable.includes(type)
      ? data.propertyTypesAvailable.filter((t) => t !== type)
      : [...data.propertyTypesAvailable, type]
    onChange('propertyTypesAvailable', list)
  }

  const toggleDefaultAmenity = (amenity: string) => {
    const list = data.defaultAmenities.includes(amenity)
      ? data.defaultAmenities.filter((a) => a !== amenity)
      : [...data.defaultAmenities, amenity]
    onChange('defaultAmenities', list)
  }

  const addCustomAmenity = () => {
    const newAmenity: CustomAmenity = {
      id: Date.now().toString(),
      type: 'Sport center',
      image: null,
      description: '',
    }
    onChange('customAmenities', [...data.customAmenities, newAmenity])
  }

  const updateCustomAmenity = (id: string, field: keyof CustomAmenity, value: any) => {
    const list = data.customAmenities.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    )
    onChange('customAmenities', list)
  }

  const removeCustomAmenity = (id: string) => {
    onChange(
      'customAmenities',
      data.customAmenities.filter((item) => item.id !== id)
    )
  }

  if (subStep === 0) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Cluster specifications</h2>
          <p className="mt-1 text-xs text-gray-500">
            Complete specifications for this cluster, from the cluster type to its amenities.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          {/* Cluster Type */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Cluster type
            </label>
            <select
              value={data.clusterType}
              onChange={(e) => onChange('clusterType', e.target.value)}
              className="mt-1.5 w-full border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            >
              <option value="">Select type</option>
              <option value="Residential">Residential</option>
              <option value="Mixed-use">Mixed-use</option>
              <option value="Gated Community">Gated Community</option>
            </select>
          </div>

          {/* Floor Type */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Floor type
            </label>
            <select
              value={data.floorType}
              onChange={(e) => onChange('floorType', e.target.value)}
              className="mt-1.5 w-full border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            >
              <option value="">Select type</option>
              <option value="60x60 granite tiles">60×60 granite tiles</option>
              <option value="Marble">Marble</option>
              <option value="Hardwood">Hardwood</option>
            </select>
          </div>

          {/* Sizes */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Single floor size
              </label>
              <input
                type="text"
                value={data.singleFloorSize}
                onChange={(e) => onChange('singleFloorSize', e.target.value)}
                placeholder="Enter size"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Double floor size
              </label>
              <input
                type="text"
                value={data.doubleFloorSize}
                onChange={(e) => onChange('doubleFloorSize', e.target.value)}
                placeholder="Enter size"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Electricity Capacity */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Electricity capacity
            </label>
            <input
              type="text"
              value={data.electricityCapacity}
              onChange={(e) => onChange('electricityCapacity', e.target.value)}
              placeholder="Enter number (e.g. 2200 VA)"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>

          {/* Total Property Type & Units */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Total property type
              </label>
              <input
                type="text"
                value={data.totalPropertyType}
                onChange={(e) => onChange('totalPropertyType', e.target.value)}
                placeholder="Enter number"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Total units
              </label>
              <input
                type="text"
                value={data.totalUnits}
                onChange={(e) => onChange('totalUnits', e.target.value)}
                placeholder="Enter number"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Property types available */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Property types available
            </label>
            <div className="mt-2 flex gap-2">
              {['House', 'Villa'].map((type) => {
                const active = data.propertyTypesAvailable.includes(type)
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => togglePropertyType(type)}
                    className={`px-4 py-2 text-xs font-medium border transition-colors ${
                      active
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {type}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Cluster Size */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Cluster size
            </label>
            <div className="mt-1.5 flex items-center gap-2">
              <input
                type="text"
                value={data.clusterSize}
                onChange={(e) => onChange('clusterSize', e.target.value)}
                placeholder="Enter size"
                className="flex-1 border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
              />
              <span className="border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs text-gray-500 font-medium">
                sqm
              </span>
            </div>
          </div>

          {/* Info Alert Box */}
          <div className="flex gap-2.5 bg-amber-50/70 p-3.5 border border-amber-200/70 text-amber-800">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600" />
            <div className="text-[11px] leading-relaxed">
              <strong>Important:</strong> The total property type and units are preliminary estimates and will be calculated automatically based on the added data.
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Cluster specifications</h2>
        <p className="mt-1 text-xs text-gray-500">
          Complete specifications for this cluster, from the cluster type to its amenities.
        </p>
      </div>

      <div className="space-y-6 border border-gray-200 bg-white p-6 shadow-xs">
        {/* Default Amenities Checkboxes */}
        <div>
          <label className="block text-xs font-semibold text-gray-800 mb-2">
            Default amenities
          </label>
          <p className="text-[11px] text-gray-400 mb-3">
            Amenities that cluster total for each cluster size.
          </p>

          <div className="grid grid-cols-2 gap-2.5">
            {defaultAmenityOptions.map((amenity) => {
              const active = data.defaultAmenities.includes(amenity)
              return (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => toggleDefaultAmenity(amenity)}
                  className={`flex items-center gap-2.5 border p-3 text-left text-xs font-medium transition-colors ${
                    active
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 shrink-0 items-center justify-center ${
                      active ? 'bg-white text-gray-900' : 'border border-gray-300'
                    }`}
                  >
                    {active && <Check className="h-3 w-3 stroke-[3]" />}
                  </div>
                  <span className="truncate">{amenity}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Custom Amenities List */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          {data.customAmenities.map((amenity, idx) => (
            <div
              key={amenity.id}
              className="border border-gray-200 p-4 space-y-3 bg-gray-50/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">
                  Amenities {idx + 1}
                </span>
                {data.customAmenities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCustomAmenity(amenity.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Amenity Type */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Amenities type
                </label>
                <select
                  value={amenity.type}
                  onChange={(e) =>
                    updateCustomAmenity(amenity.id, 'type', e.target.value)
                  }
                  className="mt-1 w-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
                >
                  {amenityTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image Upload Dropzone */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Image
                </label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 bg-white p-6 text-center hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <Upload className="h-6 w-6 text-gray-400 mb-2" />
                  <p className="text-xs font-medium text-gray-700">
                    Drag or upload image
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    960px × 540px, max size 10MB
                  </p>
                  <button
                    type="button"
                    className="mt-3 border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-xs hover:bg-gray-50"
                  >
                    Upload
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={amenity.description}
                  onChange={(e) =>
                    updateCustomAmenity(amenity.id, 'description', e.target.value)
                  }
                  placeholder="Tell about this amenities"
                  className="mt-1 w-full border border-gray-200 p-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                />
              </div>
            </div>
          ))}

          {/* Add Amenities Button */}
          <button
            type="button"
            onClick={addCustomAmenity}
            className="flex w-full items-center justify-center gap-1.5 border border-dashed border-gray-300 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add amenities
          </button>
        </div>
      </div>
    </div>
  )
}
