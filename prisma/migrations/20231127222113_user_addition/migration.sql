/*
  Warnings:

  - You are about to drop the `_OrderItemExtras` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `extras` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_OrderItemExtras" DROP CONSTRAINT "_OrderItemExtras_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderItemExtras" DROP CONSTRAINT "_OrderItemExtras_B_fkey";

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "extras" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Requested',
ALTER COLUMN "observation" SET DEFAULT '-',
ALTER COLUMN "total" DROP NOT NULL;

-- DropTable
DROP TABLE "_OrderItemExtras";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExtraOrders" (
    "id" SERIAL NOT NULL,
    "orderItemId" INTEGER NOT NULL,
    "extrasId" INTEGER NOT NULL,

    CONSTRAINT "ExtraOrders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ExtraOrders_id_key" ON "ExtraOrders"("id");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExtraOrders" ADD CONSTRAINT "ExtraOrders_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExtraOrders" ADD CONSTRAINT "ExtraOrders_extrasId_fkey" FOREIGN KEY ("extrasId") REFERENCES "Extras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
