# Roadmap

## Prioridad 1: Cerrar Web Visual

- Revisar home en desktop y móvil.
- Revisar header fijo y menú móvil.
- Revisar páginas principales: `viajes`, `recursos`, `donde-dormir`, `sobre-mi`.
- Añadir sección Mis motos.
- Optimizar imágenes de viajes, recursos y galerías.
- Mejorar accesibilidad de la galería: foco, navegación por teclado y etiquetas ARIA.

## Prioridad 2: Dominio Propio

- Comprar o configurar `davidmotorider.com`.
- Configurar DNS para GitHub Pages.
- Configurar dominio custom en GitHub Pages.
- Actualizar `astro.config.ts`: mantener `site` en `https://davidmotorider.com` y `base: '/'`.
- Revisar todas las rutas internas y assets tras quitar `base`.

## Prioridad 3: Analítica E Indexación

- Configurar Google Search Console.
- Configurar Google Analytics 4 si se decide medir tráfico.
- Validar sitemap generado.
- Revisar `robots.txt`.
- Solicitar indexación de páginas principales.

## Prioridad 4: SEO Y Contenido

- Revisar metadata global en `src/config.yaml`.
- Mejorar títulos y descripciones de páginas principales.
- Añadir más recursos útiles.
- Completar contenido de viajes publicados.
- Revisar enlazado interno entre viajes, recursos y páginas principales.

## Prioridad 5: Calidad Continua

- Ejecutar Lighthouse manual tras cambios importantes.
- Mantener `npm run check` y `npm run build` antes de publicar.
- Revisar warnings de performance en `/viajes/` y `/recursos/`.
