import{s as m,h as p}from"./assets/members-modal-ePwIciLd.js";import"./assets/hero-Cz4UtpxF.js";const d=document.querySelector(".trend-cards");async function h(){try{let i=function(o){for(let n=o.length-1;n>0;n--){const a=Math.floor(Math.random()*(n+1));[o[n],o[a]]=[o[a],o[n]]}return o};m();const e=await(await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTk4ZmY3ODg1ZTM2MWU4Y2UxZDVlYjZkMWQ3ZGU4NiIsIm5iZiI6MTc0MzY4NTIxNS4xNDIwMDAyLCJzdWIiOiI2N2VlODY1ZjAzNTQwY2Y4ZTU2MmI5NWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2dJFIqnvzkqw_5VH2b_FLFt5Hwkp3DrqAqyG_61G1pA"}})).json(),u=window.innerWidth<=576?1:3,M=i(e.results).slice(0,u);d.innerHTML="",M.forEach(o=>{const n=document.createElement("li");n.className="cards",n.style.backgroundImage=`url(https://image.tmdb.org/t/p/original${o.poster_path})`,n.innerHTML=`
        <div class="about">
          <h3 class="filmm-name">${o.title||o.name}</h3>
          <p class="filmm-content">${o.release_date}</p>
        </div>
        <div class="movies__list-item-rating">
          ${Array.from({length:5},(a,v)=>v<Math.round(o.vote_average||0)?'<img src="./images/star.png" alt="star">':'<img src="./images/star-outline.png" alt="empty star">').join("")}
        </div>
      `,d.appendChild(n)})}catch(t){console.error("Veri çekme hatası:",t)}finally{p()}}h();let c=window.innerWidth;window.addEventListener("resize",()=>{(c<=576&&window.innerWidth>576||c>576&&window.innerWidth<=576)&&(c=window.innerWidth,h())});const y=async()=>new Promise((t,r)=>{fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k"}}).then(i=>i.json()).then(i=>{t(i)}).catch(i=>console.error(i))});y().then(t=>{const r=Math.floor(Math.random()*t.results.length),e=t.results[r];console.clear(),console.log("Upcoming Movies:",e),console.log("Upcoming Movies - Key:",Object.keys(e)),console.log("Upcoming Movies - Title:",e.original_title),console.log("Upcoming Movies - Overview:",e.overview),console.log("Upcoming Movies - Release Date:",e.release_date),console.log("Upcoming Movies - Vote Average:",e.vote_average),console.log("Upcoming Movies - Vote Count:",e.vote_count),console.log("Upcoming Movies - Poster Path:",e.poster_path),console.log("Upcoming Movies - Backdrop Path:",e.backdrop_path),console.log("Upcoming Movies - Original Language:",e.original_language),console.log("Upcoming Movies - Original Title:",e.original_title),console.log("Upcoming Movies - Popularity:",e.popularity),console.log("Upcoming Movies - Video:",e.video),document.querySelector("#img-div-upcoming").style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${e.poster_path})`});const s=document.querySelector("#errorModal"),g=document.querySelector("#errorModalClose"),l=()=>{s&&(s.style.display="none")};s&&s.addEventListener("click",t=>{t.target===s&&l()});g&&g.addEventListener("click",()=>{l()});document.addEventListener("keydown",t=>{t.key==="Escape"&&l()});document.addEventListener("DOMContentLoaded",()=>{m(),window.addEventListener("load",()=>{setTimeout(()=>{p()},500)})});
//# sourceMappingURL=index.js.map
