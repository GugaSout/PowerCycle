import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/Sobre.css";

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="mSobre">
        <section className="introSection">
          <h1>Sobre Nós</h1>
          <p>
            Somos uma equipe apaixonada por sustentabilidade e inovação. Nosso objetivo é trazer soluções práticas para
            transformar as cidades em lugares mais limpos e saudáveis. Conheça quem está por trás desse projeto incrível!
          </p>
        </section>

        <section className="teamSection">
          <h2>Nosso Time</h2>
          <div className="teamGrid">
            <div className="teamMember">
              <img src="/images/gustavo.jpg" alt="Gustavo Souto" />
              <h3>Gustavo Souto</h3>
              <p>Especialista em desenvolvimento Front-End e estratégias de negócio.</p>
            </div>
            <div className="teamMember">
              <img src="/images/thamires.jpg" alt="Thamires Ribeiro" />
              <h3>Thamires Ribeiro</h3>
              <p>Engenheira de software com foco em soluções criativas e sustentáveis.</p>
            </div>
            <div className="teamMember">
              <img src="/images/juliana.jpg" alt="Juliana Sousa" />
              <h3>Juliana Sousa</h3>
              <p>Designer e especialista em experiência do usuário, garantindo um visual incrível.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
