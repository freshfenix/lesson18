document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const closeBtn = document.querySelector('.navbar__close');
  const navbar = document.querySelector('.navbar');

  function openMenu() {
    burger.classList.add('is-open');
    navbar.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    navbar.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  if (burger && navbar) {
    burger.addEventListener('click', openMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on a link
  if (navbar) {
    const navLinks = navbar.querySelectorAll('.navbar__link');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});
