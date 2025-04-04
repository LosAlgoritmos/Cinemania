import { showLoader, hideLoader, fetchWithLoader } from './loader.js';
const trendCards = document.querySelector('.trend-cards'); // UL elementini doğru aldığımıza emin ol!

async function getWeeklyTrends() {
  try {
    showLoader();

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTk4ZmY3ODg1ZTM2MWU4Y2UxZDVlYjZkMWQ3ZGU4NiIsIm5iZiI6MTc0MzY4NTIxNS4xNDIwMDAyLCJzdWIiOiI2N2VlODY1ZjAzNTQwY2Y4ZTU2MmI5NWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2dJFIqnvzkqw_5VH2b_FLFt5Hwkp3DrqAqyG_61G1pA',
      },
    };

    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );

    const data = await response.json();

    // 👇 Dizi karıştırma fonksiyonunu burada tanımlıyoruz
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // 👇 Verileri karıştır ve ilk 3'ü al
    const shuffledResults = shuffleArray(data.results).slice(0, 3);

    // 👇 Kartları oluştur ve ekrana yaz
    shuffledResults.forEach(moviee => {
      const cardss = document.createElement('li');
      cardss.className = 'cards';
      cardss.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${moviee.poster_path})`;

      cardss.innerHTML = `
        <div class="about">
          <h3 class="filmm-name">${moviee.title || moviee.name}</h3>
          <p class="filmm-content">${moviee.release_date}</p>
        </div>
        <div class="movies__list-item-rating">
          ${Array.from({ length: 5 }, (_, index) =>
            index < Math.round(moviee.vote_average || 0)
              ? '<img src="./images/star.png" alt="star">'
              : '<img src="./images/star-outline.png" alt="empty star">'
          ).join('')}
        </div>
      `;

      trendCards.appendChild(cardss);
    });
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  } finally {
    hideLoader();
  }
}

getWeeklyTrends();

const response = await fetch(
  'https://api.themoviedb.org/3/trending/all/week?language=en-US',
  options
);
const data = await response.json();
console.log('Gelen veri:', data);



