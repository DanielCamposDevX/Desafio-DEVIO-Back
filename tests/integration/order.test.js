import supertest from "supertest"
import app from "../../src/app"
import { CleanDB } from "../helpers"
import { createOrder } from "../factories/order.factory"


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
        expect(response.body).toStrictEqual([formatOrder]);
    });
})