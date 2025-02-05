import { type Objective } from "../consts";

export default function Objective({ objective }: { objective: Objective }) {
  const {
    objective: title,
    color,
    deadline
  } = objective
  return (
    <div 
      style={{
        backgroundColor: `${color.dark}`
      }}
      className="rounded-lg p-3 flex flex-col gap-8 bg-gradient-to-t shadow-md transition-all ease-in-out duration-200 hover:-translate-y-1 "
    >
      <h3 className="text-xl truncate">{title}</h3>
      <p className="text-right dark:text-white/70 text-gray-900/70">{deadline}</p>
    </div>
  )
}
