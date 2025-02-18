import { X } from 'lucide-react';
import React from 'react'
import { motion } from "motion/react"

export function ObjectiveDialogForm({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: modal ? 1 : 0
      }}
      exit={{
        opacity: 0
      }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
    >
      <motion.div 
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
        }}
        className="bg-white dark:bg-gray-800 p-5 rounded-lg  max-w-72 w-full flex flex-col gap-3 shadow-lg"
      >
        <div className='flex justify-between items-start gap-4'>
          <h4 className='truncate text-lg font-semibold'>New Objective</h4>
          <button
            onClick={() => setModal(false)}
          >
            <X className='transition-colors ease-in-out stroke-gray-400 hover:stroke-gray-500' size={20} />
          </button>
        </div>
        {/* Form */}
        <div className='flex flex-col gap-7'>

          <div className='flex flex-col gap-5'>
            <FormSection name="objective" type="text" label="Title" />
            <FormSection name="deadline" type="date" label="Deadline" />
            <FormSection name="color" type="text" label="Color" />
          </div>
          <div className='flex justify-start'>
            <button
              className=' py-2 px-5 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors ease-in-out' 
              type='submit'
            >Create</button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

function FormSection({ name, type, label }: {
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

function Label({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
  return (
    <label className='text-xs text-gray-400' htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function Input({ type, name }: { type: string, name: string }) {
  return (
    <input className='p-2 rounded bg-gray-600 focus:border-x-gray-500' name={name} type={type} />
  )
}