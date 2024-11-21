"use client"
import "@/styles/Header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/Login");
    };

    return (
        <header className="header">
            <Link className="linkH" href='/'>
                <h1>PowerCycle</h1>
            </Link>
            <nav className="navHeader">
                <Link className="liHeader" href="/">Home</Link>
                <Link className="liHeader" href="/Produtos">Produtos</Link>
                <Link className="liHeader" href="/Sobre">Sobre</Link>
            </nav>
            <button className="btnlogin" onClick={handleLoginClick}>Fazer login</button>
        </header>
    );
}
