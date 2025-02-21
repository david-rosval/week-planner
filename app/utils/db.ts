import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getObjectives(userId: string) {
  const allObjectives = await prisma.objective.findMany({
    take: 4,
    where: { userId },
  })
  return allObjectives
}
export async function getAllObjectives(userId: string) {
  const allObjectives = await prisma.objective.findMany({
    where: { userId },
  })
  return allObjectives
}

export async function getActivities(userId: string) {
  const allActivities = await prisma.activity.findMany({
    where: { userId },
    include: { objective: true }
  })
  return allActivities
}

export async function getActivitiesByObjectiveId(objectiveId: string) {
  const allActivitiesFromObjective = await prisma.activity.findMany({
    where: { objectiveId }
  })
  return allActivitiesFromObjective
}

export type newObjectiveType = {
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

export type NewActivityType = {
  title: string
  description?: string
  objectiveId: string
  userId: string
  startDay: string
  startTime: number
  endDay: string
  endTime: number
}

export async function createActivity(newActivity: NewActivityType) {
  const createdActivity = await prisma.activity.create({
    data: newActivity
  })
  return createdActivity
}

export async function getUserObjective(id: string) {
  const objective = await prisma.objective.findFirst({
    where: { id }
  })
  return objective
}

export async function getObjectiveActivities(objectiveId: string) {
  const activities = await prisma.activity.findMany({
    where: { objectiveId },
    include: { objective: true }
  })
  return activities
}