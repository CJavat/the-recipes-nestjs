-- AlterEnum
ALTER TYPE "CategoryName" ADD VALUE 'ensaladas';

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "name" DROP DEFAULT;
