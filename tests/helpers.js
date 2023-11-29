import { PrismaClient } from "@prisma/client"


export const db = new PrismaClient();




export async function CleanDB(){
    await db.$connect();
    await db.orders.deleteMany({});
    await db.extraOrders.deleteMany({});
    await db.orderItem.deleteMany({});
    await db.food.deleteMany({});
    await db.categories.deleteMany({});
    await db.user.deleteMany({});
    await db.$disconnect()
}