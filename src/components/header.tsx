"use client";

import { useUser } from "@/context/index";
import "@/styles/Header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setUser(null); // Desloga o usuário
    setShowLogout(false); // Fecha o menu de logout
    router.push("/"); // Redireciona para a página inicial
  };

  const toggleLogout = () => {
    setShowLogout((prev) => !prev); // Alterna o estado de exibição do botão de deslogar
  };

  const handleLoginClick = () => {
    // Redireciona o usuário para a página de login
    router.push("/Login");
  };

  return (
    <header className="header">
      <Link className="linkH" href="/">
        <h1>PowerCycle</h1>
      </Link>
      <nav className="navHeader">
        <Link className="liHeader" href="/">Home</Link>
        <Link className="liHeader" href="/Produtos">Produtos</Link>
        <Link className="liHeader" href="/Sobre">Sobre</Link>
      </nav>
      {user ? (
        <div className="dUser">
          <p className="userName" onClick={toggleLogout}>
            {user.nome}
          </p>
          {showLogout && (
            <button className="btnLogout" onClick={handleLogout}>
              Deslogar
            </button>
          )}
        </div>
      ) : (
        <div className="dUser">
          <button className="btnLogin" onClick={handleLoginClick}>
            Fazer login
          </button>
        </div>
      )}
    </header>
  );
}
