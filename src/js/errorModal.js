/* Error Modules */

const closeErrorModal = () => {
  document.querySelector('#errorModal').style.display = 'none';
};
document.querySelector('#errorModal').addEventListener('click', event => {
  if (event.target === document.querySelector('#errorModal')) {
    closeErrorModal();
  }
});
document.querySelector('#errorModalClose').addEventListener('click', () => {
  closeErrorModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeErrorModal();
  }
});
