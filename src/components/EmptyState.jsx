import { SearchX } from "lucide-react";

export default function EmptyState({ title = "No hay apps disponibles", message = "Cuando publiques apps desde el panel admin aparecerán aquí automáticamente." }) {
  return (
    <div className="empty-state">
      <SearchX size={38} />
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
