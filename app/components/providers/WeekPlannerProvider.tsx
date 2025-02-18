import { createContext, Dispatch, SetStateAction, useState } from "react";

type ActivityType = {
  title: string;
  description?: string;
  startAt: string;
  finishAt: string;
  objective: string;
}

/*
  ISO 8601 (PnYnMnWnD) for duration
  Ejemplos: "P2Y5M" (2 years and 5 months), "P3W" (3 weeks)
  Estructura:
  - P for period.
  - nY for years, nM months, nW weeks, and nD days.
*/ 

type WeekPlannerType = {
  activities: {
    monday?: Array<ActivityType>;
    tuesday?: Array<ActivityType>;
    wednesday?: Array<ActivityType>;
    thursday?: Array<ActivityType>;
    friday?: Array<ActivityType>;
    saturday?: Array<ActivityType>;
    sunday?: Array<ActivityType>;
  },
  duration: string; 
}

export type WeekPlannerContextType = {
  weekPlanner: WeekPlannerType | null,
  setWeekPlanner: Dispatch<SetStateAction<WeekPlannerType | null>>
}

export const WeekPlannerContext = createContext<WeekPlannerContextType | null>(null)

export default function WeekPlannerProvider({ children }: {
  children: React.ReactNode
}) {
  const [weekPlanner, setWeekPlanner] = useState<WeekPlannerType | null>(null)

  return (
    <WeekPlannerContext.Provider value={{
      weekPlanner,
      setWeekPlanner
    }}>
      {children}
    </WeekPlannerContext.Provider>
  )
}
