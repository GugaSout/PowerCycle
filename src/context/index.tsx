"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// Definir a estrutura do usuário
interface User {
  nome: string;
  email: string;
}

// Definir os dados do contexto
interface UserContextData {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Criar o contexto
const UserContext = createContext<UserContextData | undefined>(undefined);

// Componente Provider que irá envolver o resto da aplicação
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Carregar dados do usuário do banco de dados falso
  useEffect(() => {
    const loadUserFromDatabase = async () => {
      try {
        const response = await fetch("/src/data/base.json");
        const data = await response.json();

        const loggedInUser = data.find((user: User) => user.email === "exemplo@exemplo.com");

        if (loggedInUser) {
          setUser(loggedInUser);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário", error);
      }
    };

    loadUserFromDatabase();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
