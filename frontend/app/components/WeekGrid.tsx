import { hoursOfDay, weekDays } from "../consts";
import Day from "./Day";

export default function WeekGrid() {
  return (
    <div className="flex w-full">
      {/* Hours */}
      <div className="w-14 max-w-14 mt-8 h-[1440px] flex flex-col justify-around">
        {hoursOfDay.map((hour, i) => (
          <div className="h-full p-1 text-xs border-t dark:border-gray-700" key={i}>{hour}</div>
        ))}
      </div>
      <div className="flex-1">
        {/* Week days */}
        <div className="grid grid-cols-7 h-8">
          {weekDays.map((day, i) => (
            <div key={i} className={`capitalize border-l dark:border-gray-700 py-1 px-3`}>
              {day.en}
            </div>
          ))}
        </div>
        {/* Week Grid */}
        <div className="w-full grid grid-cols-7 h-[1440px]">
          {weekDays.map((day, i) => (
            <Day weekDay={day.en} key={i} />
          ))}
        </div>
      </div>
    </div>

  )
}
