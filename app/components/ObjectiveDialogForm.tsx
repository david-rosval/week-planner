import { DialogForm, FormSection } from "./DialogForm";

export default function ObjectiveDialogForm({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <DialogForm modal={modal} setModal={setModal} title='New Objective'>
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
    </DialogForm>
  )
}