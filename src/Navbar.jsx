export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">Linear Clone</span>
        <a href="#">Características</a>
        <a href="#">Precios</a>
        <a href="#">Documentos</a>
        <a href="#">Blog</a>
      </div>

      <div className="nav-right">
        <a href="#">Iniciar sesión</a>
        <button className="signup">Registrarse</button>
      </div>
    </nav>
  )
}
