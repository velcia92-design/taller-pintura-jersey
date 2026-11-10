# Brief para Figma · SVR

Objetivo: tener en Figma la misma web que ya existe en código, con una librería de componentes
y variables. Figma es el espejo visual; la fuente de verdad sigue siendo `*-fuente.html`.

## Estado (2026-11-10)

- Archivo: [SVR – Website](https://www.figma.com/design/X5rmF2hzi1NnMhyeKqSHaz)
- Páginas creadas: `00 Foundations`, `01 Components`, `02 Pages`.
- Hecho: 27 variables (color, espacio, radio), 8 estilos de texto, botón con 3 variantes,
  cabecera, barra de confianza y tarjeta de servicio.
- Pendiente: Home, Services y Car Check en 1440 y 390; imágenes reales; FAQ, formulario y footer.
- Bloqueo: el plan Starter de Figma agotó el límite de llamadas MCP. Para seguir hay que
  esperar al reinicio del límite o subir de plan.

## Archivo

Un archivo **SVR – Website** con tres páginas:

1. `00 Foundations` — variables, estilos de texto, spacing y grid.
2. `01 Components` — botones, cabecera, tarjetas, proceso, antes/después, formulario, footer.
3. `02 Pages` — Home, Services y Car Check en 1440 y 390.

## Variables de color (semánticas)

| Variable | Valor | Uso |
|---|---|---|
| `color/surface/base` | `#f3f2f0` | Fondo claro |
| `color/surface/dark` | `#08090b` | Fondo oscuro |
| `color/surface/panel` | `#15181e` | Tarjetas sobre oscuro |
| `color/surface/deep` | `#0f2f57` | Seguros/contacto |
| `color/surface/soft` | `#e2ebf5` | Sección suave |
| `color/action` | `#0a6fe0` | Botón y enlace |
| `color/action-hover` | `#0858b8` | Hover |
| `color/text/primary` | `#08090b` | Texto sobre claro |
| `color/text/on-dark` | `#ffffff` | Texto sobre oscuro |
| `color/text/muted` | `#4d5560` | Secundario sobre claro |
| `color/text/muted-dark` | `#8b97a8` | Secundario sobre oscuro |
| `color/text/price` | `#6db3ff` | Precio/acento sobre oscuro |
| `color/border` | `#d9dde3` | Bordes |
| `color/status/ok` | `#3aa76d` | Solo medidor |
| `color/status/warn` | `#e0a526` | Solo medidor |
| `color/status/bad` | `#e0563b` | Solo medidor |

## Estilos de texto

| Estilo | Fuente | Tamaño / línea | Peso |
|---|---|---|---|
| Display/Hero | Archivo | 72 / 1.2 | 850 |
| Heading/H2 | Archivo | 48 / 1.1 | 800 |
| Heading/H3 | Archivo | 21 / 1.2 | 750 |
| Body/Default | Source Sans 3 | 18 / 1.6 | 400 |
| Body/Small | Source Sans 3 | 14 / 1.5 | 400 |
| Label/Eyebrow | Source Sans 3 | 14 / 1.4 | 700, tracking 8% |

## Grid y spacing

- Contenedor: 1160 px, padding 20 px.
- Grid: 12 columnas, gutter 24 px (desktop); 4 columnas en móvil.
- Secciones: 96 px desktop / 64 px móvil.
- Escala: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
- Radios: tarjeta 20, aviso 14, botón/chip 999.

## Componentes

- **Button**: variantes Primary, WhatsApp, Ghost; estados default/hover/focus; alto 54.
- **Header**: logo, nav, selector de idioma, teléfono, burger.
- **TrustBar**: 3–4 items con check.
- **ServiceCard**: foto, overlay, título, texto, precio/CTA.
- **ProcessStep**: número, título, párrafo, estado activo/inactivo.
- **BeforeAfter**: dos imágenes, slider, etiquetas.
- **PaintGauge**: barras verde/ámbar/rojo, cifras, leyenda.
- **FAQItem**: summary con +, contenido.
- **EstimateForm**: placa, campos, fecha, fotos, CTA WhatsApp.
- **Footer** y **FAB**.

## Assets

- Logo: `images/web/logo.jpg`.
- Fotos: `images/web/*.jpg`.
- Iconos: línea 1.5 px, 24/32.

## Aceptación

- Las páginas coinciden con la web a 1440 y 390 px.
- Los colores usan variables, no hex sueltos.
- Los textos usan estilos, no tamaños a mano.
- Contrastes: los de `references/palette.md`.
- Los componentes tienen nombre, descripción y variantes.
- Nada de stock ni fotos generadas: las fotos reales se sustituyen cuando lleguen.

## Flujo

1. Conectar Figma (`/mcps` → figma → sign in).
2. Cargar `figma-generate-library` y crear variables/estilos/componentes desde este brief y `tokens.json`.
3. Cargar `figma-generate-design` para montar Home, Services y Car Check.
4. Revisar y ajustar; cualquier cambio aprobado se implementa en `*-fuente.html` y se vuelve a generar.
