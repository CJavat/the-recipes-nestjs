import { titleFont } from "@/config/fonts";
import { RegisterForm } from "./ui/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear Cuenta",
  description: "Crear Cuenta en la página de recetas",
};
export default function SignUpPage() {
  return (
    <div className="flex flex-col w-full h-full py-6 bg-zinc-50 dark:bg-zinc-950 rounded-3xl">
      <h1 className={`${ titleFont.className } text-center text-4xl mb-5 text-indigo-600 font-bold uppercase `}>Crear Una Cuenta</h1>
      <RegisterForm />
    </div>
  );
}
