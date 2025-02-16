const config = {
  accordion: {
    button: '.header-menu__link-accordion',
    buttonActiveClass: 'header-menu__link-accordion--opened',
    submenu: '.header-menu__submenu',
    submenuActiveClass: 'submenu--opened',
  },
};

const initAccordions = () => {
  const accordionButtons = document.querySelectorAll(config.accordion.button);

  const handleAccordionClick = (e) => {
    const button = e.currentTarget;
    const submenu = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    button.classList.toggle(config.accordion.buttonActiveClass);
    submenu.classList.toggle(config.accordion.submenuActiveClass);
    button.setAttribute('aria-expanded', String(!isExpanded));

    submenu.style.maxHeight = isExpanded ? null : `${submenu.scrollHeight}px`;
  };

  accordionButtons.forEach((button) => {
    button.addEventListener('click', handleAccordionClick);
    button.setAttribute('aria-controls', button.nextElementSibling.id);
    button.setAttribute('aria-expanded', 'false');
  });
};

export { initAccordions };
