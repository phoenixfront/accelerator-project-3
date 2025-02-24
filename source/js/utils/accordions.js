const createAccordions = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('is-active');

      const clickedDescription = button.nextElementSibling;
      const isActive = button.classList.contains('is-active');
      clickedDescription.style.maxHeight = isActive ? `${clickedDescription.scrollHeight}px` : 0;

      const focusableElements = clickedDescription.querySelectorAll('button, a');
      const tabIndex = isActive ? 0 : -1;
      focusableElements.forEach((element) => element.setAttribute('tabindex', tabIndex));
    });
  });
};

export { createAccordions };
