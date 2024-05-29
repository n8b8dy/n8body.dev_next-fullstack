/*
  Warnings:

  - The `technologies` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ProjectTechnology" AS ENUM ('JAVASCRIPT', 'TYPESCRIPT', 'GOLANG', 'NODEJS', 'REACT', 'VUEJS', 'TAILWIND', 'POSTGRES', 'PRISMA');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "technologies",
ADD COLUMN     "technologies" "ProjectTechnology"[];
