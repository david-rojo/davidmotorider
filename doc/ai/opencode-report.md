PROMPT:

Analiza este proyecto Astro completo.

No modifiques ningún fichero todavía.

Quiero un informe detallado con:

1. Arquitectura general del proyecto.
2. Problemas potenciales de SEO.
3. Mejoras para Lighthouse.
4. Mejoras de accesibilidad.
5. Mejoras de diseño y experiencia de usuario.
6. Mejoras específicas para GitHub Pages.
7. Código muerto, duplicado o innecesario.
8. Dependencias que podrían eliminarse.
9. Riesgos técnicos que detectes.
10. Las 20 mejoras ordenadas por impacto y esfuerzo.

No implementes cambios.
Sólo analiza y propone.

---

Voy a inspeccionar la estructura, configuración, dependencias y código fuente en modo solo lectura para preparar el informe sin tocar ningún fichero.

✱Glob "\*_/_" in . (100 matches)
→Read package.json [offset=1, limit=200]
→Read astro.config.mjs [offset=1, limit=200]
→Read tsconfig.json [offset=1, limit=200]

He detectado que el proyecto conserva bastante estructura de plantilla AstroWind y que la configuración real parece estar en astro.config.ts, no en astro.config.mjs. Voy a profundizar en src, workflows, configuración y contenido público.

✱Glob "src/\*_/_" in . (100 matches)
→Read astro.config.ts [offset=1, limit=240]
→Read tailwind.config.js [offset=1, limit=240]
→Read .github/workflows/deploy.yml [offset=1, limit=240]
→Read public/robots.txt [offset=1, limit=120]
→Read README.md [offset=1, limit=200]

La ruta generada incluye páginas de la plantilla que parecen publicarse además del sitio real (about, services, pricing, landings, blog genérico). Voy a revisar layouts, metadatos, navegación y colecciones para distinguir lo usado de lo heredado.

→Read src/config.yaml [offset=1, limit=260]
→Read src/navigation.ts [offset=1, limit=220]
→Read src/layouts/Layout.astro [offset=1, limit=260]
→Read src/layouts/PageLayout.astro [offset=1, limit=260]
→Read src/content/config.ts [offset=1, limit=260]
→Read src/components/common/Metadata.astro [offset=1, limit=260]

Voy a revisar las páginas clave y componentes visibles para evaluar SEO, accesibilidad, rendimiento y UX con referencias concretas.

→Read src/pages/index.astro [offset=1, limit=320]
→Read src/pages/viajes/index.astro [offset=1, limit=260]
→Read src/pages/viajes/[slug].astro [offset=1, limit=360]
→Read src/pages/recursos/index.astro [offset=1, limit=260]
→Read src/pages/recursos/[slug].astro [offset=1, limit=320]
→Read src/pages/sobre-mi/index.astro [offset=1, limit=300]
→Read src/components/trips/TripCard.astro [offset=1, limit=240]
→Read src/components/resources/ResourceCard.astro [offset=1, limit=220]
→Read src/components/widgets/Header.astro [offset=1, limit=280]
→Read src/components/widgets/Footer.astro [offset=1, limit=260]
→Read src/components/common/CommonMeta.astro [offset=1, limit=180]
→Read src/utils/permalinks.ts [offset=1, limit=260]
✱Glob "src/data/\*_/_" in . (6 matches)
✱Grep "@fontsource-variable/inter|astro-embed|unpic|@astrolib/analytics|Splitbee|partytown|mdx|reading-time|js-yaml|tailwind-merge|unist-util-visit|mdast-util-to-string|lodash.merge|AstroSeo" in . (215 matches)
✱Grep "hero-davidmotorider|sobre-mi|favicon|default.png|hero-davidmotorider-vadeo" in src (12 matches)
→Read .github/workflows/actions.yaml [offset=1, limit=220]
→Read netlify.toml [offset=1, limit=160]
→Read vercel.json [offset=1, limit=160]

Hay varios indicios importantes: referencias a imágenes que no aparecen en public, blog demo activo desde src/data/post, workflows duplicados y metadatos heredados de AstroWind. Voy a comprobar build/rutas de salida para confirmar impacto sin modificar el proyecto.

