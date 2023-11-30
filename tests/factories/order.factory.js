import { db } from "../helpers.js";
import { createFood } from "./food.factories.js";
import { createExtra } from "./extra.factories.js";
import { faker } from "@faker-js/faker";


export async function createOrder() {
    const food = await createFood();
    const extra = await createExtra();

    return await db.orders.create({
        data: {
            total: food.price + extra.price,
            orderItems: {
                create: [{
                    foodId: food.id,
                    observation: faker.lorem.paragraph(),
                    quantity: 1,
                    ExtraOrders: {
                        create: [{
                            extras: { connect: { id: extra.id } }
                        }],
                    },
                }],
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