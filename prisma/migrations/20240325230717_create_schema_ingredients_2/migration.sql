/*
  Warnings:

  - You are about to drop the column `ingredientsId` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `recipeId` to the `RecipeIngredients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_ingredientsId_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "ingredientsId";

-- AlterTable
ALTER TABLE "RecipeIngredients" ADD COLUMN     "recipeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "RecipeIngredients" ADD CONSTRAINT "RecipeIngredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
