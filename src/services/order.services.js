import { error } from "../errors/error.js"
import { orderRepositories } from "../repositories/order.repositories.js"

export async function calculateTotal(items) {

}

async function createOrder(orderDetails) {


    let total = 0;

    for (const item of orderDetails.items) {
        const food = await orderRepositories.findFoodById(item.foodId);
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









export const orderServices = { createOrder }