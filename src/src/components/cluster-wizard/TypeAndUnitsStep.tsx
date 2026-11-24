import { Plus, Trash2, MapPin, Upload, Check, Edit2 } from 'lucide-react'
import type { FloorPlanPoint } from './EnterNoteDialog'
import {
  bedroom,
  bathroom,
  arunatypebmain,
  arunatypec,
} from '../../imports'

export interface TypeAndUnitsData {
  typeName: string
  totalUnit: string
  landSize: string
  lotSize: string
  bedroom: string
  bathroom: string
  floor: string
  garage: string
  availability: string
  description: string

  // Pricing
  basePrice: string
  monthlyInstallment: string
  downPayment: string
  loanTenure: string
  interestRate: string
  paymentMethod: string
  additionalFee: string
  specialOffers: string

  // Gallery
  galleryCategory: string

  // Floor Plan
  floorPlanPoints: FloorPlanPoint[]
  embedded360Link: string

  // Amenities
  indoorAmenities: string[]
  outdoorAmenities: string[]
  safetyAmenities: string[]
}
export const TypeAndUnitsData = {}

interface TypeAndUnitsStepProps {
  subStep: number // 0 = Details, 1 = Pricing, 2 = Gallery, 3 = Floor plan, 4 = Amenities
  data: TypeAndUnitsData
  onChange: (field: keyof TypeAndUnitsData, value: any) => void
  onOpenNoteDialog: (x: number, y: number) => void
}

const indoorOptions = [
  'Air conditioning (AC)',
  'Built-in wardrobe',
  'Outdoor dining pavilion',
  'Intercom',
  'Cable TV / Internet ready',
  'Water heater',
  'Kitchen set / Pantry',
  'Cycling track',
  'Smart home system',
  'Co-working space',
]

const outdoorOptions = [
  'Private garden',
  'Private terrace',
  'Outdoor kitchen / BBQ area',
  'Private parking spot',
  'Private swimming pool',
  'Rooftop deck / patio',
  'Carport 1 garage',
]

const safetyOptions = [
  'Security system',
  'Smoke detector',
  'Backup generator',
  'Fire alarm',
  'CCTV',
  'Water pump',
]

