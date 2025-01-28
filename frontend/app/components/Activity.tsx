import type { Activity } from "../consts";
import { timeFormat24 } from "../utils/activities";

export default function Activity({ activity }: { activity: Activity & { display: string } }) {
  const position = activity.starts.time
  const height = activity.ends.time - activity.starts.time
  const bgColor = activity.objective.color.dark

  return (
    <button 
      style={{
        top: `${position}px`,
        bottom: `${position}px`,
        height: `${height}px`,
        backgroundColor: `${bgColor}`
      }} 
      className="w-full absolute rounded-lg p-2 flex flex-col gap-1 shadow overflow-hidden"
      onClick={() => console.log(activity)}
    >
      <p className="font-semibold truncate">{activity.title}</p>
      <p className="text-xs truncate">{timeFormat24(activity.starts.time)} - {timeFormat24(activity.ends.time)}</p>
    </button>
  )
}
