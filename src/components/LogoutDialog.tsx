import { useEffect, useRef } from 'react'
import { LogOut, X } from 'lucide-react'
import logoutDoor from '../assets/logoutDoor.png'
export interface LogoutDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function LogoutDialog({ isOpen, onClose, onConfirm }: LogoutDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed inset-0 z-[9999] m-auto max-w-md border border-stone-300 p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-xs font-sans text-gray-900 antialiased"
    >
      <div className='bg-white p-3 h-[493px] w-100'>
        <div className='flex justify-center mt-10'>
<img src={logoutDoor} alt="" className='h-[160px]'/>
        </div>
        <div className='text-center p-3'>
            <h1 className='font-bold text-xl'>Sure want to log out?</h1>
            <p className='text-stone-700 mt-3 tracking-tight'>
              Are you sure you want to log <br /> out of this account?
            </p>
        </div>
        <div className='flex flex-col gap-3 mt-10 border-t-2 border-gray-300 p-2'>
          <button onClick={onConfirm}  className='bg-[#D54033] p-3 w-full'>Yes, log out</button>
          <button onClick={onClose} className='bg-stone p-3 w-full'>No, keep here</button>
        </div>
      </div>
    </dialog>
  )
}
