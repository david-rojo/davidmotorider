# HOWTO ENABLE ESCAPADAS

Ahora al intentar acceder a /escapadas se está devolviendo 404

- Renombrar carpeta `src/pages/_escapadas` a `src/pages/escapadas` En astro, las carpetas precedidas de \_ no generan página

- Buscar `disable escapadas` y descomentar código:
  - en `src/navigation.ts`
  - en `src/pages/index.astro`
