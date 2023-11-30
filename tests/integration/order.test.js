import supertest from "supertest"
import app from "../../src/app"
import { CleanDB } from "../helpers"
import { createOrder } from "../factories/order.factory"
import { faker } from "@faker-js/faker"
import { createExtra } from "../factories/extra.factories"
import { createFood } from "../factories/food.factories"


const server = supertest(app)


describe("Order Tests", () => {


    beforeEach(async () => {
        await CleanDB();
    })

    afterAll(async () => {
        await CleanDB();
    })

    it("Should Respond with 200 when getting all orders", async () => {
        const order = await createOrder();
        const response = await server.get("/orders");
        expect(response.status).toBe(200);
        const formatOrder = { ...order, createdAt: order.createdAt.toISOString() };
        expect(response.body[0].id).toStrictEqual(formatOrder.id);
    });



    describe("Route DELETE /orders", () => {
        it("Should respond with 404 when giving a unexistent id", async () => {
            const response = await server.delete(`/orders/${faker.number.int({ min: 1000, max: 10000 })}`);
            expect(response.status).toBe(404);
        });
        it("Should respond with 400 when giving a invalid id", async () => {
            const response = await server.delete(`/orders/teste`);
            expect(response.status).toBe(400);
        });
        it("Should respond with 200 when sucessfully deletes an order", async () => {
            const order = await createOrder();
            const response = await server.delete(`/orders/${order.id}`);
            expect(response.status).toBe(200);
        })
    })


    describe("Route UPDATE /orders", () => {
        const body = {
            name: faker.person.firstName(),
            status: "PREPARING"
        }

        it("Should respond with 422 when giving an invalid body", async () => {
            const response = await server.patch(`/orders/${faker.number.int({ min: 1000, max: 10000 })}`).send({ name: faker.lorem.word() });
            expect(response.status).toBe(422);
        });

        it("Should respond with 404 when giving a unexistent id", async () => {
            const response = await server.patch(`/orders/${faker.number.int({ min: 1000, max: 10000 })}`).send(body);
            expect(response.status).toBe(404);
        });
        it("Should respond with 400 when giving a invalid id", async () => {
            const response = await server.patch(`/orders/teste`).send(body);
            expect(response.status).toBe(400);
        });
        it("Should respond with 200 when sucessfully updates an order", async () => {
            const order = await createOrder();
            const response = await server.patch(`/orders/${order.id}`).send(body);
            expect(response.status).toBe(200);
        })
    })
    describe("Route POST /orders", () => {

        it("Should respond with 422 when sending a invalid body", async () => {
            const response = await server.post("/orders").send({ name: faker.lorem.word() });
            expect(response.status).toBe(422);
        })


        it("Should respond with 404 when sending a not existing food or extra", async () => {
            const food1 = await createFood();
            const food2 = await createFood();


            const body = {
                items: [
                    {
                        extras: [faker.number.int({ min: 1000, max: 10000 })],
                        quantity: 1,
                        observation: faker.lorem.paragraph(),
                        foodId: food1.id,
                    },
                    {
                        extras: [faker.number.int({ min: 1000, max: 10000 })],
                        quantity: 1,
                        observation: faker.lorem.paragraph(),
                        foodId: food2.id,
                    }
                ]
            };
            const response = await server.post("/orders").send(body);
            expect(response.status).toBe(404);
        })






        it("Should create an order", async () => {
            const extra1 = await createExtra();
            const extra2 = await createExtra()
            const food1 = await createFood();
            const food2 = await createFood();


            const body = {
                items: [
                    {
                        extras: [extra1.id, extra2.id],
                        quantity: 1,
                        observation: faker.lorem.paragraph(),
                        foodId: food1.id,
                    },
                    {
                        extras: [extra1.id, extra2.id],
                        quantity: 1,
                        observation: faker.lorem.paragraph(),
                        foodId: food2.id,
                    }
                ]
            };
            const response = await server.post("/orders").send(body);
            expect(response.status).toBe(201);
        })
    })
})