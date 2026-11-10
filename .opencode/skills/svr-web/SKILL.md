---
name: SVR · web y diseño
description: Sistema de diseño, arte y control de calidad para la web de SVR (chapa y pintura en Jersey). Úsala al cambiar layout, paleta, tipografía, fotos, gráficos, componentes, accesibilidad o antes de publicar.
---

# SVR: diseño web de taller top en Jersey

## Principio

No es una web de taller de barrio: es **un taller de precisión con acabado de marca europea**.
La sensación debe ser: limpio, seguro, directo, local y caro de imitar. Menos elementos, mejor puestos.
Si un bloque no ayuda a pedir presupuesto, entender el proceso o confiar en SVR, no entra.

Atributos: **precisión, calma, oficio, discreción, Jersey**.

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#08090b` | Fondo oscuro principal (cabina) |
| `--ink2` | `#15181e` | Paneles y tarjetas sobre oscuro |
| `--sea` | `#0f2f57` | Azul profundo para seguros/contacto |
| `--blue` | `#0a6fe0` | Azul SVR: acción, enlaces, acentos |
| `--blue-d` | `#0858b8` | Hover del azul |
| `--sky` | `#6db3ff` | Texto secundario sobre oscuro y precios |
| `--bone` | `#f3f2f0` | Fondo base claro |
| `--glass` | `#e2ebf5` | Fondo de sección suave |
| `--steel` | `#8b97a8` | Texto secundario sobre oscuro |
| `--muted` | `#4d5560` | Texto secundario sobre claro |
| `--line` | `#d9dde3` | Bordes y separadores |
| `--ok` | `#3aa76d` | Solo el medidor de pintura |
| `--warn` | `#e0a526` | Solo el medidor de pintura |
| `--bad` | `#e0563b` | Solo el medidor de pintura |

Reglas:
- Máximo **tres colores por sección**. El azul es para acción e información, no para decorar.
- Nada de degradados llamativos. Solo overlays oscuros para que el texto se lea sobre foto.
- El verde de WhatsApp se usa **solo** en botones de WhatsApp.
- No usar el semáforo verde/ámbar/rojo fuera del medidor de espesor.

## Tipografía

- Títulos: **Archivo** variable (500–900, ancho 62–125). `font-stretch: 108–115%`.
- Texto: **Source Sans 3** (400/600/700).
- Escala: hero `clamp(2.4rem, 6.4vw, 5.2rem)`; h2 `clamp(2rem, 5vw, 3.4rem)`; h3 1.3rem; cuerpo 18px/1.6; nota 0.9rem.
- Titular de hero: **2–4 líneas**, máximo 8 palabras. Nunca partir una palabra.
- Cuerpo: 60–66 caracteres por línea. Izquierda, nunca justificado.
- No usar mayúsculas sostenidas ni más de 3 signos de exclamación en toda la página.

## Layout

- Ancho: `min(1160px, 100% - 40px)`.
- Secciones: 96px arriba/abajo en escritorio; 64px en móvil.
- Grid: 3 tarjetas de servicio; 2 columnas para texto + foto; 4 tarjetas solo en el proceso de accidente.
- Radios: 20px tarjetas, 999px botones/chips, 14px avisos.
- Bordes de 1px. Sombras solo en flotantes, antes/después y tarjetas de informe.
- Aire: si hay duda, más espacio entre bloques, no más adornos.

## Componentes

- **Botón primario**: azul, texto blanco, alto mínimo 54px, radio 999. Hover: azul oscuro y -2px.
- **Botón WhatsApp**: verde solo si abre WhatsApp. Texto oscuro para contraste.
- **Botón fantasma**: solo sobre fondo oscuro, borde blanco translúcido.
- **Tarjeta de servicio**: foto 4:5 o 4:3, overlay inferior, título 1.3rem, texto 1rem, precio/CTA en `--sky`.
- **Barra de confianza**: franja oscura bajo el hero, 3–4 puntos con check.
- **Proceso**: fondo `--ink`; pasos inactivos con opacidad **≥ .72** para no romper contraste.
- **Antes/después**: misma foto, misma luz y mismo ángulo; etiquetas Before/After; control accesible.
- **Formulario**: matrícula en placa amarilla; campos blancos; un solo CTA a WhatsApp; día preferido opcional.
- **FAB**: 56px, etiqueta solo al hover/focus, abajo-derecha; nunca tapa los CTA ni la barra móvil.

