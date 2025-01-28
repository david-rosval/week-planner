import { DayTime } from "~/consts";

export function timeFormat24(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = mins.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

export function activityDisplay(starts: DayTime, ends: DayTime) {
  const position = "inset-y-[" + "120" + "px]"
  const height = `h-[${ends.time - starts.time}px]`
  const display = `${height} ${position}`
  return display
}