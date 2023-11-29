import { categorieRepositories } from "../repositories/categorie.repositories.js";


async function getAllCategories() {
    const extras = await categorieRepositories.getAllCategories()
    return extras;
}








export const categorieServices = { getAllCategories }