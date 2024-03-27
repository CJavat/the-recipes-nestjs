import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInEmailPassword } from "@/actions/auth";
import bcrypt from 'bcrypt';
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Correo Electronico', type: 'email', placeholder: 'correo@correo.com' },
        password: { label: 'Contraseña', type: 'password', placeholder: '*********' },
      },
      async authorize(credentials, req) {
        const user = await signInEmailPassword( credentials!.email, credentials!.password );

        if( user ) return user;

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      //? LOGIN CON GOOGLE
      if( account?.provider === 'google' ) {

        const userExists = await prisma.user.findUnique({ where: { email: user.email ?? '' } });
        if( userExists ) return true;

        const name = user.name!.split(' ');

        await prisma.user.create({ 
          data: {
            firstName: name[0] ?? 'Sin Nombre',
            lastName: name[1] ?? 'Sin Apellido',
            email: user.email ?? '',
            password: bcrypt.hashSync( 'password', 10 ),
            emailVerified: profile.email_verified ?? false,
            image: profile?.picture,
          }
        });

        return true;
      }

      return false;
    },
    async jwt({ token, user, account, profile }) {
      console.log(JSON.stringify( { token, user, account, profile }, null, 3 ));
      
      const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
      if( dbUser?.emailVerified === false ) {
        throw Error("Por favor, verifica tu email");
      }

      token.id = dbUser?.id;
      token.email = dbUser?.email;
      token.role = dbUser?.role;
      token.name = `${ dbUser!.firstName } ${ dbUser!.lastName }` ?? '';

      return token;
    },
    session({ session, token, user }) {
      // console.log({ session, token, user });
      if( session && session.user ) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session;
    }
  }
}

const handler = NextAuth( authOptions );

export { handler as GET, handler as POST };