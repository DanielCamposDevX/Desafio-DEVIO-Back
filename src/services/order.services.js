import { error } from "../errors/error.js"
import { foodRepositories } from "../repositories/food.repositories.js";
import { orderRepositories } from "../repositories/order.repositories.js"


async function createOrder(orderDetails) {

    const user = await orderRepositories.findUserById(orderDetails.userId);
    if(!user){
        throw error.badRequest("Usuário não foi encontrado!");
    }

    let total = 0;

    for (const item of orderDetails.items) {
        const food = await foodRepositories.findFoodById(item.foodId);
        if (!food) { throw error.notFound("Algum produto pedido não existe mais!"); }
        total += food.price * item.quantity;

        const extras = await orderRepositories.findExtraById(item.extras);
        if (!extras) { throw error.notFound("Algum produto pedido não existe mais!"); }
        for (const extra of extras) {
            total += extra.price;
        }
    }

    const order = await orderRepositories.createOrder(
        orderDetails.userId,
        orderDetails.observation,
        total,
        orderDetails.items
    );

    return order;
}

async function getOrders() {
    const orders = await orderRepositories.getAllOrders()
    return orders;
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







export const orderServices = { createOrder, getOrders, deleteOrder }