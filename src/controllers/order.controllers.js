import { orderServices } from "../services/order.services.js";





async function createOrder(req, res) {
    const orders = req.body;
    const created = await orderServices.createOrder(orders);
    res.status(201).send(created);
}










export const orderControllers = { createOrder }