import prisma from '../lib/prisma';
import { initialData } from './seed';
import { getRandomNumber } from '../helpers/get-random-number';


async function main() {

  // Vacíar la base de datos.
  await prisma.category.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.user.deleteMany();

  // Agregar los datos.
  const { categories, recipes, users } = initialData;
  
  await prisma.category.createMany({ data: categories });
  await prisma.user.createMany({ data: users })

  const usr = await prisma.user.findMany();
  const cat = await prisma.category.findMany();

  //TODO: AGREGAR LAS IMAGENES A LA BD.
  
  await prisma.recipe.createMany({ data: recipes.map( recipe => ({
    categoryId: cat[Number( getRandomNumber( 13, 0 ) )].id,
    userId: usr[Number( getRandomNumber( 4, 0 ) )].id,
    ...recipe,
  }) )  });

}

(() => {
  if( process.env.NODE_ENV === 'production' ) return;
  main();
})()