import { useState } from 'react'
import profileImage from '../assets/Avatar.png'
import caretDown from '../icons/Vector.svg'
import { Link, useNavigate } from 'react-router-dom'
import {
  MessageSquare,
  Bell,
  Menu as MenuIcon,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'

import Aside from '../components/Aside'
import ClusterDetailsStep, { type ClusterDetailsData } from '../components/cluster-wizard/ClusterDetailsStep'
import ClusterSpecsStep, { type ClusterSpecsData } from '../components/cluster-wizard/ClusterSpecsStep'
import HouseMediaStep, { type HouseMediaData } from '../components/cluster-wizard/HouseMediaStep'
import TypeAndUnitsStep, { type TypeAndUnitsData } from '../components/cluster-wizard/TypeAndUnitsStep'
import EnterNoteDialog, { type FloorPlanPoint } from '../components/cluster-wizard/EnterNoteDialog'
import PublishDialog from '../components/cluster-wizard/PublishDialog'

const steps = [
  {
    title: 'Details cluster',
    subtitle: 'Tell about the cluster',
    subSteps: ['Basic information', 'Cluster location'],
  },
  {
    title: 'Clusters specs',
    subtitle: 'Add complete specifications',
    subSteps: ['Detail specification', 'Amenities & facilities'],
  },
  {
    title: 'House media & gallery',
    subtitle: 'Cover photo, gallery, brochure',
    subSteps: ['Cover', 'Gallery', 'Brochure'],
  },
  {
    title: 'Type & units',
    subtitle: 'Adding property types and units',
    subSteps: ['Details', 'Pricing', 'Gallery', 'Floor plan', 'Amenities'],
  },
]

export default function CreateCluster() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mainStep, setMainStep] = useState(0)
  const [subStep, setSubStep] = useState(0)

  const [isNoteDialogOpen, setIsNoteDialogOpen] = useState(false)
  const [isPublishDialogOpen, setIsPublishDialogOpen] = useState(false)
  const [clickPos, setClickPos] = useState<{ x: number; y: number } | null>(null)

  const [clusterDetails, setClusterDetails] = useState<ClusterDetailsData>({
    name: 'Aruna residence',
    tagline: 'The modern comfort',
    description:
      'Aruna Residence offers modern residences with minimalist designs that blend in with the green surroundings, providing comfort for dynamic families.',
    country: 'United States of America',
    city: 'Selhurst',
    district: 'London',
    address: 'Serenia Residences, Harmony Street No. 12',
    pinLocation: { x: 45, y: 55 },
  })

  const [clusterSpecs, setClusterSpecs] = useState<ClusterSpecsData>({
    clusterType: 'Residential',
    floorType: '60x60 granite tiles',
    singleFloorSize: '1,200',
    doubleFloorSize: '2,000',
    electricityCapacity: '2200 VA',
    totalPropertyType: '3',
    totalUnits: '120',
    propertyTypesAvailable: ['House', 'Villa'],
    clusterSize: '45000',
    defaultAmenities: [
      'Playground',
      'Parking area',
      'Garden / Green space',
      'Security Post (24/7)',
    ],
    customAmenities: [
      {
        id: '1',
        type: 'Sport center',
        image: null,
        description: 'Community gym & sport complex',
      },
    ],
  })

  const [houseMedia, setHouseMedia] = useState<HouseMediaData>({
    coverImage: {
      name: 'cover_aruna_residence.png',
      size: '2.5 MB',
      url: '',
    },
    galleryCategory: 'Outdoor',
    galleryImages: [],
    documents: [
      {
        id: '1',
        name: 'brochure_aruna_residence.pdf',
        size: '5.2 MB',
        progress: 100,
      },
      {
        id: '2',
        name: 'site_plan_2025.pdf',
        size: '1.8 MB',
        progress: 45,
      },
    ],
  })

  const [typeAndUnits, setTypeAndUnits] = useState<TypeAndUnitsData>({
    typeName: 'Type A',
    totalUnit: '50',
    landSize: '84',
    lotSize: '97',
    bedroom: '3',
    bathroom: '2',
    floor: '2',
    garage: '1',
    availability: 'Available',
    description: 'Modern type A townhouse unit with spacious backyard.',
    basePrice: '120000',
    monthlyInstallment: '850',
    downPayment: '10',
    loanTenure: '15 Years',
    interestRate: '4.5',
    paymentMethod: 'In-house Mortgage',
    additionalFee: 'Valid',
    specialOffers: 'Discount 5%',
    galleryCategory: 'Cover',
    floorPlanPoints: [
      {
        id: 1,
        room: 'The kitchen',
        description: 'The place where you can make delicious food',
        x: 35,
        y: 40,
      },
      {
        id: 2,
        room: 'Bedroom',
        description: 'With en suite bathroom and private balcony',
        x: 65,
        y: 30,
      },
      {
        id: 3,
        room: 'Family room',
        description: 'A comfortable place to relax with family',
        x: 50,
        y: 70,
      },
    ],
    embedded360Link: '',
    indoorAmenities: ['Air conditioning (AC)', 'Built-in wardrobe', 'Kitchen set / Pantry'],
    outdoorAmenities: ['Private garden', 'Private terrace', 'Carport 1 garage'],
    safetyAmenities: ['Security system', 'Fire alarm', 'CCTV'],
  })

  // Handlers for step updating
  const handleDetailsChange = (field: keyof ClusterDetailsData, value: any) => {
    setClusterDetails((prev) => ({ ...prev, [field]: value }))
  }

  const handleSpecsChange = (field: keyof ClusterSpecsData, value: any) => {
    setClusterSpecs((prev) => ({ ...prev, [field]: value }))
  }

  const handleMediaChange = (field: keyof HouseMediaData, value: any) => {
    setHouseMedia((prev) => ({ ...prev, [field]: value }))
  }

  const handleTypeUnitsChange = (field: keyof TypeAndUnitsData, value: any) => {
    setTypeAndUnits((prev) => ({ ...prev, [field]: value }))
  }

  // Navigation Logic
  const handleContinue = () => {
    const currentStepConfig = steps[mainStep]
    if (subStep < currentStepConfig.subSteps.length - 1) {
      setSubStep(subStep + 1)
    } else if (mainStep < steps.length - 1) {
      setMainStep(mainStep + 1)
      setSubStep(0)
    } else {
      // Final step reached -> Open Publish Dialog
      setIsPublishDialogOpen(true)
    }
  }

  const handleBack = () => {
    if (subStep > 0) {
      setSubStep(subStep - 1)
    } else if (mainStep > 0) {
      setMainStep(mainStep - 1)
      const prevStepConfig = steps[mainStep - 1]
      setSubStep(prevStepConfig.subSteps.length - 1)
    } else {
      navigate('/admin/properties/aruna/details')
    }
  }

  const handleOpenNoteDialog = (x: number, y: number) => {
    setClickPos({ x, y })
    setIsNoteDialogOpen(true)
  }

  const handleConfirmFloorPlanPoint = (pointData: Omit<FloorPlanPoint, 'id'>) => {
    const nextId = typeAndUnits.floorPlanPoints.length + 1
    const newPoint: FloorPlanPoint = {
      id: nextId,
      ...pointData,
    }
    setTypeAndUnits((prev) => ({
      ...prev,
      floorPlanPoints: [...prev.floorPlanPoints, newPoint],
    }))
  }

  const handlePublishNow = () => {
    setIsPublishDialogOpen(false)
    navigate('/admin/properties/aruna/details')
  }

  const handleSaveDraft = () => {
    setIsPublishDialogOpen(false)
    navigate('/properties')
  }

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[#F9FAFB] text-gray-900 font-sans antialiased">
      {/* LEFT SIDEBAR (Standard Layout) */}
            <title>Create Cluster - Serenia Real Estate</title>
      <Aside sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTAINER */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/admin/properties/aruna/details" className="hover:text-gray-700">
                All clusters
              </Link>
              <span>/</span>
              <span className="bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                Add new cluster
              </span>
            </div>
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

        {/* WIZARD CONTAINER WITH STEPPER SIDEBAR & STEP CONTENT */}
        <div className="flex flex-1 overflow-hidden">
          {/* STEPPER NAVIGATION SIDEBAR */}
          <div className="w-72 shrink-0 overflow-y-auto border-r border-gray-200 bg-white p-6 hidden md:block">
            <h2 className="text-base font-bold text-gray-900 mb-6">
              Create new cluster
            </h2>

            <div className="space-y-6 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
              {steps.map((st, idx) => {
                const isActive = mainStep === idx
                const isDone = mainStep > idx

                return (
                  <div
                    key={st.title}
                    onClick={() => {
                      setMainStep(idx)
                      setSubStep(0)
                    }}
                    className="relative flex items-start gap-3.5 cursor-pointer group"
                  >
                    {/* Circle Step Number / Check Icon */}
                    <div
                      className={`relative z-10 flex h-7 rounded-full w-7 shrink-0 items-center justify-center text-xs font-bold transition-colors ${
                        isDone
                          ? 'bg-emerald-600 rounded-full text-white ring-4 ring-emerald-50'
                          : isActive
                          ? 'bg-gray-900 text-white ring-4 ring-gray-100'
                          : 'bg-white border-2 border-gray-300 text-gray-400 group-hover:border-gray-400'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="h-4 w-4" /> : idx + 1}
                    </div>

                    <div>
                      <h3
                        className={`text-xs font-semibold ${
                          isActive
                            ? 'text-gray-900 font-bold'
                            : isDone
                            ? 'text-gray-800'
                            : 'text-gray-500'
                        }`}
                      >
                        {st.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-tight mt-0.5">
                        {st.subtitle}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* MAIN STEP CONTENT AREA */}
          <div className="flex flex-1 flex-col overflow-hidden bg-[#F9FAFB]">
            {/* SUB-STEP TAB BAR */}
            <div className="border-b border-gray-200 bg-white px-6 py-3">
              <div className="mx-auto max-w-xl flex items-center justify-center space-x-1 bg-gray-100 p-1">
                {steps[mainStep].subSteps.map((subTitle, idx) => (
                  <button
                    key={subTitle}
                    onClick={() => setSubStep(idx)}
                    className={`flex-1 py-1.5 text-center text-xs font-medium transition-all ${
                      subStep === idx
                        ? 'bg-white text-gray-900 shadow-xs font-semibold'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {subTitle}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP COMPONENT VIEW */}
            <div className="flex-1 overflow-y-auto p-6">
              {mainStep === 0 ? (
                <ClusterDetailsStep
                  subStep={subStep}
                  data={clusterDetails}
                  onChange={handleDetailsChange}
                />
              ) : null}
              {mainStep === 1 ? (
                <ClusterSpecsStep
                  subStep={subStep}
                  data={clusterSpecs}
                  onChange={handleSpecsChange}
                />
              ) : null}
              {mainStep === 2 ? (
                <HouseMediaStep
                  subStep={subStep}
                  data={houseMedia}
                  onChange={handleMediaChange}
                />
              ) : null}
              {mainStep === 3 ? (
                <TypeAndUnitsStep
                  subStep={subStep}
                  data={typeAndUnits}
                  onChange={handleTypeUnitsChange}
                  onOpenNoteDialog={handleOpenNoteDialog}
                />
              ) : null}
            </div>

            {/* WIZARD FOOTER ACTION BAR */}
            <div className="flex h-16 shrink-0 items-center justify-between border-t border-gray-200 bg-white px-6">
              <div>
                {(mainStep > 0 || subStep > 0) ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                ) : null}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleContinue}
                  className="text-xs font-medium text-gray-400 hover:text-gray-600 mr-2"
                >
                  Skip for now
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="inline-flex items-center gap-1.5 bg-gray-900 px-6 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-gray-800 transition-colors"
                >
                  {mainStep === 3 && subStep === 4 ? 'Finish' : 'Continue'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIALOG 1: Enter note for this point */}
      <EnterNoteDialog
        isOpen={isNoteDialogOpen}
        onClose={() => setIsNoteDialogOpen(false)}
        onConfirm={handleConfirmFloorPlanPoint}
        nextPointNumber={typeAndUnits.floorPlanPoints.length + 1}
        clickPos={clickPos}
      />

      {/* DIALOG 2: Want to publish now? */}
      <PublishDialog
        isOpen={isPublishDialogOpen}
        onClose={() => setIsPublishDialogOpen(false)}
        onPublish={handlePublishNow}
        onSaveDraft={handleSaveDraft}
      />
    </div>
  )
}
