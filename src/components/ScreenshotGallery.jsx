export default function ScreenshotGallery({ screenshots = [], title = "App" }) {
  if (!screenshots.length) {
    return (
      <div className="screenshots-empty">
        <p>Aún no hay capturas de pantalla disponibles.</p>
      </div>
    );
  }

  return (
    <div className="screenshots-row" aria-label={`Capturas de pantalla de ${title}`}>
      {screenshots.map((url, index) => (
        <a href={url} target="_blank" rel="noreferrer" className="screenshot-frame" key={`${url}-${index}`}>
          <img src={url} alt={`Captura ${index + 1} de ${title}`} loading="lazy" />
        </a>
      ))}
    </div>
  );
}
