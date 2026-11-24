import { useState, useEffect } from 'react'
import { X, Home } from 'lucide-react'

export interface FloorPlanPoint {
  id: number
  room: string
  description: string
  x: number // percentage
  y: number // percentage
}
export const FloorPlanPoint = {}

interface EnterNoteDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (point: Omit<FloorPlanPoint, 'id'>) => void
  nextPointNumber: number
  clickPos: { x: number; y: number } | null
}

const roomOptions = [
  'Dining room',
  'The kitchen',
  'Bedroom',
  'Family room',
  'Bathroom',
  'Balcony / Terrace',
  'Living room',
  'Work space',
  'Garden',
]

export default function EnterNoteDialog({
  isOpen,
  onClose,
  onConfirm,
  nextPointNumber,
  clickPos,
}: EnterNoteDialogProps) {
  const [selectedRoom, setSelectedRoom] = useState('Dining room')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (isOpen) {
      setSelectedRoom('Dining room')
      setDescription('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm({
      room: selectedRoom,
      description: description.trim() || `Description for ${selectedRoom}`,
      x: clickPos?.x ?? 50,
      y: clickPos?.y ?? 50,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="w-full max-w-md overflow-hidden bg-white shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center bg-stone-100 text-stone-700">
              <Home className="h-4 w-4" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              Enter note for this point
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Subtitle */}
        <div className="bg-gray-50/50 px-6 py-2 border-b border-gray-100 text-xs text-gray-500">
          Select the room category and add description for this point.
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Point Number */}
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Number (Aura R5)
            </label>
            <div className="mt-1 flex h-10 w-full items-center border border-gray-200 bg-gray-50 px-3 text-xs font-semibold text-gray-900">
              {nextPointNumber}
            </div>
          </div>

          {/* Room Selection */}
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Room
            </label>
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="mt-1 flex h-10 w-full items-center border border-gray-200 bg-white px-3 text-xs text-gray-900 focus:border-gray-400 focus:outline-none"
            >
              {roomOptions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell about this room"
              className="mt-1 w-full border border-gray-200 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>

          {/* Dialog Action Buttons */}
          <div className="mt-6 flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-900 px-5 py-2 text-xs font-medium text-white shadow-xs hover:bg-gray-800"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
