import { faker } from "@faker-js/faker";
import { db } from "../helpers.js";


export function createExtra(){
    return db.extras.create({
        data:{
            name: faker.animal.bear(),
            description: faker.lorem.words(),
            image: faker.image.url(),
            price: faker.number.int({max: 100})
        }
    });
}