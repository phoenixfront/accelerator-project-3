const phoneInputs = document.querySelectorAll('input[type="tel"]');
const COUNTRY_CODE = '+7';
const length = COUNTRY_CODE.length;

const matrix = `${COUNTRY_CODE} (___) ___ __ __`;

const replacePhoneValue = (element) => {
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let val = element.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  element.value = matrix.replace(/./g, (a) => {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    }
    return a;
  });
};

const onInputPhoneInput = ({target}) => {
  replacePhoneValue(target);
};

const onKeydownPhoneInput = (event) => {
  if (event.target.selectionStart <= length && event.keyCode !== 8 && event.keyCode !== 46) {
    event.target.setSelectionRange(length, length);
  }
  if ((event.target.selectionStart === length || event.target.selectionStart === 1) && event.keyCode === 8) {
    event.preventDefault();
  }
  if (event.target.selectionStart === 1 && event.keyCode === 46) {
    event.preventDefault();
  }
};

const onBlurPhoneInput = ({target}) => {
  if (target.value === COUNTRY_CODE) {
    target.value = '';
    target.removeEventListener('input', onInputPhoneInput);
    target.removeEventListener('blur', onBlurPhoneInput);
  }
};

const onFocusPhoneInput = ({target}) => {
  if (!target.value) {
    target.value = COUNTRY_CODE;
    target.addEventListener('input', onInputPhoneInput);
    target.addEventListener('blur', onBlurPhoneInput);
    target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

const initPhoneMask = () => {
  if (phoneInputs.length) {
    phoneInputs.forEach((input) => {
      input.addEventListener('focus', onFocusPhoneInput);
      if (input.value) {
        replacePhoneValue(input);
        input.addEventListener('input', onInputPhoneInput);
        input.addEventListener('blur', onBlurPhoneInput);
        input.addEventListener('keydown', onKeydownPhoneInput);
      }
      input.setAttribute('pattern', `.{${matrix.length},}`);
    });
  }
};

export {initPhoneMask};
