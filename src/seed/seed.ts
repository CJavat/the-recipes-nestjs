// Datos de la semilla
import bcryptjs from 'bcrypt';

interface SeedRecipe {
  name: string;
  description: string;
  instructions: string;
  // ingredients: string;
}

interface SeedUser {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  password: string;
  role: 'admin' | 'user';
  image?: string;
}

interface SeedCategory {
  name: ValidCategories;
}

interface SeedIngredients {
  name: string;
  quantity: string;
}

interface RecipeImages {
  url: string;
}

interface SeedData {
  users: SeedUser[];
  recipes: SeedRecipe[];
  categories: SeedCategory[];
  ingredients: SeedIngredients[];
  recipeimages: RecipeImages[];
}

type ValidCategories = 
  | 'desayuno' 
  | 'comida' 
  | 'cena' 
  | 'horno' 
  | 'mexicana' 
  | 'pan' 
  | 'postres' 
  | 'pastas' 
  | 'hamburguesas'
  | 'pizza'
  | 'sopas'
  | 'bebes'
  | 'ensaladas'
  | 'otro';

export const initialData: SeedData = {
  categories: [
    { name: 'desayuno' },
    { name: 'comida' },
    { name: 'cena' },
    { name: 'horno' },
    { name: 'mexicana' },
    { name: 'pan' },
    { name: 'postres' },
    { name: 'pastas' },
    { name: 'hamburguesas' },
    { name: 'pizza' },
    { name: 'sopas' },
    { name: 'bebes' },
    { name: 'ensaladas' },
    { name: 'otro' },
  ],
  users: [
    {
      firstName: 'Daniel',
      lastName: 'Plascencia',
      email: 'cdpm98@hotmail.com',
      emailVerified: true,
      password: '123123',
      role: 'admin',
      image: 'profile_1'
    },
    {
      firstName: 'Carlos',
      lastName: 'Mercado',
      email: 'caxlsh@hotmail.com',
      emailVerified: true,
      password: '123123',
      role: 'user',
      image: 'profile_2'
    },
    {
      firstName: 'Issac',
      lastName: 'Plascencia',
      email: 'carmegamanx5@hotmail.com',
      emailVerified: true,
      password: '123123',
      role: 'user',
      image: 'profile_3'
    },
    {
      firstName: 'Oliver',
      lastName: 'Plascencia',
      email: 'carmegamanx5@gmail.com',
      emailVerified: true,
      password: '123123',
      role: 'user',
      image: 'profile_4'
    },
  ],
  recipes: [
    {
      name: 'Pesto',
      description: 'Aprende a preparar esta receta de Salsa pesto, en elGourmet',
      instructions: 'Procesar hojas de rúcula, albahaca, nuez, queso rallado, ajo y aceite de oliva, agregar de a poco según se necesite',
    },
    {
      name: 'Ensalada de manzana',
      description: 'Aprende a preparar esta receta de Salsa pesto, en elGourmet',
      instructions: `Macerar en el jerez las pasas, reservar. 
        Pelar y cortar en cubos medianos las manzanas. 
        Bañar con el almíbar de la piña las manzanas cortadas para evitar su oxidación y reservar. 
        Mezclar la crema con el azúcar y la leche condensada. Reservar.  
        En una sartén asar las rodajas de piña con un poco de pimienta, una vez asadas cortar en trozos, reservar. 
        En otra sartén caliente dorar un poco las nueces y picar. 
        Añadir al tazón de la crema todos los ingredientes, dar una pizca de sal y pimienta.    
        Servir la ensalada y decorar con hojas de yerbabuena. 
        `,
    },
    {
      name: 'Tamales de frijol negro con hoja santa y verduras fermentadas',
      description: 'Aprende a preparar esta receta de Tamales de frijol negro con hoja santa y verduras fermentadas, de la mano de Sonia Ortiz por elGourmet',
      instructions: `Para preparar la masa
        Coloca la masa en un tazón o batea y bate a mano, incorporando poco a poco el caldo de pollo tibio, la manteca de puerco y sal al gusto, hasta que la masa esponje.
        Para preparar las hojas de plátano
        
        Remueve las fibras centrales y pasa las hojas de plátano sobre la lumbre de la estufa hasta que cambien a un verde más tierno y se vuelvan flexibles. Reserva.
        Para preparar los tamales
        
        Coloca cada hoja santa sobre la mesa. Unta con una capa delgada de masa, dando forma de rectángulo.
        Embarra sobre la masa un poco de frijoles negros refritos y espolvoreé con chía al gusto, añade un poco de chiles y verduras en escabeche fermentado.
        Enrolla la hoja santa y envuelve cada una en un cuadro de hoja de plátano, amarrando con tiras de hojas de plátano.
        Coloca los tamales en forma de pirámide dentro de una vaporera.
        Cuece al vapor durante una hora a hora y media (el tiempo depende del grosor de los tamales) hasta que al probar estén cocidos.
        Para preparar el plátano macho
        
        Retira la cáscara, corta en rodajas y fríe con aceite de oliva hasta que estén cocidas las rodajas. 
        Sirve los tamales calientes.
        Pon encima unas rodajas de plátano macho y más chiles y verduras fermentados tipo escabeche.
        `,
    },
    {
      name: 'Espinazo de Cerdo en Salsa Roja',
      description: 'Para completar tu menú de la semana, prepara este ESPINAZO de CERDO en SALSA ROJA hecho con CONSOMATE®. Puedes complementar con arroz y verduras al gusto.',
      instructions: `1.  Licúa los jitomates, el ajo, la cebolla, los chiles, el agua y el Concentrado de Tomate con Pollo CONSOMATE®.
      2.  Calienta el aceite, vierte lo que licuaste y cocina hasta que espese ligeramente moviendo ocasionalmente.
      3.  Añade el espinazo, las verdolagas, cocina por 3 minutos más y ofrece.`,
    },
    {
      name: 'Ensalada a las finas hierbas',
      description: 'ENSALADA A LAS FINAS HIERBAS preparada con MAGGI® JUGOSO AL SARTÉN® CON FINAS HIERBAS',
      instructions: `1.  Abre una Hoja con Sazonador MAGGI® JUGOSO AL SARTÉN® con Finas Hierbas, coloca una pechuga, cierra y presiona ligeramente para impregnar las especias. Colócala en un sartén sin aceite, previamente precalentada a fuego bajo durante 1 minuto, tapa y cocina a fuego bajo de 7 a 8 minutos por cada lado o hasta que esté bien cocida. Retira la hoja y repite el procedimiento con el resto de las pechugas.
      Mezcla
      2.  Mezcla en un tazón las manzanas con la lechuga romana, los arándanos, el queso panela, la lechuga orejona y la espinaca.
      Sirve
      3.  Sirve la ensalada con la pechuga de pollo cortada en cuadritos, acompaña con galletas saladas y ofrece.`,
    },
    {
      name: 'Ensalada botanera',
      description: 'ENSALADA BOTANERA preparada con JUGO MAGGI®',
      instructions: `1.  Mezcla el Jugo MAGGI® con la Salsa Tipo Inglesa CROSSE & BLACKWELL®, el jugo de limón, la salsa de cátsup, la zanahoria, el pepino y las rebanadas de salchicha.
      Refrigera
      2.  Refrigera por 10 minutos.
      Sirve
      3.  Sirve en 2 tazones y acompaña con las Galletas SALADITAS® GAMESA® y ofrece.`,
    },
    {
      name: 'Ensalada con aderezo de cacahuate',
      description: 'ENSALADA CON ADEREZO DE CACAHUATE preparada con MEDIA CREMA NESTLÉ',
      instructions: `1.  Para el aderezo, licúa la Media Crema NESTLÉ con los cacahuates, la sal con ajo, la Salsa de Soya MAGGI y el agua.
      Cocina
      2.  Abre una Hoja con Sazonador MAGGI JUGOSO AL SARTÉN con Finas Hierbas, coloca una pechuga, cierra y presiona ligeramente para impregnar las especias. Colócala en una sartén sin aceite, previamente precalentada a fuego bajo durante 1 minuto, tapa y cocina a fuego bajo de 7 a 8 minutos por cada lado o hasta que esté cocida y corta en cubos. Retira la hoja y repite el procedimiento con el resto de las pechugas.
      Sirve
      3.  Calienta el aceite, agrega los pimientos con la sal con ajo y cocina por unos minutos. Mezcla las lechugas con el pollo, los jitomates, los pimientos y acompaña con el aderezo.`,
    },
    {
      name: 'Espagueti en Salsa de Quesos Fácil',
      description: 'Prepara este ESPAGUETI en SALSA de QUESOS con sólo 5 ingredientes. El secreto es la CREMOSIDAD de CARNATION® CLAVEL® y el sazón de los quesos',
      instructions: `
      1.  Licúa la Leche Evaporada CARNATION® CLAVEL®, los quesos y el consomé de pollo.
      Cocina
      2.  Calienta la salsa hasta que hierva ligeramente, agrega la fécula disuelta y cocina a fuego bajo hasta que espese.
      ¡A comer!
      3.  Agrega el espagueti cocido y escurrido, mezcla y cocina por 2 minutos más. Sirve y disfruta.`,
    },
    {
      name: 'Sopa de Coditos con Salchicha',
      description: 'Prepara una PASTA de CODITO fácil con SALCHICHAS sazonando con MEDIA CREMA NESTLÉ®, CHIPOTLE y sal. Práctica y económica para el día a día',
      instructions: `1.  Mezcla la Media Crema NESTLÉ® con el chile chipotle, la mayonesa, la sal, las rodajas de salchicha y los coditos cocidos.
      Un toque verde
      2.  Añade el cilantro hasta integrar por completo.
      ¡Listo!
      3.  Ofrece.`,
    },
    {
      name: 'Pasta Estilo Carbonara',
      description: 'Prepara una versión de ESPAGUETI a la CARBONARA hecha con CARNATION® CLAVEL®, huevo y queso parmesano. El tocino no puede faltan en esta receta',
      instructions: `1.  Calienta la mantequilla con el aceite y cocina el tocino hasta que dore ligeramente. Agrega el espagueti, mezcla y baja el fuego.
      2.  Bate la Leche Evaporada CARNATION® CLAVEL®, las yemas, el huevo, la sal con cebolla, la pimienta y el queso parmesano; vierte sobre la preparación de tocino con el espagueti; mezcla y cocina por 3 minutos moviendo ocasionalmente.
      3.  Sirve, decora con el perejil y ofrece.`,
    },
  ],
  ingredients: [
    {
      name: 'Aceite de oliva',
      quantity: '1 Chorrito'
    },
    {
      name: 'Rúcula',
      quantity: '100 Gramos'
    },
    {
      name: 'Ajo',
      quantity: '1 Diente'
    },
    {
      name: 'Nuez',
      quantity: '60 Gramos'
    },
    {
      name: 'Albaca',
      quantity: '20 Gramos'
    },
    {
      name: 'Pasas',
      quantity: '1/24'
    },
    {
      name: 'Taza Jerez',
      quantity: '15 Mil'
    },
    {
      name: 'Manzana golden',
      quantity: '0.5 Unidades'
    },
    {
      name: 'Crema',
      quantity: 'Acida 41.666666666666664 Gramos'
    },
    {
      name: 'Azúcar',
      quantity: '0.16666666666666666 Cucharada'
    },
    {
      name: 'Leche condensada',
      quantity: '16.666666666666668 Gramos'
    },
    {
      name: 'Piña en almíbar en rodaja',
      quantity: '0.5 Unidades'
    },
    {
      name: 'Nuez pecana',
      quantity: '1/24 De '
    },
    {
      name: 'Cerezas en almíbar',
      quantity: 'Cantidad Necesaria '
    },
    {
      name: 'Pimienta',
      quantity: ' Cantidad Necesaria'
    },
    {
      name: 'Masa de nixtamal',
      quantity: '1 Kilo'
    },
    {
      name: 'Caldo de pollo',
      quantity: '1 Taza'
    },
    {
      name: 'Manteca de puerco',
      quantity: '1 Taza'
    },
    {
      name: 'Sal',
      quantity: 'Cantidad Necesaria'
    },
    {
      name: 'Hoja santa',
      quantity: '12 Unidades'
    },
    {
      name: 'Frijoles negros molidos',
      quantity: '2 Tazas'
    },
    {
      name: 'Chiles y verduras fermentados ',
      quantity: 'tipo escabeche'
    },
    {
      name: 'Jitomates cocidos',
      quantity: '4'
    },
    {
      name: 'Diente de ajo cocido',
      quantity: '1'
    },
    {
      name: 'De cebolla cocida',
      quantity: '1/4'
    },
    {
      name: 'Chiles serranos cocidos',
      quantity: '2'
    },
    {
      name: 'Tazas de agua',
      quantity: '2'
    },
    {
      name: 'Cubos de Concentrado de Tomate con Pollo CONSOMATE®',
      quantity: '2'
    },
    {
      name: 'Cucharada de aceite vegetal',
      quantity: '1'
    },
    {
      name: 'De espinazo de cerdo cocido y frito',
      quantity: '400 g'
    },
    {
      name: 'Tazas de verdolagas cocidas y escurridas',
      quantity: '2'
    },
    {
      name: 'Sobre con 4 Hojas con Sazonador MAGGI® JUGOSO AL SARTÉN® con Finas Hierbas',
      quantity: '1'
    },
    {
      name: 'Pechuga de pollo cortada en 4 piezas a lo largo sin hueso y sin piel (150 g c/u)',
      quantity: '1'
    },
    {
      name: 'Manzanas rojas cortadas en rebanadas',
      quantity: '2'
    },
    {
      name: 'Lechuga romana cortada finamente',
      quantity: '1'
    },
    {
      name: 'Tazas de Espinacas desinfectadas y cortadas finamente',
      quantity: '2'
    },
    {
      name: 'Paquete de Galletas saladas (137 g)',
      quantity: '1'
    },
    {
      name: 'Taza de Arándanos deshidratados',
      quantity: '1/2'
    },
    {
      name: 'Taza de Queso panela rallado',
      quantity: '1/2'
    },
    {
      name: 'Lechuga orejona desinfectada y troceada',
      quantity: '1/2'
    },
    {
      name: 'Cucharadas de Jugo MAGGI®',
      quantity: '4'
    },
    {
      name: 'Cucharadas de Salsa Tipo Inglesa CROSSE & BLACKWELL®',
      quantity: '4'
    },
    {
      name: 'Limones (su jugo)',
      quantity: '4'
    },
    {
      name: 'Pieza Pepino cortado en rebanadas',
      quantity: '1'
    },
    {
      name: 'Salchichas de pavo cortadas en rebanadas',
      quantity: '3'
    },
    {
      name: 'Taza de Cátsup',
      quantity: '1/4'
    },
    {
      name: 'Taza de Salsa picante',
      quantity: '1/4'
    },
    {
      name: 'Taza de Zanahorias ralladas',
      quantity: '1/2'
    },
    {
      name: 'Paquete de Galletas SALADITAS® GAMESA®',
      quantity: '1/2'
    },
    {
      name: 'Lata de Media Crema NESTLÉ',
      quantity: '1'
    },
    {
      name: 'Cucharadita de Sal con ajo en polvo',
      quantity: '1'
    },
    {
      name: 'Cucharada de Salsa de Soya MAGGI',
      quantity: '1'
    },
    {
      name: 'Sobre de Hojas con Sazonador MAGGI JUGOSO AL SARTÉN con Finas Hierbas',
      quantity: '1'
    },
    {
      name: 'Pechuga de pollo cortada en 4 piezas a lo largo, sin hueso y sin piel (150 g c/u)',
      quantity: '1'
    },
    {
      name: 'Cucharada de Aceite de maíz',
      quantity: '1'
    },
    {
      name: 'Pimiento morrón rojo sin semillas y cortado en tiras',
      quantity: '1'
    },
    {
      name: 'Cucharadita de Sal con ajo en polvo',
      quantity: '1'
    },
    {
      name: 'Lechuga sangría desinfectada y troceada',
      quantity: '1'
    },
    {
      name: 'Lechuga italiana desinfectada y troceada',
      quantity: '1'
    },
    {
      name: 'de Taza de Agua',
      quantity: '1/4'
    },
    {
      name: 'Pimiento morrón amarillo sin semillas y cortado en tiras',
      quantity: '1/2'
    },
    {
      name: 'de Taza de Cacahuate sin sal',
      quantity: '3/4'
    },
    {
      name: 'de Taza de Jitomates cherry cortados por la mitad',
      quantity: '3/4'
    },
    {
      name: 'Envase de Leche Evaporada CARNATION® CLAVEL® (360 g)',
      quantity: '1/2'
    },
    {
      name: 'Paquete de espagueti cocido y escurrido (200 g)',
      quantity: '1/4'
    },
    {
      name: 'Taza de queso tipo manchego rallado',
      quantity: '1/2'
    },
    {
      name: 'De taza de queso parmesano rallado',
      quantity: '1'
    },
    {
      name: 'Paquete de queso crema',
      quantity: '1'
    },
    {
      name: 'Lata de Media Crema NESTLÉ®',
      quantity: '1'
    },
    {
      name: 'Cucharada de chile chipotle molido',
      quantity: '1'
    },
    {
      name: 'Salchichas cortadas en rodajas',
      quantity: '4'
    },
    {
      name: 'Paquete pasta tipo codito cocida y escurrida (200 g)',
      quantity: '1'
    },
    {
      name: 'Ramas de cilantro desinfectado y picado finamente',
      quantity: '3'
    },
    {
      name: 'De taza de mayonesa',
      quantity: '1/3'
    },
    {
      name: 'De cucharadita de sal',
      quantity: '1/4'
    },
    {
      name: 'Cucharada de mantequilla',
      quantity: '1'
    },
    {
      name: 'Cucharadas de aceite de oliva',
      quantity: '2'
    },
    {
      name: 'Lata de Leche Evaporada CARNATION® CLAVEL®',
      quantity: '1'
    },
    {
      name: 'Yemas de huevo',
      quantity: '2'
    },
    {
      name: 'Huevo',
      quantity: '1'
    },
    {
      name: 'Cucharadita de sal con cebolla en polvo',
      quantity: '1'
    },
    {
      name: 'Ramas de perejil desinfectado y picado finamente',
      quantity: '3'
    },
    {
      name: 'Cucharadita de pimienta negra molida',
      quantity: '1/2'
    },
    {
      name: 'Taza de queso parmesano rallado',
      quantity: '1/2'
    },
    {
      name: 'Gramos de tocino picado finamente',
      quantity: '200'
    },
    {
      name: 'Gramos de espagueti cocido y escurrido',
      quantity: '200'
    },
  ],
  recipeimages: [
    {
      url: 'pesto'
    },
    {
      url: 'ensalada de manzana'
    },
    {
      url: 'tamales de frijol negro con hoja santa y verduras fermentadas'
    },
    {
      url: 'espinazo de cerdo en salsa roja'
    },
    {
      url: 'ensalada a las finas hierbas'
    },
    {
      url: 'ensalada botanera'
    },
    {
      url: 'ensalada con aderezo de cacahuate'
    },
    {
      url: 'espagueti en salsa de quesos fácil'
    },
    {
      url: 'sopa de coditos con salchicha'
    },
    {
      url: 'pasta estilo carbonara'
    },
  ]
};

