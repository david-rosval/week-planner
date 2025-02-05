import { Link, useLoaderData } from "@remix-run/react"
import { loader } from "../routes/_index"
import Objective from "./Objective"
import { CirclePlus } from "lucide-react"

export default function ObjectivesSection() {
  const weekPlannerData = useLoaderData<typeof loader>()
  const { objectives } = weekPlannerData
  
  return (
    <div className="p-5 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Link to="/objectives">
          <h2 className="text-2xl font-semibold hover:underline hover:underline-offset-4">Objectives</h2>
        </Link>
        <button
          onClick={() => {
            console.log("New Activity")
          }}
        >
          <CirclePlus size={25} className="stroke-gray-500 transition-colors ease-out duration-500 hover:stroke-green-500" />
        </button>
      </div>
      <div className="responsive-grid-display">
        {objectives.map((objective, i) => (
          <Link key={i} to={`/objectives/${objective.id}`}>
            <Objective objective={objective} />
          </Link>
        ))}
      </div>
    </div>
  )
}
