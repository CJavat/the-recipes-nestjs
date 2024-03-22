export const getRandomNumber = ( max: number, min: number ): Number => {
  return Math.floor(Math.random() * (max - min) + min );
};