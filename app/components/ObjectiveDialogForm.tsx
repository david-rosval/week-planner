
import { Form, useActionData } from "@remix-run/react";
import { DialogForm, FormSection } from "./DialogForm";
import { useEffect, useState } from "react";
import { Check, LoaderPinwheel } from "lucide-react";
import { AnimatePresence } from "motion/react";

export default function ObjectiveDialogForm({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  const actionData = useActionData<{ result: string }>()
  const [result, setResult] = useState("")

  useEffect(() => {
    if (actionData) {
      if (actionData.result === "created") {
        setModal(false)
      }
    }
  }, [actionData, setModal])
  

  return (
    <DialogForm modal={modal} setModal={setModal} title='New Objective'>
      <Form method="post" className='flex flex-col gap-7'>
        <div className='flex flex-col gap-5'>
          <FormSection name="objective" type="text" label="Title" />
          <FormSection name="deadline" type="date" label="Deadline" />
          <ColorPicker />
          
        </div>
        <div className='flex justify-start'>
          <button
            className=' py-2 px-5 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors ease-in-out' 
            type='submit'
            name="_action"
            value="createobjective"
            onClick={() => setResult("loading")}
          >
            <AnimatePresence>
              {result
                ? result === "created" 
                  ? <Check />
                  : result === "error"
                    ? <p>Error</p>
                    : <LoaderPinwheel className="animate-spin" />
                : <p>Create</p>}
            </AnimatePresence>
          </button>
        </div>
      </Form>
    </DialogForm>
  )
}


function ColorPicker() {
  const [color, setColor] = useState("#000000")

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400" htmlFor="color">Color</label>
      <div className="flex justify-between gap-3 bg-gray-600 rounded items-center">
        <p className="p-2">{color}</p>
        <div className="h-full relative right-[8px]">
          <input name="color" type="color" style={{ backgroundColor: color }} className="input-color appearance-none size-5 rounded cursor-pointer" value={color} onChange={(e) => setColor(e.target.value)}/>
          <div style={{ backgroundColor: color }} className="absolute top-0 left-0 size-5 rounded pointer-events-none " />
        </div>
      </div>
    </div>
  )
}
