import { CirclePlus } from "lucide-react"
import WeekGrid from "./WeekGrid"
import { Link } from "@remix-run/react"

export default function ActivitiesSection() {
  return (
    <div className="p-5 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Link to="/activities">
          <h2 className="text-2xl font-semibold hover:underline hover:underline-offset-4">Activities</h2>
        </Link>
        <button
          onClick={() => {
            console.log("New Activity")
          }}
        >
          <CirclePlus size={25} className="stroke-gray-500 transition-colors ease-out hover:stroke-green-500" />
        </button>
      </div>
      <WeekGrid />
    </div>
  )
}
