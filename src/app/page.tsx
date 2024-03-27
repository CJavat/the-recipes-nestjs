import { getUserServerSession } from "@/actions/auth";

export default async function Home() {

  const usr =  await getUserServerSession();

  // console.log(usr);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Hola Mundo </h1>
      <span className="text-red-500 text-2xl font-bold">
        {
          JSON.stringify( usr, null, 3 )
        }
      </span>
    </main>
  );
}
