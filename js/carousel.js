/**
 * carousel.js — lógica del carrusel de proyectos
 * Thiago Orel Alvarez
 */

(function () {
  "use strict";

  let current = 0;

  const titleEl   = document.getElementById("proj-title");
  const tagEl     = document.getElementById("proj-tag");
  const descEl    = document.getElementById("proj-desc");
  const linkEl    = document.getElementById("proj-link");
  const previewEl = document.getElementById("preview-content");
  const urlEl     = document.getElementById("browser-url");
  const bioEl     = document.getElementById("proj-bio");
  const dotsEl    = document.getElementById("carousel-dots");

  /* ── Renderizar proyecto ── */
  function render(index) {
    const p = PROJECTS[index];

    titleEl.textContent = p.title;
    tagEl.textContent   = p.tag;
    descEl.textContent  = p.desc;

    /* Bio con animación */
    if (bioEl) {
      bioEl.classList.add("bio-exit");
      setTimeout(() => {
        bioEl.textContent = p.bio || "";
        bioEl.classList.remove("bio-exit");
        bioEl.classList.add("bio-enter");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            bioEl.classList.remove("bio-enter");
          });
        });
      }, 200);
    }
    urlEl.textContent   = p.url
      ? p.url.replace("https://", "")
      : "próximamente...";

    /* Link */
    if (p.url) {
      linkEl.href        = sanitizeUrl(p.url);
      linkEl.textContent = p.urlLabel || "Ver proyecto ↗";
      linkEl.style.display = "";
    } else {
      linkEl.style.display = "none";
    }

    /* Preview */
    previewEl.innerHTML = buildPreview(p.preview, p.liveUrl);

    /* Dots */
    document.querySelectorAll(".dot-btn").forEach((d, i) => {
      d.classList.toggle("active", i === index);
      d.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  /* ── Construir preview visual ── */
  function buildPreview(type, liveUrl) {
    if (type === "iframe" && liveUrl) {
      return `
        <div class="iframe-wrapper">
          <iframe
            src="${sanitizeUrl(liveUrl)}"
            title="Preview interactivo del proyecto"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
          ></iframe>
          <div class="iframe-overlay"></div>
        </div>
      `;
    }
    if (type === "lines") {
      return `
        <div class="preview-line accent"></div>
        <div class="preview-line med"></div>
        <div class="preview-line short"></div>
        <div class="preview-line full"></div>
        <div class="preview-grid">
          <div class="preview-cell"></div>
          <div class="preview-cell"></div>
          <div class="preview-cell"></div>
          <div class="preview-cell"></div>
        </div>
      `;
    }
    return `<div class="preview-placeholder">Próximamente...</div>`;
  }

  /* ── Navegar ── */
  function goTo(index) {
    current = (index + PROJECTS.length) % PROJECTS.length;
    render(current);
  }

  /* ── Crear dots ── */
  function buildDots() {
    PROJECTS.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.className  = "dot-btn" + (i === 0 ? " active" : "");
      btn.setAttribute("aria-label", `Proyecto ${i + 1}`);
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      btn.addEventListener("click", () => goTo(i));
      dotsEl.appendChild(btn);
    });
  }

  /* ── Click en preview → abrir link ── */
  document.getElementById("proj-preview").addEventListener("click", function () {
    const p = PROJECTS[current];
    if (p.url) window.open(sanitizeUrl(p.url), "_blank", "noopener,noreferrer");
  });

  /* ── Seguridad: sanitizar URLs antes de usar ── */
  function sanitizeUrl(url) {
    try {
      const parsed = new URL(url);
      if (parsed.protocol === "https:" || parsed.protocol === "http:") {
        return parsed.href;
      }
    } catch (_) {}
    return "#";
  }

  /* ── Flechas ── */
  document.getElementById("prev").addEventListener("click", () => goTo(current - 1));
  document.getElementById("next").addEventListener("click", () => goTo(current + 1));

  /* ── Teclado ── */
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft")  goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  /* ── Swipe táctil ── */
  let touchStartX = 0;
  document.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  /* ── Init ── */
  buildDots();
  render(0);

})();
