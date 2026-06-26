import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";

export default function NotFound() {
  return (
    <main className="container page-pad">
      <EmptyState title="Página no encontrada" message="La dirección no existe dentro de Appsem Store." />
      <Link className="primary-button inline-button" to="/">Volver al inicio</Link>
    </main>
  );
}
