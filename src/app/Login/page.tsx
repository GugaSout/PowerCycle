"use client";

import { useUser } from "@/context/index";
import "@/styles/Login.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const { setUser } = useUser();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base-usuario");
            const data = await response.json();

            const loggedInUser = data.find(
                (dbUser: { email: string; senha: string }) =>
                    dbUser.email === email && dbUser.senha === senha
            );

            if (loggedInUser) {
                setUser(loggedInUser);
                alert(`Bem-vindo, ${loggedInUser.nome}!`);
                router.push("/"); // Redireciona para a home
            } else {
                alert("E-mail ou senha inválidos.");
            }
        } catch (error) {
            console.error("Erro ao processar login:", error);
            alert("Erro ao tentar fazer login. Tente novamente mais tarde.");
        }
    };

    return (
        <main className="mLogin">
            <section className="loginSection">
                <h1>Login</h1>
                <p>Entre com sua conta para acessar nossos serviços.</p>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="loginButton">
                        Entrar
                    </button>
                </form>
                <p className="signupPrompt">
                    Não tem uma conta? <a href="/Cadastro">Cadastre-se aqui</a>.
                </p>
            </section>
        </main>
    );
}
