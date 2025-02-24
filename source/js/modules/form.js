import { initPhoneMask } from '../utils/phone-mask.js';
import { initValidation } from './validation.js';

const feedbackForm = document.forms['feedback'];
const feedbackModalForm = document.forms['feedback-modal'];

const initForm = () => {
  initPhoneMask();
  initValidation(feedbackForm);
  initValidation(feedbackModalForm);
};

export { initForm };
