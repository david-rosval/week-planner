import { SignedIn, SignedOut } from "@clerk/remix";
import WeekPlannerProvider from "../components/providers/WeekPlannerProvider";
// import Week from "../components/Week";
import { content, exampleUserActivities } from "../consts";
import { useGlobal } from "../hooks/useGlobal";
import Welcome from "../components/Welcome";
import WeekGrid from "../components/WeekGrid";
import { activityDisplay } from "../utils/activities";

export const loader = async () => {
  const adaptedActivities = exampleUserActivities.map((activity) => {
    const adaptedActivity = {
      ...activity,
      display: activityDisplay(activity.starts, activity.ends)
    }
    return adaptedActivity
  })
  return adaptedActivities
}

export default function Index() {
  const { language } = useGlobal()
  const { mainTitle } = content

  return (
    <WeekPlannerProvider>
      <div className="font-figtree text-sm max-w-[1300px] lg:mx-auto p-5 pt-14 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-5 max-w-[750px] mx-auto">
          <h1 className=" text-7xl font-pacifico">
            {mainTitle[language]}
          </h1>
          <SignedIn>
            <p>Start by adding <span className="p-1 px-2 border border-neutral-500 rounded">Activities</span> the days you plan to make them.</p>
            {/* <div>
              {JSON.stringify(activities)}
            </div> */}
          </SignedIn>
          <SignedOut>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aut nam ipsam, inventore fugit doloribus voluptas optio nisi quo itaque in assumenda quidem fugiat quos sit distinctio earum, expedita ullam!</p>
          </SignedOut>
        </div>
        <SignedIn>
          {/* Content */}
          <WeekGrid />
          {/* <Week /> */}
        </SignedIn>
        <SignedOut>
          <Welcome />
        </SignedOut>  
      </div>
    </WeekPlannerProvider>
  );
}
