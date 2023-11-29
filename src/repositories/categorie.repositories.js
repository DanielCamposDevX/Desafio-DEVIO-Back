import db from "../config/prisma.js"


async function getAllCategories() {
    return await db.categories.findMany({})
}







export const categorieRepositories = { getAllCategories };


