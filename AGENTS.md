# DavidMotorider

## Contexto

- Trabajar en español de España.
- Web personal de viajes en moto trail en español: viajes, rutas, equipamiento, BMW F850GS, Madrid, Picos de Europa, Transpirenaica y Marruecos.
- Estética objetivo: adventure motorcycle premium, inspiración BMW Motorrad/Klim/Shoei/Arai/Mosko Moto/Rev'It/Long Way Round; paleta rojo, negro y blanco.
- Priorizar SEO, rendimiento, accesibilidad, mobile first y Lighthouse alto.

## Stack y Deploy

- Astro 5 + Tailwind CSS + TypeScript, con salida estática para GitHub Pages.
- `astro.config.ts` fija `site: 'https://david-rojo.github.io'`, `base: '/davidmotorider'`, `output: 'static'` e i18n solo `es`.
- Usar `import.meta.env.BASE_URL` o utilidades existentes para URLs internas/assets; no hardcodear `/` porque rompe GitHub Pages.
- La configuración SEO/global vive en `src/config.yaml` y la consume la integración local `vendor/integration`.

## Comandos

- Instalar con `npm ci` desde `package-lock.json`.
- Desarrollo: `npm run dev`.
- Verificación completa: `npm run check` ejecuta `astro check`, `eslint .` y `prettier --check .`.
- Build: `npm run build`.
- Arreglos automáticos: `npm run fix`, o enfocado `npm run fix:eslint` / `npm run fix:prettier`.
- No hay suite de tests configurada; CI valida `npm run build` en Node 18/20/22 y `npm run check` en Node 22.

## Estructura Importante

- Páginas reales personalizadas: `src/pages/index.astro`, `src/pages/viajes`, `src/pages/recursos`, `src/pages/donde-dormir`, `src/pages/sobre-mi`.
- Quedan páginas demo de AstroWind (`about`, `services`, `pricing`, `landing`, `homes`, blog demo); no tratarlas como producto final sin revisar.
- Navegación principal y footer: `src/navigation.ts`; puede contener contenido placeholder de AstroWind.
- Layouts principales: `src/layouts/PageLayout.astro` y `src/layouts/Layout.astro`.
- Alias `~/*` apunta a `src/*`.

## Contenido

- Colecciones Astro en `src/content/config.ts`.
- Viajes: `src/content/trips/*.md`, colección `trips`, ruta `src/pages/viajes/[slug].astro`; solo se publican entradas con `status: published`.
- Recursos: `src/content/resources/*.md`, colección `resources`, ruta `src/pages/recursos/[slug].astro`; solo se publican entradas con `status: published`.
- Blog AstroWind heredado usa `src/data/post`; no mezclarlo con `trips`/`resources` salvo intención explícita.
- Las imágenes de contenido suelen referenciarse como rutas públicas y se renderizan con `${import.meta.env.BASE_URL}${...}`.

## Reglas De Trabajo

- Priorizar Astro nativo antes que añadir dependencias; justificar cualquier paquete npm nuevo.
- Revisar `astro.config.ts`, `package.json`, `src/config.yaml`, `src/navigation.ts`, layouts y colecciones antes de cambios globales.
- No modificar secretos ni configuraciones sensibles.
- No ejecutar `git push` ni crear commits automáticamente.
- Preguntar antes de cambios destructivos o refactorizaciones grandes.
