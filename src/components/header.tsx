"use client";

import "@/styles/Header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/index";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [showLogout, setShowLogout] = useState(false);

  const handleLoginClick = () => {
    if (!user) {
      router.push("/Login");
    }
  };

  const handleLogout = () => {
    setUser(null); 
    setShowLogout(false); 
    router.push("/"); 
  };

  const toggleLogout = () => {
    setShowLogout((prev) => !prev); 
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
        <button className="btnlogin" onClick={handleLoginClick}>
          Fazer login
        </button>
        </div>
      )}
    </header>
  );
}
