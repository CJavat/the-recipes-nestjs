import { titleFont } from "@/config/fonts";
import { LoginForm } from "./ui/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Iniciar sesión en la página",
};

export default function LogInPage() {
  return (
    <form className="flex flex-col w-full h-full pb-6 bg-zinc-50 dark:bg-zinc-950 rounded-3xl">
      <h1 className={`${ titleFont.className } text-center text-4xl mb-5 text-indigo-600 font-bold uppercase `}>Iniciar Sesión</h1>
      <LoginForm />
    </form>
  );
}