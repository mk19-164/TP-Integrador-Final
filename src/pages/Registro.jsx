import { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="page">
      <main className="hero">
        <h1>Crear cuenta</h1>
        <p>Registrate para empezar a usar Linear</p>

        <div className="feature-card form-card">
          {!enviado ? (
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit" className="primary">
                Registrarse
              </button>
            </form>
          ) : (
            <div className="success">
              <h2>Registro exitoso</h2>
              <p>
                Bienvenido <strong>{nombre}</strong>, tu cuenta fue creada con el
                email <strong>{email}</strong>.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Registro;