import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="hero">
        <h1>Linear es una mejor manera de construir productos</h1>
        <p>
          Gestione problemas, proyectos y hojas de ruta de productos con una herramienta especialmente diseñada 
        </p>
        <button className="primary">Empezar</button>

<section className="features">
  <div className="features-grid">
    <div className="feature-card">
      <h3>Flujos rápidos de trabajo</h3>
      <p>Construya rápidamente con potentes herramientas de productividad.</p>
    </div>

    <div className="feature-card">
      <h3>Seguimiento potente</h3>
      <p>Realice un seguimiento de problemas, ciclos y proyectos con claridad.</p>
    </div>

    <div className="feature-card">
      <h3>Colaboración en equipo</h3>
      <p>Diseñado paraa equipos que trabajan más rápido juntos.</p>
    </div>
  </div>
</section>

      </main>

      <footer className="footer">
        © 2025 Linear Clone
      </footer>
    </>
  );
}

export default App;
