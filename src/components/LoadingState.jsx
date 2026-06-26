export default function LoadingState({ text = "Cargando contenido..." }) {
  return (
    <div className="loading-state">
      <span className="loader" />
      <p>{text}</p>
    </div>
  );
}
