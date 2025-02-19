import { ChevronDown } from "lucide-react";
import { DialogForm, FormSection } from "./DialogForm";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

export default function ActivityDialogForm({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <DialogForm modal={modal} setModal={setModal} title='New Activity'>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-5'>
          <FormSection name="title" type="text" label="Title" />
          <Description />
          <ActivityScheduler dayName="startsDay" timeName="startsTime" label="Starts"  />
          <ActivityScheduler dayName="endsDay" timeName="endsTime" label="Ends"  />
          <ObjectiveSelector />
        </div>
        <div className='flex justify-start'>
          <button
            className=' py-2 px-5 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors ease-in-out' 
            type='submit'
            >Create</button>
        </div>
      </div>
    </DialogForm>
  )
}

function Description() {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="description" className="text-xs text-gray-400">Description</label>
      <textarea name="description" id="description" className="bg-gray-600 rounded appearance-nones p-2 resize-none" rows={3}></textarea>
    </div>
  )
}

function ObjectiveSelector() {
  const { objectives } = useLoaderData<typeof loader>()

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs text-gray-400 capitalize">Objective</p>
      <div className="flex gap-3 items-center">
        {/* Select starts day */}
        <div className="relative grid w-full">
          <select name="objective" id="objective" className="appearance-none p-2 focus:ring-red-400 focus:border-red-300 capitalize bg-gray-600 rounded truncate" >
            <option selected className="normal-case ">-- Choose an objective --</option>
            {objectives.map((objective, index) => (
              <option className="capitalize truncate max-w-36" key={index} value={objective.id}>{objective.objective}</option>
            ))}
          </select>
          <div className="absolute right-0 h-full flex items-center justify-center p-1 pointer-events-none">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ActivityScheduler({ label, dayName, timeName }: { label: string, dayName: string, timeName: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs text-gray-400 capitalize">{label}</p>
      <div className="flex gap-3 items-center">
        {/* Select starts day */}
        <div className="w-full">
          <div className="relative grid">
            <select name={dayName} id={dayName} className="appearance-none p-2 focus:ring-red-400 focus:border-red-300 capitalize bg-gray-600 rounded" >
              <option selected className="normal-case ">-- Choose a day --</option>
              {days.map((day, index) => (
                <option className="capitalize" key={index} value={day}>{day}</option>
              ))}
            </select>
            <div className="absolute right-0 h-full flex items-center justify-center p-1 pointer-events-none">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        {/* Select starts time */}
        <div className="flex items-center gap-1">
          <input type="time" name={timeName} className="bg-gray-600 appearance-none p-2 rounded" />
        </div>
      </div>
    </div>
  )
}
