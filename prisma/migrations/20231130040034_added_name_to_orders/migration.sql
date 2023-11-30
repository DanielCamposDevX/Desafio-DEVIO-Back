/*
  Warnings:

  - You are about to drop the column `userId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_userId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "userId",
ADD COLUMN     "name" TEXT,
ALTER COLUMN "status" SET DEFAULT 'WAITING PAYMENT';

-- DropTable
DROP TABLE "user";
