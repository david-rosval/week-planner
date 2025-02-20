import { exampleUserActivities, exampleUserObjectives } from "../consts";

export async function getUserObjective(id: string) {
  const objective = exampleUserObjectives.find(objective => objective.id === id)
  return objective
}

export async function getObjectiveActivities(objectiveId: string) {
  const activities = exampleUserActivities.filter((activity) => activity.objective.id === objectiveId)
  return activities
}

// with prisma

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

export async function getMoreObjectives(userId: string) {
  const nextObjectives = await prisma.objective.findMany({
    take: 4,
    where: { userId },
    skip: 4
  })
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