→Read src/data/post/astrowind-template-in-depth.mdx [offset=1, limit=80]
→Read src/pages/donde-dormir/index.astro [offset=1, limit=260]
→Read src/pages/404.astro [offset=1, limit=180]
→Read src/pages/rss.xml.ts [offset=1, limit=220]
→Read src/utils/images.ts [offset=1, limit=240]
→Read src/utils/frontmatter.ts [offset=1, limit=280]

Voy a ejecutar comprobaciones de solo lectura (npm run build y quizá npm run check) para validar errores reales y rutas generadas. Esto no modifica ficheros del repositorio de forma intencional, pero Astro puede usar cachés ya existentes durante el build.

# Builds Astro site for validation in .

$ npm run build

> davidmotorider@1.0.0-beta.52 build
> astro build

00:51:19 [astrowind] Astrowind `./src/config.yaml` has been loaded.
00:51:20 [content] Syncing content
00:51:20 [content] Synced content
00:51:20 [types] Generated 245ms
00:51:20 [build] output: "static"
00:51:20 [build] mode: "static"
00:51:20 [build] directory: /home/dev/data/github/davidmotorider/dist/
…
Click to expand
El build confirma que se publican 46 páginas, incluidas muchas páginas demo de AstroWind y posts de ejemplo, además de rutas legales duplicadas (privacy/privacidad, terms/aviso-legal). Voy a revisar errores de tipos/lint para completar riesgos técnicos.

# Runs Astro, ESLint and Prettier checks in .

$ npm run check

> davidmotorider@1.0.0-beta.52 check
> npm run check:astro && npm run check:eslint && npm run check:prettier

> davidmotorider@1.0.0-beta.52 check:astro
> astro check

00:51:43 [astrowind] Astrowind `./src/config.yaml` has been loaded.
00:51:43 [content] Syncing content
00:51:43 [content] Synced content
…
Click to expand

Informe

Analicé el proyecto en modo solo lectura. Ejecuté npm run build y npm run check; ambos pasan. El build genera 46 páginas, lo cual revela el principal problema: el sitio real convive con muchas rutas demo heredadas de AstroWind.

1. Arquitectura General

El proyecto es un sitio Astro 5 estático con Tailwind CSS, TypeScript y despliegue a GitHub Pages.

Estructura principal:

- astro.config.ts: configuración Astro, site, base, i18n, integraciones, sitemap, MDX, iconos, compresión y plugin local vendor/integration.
- src/config.yaml: configuración de AstroWind: nombre del sitio, base, metadatos globales, blog, analytics y tema.
- src/pages: rutas estáticas y dinámicas.
- src/content/trips: colección de viajes.
- src/content/resources: colección de recursos.
- src/data/post: posts demo heredados de AstroWind.
- src/components: componentes reutilizables, mezcla de componentes propios y de plantilla.
- src/layouts: layout base y layout de página con header/footer.
- public/images: imágenes públicas usadas directamente.
- vendor/integration: integración local de AstroWind.
- .github/workflows: despliegue y checks CI.
  Rutas reales del proyecto:
- /
- /viajes
- /viajes/[slug]
- /recursos
- /recursos/[slug]
- /donde-dormir
- /sobre-mi
- /aviso-legal
- /privacidad
- /cookies
- /404.html

Rutas heredadas que actualmente también se publican:

- /about
- /contact
- /services
- /pricing
- /homes/mobile-app
- /homes/personal
- /homes/saas
- /homes/startup
- /landing/\*
- /blog
- /category/\*
- /tag/\*
- posts demo como /astrowind-template-in-depth
- /privacy
- /terms
  Esto es crítico para SEO y reputación del sitio, porque Google puede indexar contenido demo no relacionado con DavidMotoRider.

2. Problemas Potenciales De SEO

Problemas detectados:

