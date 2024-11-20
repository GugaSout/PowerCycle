import Link from "next/link";
import "@/styles/Header.css";
export default function Header(){



    return(
        <header className="header">
            <h1>PowerCycle</h1>
            <nav className="navHeader">
                <Link className="liHeader" href="/">Home</Link>
                <Link className="liHeader" href="/Produtos">Produtos</Link>
                <Link className="liHeader" href="/Sobre">Sobre</Link>
            </nav>
            <button className="btnlogin"> Fazer login</button>
        </header>
    )
}