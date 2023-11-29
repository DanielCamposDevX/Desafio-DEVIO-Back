import { orderServices } from "../services/order.services.js";





async function createOrder(req, res) {
    const orders = req.body;
    const created = await orderServices.createOrder(orders);
    return res.status(201).send(created);
}

async function getAllOrders(req, res) {
    const orders = await orderServices.getOrders();
    return res.status(200).send(orders);
}










export const orderControllers = { createOrder, getAllOrders }