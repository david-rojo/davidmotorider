# Roadmap

## Prioridad 1: Cerrar Web Visual

- Revisar home en desktop y móvil.
- Revisar header fijo y menú móvil.
- Revisar páginas principales: `viajes`, `recursos`, `donde-dormir`, `sobre-mi`.
- Añadir sección Mis motos.
- Optimizar imágenes de viajes, recursos y galerías.
- Mejorar accesibilidad de la galería: foco, navegación por teclado y etiquetas ARIA.

## Completado: Dominio Propio Y Analítica

- Configurado dominio propio `https://davidmotorider.com` sobre GitHub Pages.
- Actualizados `astro.config.ts` y `src/config.yaml` con `site: https://davidmotorider.com` y `base: /`.
- Añadido `public/CNAME` para mantener el dominio personalizado en el despliegue.
- Revisadas y ajustadas rutas internas/assets con `withBase()` para evitar enlaces e imágenes rotas con `base: '/'`.
- Actualizado workflow de Lighthouse para auditar el dominio propio.
- Configurado Google Analytics 4 con Google Consent Mode v2 y consentimiento previo mediante banner de cookies.
- Actualizada la política de cookies para reflejar el uso de analítica.

## Prioridad 2: Indexación

- Configurar Google Search Console.
- Validar sitemap generado.
- Revisar `robots.txt`.
- Solicitar indexación de páginas principales.

## Prioridad 3: SEO Y Contenido

- Revisar metadata global en `src/config.yaml`.
- Mejorar títulos y descripciones de páginas principales.
- Añadir más recursos útiles.
- Completar contenido de viajes publicados.
- Revisar enlazado interno entre viajes, recursos y páginas principales.

## Prioridad 4: Calidad Continua

- Ejecutar Lighthouse manual tras cambios importantes.
- Mantener `npm run check` y `npm run build` antes de publicar.
- Revisar warnings de performance en `/viajes/` y `/recursos/`.
