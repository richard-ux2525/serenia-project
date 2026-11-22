import { useState } from 'react'
import { Upload, FileText, CheckCircle2, Plus, Trash2 } from 'lucide-react'
import {
  bedroom,
} from '../../imports'

export interface HouseMediaData {
  coverImage: { name: string; size: string; url: string } | null
  galleryCategory: string
  galleryImages: { id: string; category: string; src: string; alt: string }[]
  documents: { id: string; name: string; size: string; progress: number }[]
}
export const HouseMediaData = {}

interface HouseMediaStepProps {
  subStep: number // 0 = Cover, 1 = Gallery, 2 = Brochure
  data: HouseMediaData
  onChange: (field: keyof HouseMediaData, value: any) => void
}

const galleryCategories = ['Outdoor', 'Bathroom', 'Bedroom', 'Dining', 'Gate']

export default function HouseMediaStep({
  subStep,
  data,
  onChange,
}: HouseMediaStepProps) {
  const [activeCategory, setActiveCategory] = useState(data.galleryCategory || 'Outdoor')

  const handleSimulateCoverUpload = () => {
    onChange('coverImage', {
      name: 'cover_aruna_residence.png',
      size: '2.5 MB',
      url: bedroom,
    })
  }

  const handleAddDocument = () => {
    const newDoc = {
      id: Date.now().toString(),
      name: `document_spec_${data.documents.length + 1}.pdf`,
      size: '2.4 MB',
      progress: 100,
    }
    onChange('documents', [...data.documents, newDoc])
  }

  const handleRemoveDocument = (id: string) => {
    onChange(
      'documents',
      data.documents.filter((d) => d.id !== id)
    )
  }

  if (subStep === 0) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Media and Gallery</h2>
          <p className="mt-1 text-xs text-gray-500">
            Add a cover, preview/gallery photos, and brochure for this cluster.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          <label className="block text-xs font-semibold text-gray-800">
            Cover Photo
          </label>

          {/* Upload Dropzone */}
          <div
            onClick={handleSimulateCoverUpload}
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 bg-gray-50/50 p-10 text-center hover:bg-gray-100/50 transition-colors cursor-pointer"
          >
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <p className="text-xs font-semibold text-gray-700">
              Drag or upload image
            </p>
            <p className="text-[11px] text-gray-400 mt-1">
              960px × 540px, max size 10MB
            </p>
            <button
              type="button"
              className="mt-4 bg-gray-900 px-4 py-2 text-xs font-medium text-white shadow-xs hover:bg-gray-800"
            >
              Upload
            </button>
          </div>

          {/* Upload Progress Status Pill */}
          {data.coverImage && (
            <div className="flex items-center justify-between border border-gray-200 bg-white p-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-900">
                    {data.coverImage.name}
                  </span>
                  <span className="block text-[10px] text-gray-400">
                    File size: {data.coverImage.size}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onChange('coverImage', null)}
                className="text-xs font-medium text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (subStep === 1) {
    const filteredImages = data.galleryImages.filter(
      (img) => img.category === activeCategory
    )

    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Media and Gallery</h2>
          <p className="mt-1 text-xs text-gray-500">
            Add a cover, preview/gallery photos, and brochure for this cluster.
          </p>
        </div>

        <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
          {/* Gallery Category Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat)
                  onChange('galleryCategory', cat)
                }}
                className={`flex-1 py-1.5 text-center text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-gray-900 shadow-xs font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Uploaded Gallery Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="group relative h-28 overflow-hidden border border-gray-200 bg-gray-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

            {/* Upload Box */}
            <div className="flex h-28 flex-col items-center justify-center border-2 border-dashed border-gray-200 bg-gray-50/50 p-2 text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <Upload className="h-5 w-5 text-gray-400 mb-1" />
              <span className="text-[10px] font-medium text-gray-600">
                Drag or upload image
              </span>
              <span className="text-[9px] text-gray-400">960×540 max 10MB</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Media and Gallery</h2>
        <p className="mt-1 text-xs text-gray-500">
          Add a cover, preview/gallery photos, and brochure for this cluster.
        </p>
      </div>

      <div className="space-y-4 border border-gray-200 bg-white p-6 shadow-xs">
        <label className="block text-xs font-semibold text-gray-800">
          Brochure & document
        </label>

        {/* Uploaded Documents List */}
        <div className="space-y-2.5">
          {data.documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between border border-gray-200 bg-gray-50/50 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-rose-50 text-rose-600 border border-rose-100">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-900">
                    {doc.name}
                  </span>
                  <span className="block text-[10px] text-gray-400">
                    Size: {doc.size}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-emerald-600">
                  {doc.progress}%
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveDocument(doc.id)}
                  className="p-1 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Other Button */}
        <button
          type="button"
          onClick={handleAddDocument}
          className="flex w-full items-center justify-center gap-1.5 border border-dashed border-gray-300 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add other
        </button>
      </div>
    </div>
  )
}
