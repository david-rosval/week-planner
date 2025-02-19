import type { Activity } from "../consts";
import { timeFormat24 } from "../utils";

export default function Activity({ activity }: { activity: Activity }) {
  const { starts, ends, objective} = activity
  const position = starts.time
  const height = ends.time - starts.time
  const bgColor = objective.color

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
      <p className="text-xs truncate dark:text-white/70 text-gray-900/70">{timeFormat24(activity.starts.time)} - {timeFormat24(activity.ends.time)}</p>
    </button>
  )
}