- src/config.yaml:14 tiene una descripción heredada de AstroWind: “Suitable for Startups, Small Business...”. Esto puede aparecer en páginas sin descripción específica, Open Graph y RSS.
- Se publican páginas demo de AstroWind con contenido inglés, lorem ipsum y temáticas ajenas al sitio.
- Se publican posts demo desde src/data/post, incluidos canónicos hacia astrowind.vercel.app, por ejemplo src/data/post/astrowind-template-in-depth.mdx:12.
- El RSS usa el blog demo: src/pages/rss.xml.ts genera feeds con posts de AstroWind, no viajes ni recursos reales.
- El sitemap incluye rutas demo, landings, blog demo, categorías y tags demo.
- public/robots.txt original solo contiene User-agent y Disallow, aunque el build lo actualiza con sitemap mediante AstroWind. Mejor tener un robots.txt final explícito y controlado.
- CommonMeta.astro enlaza sitemap-index.xml, correcto, pero no hay alternates ni metadatos enriquecidos específicos.
- No hay JSON-LD visible para WebSite, Person, BlogPosting, Article, TravelAction, BreadcrumbList o ImageObject.
- Las páginas de viajes no incluyen openGraph.images específicas, por lo que pueden usar imagen por defecto.
- src/config.yaml:21 apunta el OG global a ~/assets/images/default.png, imagen heredada genérica.
- No hay breadcrumbs visibles ni estructurados.
- Algunas páginas legales duplican intención: /privacy y /privacidad, /terms y /aviso-legal.
- Falta una estrategia clara de canonical para páginas demo eliminadas o redirigidas.
- Los títulos usan formato cerrado %s; está bien si se define manualmente, pero reduce consistencia si alguna página olvida | DavidMotoRider.
- El contenido principal real aún es escaso frente al volumen de contenido demo, lo que diluye topical authority.
- Imágenes en public no pasan por optimización Astro, lo que afecta Core Web Vitals y previews.
- Posible referencia rota en home: src/pages/index.astro:12 usa /images/hero-davidmotorider.jpg, pero en el listado aparece hero-davidmotorider-vadeo.jpg, no hero-davidmotorider.jpg.
- Posibles referencias rotas: sobre-mi.jpg, sobre-mi-card.jpg, favicon.ico no aparecen en el listado inicial de public/images.
- La página /donde-dormir embebe Google Maps, lo que puede afectar rendimiento e indexabilidad.
- Las páginas dinámicas de viajes filtran status === 'published', correcto, pero el índice de viajes solo muestra type === 'viaje'; las escapadas están ocultas pero existen contenidos tipo escapada.

3. Mejoras Para Lighthouse

Prioridades:

- Eliminar páginas demo para reducir HTML generado, CSS usado potencialmente y sitemap contaminado.
- Optimizar imágenes principales: hero, cards, galería, mapas e itinerarios.
- Usar astro:assets o componente Image donde sea posible en vez de <img src="/images/...">.
- Añadir width y height a imágenes para reducir CLS.
- No lazy-load de imagen LCP. En home, el hero debería usar carga prioritaria o al menos no loading="lazy"; actualmente no tiene lazy, pero tampoco dimensiones ni preload.
- Preload de imagen hero o uso de fetchpriority="high".
- Evitar Google Fonts externas en src/layouts/Layout.astro:38; usar fuentes locales o @fontsource si se mantiene.
- Ahora @fontsource-variable/inter está instalado pero no se ve usado.
- Reducir JavaScript inline duplicado para filtros en viajes y recursos.
- Añadir estados ARIA sin reescribir clases desde JS, evitando cambios difíciles de mantener.
- Diferir Google Maps en /donde-dormir; usar placeholder estático con botón “Cargar mapa”.
- Revisar astro-compress: útil, pero GitHub Pages ya sirve estáticos sin Brotli/Gzip propio; la compresión HTML ayuda poco si GitHub aplica compresión HTTP.
- Revisar si astro-icon importa demasiados iconos: en config se incluyen todos los Tabler '\*'.
- Evitar generar y optimizar imágenes demo del template.
- Limpiar assets demo de src/assets/images.
- Añadir font-display: swap si se mantienen Google Fonts.
- Auditar imágenes públicas por peso y dimensiones.
- Asegurar cache headers no controlables en GitHub Pages; nombres hash de \_astro ya ayudan.
- Añadir PWA/manifest solo si aporta, no por defecto.
- Minimizar CSS eliminando componentes y páginas no usadas.
- Revisar contraste real con Lighthouse/Axe tras eliminar demo.

4. Mejoras De Accesibilidad

Problemas y mejoras:

