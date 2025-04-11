// @murselsen
import './js/navbar.js';
import './js/hero.js';
// @AlperKale
import { showLoader, hideLoader } from './js/loader.js';
import './js/scroll-up.js';
// @sumeyyeterzi
import './js/errorModal.js';
// @RoyalNegative
import './js/movies.js';
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