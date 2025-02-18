import { useLoaderData } from "@remix-run/react";
import { hoursOfDay } from "../consts";
import { loader } from "../routes/_index";
import Activity from "./Activity";

export default function Day({ weekDay }: { weekDay: string; }) {
  const weekPlannerData = useLoaderData<typeof loader>()
  const dayActivities = weekPlannerData.activities.filter(activity => activity.starts.day === weekDay)
  return (
    <div className={`relative ${weekDay !== "sunday" && "border-r"} dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex flex-col justify-around`}>
      {hoursOfDay.map((hour, i) => (
        <div className="h-full p-1 text-xs border-t dark:border-gray-700" key={i} />
      ))}
      {dayActivities.map((dayActivity, i) => (
        <Activity activity={dayActivity} key={i} />
      ))}
    </div>
  )
}
