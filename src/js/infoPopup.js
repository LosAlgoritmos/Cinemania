const infoPopup = document.querySelector('.infoPopup');
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const addLibraryBtn = document.querySelector('.addLibrary');

infoPopup.style.display = 'none';

openBtn.addEventListener('click', () => {
  infoPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  infoPopup.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === infoPopup) {
    infoPopup.style.display = 'none';
  }
});

addLibraryBtn.addEventListener('click', () => {
  if (addLibraryBtn.textContent === 'Add to my library') {
    addLibraryBtn.textContent = 'Remove from my library';
  } else {
    addLibraryBtn.textContent = 'Add to my library';
  }
});
