import { Link } from "react-router-dom";
import { Download, Heart, Star } from "lucide-react";
import { categoryMap } from "../data/categories";
import RatingStars from "./RatingStars";

const fallbackIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' rx='28' fill='%231e293b'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='34' font-weight='700' fill='white'%3EAS%3C/text%3E%3C/svg%3E";

function formatNumber(value) {
  return new Intl.NumberFormat("es-PE", { notation: Number(value || 0) >= 10000 ? "compact" : "standard" }).format(value || 0);
}

export default function AppCard({ app }) {
  return (
    <article className="app-card">
      <Link to={`/app/${app.slug}`} className="app-card-main" aria-label={`Ver detalles de ${app.title}`}>
        <img className="app-icon" src={app.iconUrl || fallbackIcon} alt={`Icono de ${app.title}`} loading="lazy" />
        <div className="app-card-content">
          <span className="app-category">{categoryMap[app.categoryKey] || app.category || "App"}</span>
          <h3>{app.title}</h3>
          <p>{app.shortDescription || "Aplicación disponible en Appsem Store."}</p>
        </div>
      </Link>

      <div className="app-card-meta">
        <span title="Valoración">
          <Star size={16} fill="currentColor" /> {Number(app.ratingAverage || 0).toFixed(1)}
        </span>
        <span title="Me gusta">
          <Heart size={16} /> {formatNumber(app.likesCount)}
        </span>
        <span title="Clics de descarga">
          <Download size={16} /> {formatNumber(app.downloadsCount)}
        </span>
      </div>

      <div className="app-card-footer">
        <RatingStars value={Math.round(app.ratingAverage || 0)} size={15} />
        <Link className="card-button" to={`/app/${app.slug}`}>Ver detalles</Link>
      </div>
    </article>
  );
}
