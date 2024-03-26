"use client";

import { useThemeStore } from "@/store/theme/useThemeStore";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoMoonSharp, IoSunnyOutline, IoSunnySharp  } from "react-icons/io5";

export const Header = () => {

  const colorTheme = useThemeStore( state => state.colorTheme );
  const changeTheme = useThemeStore( state => state.changeTheme );

  const [theme, setTheme] = useState<'light'|'dark'>();
  const [isHover, setisHover] = useState( false )

  useEffect(() => {
    setTheme( colorTheme );
  }, [ colorTheme ]);

  useEffect(() => {
    if ( theme === 'dark' ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [ theme ]);
  
  const onChangeTheme = () => {
    changeTheme();
  };

  return (
    <header className="bg-white dark:bg-black absolute top-0 w-full px-10 py-3 border-b-2 dark:border-b-gray-700 flex justify-end items-center">
      <div onMouseEnter={ () => setisHover( true ) } onMouseLeave={ () => setisHover( false ) }>
        {
          theme === 'dark'
            ? (
              isHover 
                ? <IoSunnySharp className="text-3xl cursor-pointer" onClick={ onChangeTheme } />
                : <IoSunnyOutline className="text-3xl cursor-pointer" onClick={ onChangeTheme } />
            )
            : (
              isHover
                ? <IoMoonSharp className="text-3xl cursor-pointer" onClick={ onChangeTheme } />
                : <IoMoonOutline className="text-3xl cursor-pointer" onClick={ onChangeTheme } />
            )
        }
      </div>
    </header>
  )
}
