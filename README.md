# Appsem Store Public

Página pública profesional para Appsem Store, hecha con React + Vite + Firebase Firestore.

## Funciones incluidas

- Página principal con catálogo de apps publicadas.
- Categorías tipo tienda de apps.
- Búsqueda por nombre, descripción o categoría.
- Tarjetas modernas de cada app.
- Página detallada por app: descripción, capturas, información técnica y política individual.
- Me gusta por app.
- Valoración por estrellas.
- Comentarios con moderación: se envían como `approved: false`.
- Conteo de clics de descarga antes de abrir Google Play.
- Páginas legales: privacidad, cookies y términos.
- Configuración para Vercel con rutas SPA.

## Comandos

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
```

## Estructura Firestore esperada

Colección:

```txt
apps
```

Documento ejemplo:

```js
{
  title: "Biblia Universal",
  slug: "biblia-universal",
  category: "Libros y referencias",
  categoryKey: "libros-referencias",
  shortDescription: "Biblia completa con lectura, favoritos y temas bíblicos.",
  fullDescription: "Descripción completa de la app...",
  iconUrl: "https://raw.githubusercontent.com/...",
  bannerUrl: "https://raw.githubusercontent.com/...",
  screenshots: [
    "https://raw.githubusercontent.com/...",
    "https://raw.githubusercontent.com/..."
  ],
  playStoreUrl: "https://play.google.com/store/apps/details?id=com...",
  privacyPolicyUrl: "https://...",
  appSize: "25 MB",
  operatingSystem: "Android",
  minAndroidVersion: "Android 7.0",
  currentVersion: "1.0.0",
  developer: "AppsMart Technology",
  status: "published",
  likesCount: 0,
  downloadsCount: 0,
  ratingAverage: 0,
  ratingCount: 0,
  commentsCount: 0
}
```

Subcolecciones automáticas:

```txt
apps/{appId}/likes
apps/{appId}/ratings
apps/{appId}/comments
apps/{appId}/downloadClicks
```

## Reglas

Copia el contenido de `firestore.rules` en Firebase Console > Firestore Database > Rules.

## Nota de seguridad

Esta versión permite interacciones públicas directamente desde Firestore. Para una protección antifraude más fuerte, lo ideal después será mover likes, descargas y valoraciones a Cloud Functions.
