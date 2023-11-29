import { orderServices } from "../services/order.services.js";
import httpStatus from "http-status";




async function createOrder(req, res) {
    const orders = req.body;
    const created = await orderServices.createOrder(orders);
    return res.status(httpStatus.CREATED).send(created);
}

async function getAllOrders(req, res) {
    const orders = await orderServices.getOrders();
    return res.status(httpStatus.OK).send(orders);
}

async function deleteOrder(req, res) {
    const { orderId } = req.params;
    await orderServices.deleteOrder(Number(orderId));
    return res.sendStatus(httpStatus.OK);
}










export const orderControllers = { createOrder, getAllOrders, deleteOrder }