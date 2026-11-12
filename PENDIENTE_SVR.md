# Lo que falta de SVR para terminar la web

## Hecho en esta pasada (2026-11-10)

- Contraste corregido: Lighthouse da **100** en accesibilidad, buenas prácticas y SEO en las tres páginas.
- Portada nueva con foto de cabina (sustituye el retrato de stock), titular que cabe en pantalla y botones visibles.
- Botón flotante más pequeño; ya no tapa los botones del hero.
- Imágenes optimizadas fuera del HTML: `index.html` baja de 1,1 MB a unos 55 KB.
- Tipografías locales (Archivo y Source Sans 3), sin Google Fonts.
- Nuevas secciones: qué hacer tras un golpe, qué enviar, flotas, óxido, protección de pintura y ADAS.
- Guía de compilación: `python3 tools/build.py`.
- Traducciones nuevas en ES, PT, PL y RO. Conviene que un nativo revise PL y RO.
- Pasada de tipografía: títulos en sentence case, sin mayúsculas sostenidas, comillas curvas,
  guiones correctos y microcopy revisado en inglés y español.

## Datos (sin esto no se puede publicar)

- [ ] Número de WhatsApp y teléfono fijo
- [ ] Email
- [ ] Dirección, parroquia y código postal (JE_ ___)
- [ ] Horario
- [ ] Número de registro de la empresa
- [ ] Servicios que ofrecen de verdad y precios «desde»
- [ ] Garantía (cuánto tiempo y qué cubre). El hero dice «guaranteed in writing»: si no se puede cumplir, hay que cambiarlo.
- [ ] ¿Coche de cortesía? ¿Recogida y entrega?
- [ ] ¿Tratan con aseguradoras (accidentes que no fueron culpa del cliente)?
- [ ] ¿Ofrecen inspección antes de comprar coche usado? ¿Precio? ¿Tienen medidor de pintura?
- [ ] ¿Qué web de historial recomiendan (carVertical u otra)?
- [ ] ¿Reparan óxido y renuevan el protector inferior?
- [ ] ¿Trabajan con híbridos y eléctricos? ¿Recurren a un especialista para alta tensión?
- [ ] ¿Calibran ADAS o lo encargan a un taller local?
- [ ] ¿Hacen flotas y trabajo para empresas?
- [ ] Medios de pago aceptados
- [ ] Acreditaciones reales (aseguradoras, asociaciones, marca de pintura que usan)
- [ ] Una frase sobre Guillermo y Gabriel, y si quieren salir en foto

## Material

- [ ] Fotos y vídeos reales del taller (la foto del hero es de stock)
- [ ] El archivo original de la foto del pintor (la captura se ve borrosa)
- [ ] 4 a 6 trabajos con foto de antes y después (con permiso de cada dueño)
- [ ] Sustituir las 6 tarjetas de ejemplo de la galería «Trabajos recientes»
- [ ] Enlace a su perfil de Google con reseñas
- [ ] Reseñas reales (ahora son de ejemplo)

## Cumplimiento legal (Jersey)

- [ ] Registro en la Oficina del Comisionado de Información (JOIC). Es obligatorio antes de tratar datos y cuesta 70 £ al año con menos de 10 empleados. Sin registro se comete un delito.
- [ ] Nombre legal de la empresa y número de registro de nombre comercial (Registration of Business Names (Jersey) Law 1956).
- [ ] Número de compañía, si es sociedad limitada.
- [ ] Número de registro de GST (o confirmar que no están obligados: umbral de 300.000 £).
- [ ] Confirmar que los precios que se publican incluyen el GST del 5 %.
- [ ] Condiciones de la garantía: años, qué cubre y qué no.
- [ ] Plazos de conservación de datos (consultas, clientes, fotos).
- [ ] Persona y datos de contacto para reclamaciones.
- [ ] Revisión por un abogado de Jersey de `legal.html` antes de publicar de verdad.
- [ ] Decidir si el aviso legal se traduce; si se traduce, indicar que prevalece la versión inglesa.

## Decisiones que necesitan cuenta o dinero (preguntar antes)

- [ ] Dónde publicar la web definitiva (gratis: Netlify o GitHub Pages; ambos piden cuenta)
- [ ] Dominio propio (por ejemplo svr.je): cuesta dinero al año
- [ ] Calendario de reservas online (gratis, pero pide cuenta)
- [ ] Afiliados de carVertical (pide cuenta)
- [ ] Ficha de Google Business: gratis, la crea SVR (pasos en GOOGLE.md)

## Antes de publicar

- [ ] Cambiar las URLs de ejemplo de los datos estructurados y de `og:image` por el dominio final
- [ ] Rellenar los `[ ]` visibles o quitarlos
- [ ] Revisar el aviso de privacidad con alguien que conozca la ley de Jersey (Data Protection (Jersey) Law 2018)
- [ ] Quitar las reseñas, cifras y fotos de ejemplo
- [ ] Quitar la franja «Mockup»
