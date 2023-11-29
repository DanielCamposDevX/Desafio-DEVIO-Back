import { Router } from "express";
import { categoriesControllers } from "../controllers/categorie.controllers";


const categorieRouter = Router();

categorieRouter
    .get("/categories", categoriesControllers.getAllCategories);




export default categorieRouter;