- Header.astro:151 enlace de Instagram solo tiene icono sin aria-label.
- Footer.astro:27 enlace de Instagram solo icono sin aria-label.
- Footer.astro:36 enlace de Wikiloc con imagen alt="Wikiloc" dentro de enlace; aceptable, pero mejor aria-label.
- Footer.astro:77 y Footer.astro:87 usan target="\_blank" sin rel="noopener noreferrer".
- Filtros de viajes y recursos son botones visuales, pero no actualizan aria-pressed.
- Ordenación de viajes no comunica estado activo con aria-pressed o texto.
- Galería en viajes/[slug].astro: botones anterior/siguiente usan solo símbolos ‹ y › sin aria-label.
- Botones de miniaturas de galería no tienen nombre accesible propio; contienen imagen con alt, puede valer, pero mejor aria-label="Abrir imagen: ..." .
- Dialog de galería no tiene aria-labelledby ni título semántico.
- Falta gestión de foco al abrir/cerrar galería.
- No hay enlace “Saltar al contenido”.
- Algunos textos justificados (text-justify) pueden dificultar lectura, especialmente móvil.
- Tracking muy amplio y fuentes display en textos pequeños pueden afectar legibilidad.
- Contraste de text-zinc-400 sobre negro suele ser aceptable, pero conviene verificar en botones y enlaces secundarios.
- Indicadores de foco dependen del navegador; faltan estilos focus-visible claros y de marca.
- Header móvil depende de ToggleMenu; habría que verificar si expone aria-expanded, aria-controls y nombre accesible.
- En /donde-dormir, el iframe no tiene title.
- El iframe tiene doble atributo class, lo que es un defecto HTML.
- Iconos decorativos deberían tener aria-hidden="true" si no aportan contenido.
- Las animaciones/hover scale no consideran prefers-reduced-motion.
- El logo debe revisarse para confirmar que enlaza al inicio y tiene nombre accesible.

5. Mejoras De Diseño Y UX

El diseño propio tiene una dirección clara: negro, rojo, tipografía display, estilo motociclista. Es coherente con BMW/Mosko/Klim, pero necesita pulido.
Mejoras:

- Eliminar por completo estética AstroWind en rutas demo para que no se mezcle con marca personal.
- Mejorar home con una propuesta de valor más específica: “rutas GPX, hoteles con parking, itinerarios reales, costes, consejos”.
- Añadir cards con métricas reales: países, km, días, rutas, tracks.
- Añadir CTA directo a Instagram/Wikiloc en hero o bloque social.
- Añadir sección “Empieza por aquí” para usuarios nuevos.
- Añadir breadcrumbs en viajes y recursos.
- Añadir navegación anterior/siguiente entre viajes.
- Añadir índice de contenidos en páginas largas de viaje.
- Añadir ficha resumen en viajes: fechas, dificultad, asfalto/offroad, presupuesto, alojamiento, ferries, documentación.
- Añadir mapa o timeline más visual para itinerarios.
- En mobile, reducir tamaños extremos como text-6xl si producen saltos o líneas incómodas.
- Mejorar los filtros: estado activo, contador de resultados, opción “sin resultados”.
- Hacer los filtros persistentes en URL (?tag=...) para compartir vistas.
- En /donde-dormir, no cargar Google Maps directamente; mostrar explicación y botón.
- Añadir página de contacto real o eliminar /contact demo.
- Añadir más contenido a recursos para equilibrar el sitio.
- Revisar copy: hay algún texto con puntuación mejorable, por ejemplo “kasbahs...alojamientos” sin espacio.
- En las cards, el texto “Ver viaje” solo aparece en hover; en táctil puede no verse. Mejor visible siempre o con alternativa.
- Añadir estados hover/focus consistentes.
- Añadir footer más orientado a moto: rutas, viajes, recursos, contacto, redes.

6. Mejoras Específicas Para GitHub Pages

Configuración actual:

- astro.config.ts:25: site: 'https://david-rojo.github.io'
- astro.config.ts:26: base: '/davidmotorider'
- src/config.yaml:3: site: 'https://david-rojo.github.io/davidmotorider'
- src/config.yaml:4: base: '/davidmotorider'

