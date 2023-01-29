/*
  Warnings:

  - The `colors` column on the `Fruit` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Fruit" DROP COLUMN "colors",
ADD COLUMN     "colors" TEXT[];
