import{s as u,r as h,h as g}from"./assets/members-modal-DNZfgADC.js";import"./assets/hero-SXnUhCg4.js";const m=document.querySelector(".trend-cards");async function p(){try{let n=function(e){for(let t=e.length-1;t>0;t--){const d=Math.floor(Math.random()*(t+1));[e[t],e[d]]=[e[d],e[t]]}return e};u();const o=await(await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTk4ZmY3ODg1ZTM2MWU4Y2UxZDVlYjZkMWQ3ZGU4NiIsIm5iZiI6MTc0MzY4NTIxNS4xNDIwMDAyLCJzdWIiOiI2N2VlODY1ZjAzNTQwY2Y4ZTU2MmI5NWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2dJFIqnvzkqw_5VH2b_FLFt5Hwkp3DrqAqyG_61G1pA"}})).json(),a=window.innerWidth<=576?1:3,c=n(o.results).slice(0,a);m.innerHTML="",c.forEach(e=>{const t=document.createElement("li");t.className="cards",t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original${e.poster_path})`,t.innerHTML=`
        <div class="about">
          <h3 class="filmm-name">${e.title||e.name}</h3>
          <p class="filmm-content">${e.release_date}</p>
        </div>
        <div class="movies__list-item-rating">
          ${Array.from({length:5},(d,y)=>y<Math.round(e.vote_average||0)?'<img src="./images/star.png" alt="star">':'<img src="./images/star-outline.png" alt="empty star">').join("")}
        </div>
      `,t.addEventListener("click",()=>{h(e)}),m.appendChild(t)})}catch(i){console.error("Veri çekme hatası:",i)}finally{g()}}p();let l=window.innerWidth;window.addEventListener("resize",()=>{(l<=576&&window.innerWidth>576||l>576&&window.innerWidth<=576)&&(l=window.innerWidth,p())});const v=async()=>new Promise((i,s)=>{fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k"}}).then(n=>n.json()).then(n=>{i(n)}).catch(n=>console.error(n))});v().then(i=>{const s=Math.floor(Math.random()*i.results.length),o=i.results[s];document.querySelector("#img-div-upcoming").style.backgroundImage=`url(https://image.tmdb.org/t/p/original${o.poster_path})`,document.querySelector("#upcoming-title").textContent=o.original_title,document.querySelector("#upcoming-date").textContent=o.release_date,document.querySelector("#upcoming-vote").textContent=o.vote_average.toFixed(1),document.querySelector("#upcoming-votes").textContent=o.vote_count,document.querySelector("#upcoming-popularity").textContent=o.popularity;const n={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};document.querySelector("#upcoming-genres").textContent=o.genre_ids.map(r=>n[r]).join(", "),document.querySelector("#upcoming-overview").textContent=o.overview,document.querySelector("#upcoming-add-library").setAttribute("data-movie",JSON.stringify(o)),document.querySelector("#upcoming-remove-library").setAttribute("data-movie-id",o.id),document.querySelector("#upcoming-add-library").addEventListener("click",r=>{const a=r.target.getAttribute("data-movie"),c=JSON.parse(localStorage.getItem("myLibrary"))||[];c.push(JSON.parse(a)),localStorage.setItem("myLibrary",JSON.stringify(c)),r.target.style.display="none",document.querySelector("#upcoming-remove-library").style.display="block"}),document.querySelector("#upcoming-remove-library").addEventListener("click",r=>{const a=r.target.getAttribute("data-movie-id");console.log("Movie ID:",a);const c=JSON.parse(localStorage.getItem("myLibrary"))||[];c.find(t=>t.id===Number(a));const e=c.filter(t=>t.id!==Number(a));console.log("Movie:",e)})});document.addEventListener("DOMContentLoaded",()=>{u(),window.addEventListener("load",()=>{setTimeout(()=>{g()},500)})});
//# sourceMappingURL=index.js.map
