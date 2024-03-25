import prisma from '../lib/prisma';
import { initialData } from './seed';
import { getRandomNumber } from '../helpers/get-random-number';


async function main() {

  // Vacíar la base de datos.
  await prisma.recipeIngredients.deleteMany();
  await prisma.recipeImage.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Agregar los datos.
  const { categories, recipes, users, ingredients, recipeimages } = initialData;
  
  await prisma.category.createMany({ data: categories });
  await prisma.user.createMany({ data: users })

  const usr = await prisma.user.findMany();
  const cat = await prisma.category.findMany();
  
  await prisma.recipe.createMany({ data: recipes.map( recipe => ({
    categoryId: cat[Number( getRandomNumber( 13, 0 ) )].id,
    userId: usr[Number( getRandomNumber( 4, 0 ) )].id,
    ...recipe,
  }) )  });

  const rec = await prisma.recipe.findMany();
  
  await prisma.recipeIngredients.createMany({ data: ingredients.map( (ingredient, index) => {
    if( index >= 0 && index <= 4 ) return { recipeId: rec[0].id, ...ingredient } 
    if( index >= 5 && index <= 14 ) return { recipeId: rec[1].id, ...ingredient } 
    if( index >= 15 && index <= 21 ) return { recipeId: rec[2].id, ...ingredient } 
    if( index >= 22 && index <= 30 ) return { recipeId: rec[3].id, ...ingredient } 
    if( index >= 31 && index <= 39 ) return { recipeId: rec[4].id, ...ingredient } 
    if( index >= 40 && index <= 48 ) return { recipeId: rec[5].id, ...ingredient } 
    if( index >= 40 && index <= 53 ) return { recipeId: rec[6].id, ...ingredient } 
    if( index >= 54 && index <= 58 ) return { recipeId: rec[7].id, ...ingredient } 
    if( index >= 59 && index <= 65 ) return { recipeId: rec[8].id, ...ingredient } 

    return { recipeId: rec[9].id, ...ingredient } 
  }) });

  await prisma.recipeImage.createMany({ data: recipeimages.map( (image, index) => {

    //TODO: ES PARECIDO AL DE LOS INGREDIENTES.
  })});
}

(() => {
  if( process.env.NODE_ENV === 'production' ) return;
  main();
})()


/*
          [0] - 0 al 4
          [1] - 5 al 14
          [2] - 15 al 21
          [3] - 22 al 30
          [4] - 31 al 39
          [5] - 40 al 48
          [6] - 40 al 53
          [7] - 54 al 58
          [8] - 59 al 65
          [9] - 66 al 76
*/