PROMPT

Genera un roadmap de implementación en fases.

Fase 1: mejoras rápidas (menos de 1 hora)
Fase 2: mejoras de impacto medio
Fase 3: mejoras importantes
Fase 4: mejoras avanzadas

No implementes todavía.

---

Roadmap

Fase 1: Mejoras Rápidas, Menos De 1 Hora
Objetivo: eliminar riesgos evidentes de SEO, marca y accesibilidad sin tocar arquitectura profunda.

1. Corregir metadatos globales en src/config.yaml.

- Sustituir descripción heredada de AstroWind.
- Revisar título template.
- Definir imagen Open Graph real del proyecto.

2. Verificar y corregir referencias a imágenes críticas.

- hero-davidmotorider.jpg
- sobre-mi.jpg
- sobre-mi-card.jpg
- favicon.ico

3. Añadir textos accesibles básicos.

- aria-label en enlaces solo icono de Instagram.
- aria-label en botones anterior/siguiente de galería.
- title al iframe de Google Maps.
- rel="noopener noreferrer" en enlaces externos con target="\_blank".

4. Corregir HTML inválido en /donde-dormir.

- El iframe tiene dos atributos class.

5. Desactivar o retirar del sitemap las rutas demo más críticas.

- Prioridad: blog demo, landings, homes, pricing, services, contact, about.
- Si no se eliminan aún, marcarlas temporalmente como noindex.

6. Corregir RSS.

- Desactivar RSS si solo apunta al blog demo.
- O dejarlo preparado para viajes/recursos en fases posteriores.

7. Actualizar README.md.

- Quitar branding AstroWind.
- Documentar comandos y despliegue GitHub Pages.

8. Revisar footer/navegación.

- Eliminar referencias demo de footerData.
- Revisar enlaces sociales #.
  Resultado esperado Fase 1
- Menos riesgo de indexación errónea.
- Mejor presentación en Google/social.
- Menos problemas básicos de accesibilidad.
- Sitio más coherente con DavidMotoRider.

  Fase 2: Mejoras De Impacto Medio
  Objetivo: limpiar el proyecto y mejorar Core Web Vitals sin rehacer todo.

1. Eliminar páginas demo heredadas.

- src/pages/about.astro
- src/pages/contact.astro
- src/pages/services.astro
- src/pages/pricing.astro
- src/pages/homes/\*
- src/pages/landing/\*

2. Eliminar blog demo o convertirlo en blog real.

- Opción recomendada inicial: eliminar/desactivar src/pages/[...blog]/_ y src/data/post/_.
- Mantener recursos como sección editorial principal.

3. Resolver duplicados legales.

- Mantener rutas españolas: /aviso-legal, /privacidad, /cookies.
- Retirar /privacy y /terms, o dejarlas con noindex temporal si preocupa compatibilidad.

4. Limpiar assets demo.

- Imágenes de plantilla en src/assets/images.
- Iconos/recursos no usados.
- Documentación demo innecesaria.

5. Optimizar carga de fuentes.

- Sustituir Google Fonts externo por fuente local.
- O usar preconnect y display=swap si se mantiene Google Fonts temporalmente.

6. Optimizar hero y cards.

- Añadir dimensiones a imágenes.
- Priorizar imagen LCP.
- Evitar layout shift.

7. Mejorar filtros de viajes y recursos.

- Añadir aria-pressed.
- Añadir contador de resultados.
- Añadir estado “No hay resultados”.
- Evitar depender solo de color para estado activo.

8. Revisar configuración GitHub Pages.

- Confirmar canonical con /davidmotorider.
- Confirmar sitemap final.
- Revisar site y base.

9. Consolidar workflows.

- Mantener workflow de deploy.
- Mantener checks separados solo si aportan valor.
- Evitar builds duplicados innecesarios en main.

10. Reducir iconos incluidos.

- Evitar tabler: ['*'].
- Declarar solo los iconos usados.
  Resultado esperado Fase 2
- Sitemap limpio.
- Menos código publicado.
- Menor CSS/JS/assets.
- Mejor rendimiento.
- Base más mantenible.

  Fase 3: Mejoras Importantes
  Objetivo: elevar SEO, contenido y UX del sitio real.

1. Añadir datos estructurados JSON-LD.

- WebSite
- Person
- Organization o ProfilePage
- Article para recursos.
- BlogPosting o Article para viajes.
- BreadcrumbList.
- ImageObject cuando aplique.

2. Añadir breadcrumbs visibles.