## Fotos: la diferencia entre maqueta y web top

Solo fotos reales del taller. Mientras no existan, marcar como maqueta.

Lista de tomas:
1. Hero 16:9: cabina, pistola o panel, con aire negro a la izquierda para el titular.
2. Macro de pistola/niebla de pintura.
3. Reflejo en panel recién pintado (señal de calidad).
4. Pintor trabajando: manos, visera, mono; sin posar.
5. Antes/después del mismo coche, mismo ángulo y luz.
6. Óxido en pasa-ruedas y bajos, antes del tratamiento.
7. Mezcla de pintura y carta de color.
8. Entrega de llaves.
9. Retrato de Guillermo y Gabriel, si aceptan.

Dirección:
- Luz de cabina, blanco neutro; nada de filtros que cambien el color de la pintura.
- Sombras ligeramente frías; azul de marca consistente.
- Sin logos de otras marcas, matrículas legibles ni caras de clientes sin permiso.
- Nada de personas de stock ni coches generados por IA.

## Gráficos

- Iconos de línea 1.5px, grid 24/32; nada de emoji ni clipart.
- El **medidor de espesor de pintura** es el gráfico firma: verde/ámbar/rojo con leyenda clara.
- El antes/después debe ser honesto: no pintar daños falsos sobre la foto.
- OG image 1200×630: logo, titular y franja azul; texto dentro del área segura.
  Se edita en `design/og.html` y se exporta a `images/web/og.jpg`.
- Nada de sombras de texto grandes; solo la necesaria para leer sobre foto.

## Contenido

- Inglés para el cliente; español para documentos internos.
- Frases cortas. Una idea por bloque.
- Nada de promesas absolutas («el mejor», «garantizado») sin prueba.
- Lo no confirmado se escribe `[Confirmar con SVR.]` y se anota en `PENDIENTE_SVR.md`.
- Prueba local: parroquias, aire salado, calles estrechas, seguro, coche de cortesía, flotas.

## Accesibilidad y QA

- WCAG 2.2 AA: texto 4.5:1, texto grande 3:1, foco visible, teclado, skip link, reduced motion, objetivos de 44px.
- Lighthouse: 100 en accesibilidad, buenas prácticas y SEO. Si baja, no se publica.
- Probar 390, 768 y 1200px; sin scroll horizontal.
- Probar selector de idioma, menú móvil, formulario y enlaces internos.
- Editar `*-fuente.html`, ejecutar `python3 tools/build.py` y revisar `index.html`,
  `services.html` y `car-check.html`. No editar los HTML generados a mano.

## Referentes

- Crash Champions, Gerber, CARSTAR, Fix Auto, Caliber: confianza, cita, estado, garantía.
- Talleres de Jersey: webs simples, sin formulario ni antes/después. La oportunidad es ser el único con prueba visual y respuesta por WhatsApp.
- Copiar la **claridad y la confianza**, no la escala corporativa (garantía vitalicia, financiación, grúa) si SVR no lo confirma.

## Lo que haría top a SVR en Jersey

1. Fotos reales del taller y 4–6 antes/después.
2. Reseñas reales de Google y ficha de Google Business.
3. Respuesta rápida por WhatsApp y día de entrega claro.
4. Precios «desde» o rangos, sin letra pequeña.
5. Ayuda real con el seguro y coche de cortesía/recogida si lo ofrecen.
6. La misma calidad visual en Instagram y en la web.
