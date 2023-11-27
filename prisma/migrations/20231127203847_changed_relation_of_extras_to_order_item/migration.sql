/*
  Warnings:

  - You are about to drop the column `extraId` on the `OrderItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_extraId_fkey";

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "extraId";

-- CreateTable
CREATE TABLE "_OrderItemExtras" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderItemExtras_AB_unique" ON "_OrderItemExtras"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderItemExtras_B_index" ON "_OrderItemExtras"("B");

-- AddForeignKey
ALTER TABLE "_OrderItemExtras" ADD CONSTRAINT "_OrderItemExtras_A_fkey" FOREIGN KEY ("A") REFERENCES "Extras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderItemExtras" ADD CONSTRAINT "_OrderItemExtras_B_fkey" FOREIGN KEY ("B") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
