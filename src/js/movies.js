import { showLoader, hideLoader, fetchWithLoader } from './loader.js';

const moviesList = document.querySelector('.movies__list-items');
const paginationContainer = document.querySelector('.pagination-container');

// State
let currentPage = 1;
let totalPages = 0;

// Function to fetch movies for a specific page
async function getMovies(page = 1) {
  showLoader();
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y'
      }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options);
    const data = await response.json();
    
    totalPages = data.total_pages;
    
    moviesList.innerHTML = '';
    
    // Render movies
    data.results.forEach(movie => {
      const li = document.createElement('li');
      li.className = 'movies__list-item';
      
      // Set up background with gradient overlay and poster image
      li.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))';
      li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
      
      // Note: No inline dimensions - CSS handles these now

      li.innerHTML = `
        <div class="movies__list-item-info">
          <div class="movies__list-item-info-container">
            <h3 class="movies__list-item-title">${movie.title || movie.name}</h3>
            <p class="movies__list-item-description">${movie.release_date || movie.first_air_date || ''}</p>
          </div>
          <div class="movies__list-item-rating">
            ${Array.from({length: 5}, (_, index) => 
              index < Math.round(movie.vote_average / 2) 
                ? '<img src="./images/star.png" alt="star">'
                : '<img src="./images/star-outline.png" alt="empty star">'
            ).join('')}
          </div>
        </div>
      `;

      moviesList.appendChild(li);
    });
    
    renderPagination();
  } catch (err) {
    console.error('Error fetching movies:', err);
  } finally {
    hideLoader();
  }
}

// Function to render pagination controls
function renderPagination() {
  paginationContainer.innerHTML = '';
  const paginationWrapper = document.createElement('div');
  paginationWrapper.className = 'pagination-wrapper';
  
  const prevButton = document.createElement('button');
  prevButton.innerHTML = '<';
  prevButton.className = 'pagination-button prev';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      getMovies(currentPage);
    }
  });
  
  const pageButtons = document.createElement('div');
  pageButtons.className = 'pagination-pages';
  
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);
  
  if (endPage === totalPages) {
    startPage = Math.max(1, endPage - 2);
  }
  
  if (startPage > 1) {
    const firstPageBtn = createPageButton(1);
    pageButtons.appendChild(firstPageBtn);
    
    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.className = 'pagination-ellipsis';
      pageButtons.appendChild(ellipsis);
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = createPageButton(i);
    pageButtons.appendChild(pageBtn);
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.className = 'pagination-ellipsis';
      pageButtons.appendChild(ellipsis);
    }
    
    const lastPageBtn = createPageButton(totalPages);
    pageButtons.appendChild(lastPageBtn);
  }
  
  const nextButton = document.createElement('button');
  nextButton.innerHTML = '>';
  nextButton.className = 'pagination-button next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      getMovies(currentPage);
    }
  });
  
  paginationWrapper.appendChild(prevButton);
  paginationWrapper.appendChild(pageButtons);
  paginationWrapper.appendChild(nextButton);
  paginationContainer.appendChild(paginationWrapper);
}

function createPageButton(pageNum) {
  const button = document.createElement('button');
  button.textContent = pageNum.toString().padStart(2, '0');
  button.className = 'pagination-button page';
  
  if (pageNum === currentPage) {
    button.classList.add('active');
  }
  
  button.addEventListener('click', () => {
    if (pageNum !== currentPage) {
      currentPage = pageNum;
      getMovies(currentPage);
    }
  });
  
  return button;
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Add pagination container if it doesn't exist
  if (!paginationContainer) {
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination-container';
    document.querySelector('.movies__list').after(paginationDiv);
  }
  
  // Get movies for the first page
  getMovies();
});