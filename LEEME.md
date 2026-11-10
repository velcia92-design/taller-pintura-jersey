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
- `.opencode/skills/svr-web/` — sistema de diseño y brief de fotos para la IA.
- `tools/build.py` — compilador.

## Reglas

- No edites `index.html`, `services.html` ni `car-check.html` a mano: se sobrescriben.
- El formulario no tiene servidor: abre WhatsApp (o el correo) con el mensaje preparado.
- Las fotos y los datos entre `[ ]` son de ejemplo. Antes de publicar hay que sustituirlos; la lista está en `PENDIENTE_SVR.md`.
- La web está en GitHub Pages: <https://velcia92-design.github.io/taller-pintura-jersey/>. No se publica nada nuevo hasta que el dueño lo pida.
