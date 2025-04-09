// @murselsen
import './js/navbar.js';
// @AlperKale
import { showLoader, hideLoader } from './js/loader.js';
import './js/scroll-up.js';
// @yesimbozkurt
import './js/my-library.js';
// @sumeyyeterzi
import './js/infoPopup.js';
// @erdem6161
import './js/footer.js';
import './js/members-modal.js';


document.addEventListener('DOMContentLoaded', () => {
  // Sayfanın tamamen yüklenmesini bekleyelim
  // Bu sırada showLoader'ı çağırarak loader'ı gösteriyoruz
  showLoader();
  
  // Sayfa tamamen yüklendiğinde loader'ı gizle
  window.addEventListener('load', () => {
    // Loader'ı gizle
    // hideLoader fonksiyonu zaten minimum gösterim süresini dikkate alacak
    setTimeout(() => {
      hideLoader();
    }, 500); // Sayfanın tam yüklenmesinden sonra 0.5 saniye daha bekle
  });
});