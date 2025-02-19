import { useState } from "react";
import { type Objective } from "../consts";
import {motion} from "motion/react"
export default function Objective({ objective }: { objective: Objective }) {
  const {
    title,
    color,
    deadline
  } = objective

  const [objectiveHovered, setObjectiveHovered] = useState(false)

  return (
    <motion.div 
      initial={{
        backgroundColor: color,
      }}
      animate={{
        backgroundColor: objectiveHovered ? `${color}bb` : color,
      }}
      whileTap={{
        scale: 0.95
      }}
      className="rounded-lg p-3 flex flex-col gap-8 bg-gradient-to-t shadow-md transition-colors ease-out"
      onMouseEnter={() => setObjectiveHovered(true)}
      onMouseLeave={() =>setObjectiveHovered(false)}
    >
      <h3
        className="text-xl truncate"
      >{title}</h3>
      <p 
        className="text-right dark:text-white/70 text-gray-900/70"
      >{deadline}</p>
    </motion.div>
  )
}
