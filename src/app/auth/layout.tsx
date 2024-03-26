import { Header } from "@/components";

export default function AuthLayout({ children }: { children: React.ReactNode; }) {
  
  //TODO: Redirigir cuando tenga la sesión iniciada.
  
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Header />
      <div className="w-full sm:w-[550px] px-10">
        { children }
      </div>
    </main>
  );
}