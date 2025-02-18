import { exampleUserActivities, exampleUserObjectives } from "../consts";

export async function getUserObjective(id: string) {
  const objective = exampleUserObjectives.find(objective => objective.id === id)
  return objective
}

export async function getObjectiveActivities(objectiveId: string) {
  const activities = exampleUserActivities.filter((activity) => activity.objective.id === objectiveId)
  return activities
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getObjectives(userId: string) {
  const allObjectives = await prisma.objective.findMany({
    where: { userId }
  })
  return allObjectives
}

export async function getActivities(userId: string) {
  const allActivities = await prisma.activity.findMany({
    where: { userId }
  })
  return allActivities
}

export async function getActivitiesByObjectiveId(objectiveId: string) {
  const allActivitiesFromObjective = await prisma.activity.findMany({
    where: { objectiveId }
  })
  return allActivitiesFromObjective
}

type newObjectiveType = {
  userId: string;
  title: string;
  deadline: Date;
  color: string;
}

export async function createObjective(newObjective: newObjectiveType) {
  const createdObjective = await prisma.objective.create({
    data: newObjective
  })
  return createdObjective
}

