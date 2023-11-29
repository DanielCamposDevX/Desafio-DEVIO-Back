import { faker } from "@faker-js/faker";
import { db } from "../helpers.js";
import { createFood } from "./food.factories.js";
import { createExtra } from "./extra.factories.js";


export async function createUser() {
    return await db.user.create({
        data: {
            name: faker.person.firstName(),
        }
    })
}


export async function createOrder() {

    const user = await createUser();
    const food = await createFood();
    const extra = await createExtra();

    return await db.orders.create({
        data: {
            userId: user.id,
            observation: faker.lorem.paragraph(),
            total: food.price + extra.price,
            orderItems: {
                create: [{
                    foodId: food.id,
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