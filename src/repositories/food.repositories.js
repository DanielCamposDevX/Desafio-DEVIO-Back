import db from "../config/prisma.js"





async function getAllFoods() {
    return await db.food.findMany({})
}












export const foodRepositories = { getAllFoods }