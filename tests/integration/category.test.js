import supertest from "supertest"
import app from "../../src/app"
import { CleanDB } from "../helpers"
import { createCategory } from "../factories/category.factory"


const server = supertest(app)


describe("Extras Tests", () => {

    beforeEach(async () => {
        await CleanDB();
    })
    
    afterAll(async () => {
        await CleanDB();
    })

    
    it("Should Respond with 200 when getting all categories", async () => {
        const category = await createCategory();
        const response = await server.get("/categories");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([category]);
    });
})