import { Router } from "express";
import foodRouter from "./food.routes.js";
import orderRoutes from "./order.routes.js";





const indexRouter = Router();

indexRouter
    .use(foodRouter)
    .use(orderRoutes);




export default indexRouter;