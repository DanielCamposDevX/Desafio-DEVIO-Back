import { foodRepositories } from "../repositories/food.repositories.js"






async function getAllFoods() {
    const foods = await foodRepositories.getAllFoods();
    return foods;
}










export const foodServices = { getAllFoods }