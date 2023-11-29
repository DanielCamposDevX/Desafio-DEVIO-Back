import supertest from "supertest"
import app from "../../src/app"
import { CleanDB } from "../helpers"
import { createOrder } from "../factories/order.factory"
import { faker } from "@faker-js/faker"


const server = supertest(app)


describe("Food Tests", () => {


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
            const response = await server.delete(`/orders/${faker.number.int({ min: 1000,max: 10000 })}`);
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
})