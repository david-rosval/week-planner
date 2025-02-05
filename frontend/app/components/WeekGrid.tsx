import { hoursOfDay, weekDays } from "../consts";
import Day from "./Day";

export default function WeekGrid() {
  return (
    <div className="flex flex-col max-h-[600px] overflow-scroll inset-shadow-sm rounded">
    
      <div className="flex sticky top-0 z-20 min-w-[1200px] bg-gray-200 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-700 dark:to-90% shadow-md">
        <div className="h-full w-14 max-w-14 " />
        {/* Week days */} 
        <div className="grid grid-cols-7 flex-1 ">
          {weekDays.map((day, i) => (
            <div key={i} className={`capitalize dark:border-gray-700 py-3 px-3 text-center flex justify-center items-center font-semibold`}>
              <p>{day.en}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex min-w-[1200px]">
        {/* Hours */}
        <div className="flex flex-col justify-around sticky left-0 z-10 dark:bg-gray-800 bg-gray-100">
          {hoursOfDay.map((hour, i) => (
            <div className="w-14 h-full p-1 text-xs border-r border-t dark:border-gray-700" key={i}>{hour}</div>
          ))}
        </div>
        {/* Week Grid */}
        <div className="w-full grid grid-cols-7 h-[1440px] flex-1">
          {weekDays.map((day, i) => (
            <Day weekDay={day.en} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
