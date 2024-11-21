"use client"
import "@/styles/Cadastro.css";
import React from "react";

export default function Cadastro() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica de cadastro a ser implementada
        console.log("Cadastro realizado!");
    };

    return (
        <>

            <main className="mCadastro">
                <section className="cadastroSection">
                    <h1>Cadastro</h1>
                    <p>Crie sua conta para começar a pedalar com a PowerCycle!</p>
                    <form className="cadastroForm" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" max-Length="14" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="nascimento">Data de Nascimento</label>
                            <input type="date" id="nascimento" name="nascimento" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="confirmarSenha">Confirmar Senha</label>
                            <input
                                type="password"
                                id="confirmarSenha"
                                name="confirmarSenha"
                                placeholder="Confirme sua senha"
                                required
                            />
                        </div>
                        <button type="submit" className="cadastroButton">Cadastrar</button>
                    </form>
                </section>
            </main>

        </>
    );
}
