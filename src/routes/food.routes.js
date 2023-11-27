import { Router } from "express";
import { foodControllers } from "../controllers/food.controllers.js";

const foodRouter = Router();

foodRouter
    .get("/foods",foodControllers.getAllFoods)




export default foodRouter;