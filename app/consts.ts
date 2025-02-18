export const weekDays = [
  {
    en: "monday",
    es: "lunes",
    color: "bg-red-300",
  },
  {
    en: "tuesday",
    es: "martes",
    color: "bg-emerald-300",
  },
  {
    en: "wednesday",
    es: "miércoles",
    color: "bg-yellow-300",
  },
  {
    en: "thursday",
    es: "jueves",
    color: "bg-orange-300",
  },
  {
    en: "friday",
    es: "viernes",
    color: "bg-blue-300",
  },
  {
    en: "saturday",
    es: "sábado",
    color: "bg-purple-300",
  },
  {
    en: "sunday",
    es: "domingo",
    color: "bg-fuchsia-300",
  },
]

export const hoursOfDay = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0') + ":00");

export const content = {
  mainTitle: {
    en: "Week Planner",
    es: "Plan Semanal",
  }
}

type ActivityType = {
  title: string;
  description?: string;
  startAt: string;
  finishAt: string;
  objective: string;
}


type WeekPlannerType = {
  user: string;
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

export const weekSample: WeekPlannerType = {
  user: "12345abcde",
  activities: {
    monday: [
      {
        title: "Team Meeting",
        description: "Weekly team meeting to discuss project updates.",
        startAt: "09:00",
        finishAt: "10:00",
        objective: "Align team on weekly goals."
      },
      {
        title: "Code Review",
        startAt: "11:00",
        finishAt: "12:00",
        objective: "Align team on weekly goals."
      }
    ],
    tuesday: [
      {
        title: "Client Presentation",
        description: "Present project progress to the client.",
        startAt: "14:00",
        finishAt: "15:30",
        objective: "Gather client feedback and align expectations."
      }
    ],
    wednesday: [
      {
        title: "Focus Time",
        description: "Dedicated time for deep work on the project.",
        startAt: "08:00",
        finishAt: "12:00",
        objective: "Complete pending project tasks."
      }
    ],
    thursday: [
      {
        title: "Workshop",
        description: "Participate in a technical workshop.",
        startAt: "10:00",
        finishAt: "12:00",
        objective: "Learn new skills and techniques."
      }
    ],
    friday: [
      {
        title: "Demo Preparation",
        description: "Prepare for the end-of-week project demo.",
        startAt: "09:00",
        finishAt: "11:00",
        objective: "Strengthen family bonds."
      },
      {
        title: "Project Demo",
        startAt: "16:00",
        finishAt: "17:00",
        objective: "Learn new skills and techniques."
      }
    ],
    saturday: [
      {
        title: "Personal Development",
        description: "Read a book on software architecture.",
        startAt: "10:00",
        finishAt: "12:00",
        objective: "Strengthen family bonds."
      }
    ],
    sunday: [
      {
        title: "Family Time",
        description: "Spend quality time with family.",
        startAt: "15:00",
        finishAt: "18:00",
        objective: "Strengthen family bonds."
      }
    ]
  },
  duration: "P1W"
};

type Color = {
  light: string;
  dark: string;
}

export type Objective = {
  id: string;
  userId: string;
  objective: string;
  deadline: string;
  color: Color;
}

export type WeekDay = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

export type DayTime = {
  day: WeekDay;
  time: number;
}

export type Activity = {
  id: string;
  title: string;
  description: string;
  starts: DayTime;
  ends: DayTime;
  objective: Objective;
  userId: string;
}

export type UserObjectives = Array<Objective>

export type UserActivities = Array<Activity>

export type UserWeekPlannerData = {
  objectives: UserObjectives,
  activities: UserActivities
}

export const exampleUserObjectives: UserObjectives = [
  {
    id: "objective1",
    userId: "user123",
    objective: "Maintain physical health",
    deadline: "2025-12-31",
    color: {
      light: "#D4C4FB",
      dark: "#5300EB"
    }
  },
  {
    id: "objective2",
    userId: "user123",
    objective: "Ensure project alignment",
    deadline: "2025-06-30",
    color: {
      light: "#C1E1C5",
      dark: "#008B02"
    }
  },
  {
    id: "objective3",
    userId: "user123",
    objective: "Improve code quality",
    deadline: "2025-03-01",
    color: {
      light: "#FAD0C3",
      dark: "#DB3E00"
    }
  },
]

export const exampleUserActivities: UserActivities = [
  {
    id: "activity1",
    title: "Morning Jog",
    description: "Daily jogging to stay fit and start the day actively.",
    starts: {
      day: "monday",
      time: 420, // 7:00 AM
    },
    ends: {
      day: "monday",
      time: 480, // 8:00 AM
    },
    objective: {
      id: "objective1",
      userId: "user123",
      objective: "Maintain physical health",
      deadline: "2025-12-31",
      color: {
        light: "#D4C4FB",
        dark: "#5300EB"
      }
    },
    userId: "user123",
  },
  {
    id: "activity2",
    title: "Team Meeting",
    description: "Weekly team sync to discuss progress and blockers.",
    starts: {
      day: "wednesday",
      time: 600, // 10:00 AM
    },
    ends: {
      day: "wednesday",
      time: 780, // 11:00 AM
    },
    objective: {
      id: "objective2",
      userId: "user123",
      objective: "Ensure project alignment",
      deadline: "2025-06-30",
      color: {
        light: "#C1E1C5",
        dark: "#008B02"
      }
    },
    userId: "user123",
  },
  {
    id: "activity3",
    title: "Code Review",
    description: "Review pull requests from the development team.",
    starts: {
      day: "friday",
      time: 900, // 3:00 PM
    },
    ends: {
      day: "friday",
      time: 1020, // 5:00 PM
    },
    objective: {
      id: "objective3",
      userId: "user123",
      objective: "Improve code quality",
      deadline: "2025-03-01",
      color: {
        light: "#FAD0C3",
        dark: "#DB3E00"
      }
    },
    userId: "user123",
  },
  {
    id: "activity4",
    title: "Run tests",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    starts: {
      day: "monday",
      time: 120, // 3:00 PM
    },
    ends: {
      day: "monday",
      time: 240, // 5:00 PM
    },
    objective: {
      id: "objective3",
      userId: "user123",
      objective: "Improve code quality",
      deadline: "2025-03-01",
      color: {
        light: "#FAD0C3",
        dark: "#DB3E00"
      }
    },
    userId: "user123",
  },
];

export const exampleUserWeekPlannerData: UserWeekPlannerData = {
  objectives: exampleUserObjectives,
  activities: exampleUserActivities
}