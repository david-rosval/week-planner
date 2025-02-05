import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getObjectiveActivities, getUserObjective } from "../utils/db"
import { calculateDaysLeft } from "../utils/activities"
import { Clock } from "lucide-react"
import ObjectiveActivitiesItem from "../components/ObjectiveActivitiesItem"

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params
  const userObjective = await getUserObjective(id as string)
  const objectiveActivities = await getObjectiveActivities(id as string)
  if (!userObjective) return null
  return {
    objectiveInfo: userObjective,
    objectiveActivities
  }
} 

export default function Objective() {
  const data = useLoaderData<typeof loader>()
  
  if (!data) return (
    <div>
      <h2>Objective not found</h2>
    </div>
  )

  const {
    objectiveInfo,
    objectiveActivities
  } = data
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="flex">
        <div className="flex flex-col flex-1 gap-2">
          <h2 className="text-2xl truncate">{objectiveInfo.objective}</h2>
          <div className="flex gap-2 items-center" >
            <Clock size={18} className="stroke-gray-400" /> 
            <p className="text-gray-400">{objectiveInfo.deadline}</p>
          </div>
          <div style={{
            borderColor: `${objectiveInfo.color.dark}`
          }} className="mt-4 border-l-4 pl-3 flex flex-col gap-3">
            {objectiveActivities.map((activity, i) => (
              <ObjectiveActivitiesItem key={i} activity={activity} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l pl-3 border-gray-700">
          <p className="text-4xl truncate">{calculateDaysLeft(objectiveInfo.deadline)}</p>
          <p className="">days left</p>
        </div>

      </div>
    </div>
  )
}
