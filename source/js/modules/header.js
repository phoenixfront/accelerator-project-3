import { initAccordions } from '../utils/accordions.js';

const config = {
  header: {
    button: '.header__button',
    buttonActiveClass: 'header__button--opened',
    menu: '.header-menu',
    menuActiveClass: 'header-menu--opened',
  },
};

// Menu Burger
const initBurgerMenu = () => {
  const burgerButton = document.querySelector(config.header.button);
  const burgerMenu = document.querySelector(config.header.menu);

  if (!burgerButton || !burgerMenu) {
    return;
  }

  const toggleMenu = (isOpening) => {
    const isExpanded = isOpening ?? burgerButton.getAttribute('aria-expanded') !== 'true';

    burgerButton.setAttribute('aria-expanded', isExpanded);
    burgerMenu.setAttribute('aria-hidden', !isExpanded);

    burgerButton.classList.toggle(config.header.buttonActiveClass, isExpanded);
    burgerMenu.classList.toggle(config.header.menuActiveClass, isExpanded);
  };

  burgerButton.addEventListener('click', () => toggleMenu());

  // Закрытие по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
    }
  });

  // Закрытие при клике вне меню
  document.addEventListener('click', (event) => {
    const isMenuOpen = burgerMenu.classList.contains(config.header.menuActiveClass);
    if (!isMenuOpen) {
      return;
    }

    const isClickInsideMenu = burgerMenu.contains(event.target);
    const isClickOnButton = burgerButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      toggleMenu(false);
    }
  });

  // Инициализация ARIA
  burgerButton.setAttribute('aria-controls', burgerMenu.id);
  burgerButton.setAttribute('aria-expanded', 'false');
  burgerMenu.setAttribute('aria-hidden', 'true');
};

const initHeader = () => {
  initBurgerMenu();
  initAccordions();
};

export { initHeader };
