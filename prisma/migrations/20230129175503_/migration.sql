-- CreateTable
CREATE TABLE "Fruit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "colors" TEXT NOT NULL,
    "in_season" BOOLEAN NOT NULL,

    CONSTRAINT "Fruit_pkey" PRIMARY KEY ("id")
);
