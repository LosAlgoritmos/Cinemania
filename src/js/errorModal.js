/* Error Modules */

// Cache DOM elements
const errorModal = document.querySelector('#errorModal');
const errorModalClose = document.querySelector('#errorModalClose');

// Function to close the error modal
const closeErrorModal = () => {
  if (errorModal) {
    errorModal.style.display = 'none';
  }
};

// Add event listeners if elements exist
if (errorModal) {
  errorModal.addEventListener('click', event => {
    if (event.target === errorModal) {
      closeErrorModal();
    }
  });
}

if (errorModalClose) {
  errorModalClose.addEventListener('click', () => {
    closeErrorModal();
  });
}

// Close modal on 'Escape' key press
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeErrorModal();
  }
});