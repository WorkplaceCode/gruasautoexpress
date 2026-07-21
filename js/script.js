/* =========================================================
   MENÚ MÓVIL (hamburguesa)
   Ajustes futuros: cambiar la animación de apertura o el
   breakpoint en que aparece (debe coincidir con el CSS,
   actualmente 768px).
========================================================= */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.classList.toggle('is-active', isOpen);
});

/* Cierra el menú al hacer clic en un enlace (útil en móvil) */
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

/* =========================================================
   RESALTAR ENLACE ACTIVO SEGÚN LA SECCIÓN VISIBLE
   Ajustes futuros: agregar o quitar ids si cambian las
   secciones del menú principal.
========================================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const highlightActiveLink = () => {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${id}"]`);
    if (!link) return;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(l => l.classList.remove('is-active'));
      link.classList.add('is-active');
    }
  });
};

window.addEventListener('scroll', highlightActiveLink);
highlightActiveLink();

/* =========================================================
   BOTÓN "VOLVER ARRIBA"
========================================================= */
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================================
   AÑO DEL COPYRIGHT (se actualiza solo, no hay que tocarlo)
========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
