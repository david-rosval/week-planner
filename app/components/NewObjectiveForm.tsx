import { Form } from "@remix-run/react";

export default function NewObjectiveForm() {
  return (
    <Form method="post" className="flex flex-col gap-3">
      <h4 className="text-xl">New Objective</h4>
      <div className="flex flex-col gap-1">
        <label htmlFor="objective" className="flex flex-col text-xs">Name</label>
        <input type="text" name="objective" className="rounded dark:bg-gray-700 bg-gray-400 py-1 px-2" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="deadline" className="flex flex-col text-xs">Deadline</label>
        <input type="date" name="deadline" className="rounded dark:bg-gray-700 bg-gray-400 py-1 px-2" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="color" className="flex flex-col text-xs">Color</label>
        <input type="text" name="color" className="rounded dark:bg-gray-700 bg-gray-400 py-1 px-2" />
      </div>
      <button type="submit" className="bg-gray-900 text-green-500 p-2 rounded">Create</button>
    </Form>
  )
}
