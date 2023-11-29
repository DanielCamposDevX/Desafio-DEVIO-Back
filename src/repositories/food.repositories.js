import db from "../config/prisma.js"





async function getAllFoods() {
    return await db.food.findMany({})
}

async function findFoodById(id) {
    return await db.food.findUnique({
        where: { id },
    });
}











export const foodRepositories = { getAllFoods, findFoodById }