import { renderTabs, renderSlides, updateSlider } from './view.js';
import { news } from './model.js';

const tabButtons = document.querySelectorAll('.news__tab');

const initNews = (data) => {
  const onButtonClick = (event) => {
    news.currentTab = event.target.dataset.topic;
    renderTabs(news.currentTab);
    let currentData;
    if (news.currentTab === 'all') {
      currentData = data;
    } else {
      currentData = data.filter((slide) => slide.topic === news.currentTab);
    }

    renderSlides(currentData);
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', onButtonClick);
  });

  tabButtons[0].click();


  const breakpointMobile = window.matchMedia('(max-width: 767px)');
  const breakpointTablet = window.matchMedia('(max-width: 1439px)');
  breakpointMobile.addEventListener('change', () => updateSlider());
  breakpointTablet.addEventListener('change', () => updateSlider());
};

export { initNews };
