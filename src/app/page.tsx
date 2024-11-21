import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/Home.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mHome">
        <h1 className="h1Home">Pedalando por um futuro mais verde.</h1>
        <div className="dHome">
          <div className="dtex">
            <h1>Faça parte!</h1>
            <p>
              Alugue sua bicicleta e ajude a transformar a sua cidade! Nossa energia limpa, gerada a partir do seu pedal,
              alimenta a comunidade e reduz a poluição.{" "}
              <Link className="liProd" href="/Produtos">
                Junte-se a nós e faça a diferença!
              </Link>
            </p>
          </div>
          <div className="dimg"></div>
        </div>

        {/* Nova seção "Sobre Nós" */}
        <section className="about">
          <h2>Sobre a Nossa Iniciativa</h2>
          <p>
            Somos uma empresa comprometida em trazer soluções sustentáveis para o transporte urbano.
            Nosso objetivo é disponibilizar bicicletas que, além de proporcionar uma alternativa de mobilidade prática e saudável,
            ajudam a gerar energia limpa para a nossa comunidade.
          </p>
          <p>
            Cada pedalada conta! A energia gerada pelos nossos usuários é convertida e distribuída, contribuindo para um sistema elétrico mais verde e eficiente.
            Queremos inspirar mudanças, reduzir a poluição e criar cidades mais amigáveis e conscientes.
          </p>
        </section>

        {/* Nova seção de chamada para ação */}
        <section className="cta">
          <h2>Saiba Mais e Faça Parte</h2>
          <p>
            Estamos apenas começando. Nossa missão é transformar o mundo um pedal por vez, e queremos você conosco nesta jornada!
          </p>
          <p>
            Descubra mais sobre nosso projeto e como você pode contribuir para uma cidade mais sustentável.{" "}
            <Link href="/Produtos" className="liSobre">
              Saiba Mais
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
