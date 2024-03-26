import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface State {
  colorTheme: 'dark' | 'light';

  changeTheme: () => void;
}

export const useThemeStore = create<State>()(
  persist(
    (set, get) => ({
      colorTheme: 'light',

      changeTheme: () => {
        const { colorTheme } = get();

        if( colorTheme === 'light' ) return set({ colorTheme: 'dark' });

        return set({ colorTheme: 'light' })
      }
    }),
    {
      name: 'theme'
    }
  ), 
);