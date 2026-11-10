# Paleta SVR: contrastes y uso

Valores WCAG calculados sobre sRGB. Normal ≥ 4.5:1; texto grande ≥ 3:1.

| Texto | Fondo | Contraste | Uso |
|---|---|---:|---|
| `#ffffff` | `#0a6fe0` | 4.81 | Botón primario |
| `#ffffff` | `#0858b8` | 6.78 | Hover del botón |
| `#6db3ff` | `#08090b` | 9.05 | Precios y enlaces sobre oscuro |
| `#dbe8e8` | `#08090b` | 15.86 | Párrafo sobre hero |
| `#cfe0e0` | `#08090b` | 14.60 | Pasos del proceso |
| `#8b97a8` | `#08090b` | 6.73 | Notas sobre oscuro |
| `#4d5560` | `#f3f2f0` | 6.74 | Texto secundario sobre claro |
| `#ffffff` | `#0f2f57` | 13.42 | Texto sobre azul profundo |
| `#d7e3f3` | `#0f2f57` | 10.34 | Párrafo sobre azul profundo |
| `#f3f2f0` | `#08090b` | 17.80 | Texto claro sobre negro |
| `#9fd0ff` | `#08090b` | 12.27 | Detalles y checks |

## Reglas

- El azul `#0a6fe0` sobre hueso `#f3f2f0` da **4.3:1**: no usarlo para texto normal.
  Sobre claro, usar `--ink` o `--sea`.
- Los pasos inactivos del proceso no bajan de `opacity: .72` (contraste efectivo 7.74:1).
- El semáforo verde/ámbar/rojo es solo para el medidor de pintura.
- Los estados hover no pueden ser el único indicador; añadir subrayado o cambio de forma.
- No introducir un color nuevo sin actualizar esta tabla y pasar Lighthouse.
