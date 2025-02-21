import { SignedIn, SignedOut } from "@clerk/remix";
import WeekPlannerProvider from "../components/providers/WeekPlannerProvider";
// import Week from "../components/Week";
import { content } from "../consts";
import { useGlobal } from "../hooks/useGlobal";
import Welcome from "../components/Welcome";
import ActivitiesSection from "../components/ActivitiesSection";
import ObjectivesSection from "../components/ObjectivesSection";
import { LoaderFunctionArgs, redirect, type ActionFunctionArgs } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createActivity, createObjective, getActivities, getAllObjectives, NewActivityType, newObjectiveType } from "~/utils/db";
import { convertDateToIsoString, convertTimeToMinutes } from "~/utils";

export const action = async (args: ActionFunctionArgs) => {
  const { userId } = await getAuth(args)

  if (!userId) {
    return redirect('/sign-in?redirect_url=' + args.request.url)
  }

  const { request } = args
  const formData = await request.formData()
  const { _action, ...values } = Object.fromEntries(formData)
  
  // CREATE OBJECTIVE FORM
  
  if (_action === "createobjective") {
    console.log("create objective")

    // generate newObjective parameter
    const newObjective: newObjectiveType = {
      userId,
      title: values.objective as string,
      deadline: new Date(values.deadline as string),
      color: values.color as string
    }

    console.log("input", newObjective)

    try {
      const createdObjective = await createObjective(newObjective)
      console.log(createdObjective)
      return { result: "created" }
    } catch (error) {
      console.log(error)
      return { result: "error" }
    }

  }

  // CREATE ACTIVITY FORM

  if (_action === "createactivity") {
    console.log("create activity")

    // generate newActivity parameter
    const newActivity: NewActivityType = {
      title: values.title as string,
      objectiveId: values.objective as string,
      userId,
      startDay: values.startDay as string,
      startTime: convertTimeToMinutes(values.startTime as string),
      endDay: values.endDay as string,
      endTime: convertTimeToMinutes(values.endTime as string),
    }
    if (values.description && String(values.description).trim().length > 0) {
      newActivity.description = values.description as string
    }

    try {
      const createdActivity = await createActivity(newActivity)
      console.log(createdActivity)
      return { result: "created" }
    } catch (error) {
      console.log(error)
      return { result: "error" }
    }
  }

}

export const loader = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args)

  if (!userId) {
    return redirect('/sign-in')
  }

  // GET OBJECTIVES

  const userObjectives = await getAllObjectives(userId)
  const userObjectivesDateFixed = userObjectives.map(objective => {
    return {
      ...objective,
      deadline: convertDateToIsoString(objective.deadline)
    }
  })

  // GET ACTIVITIES

  const userActivities = await getActivities(userId)

  const loaderData = {
    objectives: userObjectivesDateFixed,
    activities: userActivities
  }


  return loaderData
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
