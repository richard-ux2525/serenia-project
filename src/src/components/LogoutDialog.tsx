import { useEffect, useRef } from 'react'
import logoutDoor from '../assets/logoutDoor.png'

interface LogoutDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

function LogoutDialog({ isOpen, onClose, onConfirm }: LogoutDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // The dialog only exists while isOpen is true, so open it as soon as it appears
  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  return isOpen ? (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed inset-0 z-[9999] m-auto w-[calc(100vw-2rem)] max-w-md border border-stone-300 p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-xs font-sans text-gray-900 antialiased"
    >
      <div className="bg-white p-3 pb-4">
        <div className="mt-6 flex justify-center sm:mt-10">
          <img src={logoutDoor} alt="" className="h-32 sm:h-[160px]" />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold">Sure want to log out?</h1>
          <p className="mt-3 tracking-tight text-stone-700">
            Are you sure you want to log <br /> out of this account?
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t-2 border-gray-300 p-2 sm:mt-10">
          <button onClick={onConfirm} className="w-full bg-[#D54033] p-3">Yes, log out</button>
          <button onClick={onClose} className="w-full bg-stone p-3">No, keep here</button>
        </div>
      </div>
    </dialog>
  ) : null
}

export default LogoutDialog