export default function TypeAndUnitsStep({
  subStep,
  data,
  onChange,
  onOpenNoteDialog,
}: TypeAndUnitsStepProps) {
  const activeFloor = 'Ground Floor'

  const toggleArrayItem = (
    field: 'indoorAmenities' | 'outdoorAmenities' | 'safetyAmenities',
    item: string
  ) => {
    const list = data[field].includes(item)
      ? data[field].filter((i) => i !== item)
      : [...data[field], item]
    onChange(field, list)
  }

  const handleFloorPlanCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    onOpenNoteDialog(x, y)
  }

  const removePoint = (id: number) => {
    onChange(
      'floorPlanPoints',
      data.floorPlanPoints.filter((p) => p.id !== id)
    )
  }

  // Sub-step 4.1: Details
  if (subStep === 0) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Property type & units</h2>
          <p className="mt-1 text-xs text-gray-500">
            Add property types for this cluster, along with the number of each unit.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          {/* Property type name */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Property type name
            </label>
            <input
              type="text"
              value={data.typeName}
              onChange={(e) => onChange('typeName', e.target.value)}
              placeholder="e.g. Type A"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            />
          </div>

          {/* Total unit */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Total unit
            </label>
            <input
              type="text"
              value={data.totalUnit}
              onChange={(e) => onChange('totalUnit', e.target.value)}
              placeholder="Enter number"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            />
          </div>

          {/* Unit size (Land size / Lot size) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Land size
              </label>
              <div className="mt-1.5 flex items-center gap-2">
                <input
                  type="text"
                  value={data.landSize}
                  onChange={(e) => onChange('landSize', e.target.value)}
                  placeholder="Enter size"
                  className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
                />
                <span className="border border-gray-200 bg-gray-50 px-2.5 py-2.5 text-xs text-gray-500">
                  ft²
                </span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Lot size
              </label>
              <div className="mt-1.5 flex items-center gap-2">
                <input
                  type="text"
                  value={data.lotSize}
                  onChange={(e) => onChange('lotSize', e.target.value)}
                  placeholder="Enter size"
                  className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
                />
                <span className="border border-gray-200 bg-gray-50 px-2.5 py-2.5 text-xs text-gray-500">
                  ft²
                </span>
              </div>
            </div>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Bedroom
              </label>
              <input
                type="text"
                value={data.bedroom}
                onChange={(e) => onChange('bedroom', e.target.value)}
                placeholder="Enter number"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Bathroom
              </label>
              <input
                type="text"
                value={data.bathroom}
                onChange={(e) => onChange('bathroom', e.target.value)}
                placeholder="Enter number"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Floor
              </label>
              <input
                type="text"
                value={data.floor}
                onChange={(e) => onChange('floor', e.target.value)}
                placeholder="Enter number"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-800">
                Garage
              </label>
              <input
                type="text"
                value={data.garage}
                onChange={(e) => onChange('garage', e.target.value)}
                placeholder="Enter number"
                className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Availability
            </label>
            <select
              value={data.availability}
              onChange={(e) => onChange('availability', e.target.value)}
              className="mt-1.5 w-full border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            >
              <option value="Available">Available</option>
              <option value="Sold out">Sold out</option>
              <option value="Coming soon">Coming soon</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Description
            </label>
            <textarea
              rows={3}
              value={data.description}
              onChange={(e) => onChange('description', e.target.value)}
              placeholder="Let's customer know about this type"
              className="mt-1.5 w-full border border-gray-200 p-3 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    )
  }

  // Sub-step 4.2: Pricing
  if (subStep === 1) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Property type & units</h2>
          <p className="mt-1 text-xs text-gray-500">
            Add property types for this cluster, along with the number of each unit.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          {/* Base price */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Base price
            </label>
            <div className="relative mt-1.5">
              <span className="absolute left-3.5 top-2.5 text-xs text-gray-400">$</span>
              <input
                type="text"
                value={data.basePrice}
                onChange={(e) => onChange('basePrice', e.target.value)}
                placeholder="Enter price"
                className="w-full border border-gray-200 pl-8 pr-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Monthly installment */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Monthly installment
            </label>
            <div className="relative mt-1.5">
              <span className="absolute left-3.5 top-2.5 text-xs text-gray-400">$</span>
              <input
                type="text"
                value={data.monthlyInstallment}
                onChange={(e) => onChange('monthlyInstallment', e.target.value)}
                placeholder="Enter price"
                className="w-full border border-gray-200 pl-8 pr-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Down payment */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Down payment
            </label>
            <div className="relative mt-1.5">
              <span className="absolute left-3.5 top-2.5 text-xs text-gray-400">%</span>
              <input
                type="text"
                value={data.downPayment}
                onChange={(e) => onChange('downPayment', e.target.value)}
                placeholder="Enter nominal"
                className="w-full border border-gray-200 pl-8 pr-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Loan tenure */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Loan tenure
            </label>
            <select
              value={data.loanTenure}
              onChange={(e) => onChange('loanTenure', e.target.value)}
              className="mt-1.5 w-full border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            >
              <option value="">Select tenure</option>
              <option value="5 Years">5 Years</option>
              <option value="10 Years">10 Years</option>
              <option value="15 Years">15 Years</option>
              <option value="20 Years">20 Years</option>
            </select>
          </div>

          {/* Interest rate */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Interest rate
            </label>
            <div className="grid grid-cols-2 gap-3 mt-1.5">
              <input
                type="text"
                value={data.interestRate}
                onChange={(e) => onChange('interestRate', e.target.value)}
                placeholder="Enter nominal %"
                className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
              />
              <select className="w-full border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none">
                <option value="First 3 years">First 3 years</option>
                <option value="First 5 years">First 5 years</option>
              </select>
            </div>
          </div>

          {/* Payment method */}
          <div>
            <label className="block text-xs font-semibold text-gray-800">
              Payment method
            </label>
            <select
              value={data.paymentMethod}
              onChange={(e) => onChange('paymentMethod', e.target.value)}
              className="mt-1.5 w-full border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            >
              <option value="">Select at least 1 method</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="In-house Mortgage">In-house Mortgage</option>
              <option value="Cash / Hard Cash">Cash / Hard Cash</option>
            </select>
          </div>
        </div>
      </div>
    )
  }

  // Sub-step 4.3: Gallery
  if (subStep === 2) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Property type & units</h2>
          <p className="mt-1 text-xs text-gray-500">
            Add property types for this cluster, along with the number of each unit.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          <label className="block text-xs font-semibold text-gray-800">Cover</label>
          <div className="h-44 w-full overflow-hidden border border-gray-200 bg-gray-100">
            <img
              src={arunatypebmain}
              alt="Cover preview"
              className="h-full w-full object-cover"
            />
          </div>

          <label className="block text-xs font-semibold text-gray-800 pt-2">
            Gallery
          </label>
          <div className="flex space-x-1 bg-gray-100 p-1">
            {['Outdoor', 'Bedroom', 'Bathroom', 'Kitchen', 'Back'].map((c) => (
              <button
                key={c}
                type="button"
                className="flex-1 py-1.5 text-center text-xs font-medium bg-white text-gray-900 shadow-xs"
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <img
              src={bedroom}
              alt="Bedroom"
              className="h-24 w-full object-cover border border-gray-200"
            />
            <img
              src={bathroom}
              alt="Bathroom"
              className="h-24 w-full object-cover border border-gray-200"
            />
            <div className="flex h-24 flex-col items-center justify-center border-2 border-dashed border-gray-200 bg-gray-50 text-center cursor-pointer hover:bg-gray-100">
              <Upload className="h-4 w-4 text-gray-400 mb-1" />
              <span className="text-[10px] text-gray-500 font-medium">Upload</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Sub-step 4.4: Floor plan
  if (subStep === 3) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Property type & units</h2>
          <p className="mt-1 text-xs text-gray-500">
            Add property types for this cluster, along with the number of each unit.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          {/* Floor selector tab */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <span className="text-xs font-bold text-gray-900">{activeFloor}</span>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
            >
              <Edit2 className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Interactive Floor Plan Image Canvas */}
          <div className="relative">
            <p className="text-[11px] text-gray-400 text-center mb-2 flex items-center justify-center gap-1">
              <MapPin className="h-3 w-3 text-red-500" /> Click anywhere on floor plan to add point
            </p>

            <div
              onClick={handleFloorPlanCanvasClick}
              className="relative h-64 w-full cursor-crosshair overflow-hidden border border-gray-200 bg-stone-100 shadow-inner group"
            >
              <img
                src={arunatypec}
                alt="Floor Plan"
                className="h-full w-full object-contain p-2"
              />

              {/* Render Hotspot Points */}
              {data.floorPlanPoints.map((point) => (
                <div
                  key={point.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="flex h-6 w-6 items-center justify-center bg-gray-900 text-[10px] font-bold text-white shadow-lg ring-2 ring-white">
                    {point.id}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points List */}
          <div className="space-y-2.5 pt-2">
            {data.floorPlanPoints.map((point) => (
              <div
                key={point.id}
                className="flex items-start justify-between border border-gray-200 bg-gray-50/50 p-3"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-gray-900 text-xs font-bold text-white">
                    {point.id}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">
                      {point.room}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removePoint(point.id)}
                  className="text-gray-400 hover:text-red-600 p-1"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Add Floor Button */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-1.5 border border-dashed border-gray-300 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
            Add floor
          </button>

          {/* 360 preview embedded link */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-gray-800">
              360 preview
            </label>
            <input
              type="text"
              value={data.embedded360Link}
              onChange={(e) => onChange('embedded360Link', e.target.value)}
              placeholder="Enter embedded link"
              className="mt-1.5 w-full border border-gray-200 px-3.5 py-2.5 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    )
  }

  // Sub-step 4.5: Amenities
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Property type & units</h2>
        <p className="mt-1 text-xs text-gray-500">
          Add property types for this cluster, along with the number of each unit.
        </p>
      </div>

      <div className="space-y-6 border border-gray-200 bg-white p-6 shadow-xs">
        {/* Indoor Amenities */}
        <div>
          <h3 className="text-xs font-bold text-gray-900 mb-3">Indoor amenities</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {indoorOptions.map((opt) => {
              const checked = data.indoorAmenities.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleArrayItem('indoorAmenities', opt)}
                  className={`flex items-center gap-2.5 border p-3 text-left text-xs font-medium transition-colors ${
                    checked
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 shrink-0 items-center justify-center ${
                      checked ? 'bg-white text-gray-900' : 'border border-gray-300'
                    }`}
                  >
                    {checked ? <Check className="h-3 w-3 stroke-[3]" /> : null}
                  </div>
                  <span className="truncate">{opt}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Outdoor Amenities */}
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-xs font-bold text-gray-900 mb-3">
            Outdoor / Private Amenities
          </h3>
          <div className="grid grid-cols-2 gap-2.5">
            {outdoorOptions.map((opt) => {
              const checked = data.outdoorAmenities.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleArrayItem('outdoorAmenities', opt)}
                  className={`flex items-center gap-2.5 border p-3 text-left text-xs font-medium transition-colors ${
                    checked
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 shrink-0 items-center justify-center ${
                      checked ? 'bg-white text-gray-900' : 'border border-gray-300'
                    }`}
                  >
                    {checked ? <Check className="h-3 w-3 stroke-[3]" /> : null}
                  </div>
                  <span className="truncate">{opt}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Safety & Utility */}
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-xs font-bold text-gray-900 mb-3">Safety & utility</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {safetyOptions.map((opt) => {
              const checked = data.safetyAmenities.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleArrayItem('safetyAmenities', opt)}
                  className={`flex items-center gap-2.5 border p-3 text-left text-xs font-medium transition-colors ${
                    checked
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 shrink-0 items-center justify-center ${
                      checked ? 'bg-white text-gray-900' : 'border border-gray-300'
                    }`}
                  >
                    {checked ? <Check className="h-3 w-3 stroke-[3]" /> : null}
                  </div>
                  <span className="truncate">{opt}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
