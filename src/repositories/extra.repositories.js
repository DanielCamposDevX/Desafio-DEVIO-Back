import db from "../config/prisma.js"


async function getAllExtras() {
    return await db.extras.findMany({})
}







export const extraRepositories = { getAllExtras };


