-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "descriptiom" TEXT,
    "link" TEXT,
    "github" TEXT,
    "technologies" TEXT[],
    "sections" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
