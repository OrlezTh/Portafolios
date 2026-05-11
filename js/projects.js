/**
 * projects.js — datos de tus proyectos
 * Thiago Orel Alvarez
 *
 * Para agregar un proyecto nuevo, copiá uno de los objetos
 * de abajo y completá los campos. El carrusel lo muestra solo.
 *
 * Campos:
 *   title   — nombre del proyecto
 *   tag     — tecnologías principales (texto corto)
 *   desc    — descripción breve
 *   url     — link al repositorio GitHub (null si no hay)
 *   liveUrl — link público del sitio en vivo (para el iframe)
 *   urlLabel— texto del botón de link (opcional)
 *   preview — tipo de preview:
 *               "iframe"      → muestra la página real (necesita liveUrl)
 *               "lines"       → preview decorativa con CSS
 *               "placeholder" → "próximamente..."
 */

const PROJECTS = [
  {
    title:    "Página de préstamos",
    tag:      "HTML · CSS · JS",
    desc:     "Sistema de gestión de préstamos. Interfaz completa con cálculo de cuotas y seguimiento.",
    url:      "https://github.com/OrlezTh/Pagina-prestamos-optimizada",
    liveUrl:  "https://OrlezTh.github.io/Pagina-prestamos-optimizada",
    urlLabel: "Ver en GitHub ↗",
    preview:  "iframe",
  },
  {
    title:    "Próximo proyecto",
    tag:      "HTML · CSS · JS",
    desc:     "Pagina de restaurante L'Arcada.                                                                     ",
    url:      "https://github.com/OrlezTh/Pagina-Restaurante/",
    liveUrl:  "https://orlezth.github.io/Pagina-Restaurante/",
    urlLabel: "Ver en GitHub ↗",
    preview:  "iframe",
  },
  {
    title:    "",
    tag:      "HTML · CSS · JS",
    desc:     "Sistema de gestión de préstamos. Interfaz completa con cálculo de cuotas y seguimiento.",
    url:      "https://github.com/OrlezTh/Pagina-prestamos-optimizada",
    liveUrl:  "https://OrlezTh.github.io/Pagina-prestamos-optimizada",
    urlLabel: "Ver en GitHub ↗",
    preview:  "iframe", 
  }
];
