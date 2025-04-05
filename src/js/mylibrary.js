// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzZkMTZjOWU1MTMyNTlkYThmY2Y2MzAwZjFmZWI3OCIsIm5iZiI6MTc0MzcwNjgxNi42NTEsInN1YiI6IjY3ZWVkYWMwYjNlMDM1Mjg2Y2Q5MGQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhiQgrAi8xURVIwPyhgnrhq88KOZAEHcX1G8OwLmwQM'
//     }
// };

// fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

// localStorage'da veriler JSON formatında string olarak saklanır.
// Örnek film dizisi:
// const filmListesi = [
//     { title: "Inception", director: "Christopher Nolan" },
//     { title: "Interstellar", director: "Christopher Nolan" }
// ];

// // Bunu localStorage'a kaydet:
// localStorage.setItem("filmler", JSON.stringify(filmListesi));

function showMovies() {
    const filmContainer = document.getElementById("movie-list");
    filmContainer.innerHTML = ""; // Önce temizle

    // localStorage'dan veriyi al
    const filmVerisi = localStorage.getItem("filmler");

    // Eğer veri varsa, işle
    if (filmVerisi) {
        const filmler = JSON.parse(filmVerisi);

        filmler.forEach((film, index) => {
            const filmDiv = document.createElement("div");
            filmDiv.classList.add("film");

            filmDiv.innerHTML = `
        <h3>${film.title}</h3>
        <p>Yönetmen: ${film.director}</p>
        <button onclick="filmiSil(${index})">Sil</button>
      `;

            filmContainer.appendChild(filmDiv);
        });
    } else {
        filmContainer.innerHTML = "<p>Hiç film bulunamadı.</p>";
    }
}

function filmiSil(index) {
    const filmVerisi = localStorage.getItem("filmler");
    if (!filmVerisi) return;

    const filmler = JSON.parse(filmVerisi);
    filmler.splice(index, 1); // Seçilen filmi sil
    localStorage.setItem("filmler", JSON.stringify(filmler));

    showMovies(); // Listeyi güncelle
}