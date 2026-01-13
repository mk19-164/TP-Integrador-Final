import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <main className="hero">
        <h1>Linear es una mejor manera de construir productos</h1>
        <p>
          Gestione problemas, proyectos y hojas de ruta de productos con una
          herramienta especialmente diseñada
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Link to="/precios?plan=free" className="primary">
            Empezar gratis
          </Link>

          <Link to="/precios?plan=pro" className="primary">
            Ver plan Pro
          </Link>
        </div>
      </main>

      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Flujos rápidos de trabajo</h3>
            <p>Construya rápidamente con potentes herramientas.</p>
          </div>

          <div className="feature-card">
            <h3>Seguimiento potente</h3>
            <p>Realice un seguimiento claro de proyectos.</p>
          </div>

          <div className="feature-card">
            <h3>Colaboración en equipo</h3>
            <p>Diseñado para equipos que trabajan juntos.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2025 Linear Clone
      </footer>
    </div>
  );
}

export default Home;
