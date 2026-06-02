# 🏍️ DavidMotoRider

[![Deploy to GitHub Pages](https://github.com/david-rojo/davidmotorider/actions/workflows/deploy.yml/badge.svg)](https://github.com/david-rojo/davidmotorider/actions/workflows/deploy.yml)
[![GitHub Actions](https://github.com/david-rojo/davidmotorider/actions/workflows/actions.yaml/badge.svg)](https://github.com/david-rojo/davidmotorider/actions/workflows/actions.yaml)
[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-publicado-222222?logo=githubpages&logoColor=white)](https://david-rojo.github.io/davidmotorider/)

Web personal sobre viajes en moto trail, rutas, recursos y experiencias desde Madrid.

Sitio publicado: <https://david-rojo.github.io/davidmotorider/>

## 🗺️ Sobre El Proyecto

DavidMotoRider es una web personal en español dedicada a viajes en moto, rutas trail, recursos prácticos y preparación de aventuras.

El contenido principal gira en torno a:

- Viajes en moto
- Rutas desde Madrid
- Destinos nacionales como Picos de Europa
- Destinos internacionales como Marruecos, Transpirenaica
- Equipamiento trail
- BMW F850GS

## ⚙️ Stack

- Astro 5.
- Tailwind CSS.
- TypeScript.
- Markdown/MDX para contenido.
- GitHub Pages con salida estática.

## 📁 Estructura Principal

- `src/pages/index.astro`: portada.
- `src/pages/viajes`: listado y detalle de viajes.
- `src/pages/recursos`: listado y detalle de recursos.
- `src/pages/donde-dormir`: recomendaciones de alojamiento.
- `src/pages/sobre-mi`: página personal.
- `src/content/trips`: contenido de viajes.
- `src/content/resources`: contenido de recursos.
- `public/images`: imágenes públicas del sitio.

## 🧰 Desarrollo

Instalar dependencias:

```bash
npm ci
```

Arrancar entorno local:

```bash
npm run dev
```

Verificar el proyecto:

```bash
npm run check
```

Generar build estático:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```

## ✅ Calidad

La verificación completa ejecuta:

- `astro check`.
- `eslint .`.
- `prettier --check .`.

Para aplicar arreglos automáticos:

```bash
npm run fix
```

## 🚀 Despliegue

El proyecto está configurado para GitHub Pages en `astro.config.ts`:

- `site: https://david-rojo.github.io`.
- `base: /davidmotorider`.
- `output: static`.

La publicación se realiza mediante GitHub Actions al hacer push a `main`.

## 🔗 Nota Sobre Rutas

Usar `import.meta.env.BASE_URL` o utilidades internas para rutas y assets, ya que el sitio se sirve bajo `/davidmotorider`.
