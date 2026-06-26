import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Appsem Store</h3>
          <p>
            Catálogo público de aplicaciones Android de AppsMart Technology. Una tienda limpia,
            directa y enfocada únicamente en apps disponibles.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Política de privacidad</Link>
          <Link to="/cookies">Política de cookies</Link>
          <Link to="/terms">Términos y condiciones</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Appsem Store. Todos los derechos reservados.
      </div>
    </footer>
  );
}
