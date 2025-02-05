import { SignedIn, SignedOut } from "@clerk/remix";
import WeekPlannerProvider from "../components/providers/WeekPlannerProvider";
// import Week from "../components/Week";
import { content, exampleUserWeekPlannerData } from "../consts";
import { useGlobal } from "../hooks/useGlobal";
import Welcome from "../components/Welcome";
import Activities from "../components/Activities";
import ObjectivesSection from "../components/ObjectivesSection";

export const loader = async () => {
  return exampleUserWeekPlannerData
}

export default function Index() {
  const { language } = useGlobal()
  const { mainTitle } = content

  return (
    <WeekPlannerProvider>
      <div className=" flex flex-col gap-10 p-5">
        <div className="text-center flex flex-col gap-5 max-w-[750px] mx-auto">
          <h1 className=" text-7xl font-pacifico">
            {mainTitle[language]}
          </h1>
          <SignedOut>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aut nam ipsam, inventore fugit doloribus voluptas optio nisi quo itaque in assumenda quidem fugiat quos sit distinctio earum, expedita ullam!</p>
          </SignedOut>
        </div>
        <SignedIn>
          {/* Content */}
          <ObjectivesSection />
          <Activities />
          {/* <Week /> */}
        </SignedIn>
        <SignedOut>
          <Welcome />
        </SignedOut>  
      </div>
    </WeekPlannerProvider>
  );
}
