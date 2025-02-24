const addErrorCheckClass = (fields) => {
  if (fields) {
    fields.forEach((field) => {
      field.classList.add('check-error');
    });
  }
};

const initValidation = (form) => {
  const inputs = form.querySelectorAll('input');
  const selectFields = form.querySelectorAll('select');
  const textareaFields = form.querySelectorAll('textarea');
  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', () => {
    addErrorCheckClass(inputs);
    addErrorCheckClass(selectFields);
    addErrorCheckClass(textareaFields);
  });
};

export { initValidation };
