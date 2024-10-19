import { User } from "@nhost/nextjs";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Definir el tipo User si es necesario, asegurándote de que los campos opcionales estén correctos
type CustomUser = User | null; // Esto permite que sea null o undefined

type UserStore = {
  user: CustomUser; // Permitir que el user sea 'User | null'
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserState = create<UserStore>()(
  persist(
    (set) => ({
      user: null, // Inicialmente null
      setUser: (user) => set({ user }), // Asignar el user
      clearUser: () => set({ user: null }), // Limpiar el user
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage), // Configuración para almacenamiento persistente
    }
  )
);
