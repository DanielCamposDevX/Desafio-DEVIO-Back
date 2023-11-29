import { createOrder } from "../../tests/factories/order.factory.js";


async function seed() {


    await createOrder()
    await createOrder()
    await createOrder()
    await createOrder()


}

seed();