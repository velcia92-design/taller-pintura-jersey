# Cómo está hecha la web de SVR

## Archivos que se editan

| Fuente | Página publicada |
|---|---|
| `fuente.html` | `index.html` |
| `services-fuente.html` | `services.html` |
| `car-check-fuente.html` | `car-check.html` |

Edita siempre los `*-fuente.html`. Los `.html` de la raíz se generan.

## Para generar las páginas

```sh
python3 tools/build.py
```

El script copia las fuentes, genera `assets/translations.js` desde los `traducciones-*.json` y comprueba que no falte ninguna imagen ni archivo.

## Carpetas

- `images/` — originales de las fotos (no se tocan).
- `images/web/` — versiones optimizadas que usa la web.
- `fonts/` — Archivo y Source Sans 3, servidas localmente.
- `assets/` — tokens de color, selector de idioma y traducciones.
- `design/og.html` — fuente de la tarjeta para compartir; se exporta a `images/web/og.jpg`.
- `legal.html` — aviso de privacidad, condiciones, cancelación y reclamaciones (en inglés).
- `404.html` — página de error de GitHub Pages.
- `robots.txt` y `sitemap.xml` — para los buscadores. Si cambia el dominio, hay que actualizarlos.
- `.opencode/skills/svr-web/` — sistema de diseño y brief de fotos para la IA.
- `tools/build.py` — compilador.

## Reglas

- No edites `index.html`, `services.html` ni `car-check.html` a mano: se sobrescriben.
- El formulario no tiene servidor: abre WhatsApp (o el correo) con el mensaje preparado.
- Las fotos y los datos entre `[ ]` son de ejemplo. Antes de publicar hay que sustituirlos; la lista está en `PENDIENTE_SVR.md`.

## Fotos: qué archivo sustituye a cada toma

Las fotos nuevas se guardan en `images/` con el mismo nombre y se vuelven a optimizar hacia
`images/web/`. La toma ideal de cada una está en `.opencode/skills/svr-web/references/photo-brief.md`.

| Archivo | Dónde se ve | Orientación |
|---|---|---|
| `hero.jpg` | Fondo de la portada | Horizontal, lado izquierdo despejado |
| `dent.jpg` | Tarjeta «Dents without the respray» | Vertical |
| `bumper.jpg` | Tarjeta «Accident and bumper repair» | Vertical |
| `polish.jpg` | Tarjeta «Polish and protect» | Vertical |
| `workshop.jpg` | Antes/después y óxido | Horizontal |
| `spray.jpg` | Repintado y proceso | Horizontal |
| `closeup.jpg` | Arañazos y proceso | Horizontal |
| `booth.jpg` | Cabina y proceso | Horizontal |
| `buff-red.jpg` | Proceso de pulido | Vertical |
| `blue-garage.jpg` | Demostración antes/después | Vertical |
| `svr-post.jpg` | Tarjeta de Instagram | Cuadrada |
| `logo.jpg` | Cabecera y pie | Cuadrado, fondo oscuro |

Si cambia el tamaño de una foto, hay que actualizar su `width` y `height` en `*-fuente.html`
para que la página no salte al cargar.

## Publicar

La web se sirve desde GitHub Pages: <https://velcia92-design.github.io/taller-pintura-jersey/>

Al unir un cambio a `main`, GitHub genera las páginas y publica la web solo (flujo `.github/workflows/publicar.yml`).
Los archivos generados no se guardan en Git: `index.html`, `services.html`, `car-check.html` y `assets/translations.js`.
Para verlos en tu ordenador, ejecuta `python3 tools/build.py`.

GitHub tarda entre uno y tres minutos en reconstruir el sitio. Si el navegador muestra la versión
antigua, recarga con `Ctrl/Cmd + Shift + R`.

Estado actual: publicado como **maqueta**. Lleva la franja «Mockup», fotos de ejemplo y datos
entre `[ ]`. No es la versión definitiva: antes de darla por buena hay que completar
`PENDIENTE_SVR.md` y quitar la franja.

## Cómo trabajamos en equipo

- Cada persona trabaja en su rama: `cambios-gabriel`, `cambios-vicente`.
- Antes de empezar cada sesión: `git switch main && git pull`, y luego traer los cambios a la rama propia con `git switch <mi-rama> && git merge main`.
- Cambios pequeños y frecuentes. Si dos personas van a tocar el mismo bloque, avisarse antes.
- Se edita solo `*-fuente.html`, los `traducciones-*.json` y las imágenes. Nunca los archivos generados.
- Se sube la propia rama y se abre un Pull Request hacia `main`. Al unirlo, la web se publica sola en 1–3 minutos.
- Nadie hace `git push` directo a `main`.
- **El título del Pull Request dice quién hizo qué, en español simple y sin código.** Ejemplos: «Gabriel agregó el botón verde de Pedir presupuesto», «Vicente cambió las fotos de la página de servicios». Así el correo de aviso se entiende sin abrir nada. Quien use Claude le pide: «escribe el título y la descripción del Pull Request en palabras simples, como si se lo explicaras a alguien que no programa».
