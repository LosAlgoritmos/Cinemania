/**
 * Loader işlevselliği için yardımcı fonksiyonlar
 */

// Film/sinema ile ilgili yükleme mesajları
const loadingMessages = [
  "Filminiz yükleniyor...",
  "Sinema perdesi hazırlanıyor...",
  "Filminiz başlamak üzere...",
  "Koltuklar hazırlanıyor...",
  "Patlamış mısırlar hazır...",
  "Film makarası takılıyor...",
  "Işıklar kapanıyor...",
  "Film başlamak üzere..."
];

// Minimum gösterim süresi (milisaniye)
const MINIMUM_LOADING_TIME = 750; // 2.5 saniye

// Loader'ı gösterme zamanını takip etmek için değişken
let loaderStartTime;

// Loader'ı gösterme fonksiyonu
export function showLoader() {
  const loader = document.getElementById('loader-container');
  if (loader) {
    // Gösterme zamanını kaydet
    loaderStartTime = new Date().getTime();
    
    // Rastgele bir film mesajı seç
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const messageElement = loader.querySelector('.loader-text');
    if (messageElement) {
      messageElement.textContent = randomMessage;
    }
    
    loader.classList.add('active');
  }
}

// Loader'ı gizleme fonksiyonu
export function hideLoader() {
  const loader = document.getElementById('loader-container');
  if (loader) {
    // Geçen süreyi hesapla
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - loaderStartTime;
    
    // Minimum gösterim süresinden az süre geçtiyse, kalan süreyi bekle
    if (elapsedTime < MINIMUM_LOADING_TIME) {
      setTimeout(() => {
        loader.classList.remove('active');
      }, MINIMUM_LOADING_TIME - elapsedTime);
    } else {
      // Minimum süre geçtiyse, hemen kapat
      loader.classList.remove('active');
    }
  }
}

// API isteği yapmak için yardımcı fonksiyon
export async function fetchWithLoader(url, options) {
  try {
    showLoader();
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  } finally {
    // Loader'ı gizle (minimum gösterim süresi uygulanacak)
    hideLoader();
  }
} 