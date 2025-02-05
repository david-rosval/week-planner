import { getAuth } from "@clerk/remix/ssr.server"
import { LoaderFunctionArgs } from "@remix-run/node"
import { NavLink, Outlet, redirect, useLoaderData } from "@remix-run/react"
import { exampleUserObjectives } from "../consts"
import { CirclePlus } from "lucide-react"
import ObjectivePageItem from "../components/ObjectivePageItem"

export const loader = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args)
  if (!userId) {
    return redirect("/sign-in")
  }
  return exampleUserObjectives
}

export default function Objectives() {
  const objectives = useLoaderData<typeof loader>()
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className=" text-5xl font-pacifico mb-2">Objectives</h1>
      <div className="flex gap-5 overflow-x-auto  py-3">
        <button className="rounded-lg p-3 flex justify-center items-center border-4 dark:border-gray-700 border-dashed transition-transform ease-in-out duration-300 h-[104px] min-w-32">
          <div className="flex flex-col items-center gap-1">
            <CirclePlus size={35} className="dark:stroke-gray-700" />
            <p className="dark:text-gray-700 text-md font-semibold">New Objective</p>
          </div>
        </button>
        {objectives.map((objective, i) => (
          <NavLink 
            key={i} 
            to={`/objectives/${objective.id}`}
            className={({ isActive, isPending }) => isPending ? "animate-pulse" : isActive ? "scale-95 " : ""}
          >
            <ObjectivePageItem  objective={objective} />
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
