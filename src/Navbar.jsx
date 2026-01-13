import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo" onClick={closeMenu}>
          Linear
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <div className={`nav-right ${open ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Producto
        </Link>

        <Link to="/precios" onClick={closeMenu}>
          Precios
        </Link>

        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>

        <Link to="/registro" className="signup" onClick={closeMenu}>
          Registrarse
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
