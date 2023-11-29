/*
  Warnings:

  - Added the required column `image` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Extras` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Extras" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "subtitle" TEXT NOT NULL;