Esto funciona, pero hay riesgo de inconsistencia: Astro site no incluye base, mientras src/config.yaml sí lo incluye. Según Astro, site suele ser origen y base el subpath. AstroWind puede esperar SITE.site con base completa. Conviene unificar criterio y comprobar canonical final generado.

Mejoras:

- Validar que todos los canonical finales incluyen /davidmotorider.
- Confirmar que sitemap-index.xml lista URLs con /davidmotorider.
- Mantener base: '/davidmotorider' mientras sea repo project page.
- Evitar rutas absolutas manuales; usar helpers consistentes.
- No depender de netlify.toml ni vercel.json para GitHub Pages.
- Eliminar o archivar configs de Netlify/Vercel si no se usan.
- GitHub Pages no permite headers personalizados como Netlify/Vercel; no asumir cache headers propios.
- Añadir .nojekyll si hiciera falta conservar carpetas con \_, aunque actions/deploy-pages normalmente lo gestiona.
- Revisar 404: GitHub Pages usará /404.html; Astro lo genera.
- Revisar enlaces con trailing slash: config actual trailingSlash: false en YAML, Astro build genera directorios index.html; externo funciona, pero canonical debe ser sin slash.
- Workflow deploy.yml usa withastro/action@v6, correcto.
- Hay dos workflows que corren en main: deploy.yml y actions.yaml; puede duplicar builds.
- actions.yaml prueba Node 18/20/22; útil pero costoso. El deploy usa lo que configure withastro/action.
- Añadir npm ci explícito no es necesario con withastro/action, pero se puede controlar Node si se quiere reproducibilidad.
- Revisar site si se migra a dominio propio.

7. Código Muerto, Duplicado O Innecesario

Candidatos claros:

- src/pages/about.astro
- src/pages/contact.astro
- src/pages/services.astro
- src/pages/pricing.astro
- src/pages/homes/\*
- src/pages/landing/\*
- src/pages/[...blog]/\*
- src/data/post/\*
- src/pages/privacy.md
- src/pages/terms.md
- Muchos componentes src/components/widgets/\* no usados por el sitio real.
- Componentes de blog src/components/blog/\* si se elimina el blog demo.
- Assets demo en src/assets/images/\*.
- README.md sigue siendo README de AstroWind.
- vendor/README.md e integración AstroWind pueden ser innecesarios si se migra a configuración nativa.
- sandbox.config.json, .stackblitzrc, Dockerfile, nginx/nginx.conf probablemente son herencia de plantilla.
- netlify.toml, vercel.json si el único despliegue es GitHub Pages.
- .vscode/astrowind/config-schema.json si se abandona AstroWind.
- doc/canvas.png y docs heredados si no forman parte del proyecto.
- Comentarios de código como “disable escapadas” repetidos.
- footerData en src/navigation.ts contiene enlaces demo, pero el Footer actual no usa esas props.
- showRssFeed showToggleTheme se pasan al Header, pero el Header actual no parece usarlos.
- hasExternalScripts = false deja Partytown instalado/configurado pero inactivo.
- @fontsource-variable/inter instalado pero aparentemente no usado.
- CommonMeta.astro mínimo; Favicons.astro existe pero no se usa.
- Filtros JS de recursos y viajes duplican lógica muy similar.
- Doble class en iframe de /donde-dormir.

8. Dependencias Que Podrían Eliminarse

Depende de si se mantiene AstroWind y blog MDX. Si se limpia la plantilla, candidatas:

- astro-embed: no aparece usado.
- @astrolib/analytics: no parece usado directamente; analytics actual viene por componentes de plantilla y config con GA null.
- @astrojs/partytown: inactivo por hasExternalScripts = false.
- @fontsource-variable/inter: instalado pero no usado.
- unpic: usado por utilidades de imágenes heredadas; podría eliminarse si se simplifica SEO/OG o se usa Astro Assets nativo.
- lodash.merge: usado solo en Metadata.astro; se podría sustituir por merge manual simple.
- @astrojs/mdx: necesario solo si se mantienen .mdx. Actualmente posts demo usan .mdx; viajes/recursos parecen .md. Si se eliminan MDX, sobra.
- astro-compress: opcional; revisar beneficio real en GitHub Pages.
- @iconify-json/flat-color-icons: probablemente solo usado por páginas demo.
- @types/mdx: si se elimina MDX.
- js-yaml y @types/js-yaml: probablemente usados por integración AstroWind local.
- reading-time: solo si se elimina blog/reading time.
- mdast-util-to-string: solo por reading time.
- unist-util-visit: solo por plugin de lazy images, puede mantenerse si se siguen usando Markdown con imágenes.
- tailwind-merge: revisar uso; no apareció en las búsquedas iniciales fuera de lock/config.
- @types/lodash.merge: si se elimina lodash.merge.

