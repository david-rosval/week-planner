import { motion, AnimatePresence } from "motion/react";
import type { Activity } from "../consts";
import { timeFormat24 } from "../utils";


export default function Activity({ activity }: { activity: Activity }) {
  const { startTime, endTime, objective} = activity
  const position = startTime
  const height = endTime - startTime
  const bgColor = objective.color

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }} 
        transition={{ type: "spring", stiffness: 150, bounce: 0.1, duration: 0.1 }}
        style={{
          top: `${position}px`,
          bottom: `${position}px`,
          height: `${height}px`,
          backgroundColor: `${bgColor}`
        }} 
        className="w-full absolute rounded-lg p-2 flex flex-col gap-1 shadow overflow-hidden z-10"
        onClick={() => console.log(activity)}
      >
        <p className="font-semibold truncate">{activity.title}</p>
        <p className="text-xs truncate dark:text-white/70 text-gray-900/70">{timeFormat24(activity.startTime)} - {timeFormat24(activity.endTime)}</p>
      </motion.button>
    </AnimatePresence>
  )
}
