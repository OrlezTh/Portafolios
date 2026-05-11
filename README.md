# Portfolio — Thiago Orel Alvarez

Portafolio personal de desarrollo web. Hecho con HTML, CSS y JavaScript puro — sin frameworks, sin dependencias, listo para publicar en GitHub Pages.

## Estructura del proyecto

```
portfolio/
├── index.html          ← página principal
├── css/
│   └── style.css       ← todos los estilos
├── js/
│   ├── projects.js     ← tus proyectos (editá este archivo)
│   └── carousel.js     ← lógica del carrusel
└── README.md
```

## Cómo agregar un proyecto nuevo

Abrí `js/projects.js` y copiá este bloque dentro del array `PROJECTS`:

```js
{
  title:    "Nombre del proyecto",
  tag:      "Python · Flask",
  desc:     "Descripción breve de qué hace el proyecto.",
  url:      "https://github.com/OrlezTh/tu-repo",
  urlLabel: "Ver en GitHub ↗",
  preview:  "lines",   // usá "lines" o "placeholder"
},
```

---

## Cómo publicarlo en internet (GitHub Pages) — gratis

### Paso 1 — Subir el proyecto a GitHub

1. Creá un repositorio nuevo en GitHub llamado exactamente:
   ```
   OrlezTh.github.io
   ```
   (reemplazá `OrlezTh` por tu usuario exacto de GitHub)

2. Desde tu computadora, abrí una terminal en la carpeta del portfolio y ejecutá:

```bash
git init
git add .
git commit -m "primer commit - portfolio"
git branch -M main
git remote add origin https://github.com/OrlezTh/OrlezTh.github.io.git
git push -u origin main
```

### Paso 2 — Activar GitHub Pages

1. En GitHub, entrá a tu repositorio → pestaña **Settings**
2. En el menú izquierdo, hacé clic en **Pages**
3. En "Branch", seleccioná `main` y la carpeta `/ (root)`
4. Hacé clic en **Save**

En unos minutos tu portfolio va a estar en vivo en:
```
https://OrlezTh.github.io
```

---

## Notas de seguridad aplicadas

- `X-Content-Type-Options: nosniff` — evita que el browser interprete archivos de forma incorrecta
- `X-Frame-Options: DENY` — impide que tu página sea embebida en iframes externos (clickjacking)
- `referrer: strict-origin-when-cross-origin` — controla qué info se envía al navegar a otros sitios
- Todos los links externos usan `rel="noopener noreferrer"` — evita que las páginas externas accedan a tu ventana
- Las URLs del carrusel pasan por `sanitizeUrl()` antes de abrirse — previene inyección de URLs maliciosas
- El JS usa IIFE con `"use strict"` — evita variables globales accidentales
- No hay dependencias externas en el JS — sin riesgos de supply chain

---

## Tecnologías

- HTML5 semántico
- CSS3 con variables custom
- JavaScript puro (ES6+), sin frameworks
- Google Fonts (DM Serif Display, DM Mono, Outfit)
