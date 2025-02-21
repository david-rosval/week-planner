import { timeFormat24 } from "../utils";
import { type Activity } from "../consts";

export default function ObjectiveActivitiesItem({ activity }: { activity: Activity}) {
  return (
    <div>
      <p>{activity.title}</p>
      
      <p className="text-xs truncate text-gray-400"><span className="capitalize text-gray-400">{activity.startDay}</span> • {timeFormat24(activity.startTime)} - {timeFormat24(activity.endTime)}</p>
    </div>
  )
}
