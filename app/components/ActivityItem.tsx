export default function ActivityItem({ activity }: {
  activity: {
    id: string
    time: string
    title: string
    description: string
  }
}) {
  const {
    time,
    title,
    description
  } = activity

  return (
    <button
      onClick={() => console.log("activity")}
    >
      <li className="flex flex-col gap-2 justify-center dark:bg-white/5 bg-neutral-50 shadow-md p-3 min-h-24 hover:scale-105 transition duration-300 ease-in-out text-left">
        <div className="min-w-16 justify-between flex text-base">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="font-semibold text-neutral-500">{time}</p>
        </div>
        <p>{description}</p>
      </li>
    </button>
  )
}
