import { categorieServices } from "../services/categorie.services.js";
import httpStatus from "http-status";



async function getAllCategories(req,res) {
    const categories = await categorieServices.getAllCategories()
    res.status(httpStatus.OK).send(categories);
}
















export const categoriesControllers = { getAllCategories };