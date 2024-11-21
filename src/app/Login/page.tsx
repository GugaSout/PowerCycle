
import "@/styles/Login.css";
import Link from "next/link";

export default function Login() {
    return (
        <>

            <main className="mLogin">
                <section className="loginSection">
                    <h1>Login</h1>
                    <p>Entre com sua conta para acessar nossos serviços.</p>
                    <form className="loginForm">
                        <div className="formGroup">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                        </div>
                        <button type="submit" className="loginButton">Entrar</button>
                    </form>
                    <p className="signupPrompt">
                        Não tem uma conta? <Link href="/Cadastro">Cadastre-se aqui</Link>.
                    </p>
                </section>
            </main>

        </>
    );
}
