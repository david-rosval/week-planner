import { Link, useLoaderData } from "@remix-run/react"
import { loader } from "../routes/_index"
import Objective from "./Objective"
import { ChevronDown, CirclePlus } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import ObjectiveDialogForm from "./ObjectiveDialogForm"

export default function ObjectivesSection() {
  const weekPlannerData = useLoaderData<typeof loader>()
  const { objectives } = weekPlannerData

  const [dropDown, setDropDown] = useState(false)
  const [modal, setModal] = useState(false)

  function toggleDropDown() {
    setDropDown((dropDown) => !dropDown)
  }
 
  return (
    <div className="p-5 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Link to="/objectives">
            <h2 className="text-2xl font-semibold hover:underline hover:underline-offset-4">Objectives</h2>
          </Link>
          <button
            onClick={() => setModal(true)}
            >
            <CirclePlus size={25} className="stroke-gray-500 transition-colors ease-out hover:stroke-green-500" />
          </button>
        </div>

        <button
          onClick={toggleDropDown}
        >
          <motion.div
            animate={{
              rotate: dropDown ? 180 : 0,
              transition: {
                duration: 0.3
              }
            }}
          >
            <ChevronDown className="stroke-gray-400" size={30} />
          </motion.div>
        </button>
        
      </div>
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: "auto",
              transition: {
                duration: 0.2
              }
            }}
            exit={{
              height: 0,
              transition: {
                duration: 0.2
              }
            }}
            className="responsive-grid-display overflow-hidden"
          >
            {objectives.map((objective, i) => (
              <Link key={i} to={`/objectives/${objective.id}`}>
                <Objective objective={objective} />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Modal */}
      <AnimatePresence>
        {modal && <ObjectiveDialogForm modal={modal} setModal={setModal} />}
      </AnimatePresence>
    </div>
  )
}