- Inicio > Viajes > Nombre del viaje.
- Inicio > Recursos > Nombre del recurso.
- Inicio > Dónde dormir.

3. Mejorar páginas de viaje.

- Ficha rápida: país/zona, fechas, km, días, dificultad, tipo de ruta, enlaces GPX/Wikiloc/Maps.
- Índice interno si el contenido es largo.
- Navegación anterior/siguiente.
- Bloque “También te puede interesar”.

4. Crear RSS real.

- Feed de viajes publicados.
- Feed de recursos publicados.
- O feed combinado de novedades.

5. Mejorar Open Graph por página.

- Imagen específica de viaje.
- Imagen específica de recurso.
- og:type adecuado.
- Twitter card coherente.

6. Mejorar /donde-dormir.

- Placeholder estático del mapa.
- Botón “Cargar mapa”.
- Aviso de carga de contenido externo.
- Lista alternativa accesible de alojamientos, aunque sea inicial.

7. Mejorar galería.

- dialog con título accesible.
- Gestión de foco.
- Cierre robusto.
- Navegación accesible con teclado.
- Posible contador “3 de 12”.

8. Migrar imágenes clave a src/assets.

- Usar optimización nativa de Astro.
- Generar tamaños responsive.
- Mantener en public solo lo que deba servirse tal cual.

9. Crear estrategia editorial.

- Diferenciar claramente viajes, recursos y futuras escapadas.
- Definir taxonomía estable de tags.
- Crear interlinking entre recursos y viajes.

10. Mejorar diseño mobile.

- Ajustar tamaños display extremos.
- Revisar ritmo vertical.
- Mejorar legibilidad de textos largos.
- Reducir text-justify en móvil.
  Resultado esperado Fase 3
- SEO mucho más fuerte.
- Experiencia más editorial y útil.
- Mejor accesibilidad real.
- Mejor conversión hacia contenido clave.

  Fase 4: Mejoras Avanzadas
  Objetivo: convertir el sitio en una plataforma personal sólida y escalable.

1. Reducir dependencia de AstroWind.

- Eliminar integración vendor/integration si ya no aporta.
- Sustituir configuración YAML por configuración propia simple.
- Simplificar layouts, metadata y navegación.

2. Auditoría completa de dependencias.

- Eliminar dependencias no usadas.
- Revalidar build/check.
- Medir bundle antes/después.

3. Sistema propio de SEO.

- Metadata nativa en Astro.
- JSON-LD centralizado.
- Generación consistente de canonical.
- Helpers propios para site, base, imágenes y rutas.

4. Optimización avanzada de imágenes.

- Responsive images por breakpoint.
- Blur/placeholder si aporta.
- Galerías optimizadas.
- Revisión de pesos máximos por tipo de imagen.

5. Medición Lighthouse automatizada.

- Añadir Lighthouse CI o PageSpeed manual documentado.
- Presupuestos de rendimiento.
- Revisión periódica de LCP, CLS, INP.

6. Validación SEO automatizada.

- Comprobar sitemap.
- Comprobar canonical.
- Comprobar páginas noindex.
- Comprobar enlaces rotos internos.

7.  Mejorar contenido estructurado de viajes.

- Costes.
- Alojamientos.
- Ferries.
- Documentación.
- Tracks.
- Dificultad.
- Mejor época.
- Equipamiento usado.

8.  Buscador o filtrado avanzado.

- Por país/zona.
- Por duración.
- Por km.
- Por tipo: viaje, escapada, offroad, carretera.
- Sin añadir dependencia si puede resolverse con Astro/JS ligero.

9.  Preparar dominio propio.

- Ajustar site.
- Eliminar base si procede.
- Añadir CNAME.
- Revisar canonical y sitemap tras migración.

10. Internacionalización futura si interesa.

- Mantener español como principal.
- Preparar estructura si se quisiera inglés.
- No implementarlo salvo que haya estrategia clara.

  Orden Recomendado

1. Fase 1 completa.
2. Fase 2 completa antes de crear nuevo contenido, para evitar seguir construyendo sobre plantilla demo.
3. Fase 3 por bloques: primero SEO estructurado, luego UX de viajes, luego mapa/galería.
4. Fase 4 solo cuando el sitio esté limpio, publicado y medido.
   Primera Tanda Recomendada
   Si quieres avanzar con bajo riesgo, empezaría por:
5. Metadatos globales.
6. Imágenes rotas.
7. Accesibilidad básica.
8. Despublicar demo AstroWind.
9. RSS/sitemap limpio.
