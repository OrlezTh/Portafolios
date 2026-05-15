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
 *   bio     — descripción larga que aparece en el carrusel
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
    bio:      "App web para registrar y hacer seguimiento de préstamos personales. Permite cargar clientes con monto, cuotas y fecha de inicio. Cada tarjeta muestra el progreso en pesos reales, dots interactivos para marcar cuotas pagadas y un calendario que resalta los días de cobro con hover informativo. Los datos se guardan en un archivo JSON local (con Node) o en localStorage.",
    url:      "https://github.com/OrlezTh/Pagina-prestamos-optimizada",
    liveUrl:  "https://OrlezTh.github.io/Pagina-prestamos-optimizada",
    urlLabel: "Ver en GitHub ↗",
    preview:  "iframe",
  },
  {
    title:    "Página de Restaurante falso",
    tag:      "HTML · CSS · JS",
    desc:     "Página de restaurante L'Arcada.",
    bio:      "Landing page para el restaurante ficticio L'Arcada. Diseño visual con secciones de menú, ambiente y reservas. Enfocado en maquetado HTML/CSS semántico con algo de interactividad en JavaScript.",
    url:      "https://github.com/OrlezTh/Pagina-Restaurante/",
    liveUrl:  "https://orlezth.github.io/Pagina-Restaurante/",
    urlLabel: "Ver en GitHub ↗",
    preview:  "iframe",
  },
  {
    title:    "Página de seguimiento de hábitos",
    tag:      "HTML · CSS · JS",
    desc:     "Seguimiento de hábitos.",
    bio:      "App mobile-first para registrar actividades a lo largo del día. Tiene check-in rápido por categoría (trabajo, ejercicio, comida, descanso), countdown al próximo registro, historial completo y estadísticas de uso. Todo en un solo archivo, sin servidor ni dependencias externas. Los datos persisten en localStorage.",
    url:      "https://github.com/OrlezTh/H-bitos-tracker",
    liveUrl:  "https://orlezth.github.io/H-bitos-tracker/",
    urlLabel: "Ver en GitHub ↗",
    preview:  "iframe",
  },
];
