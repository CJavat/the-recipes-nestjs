"use server";

import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';

export const createUser = async ( firstName: string, lastName: string, email: string, password: string ) => {
  const user = await prisma.user.create({ 
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: bcrypt.hashSync( password, 10 ),
      emailVerified: false,
    }
  });
  //TODO: Agregar la acción del envio de correo para verificar la cuenta. Hacerlo en otra acción
  return user;
}