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

// Loader'ı gösterme fonksiyonu
export function showLoader() {
  const loader = document.getElementById('loader-container');
  if (loader) {
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
    loader.classList.remove('active');
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
    // Animasyonun en az 1 saniye görünmesini sağla
    setTimeout(() => {
      hideLoader();
    }, 1000);
  }
} 