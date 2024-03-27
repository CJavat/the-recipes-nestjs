"use client";

import Link from "next/link"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react";
import { IoLogInOutline, IoArrowForwardOutline, IoLockOpenOutline, IoLogoGoogle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { createUser, findUser } from "@/actions/auth";
import { useState } from "react";

interface InputsForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsForm>();
  const [ userExists, setUserExists ] = useState( false );

  const onProviderSignin = async ( provider: string ) => {
    await signIn( provider, {
      callbackUrl:'http://localhost:3000/',
    } );
  };

  const onSubmit = async ( data: InputsForm ) => {
    
    try {
      const userExists = await findUser( data.email );
      if( Object.keys( userExists ).length > 1 ) return setUserExists( true );
      
      setUserExists( false );
      const res = await createUser( data.firstName, data.lastName, data.email, data.password );
  
      console.log( res );
  
      // TODO: Agregar la instrucción de que verifique su email. 
  
      router.replace('/auth/login');
    } catch (error) {
      console.log( error );
    }
  };

  return (
    <form className="bg-zinc-50 dark:bg-zinc-950 shadow w-full rounded-lg divide-y divide-gray-200 dark:divide-gray-950" onSubmit={ handleSubmit( onSubmit ) }>
      
      { errors.firstName && <p className="text-center w-full font-bold bg-red-500 rounded-sm px-5 py-3">{ errors.firstName?.message }</p> }
      { errors.lastName && <p className="text-center w-full font-bold bg-red-500 rounded-sm px-5 py-3">{ errors.lastName?.message }</p> }
      { errors.email && <p className="text-center w-full font-bold bg-red-500 rounded-sm px-5 py-3">{ errors.email?.message }</p> }
      { errors.password && <p className="text-center w-full font-bold bg-red-500 rounded-sm px-5 py-3">{ errors.password?.message }</p> }
      { userExists && <p className="text-center w-full font-bold bg-red-500 rounded-sm px-5 py-3">El correo ya está registrado</p> }
      
      {/* // TODO: Agregar la instrucción de que verifique su email.  */}

      <div className="px-5 py-7 text-black dark:text-white">
        <label className="font-semibold text-sm pb-1 block">Nombre</label>
        <input 
          className="dark:bg-black border rounded-lg dark:border-zinc-800 px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-indigo-500 focus:outline-none" 
          type="text" 
          {...register( 
            "firstName", 
            { 
              required: { message: 'El nombre es obligatorio', value: true }, 
              maxLength: { message: 'El nombre debe tener máximo 20 caracteres', value: 20 }, 
              minLength: { message: 'El nombre debe tener mínimo 3 caracteres', value: 3 }, 
            } ) 

          }
        />

        <label className="font-semibold text-sm pb-1 block">Apellido</label>
        <input 
          className="dark:bg-black border rounded-lg dark:border-zinc-800 px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-indigo-500 focus:outline-none" 
          type="text"
          {...register( 
            "lastName", 
            { 
              required: { message: 'El apellido es obligatorio', value: true }, 
              maxLength: { message: 'El apellido debe tener máximo 20 caracteres', value: 20 }, 
              minLength: { message: 'El apellido debe tener mínimo 3 caracteres', value: 3 }, 
            } ) 
          }
        />
        
        <label className="font-semibold text-sm pb-1 block">Correo</label>
        <input 
          className="dark:bg-black border rounded-lg dark:border-zinc-800 px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-indigo-500 focus:outline-none" 
          type="email"
          {...register( 
            "email", 
            {
              pattern: { message: 'Escribe un email válido', value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ },
              required: { message: 'El email es obligatorio', value: true }, 
              maxLength: { message: 'El email debe tener máximo 30 caracteres', value: 30 }, 
              minLength: { message: 'El email debe tener mínimo 10 caracteres', value: 10 }, 
            } ) 
          }
        />
        
        <label className="font-semibold text-sm pb-1 block">Contraseña</label>
        <input 
          className="dark:bg-black border rounded-lg dark:border-zinc-800 px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-indigo-500 focus:outline-none" 
          type="password"
          {...register( 
            "password", 
            { 
              pattern: { message: 'La contraseña debe tener al menos una mayúscula, una mínuscula y un número', value: /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ },
              required: { message: 'La contraseña es obligatoria', value: true }, 
              minLength: { message: 'La contraseña debe tener mínimo 6 caracteres', value: 6 }, 
            } ) 
          }
        />
        
        <button type="submit" className="flex justify-center items-center gap-1 transition duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-sm focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold">
            <span className="inline-block mr-2">Crear Cuenta</span>
            <IoArrowForwardOutline className="text-xl" />
        </button>
      </div>

      <div className="p-5">
          <div className="grid grid-cols-1 gap-1">
              <div className="cursor-pointer flex justify-center items-center gap-3 transition duration-200 border dark:border-zinc-800 border-gray-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md dark:hover:shadow-zinc-800 font-normal text-center" onClick={ () => onProviderSignin('google') }>
                <IoLogoGoogle className="text-xl" />
                <p>Google</p>
              </div>
          </div>
      </div>

      <div className="py-5">
        <div className="flex justify-center items-center text-center sm:text-left whitespace-nowrap">
          <Link href='/auth/forgot-password' className="flex-1 flex justify-center items-center gap-1 transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-black focus:outline-none focus:bg-gray-200 dark:focus:bg-zinc-950 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <IoLockOpenOutline className="text-xl" />
              <span className="inline-block ml-1">Olvidé mi contraseña</span>
          </Link>

          <Link href='/auth/login' className="flex-1 flex justify-center items-center gap-1 transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-black focus:outline-none focus:bg-gray-200 dark:focus:bg-zinc-950 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <IoLogInOutline className="text-xl" />
              <span className="inline-block ml-1">Iniciar Sesión</span>
          </Link>
        </div>
      </div>
    </form>
  )
}
