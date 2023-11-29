import { Router } from "express";
import foodRouter from "./food.routes.js";
import orderRoutes from "./order.routes.js";
import extraRouter from "./extra.routes.js";
import categoryRouter from "./categories.routes.js";





const indexRouter = Router();

indexRouter
    .use(foodRouter)
    .use(orderRoutes)
    .use(extraRouter)
    .use(categoryRouter)




export default indexRouter;