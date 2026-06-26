import { useEffect, useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import AppCard from "../components/AppCard";
import CategoryTabs from "../components/CategoryTabs";
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import { categoryMap } from "../data/categories";
import { getPublishedApps } from "../services/appsService";

export default function Home() {
  const [apps, setApps] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function loadApps() {
      setLoading(true);
      setError("");
      try {
        const data = await getPublishedApps();
        if (alive) setApps(data);
      } catch (err) {
        console.error(err);
        if (alive) setError("No se pudieron cargar las apps. Revisa Firebase y las reglas de Firestore.");
      } finally {
        if (alive) setLoading(false);
      }
    }

    loadApps();
    return () => {
      alive = false;
    };
  }, []);

  const filteredApps = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return apps.filter((app) => {
      const byCategory = activeCategory === "all" || app.categoryKey === activeCategory;
      const byText = !term || [app.title, app.shortDescription, app.fullDescription, app.category]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(term));
      return byCategory && byText;
    });
  }, [apps, activeCategory, searchTerm]);

  const title = activeCategory === "all" ? "Todas las apps disponibles" : categoryMap[activeCategory];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge"><Sparkles size={16} /> Tienda oficial</span>
            <h1>Apps Android organizadas, modernas y listas para descargar.</h1>
            <p>
              Explora el catálogo público de Appsem Store. Cada app cuenta con ficha completa,
              capturas, valoración, comentarios, me gusta y acceso directo a Google Play.
            </p>
            <div className="hero-search" role="search">
              <Search size={20} />
              <input
                aria-label="Buscar apps"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Buscar una app..."
                type="search"
                value={searchTerm}
              />
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="floating-card one">
              <span>⭐ 4.8</span>
              <strong>Valoraciones reales</strong>
            </div>
            <div className="phone-preview">
              <div className="phone-top" />
              <div className="phone-app-row" />
              <div className="phone-app-row small" />
              <div className="phone-screens" />
              <div className="phone-button" />
            </div>
            <div className="floating-card two">
              <span>⬇️</span>
              <strong>Clics hacia Play Store</strong>
            </div>
          </div>
        </div>
      </section>

      <CategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />

      <main className="container catalog-section">
        <div className="catalog-heading">
          <div>
            <span className="eyebrow">Catálogo</span>
            <h2>{title}</h2>
          </div>
          <p>{filteredApps.length} app{filteredApps.length === 1 ? "" : "s"}</p>
        </div>

        {loading ? <LoadingState text="Cargando apps publicadas..." /> : null}
        {error ? <div className="error-box">{error}</div> : null}

        {!loading && !error && filteredApps.length > 0 ? (
          <div className="apps-grid">
            {filteredApps.map((app) => <AppCard app={app} key={app.id} />)}
          </div>
        ) : null}

        {!loading && !error && filteredApps.length === 0 ? (
          <EmptyState
            title={apps.length ? "No hay apps en esta categoría" : "Aún no hay apps publicadas"}
            message={apps.length ? "Prueba con otra categoría o limpia la búsqueda." : "Cuando publiques apps desde el panel admin aparecerán aquí automáticamente."}
          />
        ) : null}
      </main>
    </>
  );
}
