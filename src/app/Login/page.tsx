"use client";

import "@/styles/Login.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/index";

export default function Login() {
    const router = useRouter();
    const { setUser } = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Simula uma requisição de login
        const fakeUser = { nome: "Gustavo Souto", email }; // Nome de exemplo

        // Atualiza o contexto do usuário
        setUser(fakeUser);

        // Redireciona o usuário para a página inicial
        router.push("/");
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
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="loginButton">Entrar</button>
                </form>
                <p className="signupPrompt">
                    Não tem uma conta? <Link href="/Cadastro">Cadastre-se aqui</Link>.
                </p>
            </section>
        </main>
    );
}
