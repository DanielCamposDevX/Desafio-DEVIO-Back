import { Router } from "express";
import foodRouter from "./food.routes.js";
import orderRoutes from "./order.routes.js";
import extraRouter from "./extra.routes.js";





const indexRouter = Router();

indexRouter
    .use(foodRouter)
    .use(orderRoutes)
    .use(extraRouter);




export default indexRouter;