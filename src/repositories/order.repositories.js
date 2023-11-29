import db from "../config/prisma.js"



async function createOrder(userId, observation, total, orderItems) {
    return await db.orders.create({
        data: {
            userId: userId,
            observation: observation,
            total: total,
            orderItems: {
                create: orderItems.map((item) => ({
                    foodId: item.foodId,
                    quantity: item.quantity,
                    ExtraOrders: {
                        create: item.extras.map(extraId => ({
                            extras: { connect: { id: extraId } }
                        })),
                    },
                })),
            },
        },
        include: {
            orderItems: {
                include: {
                    food: true,
                    ExtraOrders: {
                        include: {
                            extras: true,
                        },
                    },
                },
            },
        },
    });
}



async function findFoodById(id) {
    return await db.food.findUnique({
        where: { id },
    });
}



async function findExtraById(extraIds) {
    return await db.extras.findMany({
        where: { id: { in: extraIds } },
    });
}


async function getAllOrders(){
    return await db.orders.findMany({})
}




export const orderRepositories = { createOrder, findFoodById, findExtraById, getAllOrders }