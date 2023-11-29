import { faker } from "@faker-js/faker";
import { db } from "../helpers.js";

export async function createCategory(){
    return await db.categories.create({
        data:{
            image: faker.image.url(),
            name: faker.word.adjective()
        }
    })
}
