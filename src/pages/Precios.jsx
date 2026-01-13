import { Link, useSearchParams } from "react-router-dom";

function Precios() {
  const [searchParams] = useSearchParams();
  const planSeleccionado = searchParams.get("plan");

  return (
    <div className="page">
      <main className="hero">
        <h1>Planes y precios</h1>
        <p>Elegí el plan que mejor se adapte a tu equipo</p>

        {planSeleccionado && (
          <p style={{ marginTop: "1rem", opacity: 0.8 }}>
            Plan seleccionado: <strong>{planSeleccionado}</strong>
          </p>
        )}

        <section className="features">
          <div className="features-grid">
            <div
              className={`feature-card ${
                planSeleccionado === "gratis" ? "highlighted" : ""
              }`}
            >
              <h3>Gratis</h3>
              <p className="price">$0 / mes</p>
              <ul className="plan-list">
                <li>Gestión básica de tareas</li>
                <li>Hasta 3 proyectos</li>
                <li>Soporte limitado</li>
              </ul>

              <Link to="/registro?plan=gratis" className="primary plan-btn">
                Elegir plan
              </Link>
            </div>

            <div
              className={`feature-card ${
                planSeleccionado === "pro" ? "highlighted" : ""
              }`}
            >
              <h3>Pro</h3>
              <p className="price">$12 / mes</p>
              <ul className="plan-list">
                <li>Proyectos ilimitados</li>
                <li>Colaboración en equipo</li>
                <li>Soporte prioritario</li>
              </ul>

              <Link to="/registro?plan=pro" className="primary plan-btn">
                Elegir plan
              </Link>
            </div>

            <div
              className={`feature-card ${
                planSeleccionado === "empresa" ? "highlighted" : ""
              }`}
            >
              <h3>Empresa</h3>
              <p className="price">$29 / mes</p>
              <ul className="plan-list">
                <li>Gestión avanzada</li>
                <li>Usuarios ilimitados</li>
                <li>Soporte dedicado</li>
              </ul>

              <Link to="/registro?plan=empresa" className="primary plan-btn">
                Elegir plan
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Precios;