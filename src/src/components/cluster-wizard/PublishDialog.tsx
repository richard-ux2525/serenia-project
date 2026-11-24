import { Building2, X } from 'lucide-react'

interface PublishDialogProps {
  isOpen: boolean
  onClose: () => void
  onPublish: () => void
  onSaveDraft: () => void
}

export default function PublishDialog({
  isOpen,
  onClose,
  onPublish,
  onSaveDraft,
}: PublishDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="w-full max-w-sm overflow-hidden bg-white p-6 shadow-2xl text-center relative border border-gray-200">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Icon Illustration Box */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-stone-100 text-stone-800 border border-stone-200">
          <Building2 className="h-8 w-8 text-stone-700" />
        </div>

        {/* Text Heading */}
        <h3 className="text-lg font-bold text-gray-900">Want to publish now?</h3>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed px-2">
          You can publish now if everything is filled in, or save it as a draft to edit later.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2.5">
          <button
            type="button"
            onClick={onPublish}
            className="w-full bg-gray-900 py-3 text-xs font-semibold text-white shadow-xs hover:bg-gray-800 transition-colors"
          >
            Yes, Upload now
          </button>
          <button
            type="button"
            onClick={onSaveDraft}
            className="w-full border border-gray-200 bg-white py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Save as draft
          </button>
        </div>
      </div>
    </div>
  )
}
