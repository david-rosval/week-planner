import { X } from 'lucide-react';
import React, { forwardRef } from 'react'

type Props = {
  children: React.ReactNode;
  toggleDialog: () => void
}

const Dialog = forwardRef<HTMLDialogElement, Props>(({ children, toggleDialog }, ref) => {
  return (
    <dialog
      ref={ref}
      className='p-4 dark:bg-gray-800 rounded shadow-lg relative'
    >
      <div className='absolute right-4'>
        <button onClick={toggleDialog} className=''><X /></button> 
      </div>
      {children}
    </dialog>
  )
})

Dialog.displayName = "Dialog"

export default Dialog