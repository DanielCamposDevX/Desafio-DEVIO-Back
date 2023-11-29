import { Router } from "express";
import validateSchema from "../middlewares/joi-validation.js";
import { orderSchema } from "../schemas/order.schema.js";
import { orderControllers } from "../controllers/order.controllers.js";



const orderRoutes = Router();


orderRoutes
    .get("/orders",orderControllers.getAllOrders)
    .post("/orders",validateSchema(orderSchema),orderControllers.createOrder)
    .delete("/orders/:orderId",orderControllers.deleteOrder);





export default orderRoutes;