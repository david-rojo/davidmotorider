---
description: Analiza restos de AstroWind y propone una limpieza segura sin borrar automaticamente.
agent: astro-maintainer
---

Analiza restos heredados de AstroWind en DavidMotoRider para este alcance:

`$ARGUMENTS`

Si no se indica alcance, revisa rutas, datos, componentes, assets, navegacion, sitemap/RSS y configuracion.

Objetivo:

- Identificar contenido demo publicado o indexable.
- Detectar rutas duplicadas o ajenas al producto real.
- Separar lo que puede eliminarse, lo que conviene migrar y lo que requiere decision manual.
- Proponer un plan de limpieza en pasos pequenos y verificables.

No borres ni edites ficheros salvo que el usuario lo pida expresamente. Prioriza seguridad SEO y compatibilidad con `npm run build`.
