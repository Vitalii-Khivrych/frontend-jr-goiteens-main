const modulesSection = document.querySelector('[data-modules]');

const blockSelectors = modulesSection.querySelectorAll('[data-selector]');
const blockContent = modulesSection.querySelectorAll('[data-content]');

const handleClick = e => {
  const lastActiveButton = modulesSection.querySelector('.active');

  // Hide last selected block
  lastActiveButton.classList.remove('active');
  blockContent[lastActiveButton.dataset.selector - 1].classList.add('concealed');
  blockContent[lastActiveButton.dataset.selector - 1].ariaHidden = 'true';

  // Show newly selected block
  e.currentTarget.classList.add('active');
  blockContent[e.currentTarget.dataset.selector - 1].classList.remove('concealed');
  blockContent[e.currentTarget.dataset.selector - 1].ariaHidden = 'false';
};

blockSelectors.forEach((button, index) => {
  button.addEventListener('click', handleClick);
  if (index === 0) {
    button.classList.add('active');
    blockContent[index].ariaHidden = 'false';
    return;
  }
  blockContent[index].classList.add('concealed');
  blockContent[index].ariaHidden = 'true';
});
