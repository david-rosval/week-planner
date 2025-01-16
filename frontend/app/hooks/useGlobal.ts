import { useContext } from "react"
import { GlobalContext } from "../components/providers/GlobalProvider"

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobal debe ser usado dentro de un GlobalProvider")
  }
  return context
}