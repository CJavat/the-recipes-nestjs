"use server";

import prisma from "@/lib/prisma";

export const findUser = async ( email: string ) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if( !user ) return {};

  return user;
}