import { error } from "../errors/error.js"
import { foodRepositories } from "../repositories/food.repositories.js";
import { orderRepositories } from "../repositories/order.repositories.js"


async function createOrder(orderDetails) {
    let total = 0;

    for (const item of orderDetails.items) {
        const food = await foodRepositories.findFoodById(item.foodId);
        if (!food) { throw error.notFound("Algum produto pedido não existe mais!"); }
        total += food.price * item.quantity;

        const extras = await orderRepositories.findExtraById(item.extras);
        if (extras.length < item.extras.length) { throw error.notFound("Algum produto pedido não existe mais!"); }
        for (const extra of extras) {
            total += extra.price;
        }
    }

    const order = await orderRepositories.createOrder(
        total,
        orderDetails.items
    );

    return order;
}

async function getOrders() {
    const orders = await orderRepositories.getAllOrders()
    return orders;
}

async function updateOrder(id,newData) {
    if(isNaN(id)){
        throw error.badRequest("O Id do pedido deve ser um número");
    }

    const order = await orderRepositories.findOrderById(id);

    if (!order) {
        throw error.notFound("Pedido não encontrado!");
    }

    await orderRepositories.updateOrder(id,newData);
}


async function deleteOrder(id) {
    if(isNaN(id)){
        throw error.badRequest("O Id do pedido deve ser um número");
    }

    const order = await orderRepositories.findOrderById(id);

    if (!order) {
        throw error.notFound("Pedido não encontrado!");
    }

    await orderRepositories.deleteOrderById(id);

}







export const orderServices = { createOrder, getOrders, deleteOrder, updateOrder }