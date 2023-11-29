import { Router } from "express";
import { categoriesControllers } from "../controllers/category.controllers.js";


const categoryRouter = Router();

categoryRouter
    .get("/categories", categoriesControllers.getAllCategories);




export default categoryRouter;

