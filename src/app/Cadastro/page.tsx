"use client";

import "@/styles/Cadastro.css";
import { TipoUsuario } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro() {

    const navigate = useRouter();

    const [usuario, setUsuario] = useState<TipoUsuario>({
        id: 0,
        nome: "",
        email: "",
        cpf: "",
        dataNascimento: "",
        senha: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        };

        try {
            const response = await fetch("http://localhost:3000/api/base-usuario", cabecalho);

            if (response.ok) {
                alert(`${usuario.nome} cadastrado com sucesso!`);
                setUsuario({ id: 0, nome: "", email: "", cpf: "", dataNascimento: "", senha: "" });
                navigate.push('/');
            } else {
                alert("Erro ao cadastrar!");
            }
        } catch (error) {
            console.error("Erro ao cadastrar o usuario", error);
        }
    };

    return (
        <main className="mCadastro">
            <section className="cadastroSection">
                <h1>Cadastro</h1>
                <p>Crie sua conta para começar a pedalar com a PowerCycle!</p>
                <form className="cadastroForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="nome">Nome</label>
                        <input onChange={handleChange} type="text" id="nome" name="nome" placeholder="Digite seu nome completo" value={usuario.nome} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">E-mail</label>
                        <input onChange={handleChange} type="email" id="email" name="email" placeholder="Digite seu e-mail" value={usuario.email} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cpf">CPF</label>
                        <input onChange={handleChange} type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" maxLength={14} value={usuario.cpf} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="nascimento">Data de Nascimento</label>
                        <input onChange={handleChange} type="date" id="nascimento" name="dataNascimento" value={usuario.dataNascimento} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="senha">Senha</label>
                        <input onChange={handleChange} type="password" id="senha" name="senha" placeholder="Digite sua senha" value={usuario.senha} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input onChange={handleChange} type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua senha" required />
                    </div>
                    <button type="submit" className="cadastroButton">Cadastrar</button>
                </form>
            </section>
        </main>
    );
}
