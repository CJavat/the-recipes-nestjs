"use client";

import Link from "next/link"
import { IoArrowForwardOutline, IoLockOpenOutline, IoPersonAddOutline  } from "react-icons/io5"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface InputsForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  //TODO: FALTA TERMINARLO
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsForm>();

  const onSubmit = async ( data: InputsForm ) => {
    console.log( data );

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
    });

    if( res?.error ) {
      return alert( res.error );
    }

    router.push('/');
  };

  return (
    <form className="bg-zinc-50 dark:bg-zinc-950 shadow w-full rounded-lg divide-y divide-gray-200 dark:divide-gray-950" onSubmit={ handleSubmit( onSubmit ) }>
      <div className="px-5 py-7 text-black dark:text-white">
        <label className="font-semibold text-sm pb-1 block">Correo</label>
        <input type="text" className="dark:bg-black border rounded-lg dark:border-zinc-800 px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-indigo-500 focus:outline-none" />
        
        <label className="font-semibold text-sm pb-1 block">Contraseña</label>
        <input type="text" className="dark:bg-black border rounded-lg dark:border-zinc-800 px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-indigo-500 focus:outline-none" />
        
        <button type="submit" className="flex justify-center items-center gap-1 transition duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-sm focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold">
            <span className="inline-block mr-2">Iniciar Sesión</span>
            <IoArrowForwardOutline className="text-xl" />
        </button>
      </div>
      <div className="p-5">
          <div className="grid grid-cols-3 gap-1">
              <button type="button" className="transition duration-200 border dark:border-zinc-800 border-gray-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md dark:hover:shadow-zinc-800 font-normal text-center inline-block">MailUp</button>
              <button type="button" className="transition duration-200 border dark:border-zinc-800 border-gray-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md dark:hover:shadow-zinc-800 font-normal text-center inline-block">Google</button>
              <button type="button" className="transition duration-200 border dark:border-zinc-800 border-gray-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md dark:hover:shadow-zinc-800 font-normal text-center inline-block">Github</button>
          </div>
      </div>
      <div className="py-5">
        <div className="flex justify-center items-center text-center sm:text-left whitespace-nowrap">
          <Link href='/auth/forgot-password' className="flex-1 flex justify-center items-center gap-1 transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-black focus:outline-none focus:bg-gray-200 dark:focus:bg-zinc-950 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <IoLockOpenOutline className="text-xl" />
              <span className="inline-block ml-1">Olvidé mi contraseña</span>
          </Link>

          <Link href='/auth/sign-up' className="flex-1 flex justify-center items-center gap-1 transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-black focus:outline-none focus:bg-gray-200 dark:focus:bg-zinc-950 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <IoPersonAddOutline className="text-xl" />
              <span className="inline-block ml-1">Crear Cuenta</span>
          </Link>
        </div>
      </div>
    </form>
  )
}
