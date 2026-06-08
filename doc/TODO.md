# Histórico De Cambios

## Done

### Base Y Limpieza

- Eliminado código demo heredado de AstroWind que no formaba parte de DavidMotoRider.
- Eliminadas páginas demo: `about`, `services`, `pricing`, `contact`, `homes`, `landing`.
- Eliminado blog demo heredado: rutas `[...blog]`, contenido `src/data/post`, componentes `src/components/blog` y utilidades asociadas.
- Eliminados widgets y componentes UI de AstroWind sin uso real en el proyecto.
- Eliminada configuración demo heredada del footer que ya no se renderiza.
- Conservada la sección `_escapadas` para futura reutilización.

### Contenido Y Funcionalidades

- Añadido filtro por tags en viajes.
- Añadida sección de escapadas.
- Añadidos metadatos de viajes: días, kilómetros, fecha del viaje y fecha de publicación.
- Mostrados días y kilómetros en cards y páginas individuales.
- Añadida barra separadora blanca de features.
- Añadidas páginas de alojamientos recomendados, Sobre mí, Recursos y 404 personalizada.
- Añadida información de Sobre mí y último recurso en la home.
- Añadido enlace Inicio al menú principal.
- Añadido icono de correo.
- Añadidos estados `draft` y `published` en viajes y recursos.

### Viajes Y Galería

- Mejoradas las páginas de viaje con hero grande, overlay oscuro y título sobre imagen.
- Mejorada la estructura de las páginas de viaje.
- Mejoradas las trip cards.
- Ordenadas las secciones de la página de viaje.
- Añadida galería dinámica mediante frontmatter en los viajes.
- Añadida galería con miniaturas y navegación en grande.
- Añadido soporte para enlaces Markdown externos en los consejos útiles de los viajes, con apertura en nueva pestaña y estilo integrado.
- Añadido soporte para enlaces Markdown internos en los consejos útiles de los viajes usando `BASE_URL`, compatible con GitHub Pages y futuro dominio propio.
- Añadido soporte Markdown básico en los consejos útiles de los viajes: negrita, cursiva, enlaces externos e internos compatibles con GitHub Pages/dominio propio, escapando HTML antes del renderizado.
- Añadido popup de detalle para días del itinerario con tarjetas clicables, CTA `Ver día`, título centrado y descripción justificada.
- Añadido soporte Markdown básico en descripciones del itinerario: negrita, cursiva, enlaces externos e internos compatibles con GitHub Pages/dominio propio, evitando que los guiones bajos en URLs rompan el renderizado.
- Añadido soporte para descripción multipárrafo en viajes mediante `description` como texto o lista, renderizada como párrafos en la página detalle.
- Eliminado `description` de `TripCard` al no mostrarse en las tarjetas de viajes.

### Diseño, Header Y Navegación

- Ajustado menú móvil para usar fondo negro arriba, centro y abajo.
- Activado header fijo al hacer scroll.
- Ajustado el estado scroll del header para mantener estética negra premium.

### README, OpenCode Y Documentación

- Sustituido el README original de AstroWind por uno propio de DavidMotoRider.
- Añadidas badges de CI, deploy, Lighthouse, Astro, Tailwind CSS, TypeScript y GitHub Pages.
- Añadida sección sobre desarrollo asistido por IA con OpenCode y OpenAI.
- Añadido `AGENTS.md` con instrucciones compactas para futuras sesiones OpenCode.

### CI, Deploy Y Lighthouse

- Simplificado CI a Node 22.
- Actualizado `engines.node` a `>=22.12.0`.
- Ajustado deploy de GitHub Pages para construir explícitamente con Node 22 y subir `dist`.
- Añadido workflow manual de Lighthouse sobre la web ya publicada.
- Configurados umbrales Lighthouse para performance, accessibility, best practices y SEO.

### Rendimiento Y Accesibilidad

- Añadidas mejoras de accesibilidad en header, footer y filtros.
- Añadidos `aria-label`, `aria-hidden`, `aria-pressed` y `rel="noopener noreferrer"` donde correspondía.
- Optimizada la imagen hero de la home con versiones WebP para desktop y móvil.
- Añadido `<picture>` con WebP y fallback JPG en la home.

## Discarded

- Formulario de contacto.
- Blog.
