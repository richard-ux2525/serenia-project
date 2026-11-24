export interface FloorPlanPoint {
  id: number
  room: string
  description: string
  x: number // percentage
  y: number // percentage
}
export const FloorPlanPoint = {}

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
  propertyTypesAvailable: string[]
  clusterSize: string
  defaultAmenities: string[]
  customAmenities: CustomAmenity[]
}
export const ClusterSpecsData = {}

export interface HouseMediaData {
  coverImage: { name: string; size: string; url: string } | null
  galleryCategory: string
  galleryImages: { id: string; category: string; src: string; alt: string }[]
  documents: { id: string; name: string; size: string; progress: number }[]
}
export const HouseMediaData = {}

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
