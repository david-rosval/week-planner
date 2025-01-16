import { week } from "../consts";
import DayCard from "./DayCard";

export default function Week() {
  return (
    <div className="week-display z-10">
      {week.map((day, index) => (
        <DayCard key={index} day={day} />
      ))}
    </div>
  )
}
