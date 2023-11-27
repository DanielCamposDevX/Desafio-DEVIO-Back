import httpStatus from "http-status";
import { foodServices } from "../services/food.services.js";




async function getAllFoods(req,res) {
    const foods = await foodServices.getAllFoods()
    res.status(httpStatus.OK).send(foods);
}
















export const foodControllers = { getAllFoods };