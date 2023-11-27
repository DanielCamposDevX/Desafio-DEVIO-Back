import { Router } from "express";
import foodRouter from "./food.routes.js";





const indexRouter = Router();

indexRouter
    .use(foodRouter)




export default indexRouter;