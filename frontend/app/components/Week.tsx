import { weekDays } from "../consts";
import DayCard from "./DayCard";

export default function Week() {
  return (
    <div className="week-display z-10">
      {weekDays.map((day, index) => (
        <DayCard key={index} day={day} />
      ))}
    </div>
  )
}
