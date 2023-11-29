import { Router } from "express";
import foodRouter from "./food.routes.js";
import orderRoutes from "./order.routes.js";
import extraRouter from "./extras.routes.js";





const indexRouter = Router();

indexRouter
    .use(foodRouter)
    .use(orderRoutes)
    .use(extraRouter);




export default indexRouter;