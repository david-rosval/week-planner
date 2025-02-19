import { SignedIn, SignedOut } from "@clerk/remix";
import WeekPlannerProvider from "../components/providers/WeekPlannerProvider";
// import Week from "../components/Week";
import { content, exampleUserWeekPlannerData } from "../consts";
import { useGlobal } from "../hooks/useGlobal";
import Welcome from "../components/Welcome";
import ActivitiesSection from "../components/ActivitiesSection";
import ObjectivesSection from "../components/ObjectivesSection";
import { redirect, type ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const objective = String(formData.get("objective"))
  const deadline = String(formData.get("deadline"))
  const color = String(formData.get("color"))

  console.log({objective, deadline, color})

  return redirect("/")
}

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
          <ActivitiesSection />
        </SignedIn>
        <SignedOut>
          <Welcome />
        </SignedOut>  
      </div>
    </WeekPlannerProvider>
  );
}
