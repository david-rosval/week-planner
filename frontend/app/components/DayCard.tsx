import { useGlobal } from "../hooks/useGlobal";
import ActivityItem from "./ActivityItem"

const demoActivityList = [
  {
    id: "123",
    time: "8:30",
    title: "Activity 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repellat illo, repudiandae qui praesentium"
  },
  {
    id: "456",
    time: "12:00",
    title: "Activity 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repellat illo, repudiandae qui praesentium"
  },
  {
    id: "789",
    time: "20:00",
    title: "Activity 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repellat illo, repudiandae qui praesentium"
  },
]

export default function DayCard({ day }: { day: { en: string; es: string; color: string } }) {
  const { language } = useGlobal()
   
  return (
    <div className="font-figtree font-light border-2 p-8 flex flex-col gap-6">
      <div className="relative flex justify-center">
        <h2 className="font-pacifico text-4xl z-20 capitalize">{day[language]}</h2>
        <div className={`absolute inset-0 
          max-w-[400px]
          h-6 ${day.color} -skew-x-12 m-auto -z-10 opacity-40`} />
      </div>
      <ul className="flex flex-col gap-5">
        {demoActivityList.map((activity, index) => (
          <ActivityItem key={index} activity={activity} />
        ))}
      </ul>
    </div>
  )
}
