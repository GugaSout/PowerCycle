import Link from "next/link";
import "@/styles/Header.css";
export default function Header(){



    return(
        <header className="header">
            <h1>PowerCycle</h1>
            <nav className="navHeader">
                <Link className="liHeader" href="/">Home</Link>
                <Link className="liHeader" href="/">Produtos</Link>
                <Link className="liHeader" href="/sobre">Sobre</Link>
            </nav>
            {/* {user?.nome == ''? "" : (<button className="rounded-md bg-red-600 text-white p-2" onClick={logout}>Deslogar</button>)} */}
        </header>
    )
}