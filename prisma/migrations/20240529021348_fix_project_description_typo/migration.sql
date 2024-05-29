/*
  Warnings:

  - You are about to drop the column `descriptiom` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "descriptiom",
ADD COLUMN     "description" TEXT;
