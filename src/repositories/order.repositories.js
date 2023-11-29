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



async function findUserById(id) {
    return await db.user.findUnique({
        where: { id }
    });
}




async function findExtraById(extraIds) {
    return await db.extras.findMany({
        where: { id: { in: extraIds } },
    });
}


async function getAllOrders() {
    return await db.orders.findMany({
        include: {
            user: true,
            orderItems: {
                include: {
                    food: {
                        include: {
                            categories: true,
                        },
                    },
                    ExtraOrders: {
                        include: {
                            extras: true,
                        },
                    },
                },
            },
        },
    })
}


async function findOrderById(id) {
    return await db.orders.findUnique({
        where: { id },
    });
}


async function deleteOrderById(id) {
    const orderItems = await db.orderItem.findMany({
        where: { orderId: id },
        select: { id: true },
    });

    const orderItemIds = orderItems.map((item) => item.id);

    await db.extraOrders.deleteMany({
        where: {
            orderItemId: { in: orderItemIds },
        },
    });

    await db.orderItem.deleteMany({
        where: {
            id: { in: orderItemIds },
        },
    });

    await db.orders.delete({
        where: {
            id,
        },
    });
}



export const orderRepositories = { createOrder, findExtraById, getAllOrders, findOrderById, deleteOrderById, findUserById }