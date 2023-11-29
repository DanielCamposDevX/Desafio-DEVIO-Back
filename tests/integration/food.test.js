import supertest from "supertest"
import app from "../../src/app"
import { createFood } from "../factories/food.factories"
import { CleanDB } from "../helpers"


const server = supertest(app)

beforeEach(async () => {
    await CleanDB();
})

describe("Food Tests", () => {
    it("Should Respond with 200 when getting all foods", async () => {
        const food = await createFood();
        const response = await server.get("/foods");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([food]);
    })
})