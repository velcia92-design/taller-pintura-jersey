# QA antes de publicar SVR

## Comandos

```sh
python3 tools/build.py
python3 -m http.server 8791
```

Abrir `http://localhost:8791/index.html`, `services.html` y `car-check.html`.

## Checklist

- [ ] Lighthouse: accesibilidad, buenas prácticas y SEO en 100 en las tres páginas.
- [ ] Sin errores en consola.
- [ ] Sin scroll horizontal a 390, 768 y 1200px.
- [ ] Hero: titular y CTA visibles sin hacer scroll a 700px de alto.
- [ ] En móvil, el CTA no queda debajo de la barra fija.
- [ ] Selector de idioma cambia todo y los enlaces mantienen `?lang=`.
- [ ] Menú móvil abre/cierra con teclado y Escape.
- [ ] Formulario: WhatsApp abre con matrícula, nombre, teléfono, daño y día.
- [ ] Enlaces internos (`#rust`, `#protection`, `#fleet`, `#contact`) funcionan.
- [ ] Imágenes con alt; decorativas con alt vacío.
- [ ] Fotos reales, no stock, en la versión publicable.
- [ ] Datos `[ ]` sustituidos o anotados en `PENDIENTE_SVR.md`.
- [ ] Franja MOCKUP fuera antes de publicar.
- [ ] Privacidad revisada para Jersey.
- [ ] Dominio final en `og:image` y datos estructurados.
