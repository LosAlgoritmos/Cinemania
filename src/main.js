// import './js/header';

import './js/footer.js';
import './js/members-modal.js';
// @murselsen
import './js/navbar.js';
// import './js/hero.js';


import './js/movies.js';

import { showLoader, hideLoader } from './js/loader.js';
import './js/scroll-up.js';

// @yesimbozkurt
import './js/mylibrary.js';

// Sayfa yüklenirken loaderı göster
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

import './js/loader.js';

// @sumeyyeterzi
import './js/errorModal.js';
import './js/infoPopup.js';

// @negin
import './js/weeklyTrends.js';
import './js/scroll-up.js';

