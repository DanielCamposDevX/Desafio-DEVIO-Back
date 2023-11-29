import supertest from "supertest"
import app from "../../src/app"
import { CleanDB } from "../helpers"
import { createExtra } from "../factories/extra.factories"


const server = supertest(app)


describe("Extras Tests", () => {

    beforeEach(async () => {
        await CleanDB();
    })
    
    afterAll(async () => {
        await CleanDB();
    })

    
    it("Should Respond with 200 when getting all extras", async () => {
        const extra = await createExtra();
        const response = await server.get("/extras");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([extra]);
    });
})