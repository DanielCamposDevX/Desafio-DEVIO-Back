import { faker } from "@faker-js/faker";
import { db } from "../helpers.js";
import { createCategory } from "./category.factory.js";





export async function createFood(){
    const category = await createCategory();

    return await db.food.create({
        data:{
            name: faker.word.adjective(),
            subtitle: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            picture: faker.image.url(),
            price: faker.number.int({max: 100}),
            categorieId: category.id
        }
    })
}