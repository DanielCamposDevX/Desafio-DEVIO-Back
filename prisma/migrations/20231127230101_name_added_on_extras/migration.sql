/*
  Warnings:

  - Added the required column `name` to the `Extras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Extras" ADD COLUMN     "name" TEXT NOT NULL;
