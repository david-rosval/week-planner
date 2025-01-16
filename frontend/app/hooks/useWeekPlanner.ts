import { useContext } from "react";
import { WeekPlannerContext } from "../components/providers/WeekPlannerProvider";

export default function useWeekPlanner() {
  const context = useContext(WeekPlannerContext)
  if (!context) throw new Error("useWeekPlanner must be called ")
  return context
}