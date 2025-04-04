/**
 * Loader işlevselliği için yardımcı fonksiyonlar
 */

// Loader'ı gösterme fonksiyonu
export function showLoader() {
  const loader = document.getElementById('loader-container');
  if (loader) {
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
    hideLoader();
  }
} 