No eliminaría sin más:

- @astrojs/rss: si se decide crear RSS real de viajes/recursos.
- @astrojs/sitemap: muy útil.
- astro-icon: usado en Header/Footer/home.
- sharp: útil para optimización de imágenes Astro.
- @tailwindcss/typography: usado en páginas con prose.

9. Riesgos Técnicos

Riesgos principales:

- Alto riesgo SEO por indexación de contenido demo.
- Riesgo de marca: el README, posts, rutas y footerData conservan referencias AstroWind/Arthelokyo.
- Riesgo de URLs canónicas incorrectas por mezcla site con base.
- Riesgo de imágenes rotas en home/sobre mí/favicon por referencias no confirmadas en public.
- Riesgo de publicar rutas no deseadas en sitemap.
- Riesgo de dependencias innecesarias y superficie de mantenimiento grande.
- Riesgo de accesibilidad por controles sin labels/ARIA.
- Riesgo de rendimiento por Google Maps embebido y Google Fonts externas.
- Riesgo de CLS por imágenes sin dimensiones.
- Riesgo de LCP pobre por hero no optimizado.
- Riesgo de mantenimiento por convivir código propio con plantilla completa.
- Riesgo legal/UX por duplicar páginas legales en inglés/español.
- Riesgo CI por workflows duplicados en main.
- Riesgo de GitHub Pages por rutas/base si se cambia dominio o repositorio.
- Riesgo de contenido: recursos/viajes tienen buena base, pero faltan estructuras de datos, breadcrumbs y más interlinking.
- Riesgo de JS inline poco escalable.
- Riesgo de accesibilidad en dialog de galería.
- Riesgo de mapas externos con privacidad/cookies si no hay consentimiento o explicación.
- Riesgo de iconos excesivos por incluir tabler: ['*'].
- Riesgo de que futuras mejoras se hagan sobre capas heredadas innecesarias.

10. Las 20 Mejoras Ordenadas Por Impacto Y Esfuerzo

# Mejora

1. Eliminar/despublicar páginas demo AstroWind y posts demo
2. Limpiar sitemap/RSS para que solo incluya contenido real
3. Cambiar metadatos globales heredados en src/config.yaml
4. Corregir posibles imágenes rotas de home, sobre mí y favicon
5. Añadir Open Graph específico por viaje/recurso
6. Añadir JSON-LD básico: WebSite, Person, Article, BreadcrumbList
7. Optimizar imágenes con astro:assets, width/height y formatos modernos
8. Mejorar LCP del hero con imagen optimizada/preload/fetchpriority
9. Sustituir Google Fonts externas por fuentes locales o self-hosted
10. Hacer lazy-load del mapa de Google con placeholder
11. Añadir labels/ARIA a icon links, galería, filtros e iframe
12. Añadir estilos focus-visible consistentes
13. Unificar canonical/base para GitHub Pages y verificar URLs finales
14. Eliminar rutas legales duplicadas /privacy y /terms o marcarlas noindex/redirigir
15. Reducir dependencias heredadas no usadas
16. Reducir iconos importados: evitar tabler: ['*']
17. Consolidar workflows de GitHub Actions
18. Mejorar UX de filtros con aria-pressed, contador y estado vacío
19. Añadir breadcrumbs y navegación entre viajes/recursos
20. Reescribir README como documentación real del proyecto

Conclusión

El proyecto compila y pasa checks, pero está en una fase híbrida: el sitio DavidMotoRider ya tiene páginas propias sólidas, mientras conserva gran parte de AstroWind publicada. La prioridad absoluta debería ser limpiar lo heredado que llega a producción, corregir metadatos globales e imágenes, y después atacar rendimiento/accesibilidad.
