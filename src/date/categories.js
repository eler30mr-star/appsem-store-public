export const categories = [
  { label: "Todas", key: "all" },
  { label: "Educación", key: "educacion" },
  { label: "Herramientas", key: "herramientas" },
  { label: "Libros y referencias", key: "libros-referencias" },
  { label: "Productividad", key: "productividad" },
  { label: "Cristianas", key: "cristianas" },
  { label: "Finanzas", key: "finanzas" },
  { label: "Salud y bienestar", key: "salud-bienestar" },
  { label: "Personalización", key: "personalizacion" },
  { label: "Música y audio", key: "musica-audio" },
  { label: "Noticias", key: "noticias" },
  { label: "Entretenimiento", key: "entretenimiento" },
  { label: "Juegos", key: "juegos" }
];

export const categoryMap = categories.reduce((acc, item) => {
  acc[item.key] = item.label;
  return acc;
}, {});
