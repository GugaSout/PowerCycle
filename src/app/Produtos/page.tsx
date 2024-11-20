import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/Produtos.css";

export default function Produtos() {
  return (
    <>
      <Header />
      <main className="mProdutos">
        <section className="textSection">
          <h1>Alugue sua Bicicleta!</h1>
          <p>
            Alugar nossas bicicletas é simples e prático! O preço é de <strong>R$ 5,90</strong> pelos primeiros 15 minutos,
            e <strong>R$ 0,50</strong> por minuto adicional. Nossas estações estão estrategicamente localizadas em toda a cidade
            para facilitar o seu acesso. Confira o mapa abaixo e encontre a estação mais próxima de você.
          </p>
        </section>

        <section className="mapSection">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d34794.84489413701!2d-46.64189289542967!3d-23.555598958624344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicicletas%20itau!5e0!3m2!1spt-BR!2sbr!4v1732126774873!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </section>

        <section className="plansSection">
          <h2>Conheça Nossos Planos</h2>
          <div className="plans">
            <div className="plan">
              <h3>Plano Básico</h3>
              <p>R$ 29,90/mês</p>
              <p>Inclui 50 horas de uso por mês.</p>
            </div>
            <div className="plan">
              <h3>Plano Intermediário</h3>
              <p>R$ 49,90/mês</p>
              <p>Inclui 150 horas de uso por mês.</p>
            </div>
            <div className="plan">
              <h3>Plano Avançado</h3>
              <p>R$ 79,90/mês</p>
              <p>Inclui 250 horas de uso por mês.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
