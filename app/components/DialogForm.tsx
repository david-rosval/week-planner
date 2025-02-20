import { X } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react"

export function DialogForm({ 
  children, 
  modal, 
  setModal, 
  title 
}: { 
  children: React.ReactNode, 
  modal: boolean, 
  setModal: React.Dispatch<React.SetStateAction<boolean>>, 
  title: string 
}) {
  const dialogRef = useRef<HTMLDivElement>(null) // ref the element which contains the dialog content (not the outside background)

  
  useEffect(() => {
    // close the modal if the mouse event didn't occur in the referred element
    // this function needs to be created inside
    function closeWhenClickingOutside(e: MouseEvent) { 
      if (modal && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setModal(false);
      }
    }
    document.addEventListener("mousedown", closeWhenClickingOutside) // runs the function every mousedown event in the app but only close the modal if the conditions are completed
  }, [modal, setModal])
  

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: modal ? 1 : 0 }}
      exit={{ opacity: 0,
        transition: {
          delay: 0.3
        }
      }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
    >
      <motion.div 
        ref={dialogRef}
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: modal ? 1 : 0,
          y: 0,
          transition: {
            delay: 0.2,
          }
        }}
        exit={{
          y: -20,
          opacity: 0,
          transition: {
            delay: 0.2
          }
        }}
        className="bg-white dark:bg-gray-800 p-5 rounded-lg  max-w-80 w-full flex flex-col gap-3 shadow-lg"
      >
        <div className='flex justify-between items-start gap-4'>
          <h4 className='truncate text-lg font-semibold'>{title}</h4>
          <button
            onClick={() => setModal(false)}
          >
            <X className='transition-colors ease-in-out stroke-gray-400 hover:stroke-gray-500' size={20} />
          </button>
        </div>
        {/* Form */}
        {children}
      </motion.div>
    </motion.div>
  )
}

export function FormSection({ name, type, label }: {
  name: string;
  type: string;
  label: string;
}) {
  return (
    <div className='flex flex-col gap-1'>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} />
    </div>
  )
}

export function Label({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
  return (
    <label className='text-xs text-gray-400' htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export function Input({ type, name }: { type: string, name: string }) {
  return (
    <input className='p-2 rounded bg-gray-600 focus:border-x-gray-500' name={name} type={type} />
  )
}