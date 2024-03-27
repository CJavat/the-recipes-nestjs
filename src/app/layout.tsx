import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { AuthProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Recipes",
  description: "App de recetas para todo tipo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="es">
        <body className={clsx([inter.className, 'bg-white text-black dark:bg-black dark:text-white'])}>
          { children }
        </body>
      </html>
    </AuthProvider>
  );
}
