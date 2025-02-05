import { exampleUserActivities, exampleUserObjectives } from "../consts";

export async function getUserObjective(id: string) {
  const objective = exampleUserObjectives.find(objective => objective.id === id)
  return objective
}

export async function getObjectiveActivities(objectiveId: string) {
  const activities = exampleUserActivities.filter((activity) => activity.objective.id === objectiveId)
  return activities
}