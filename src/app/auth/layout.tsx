
export default function AuthLayout({ children }: { children: React.ReactNode; }) {
  
  //TODO: Redirigir cuando tenga la sesión iniciada.
  
  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">
        { children }
      </div>
    </main>
  );
}