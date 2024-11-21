"use client";

import "@/styles/Cadastro.css";

export default function Cadastro() {
    async function handleCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = {
            nome: formData.get("nome") as string,
            email: formData.get("email") as string,
            cpf: formData.get("cpf") as string,
            dataNascimento: formData.get("nascimento") as string,
            senha: formData.get("senha") as string,
            confirmarSenha: formData.get("confirmarSenha") as string,
        };

        if (data.senha !== data.confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/powerCycle_war_exploded", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                event.currentTarget.reset();
            } else {
                const error = await response.json();
                alert(error.message || "Ocorreu um erro no cadastro.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Não foi possível realizar o cadastro. Tente novamente mais tarde.");
        }
    }

    return (
        <>
            <main className="mCadastro">
                <section className="cadastroSection">
                    <h1>Cadastro</h1>
                    <p>Crie sua conta para começar a pedalar com a PowerCycle!</p>
                    <form className="cadastroForm" onSubmit={handleCadastro}>
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
                            <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" maxLength={14} required />
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
