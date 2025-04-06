/**
 * Sayfanın yukarısına çıkmak için scroll-up buton işlevselliği
 */

// Scroll Up butonunu oluştur ve sayfaya ekle
function createScrollUpButton() {
  // Buton HTML'i oluştur
  const button = document.createElement('button');
  button.className = 'scroll-up';
  button.id = 'scroll-up-button';
  button.setAttribute('aria-label', 'Sayfanın üstüne çık');
  button.setAttribute('title', 'Sayfanın üstüne çık');
  
  // SVG ikon ekle
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 4l8 8h-6v8h-4v-8H4z"/>
    </svg>
  `;
  
  // Sayfanın sonuna ekle
  document.body.appendChild(button);
  
  // Buton tıklama olayını ekle
  button.addEventListener('click', scrollToTop);
  
  // Sayfa kaydırma olayını izle
  window.addEventListener('scroll', toggleScrollButton);
}

// Sayfa yukarıya kaydırma fonksiyonu
function scrollToTop() {
  // Yumuşak geçişle sayfa başına git
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Scroll butonunun görünürlüğünü kontrol et
function toggleScrollButton() {
  const button = document.getElementById('scroll-up-button');
  if (!button) return;
  
  // Sayfanın belirli bir kısmından sonra butonu göster (300px)
  if (window.pageYOffset > 300) {
    button.classList.add('visible');
  } else {
    button.classList.remove('visible');
  }
}

// Sayfa yüklendiğinde scroll-up butonunu oluştur
document.addEventListener('DOMContentLoaded', () => {
  createScrollUpButton();
});

export { createScrollUpButton, scrollToTop, toggleScrollButton }; 