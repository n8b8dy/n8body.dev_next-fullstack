-- CreateEnum
CREATE TYPE "ProjectTag" AS ENUM ('FRONTEND', 'BACKEND', 'FULLSTACK', 'SCRAPER', 'BOT');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "tags" "ProjectTag"[];
