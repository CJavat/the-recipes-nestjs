"use server";

import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';
// import { createUser } from "./signup";

export const signInEmailPassword = async ( email: string, password: string ) => {
  if( !email || !password ) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if( !user ) {
    throw new Error("El usuario no existe");
    // const dbUser = await createUser( firstName, lastName, email, password );
    // return dbUser;
  }

  if( !bcrypt.compareSync( password, user?.password ?? '' ) ) {
    throw new Error("Contraseña Incorrecta");
    // return null;
  }

  return user;
}