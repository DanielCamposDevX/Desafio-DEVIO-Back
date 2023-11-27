import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {

    await prisma.user.create({
        data: { name: 'Roberto' },
    });
    await prisma.user.create({
        data: { name: 'Julia' },
    });




    const cat1 = await prisma.categories.create({
        data: { name: 'bebidas' },
    })
    const cat2 = await prisma.categories.create({
        data: { name: 'petiscos' },
    })
    const cat3 = await prisma.categories.create({
        data: { name: 'combos' },
    })


    await prisma.food.create({
        data: {
            description: "delicioso Burguer",
            name: "Smash Tasty",
            picture: "TESTE",
            price: 21.40,
            categorieId: cat3.id,
        }
    })

    await prisma.extras.create({
        data:{
            name: "cheddar",
            description: "Delicioso",
            price: 3
        }
    })


}

seed();