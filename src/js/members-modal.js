const footerBtn = document.querySelector('.footer-btn');
const backdropModal = document.querySelector('.backdrop-team-modal');
const closeBtn = document.querySelector('.close-btn');


function openModal() {
  backdropModal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEscape);
  backdropModal.addEventListener('click', closeModalOnClickOutside);
}
function closeModal() {
  backdropModal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEscape);
  backdropModal.removeEventListener('click', closeModalOnClickOutside);
}
function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
function closeModalOnClickOutside(event) {
  if (event.target === backdropModal) {
    closeModal();
  }
}


footerBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);