import{s as m,r as M,h as d}from"./members-modal-B7GHqlHS.js";const l=document.querySelector("#errorModal"),I=document.querySelector("#errorModalClose"),p=()=>{l&&(l.style.display="none")};l&&l.addEventListener("click",e=>{e.target===l&&p()});I&&I.addEventListener("click",()=>{p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&p()});const f=async()=>new Promise((e,c)=>{const i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k"}};m(),fetch("https://api.themoviedb.org/3/trending/all/week?language=en-US",i).then(t=>t.json()).then(t=>{e(t)}).catch(t=>{console.error(t),c(t)}).finally(()=>{d()})}),z=async e=>new Promise((c,i)=>{try{const t=document.querySelector("#hero-get-started"),n=document.querySelector("#hero-watch-trailer"),s=document.querySelector("#more-details");n.style.display="none",s.style.display="none",m();const h={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k"}};console.log("Movie ID:",e),fetch(`https://api.themoviedb.org/3/movie/${e}/videos?language=en-US`,h).then(r=>r.json()).then(r=>{if(!r||!r.results){s.style.display="none",t.addEventListener("click",()=>{document.querySelector(".error-modal").style.display="flex"});return}t.style.display="none",n.style.display="block",s.style.display="block",s.addEventListener("click",()=>{M(r)}),n.textContent="Watch Trailer";const a=r.results.find(o=>o.site==="YouTube"&&o.type==="Trailer");c(a),r.results.length>0&&r.results.forEach(o=>{o.type==="Trailer"&&(n.textContent="Watch Trailer",n.addEventListener("click",()=>{const y=`https://www.youtube.com/watch?v=${o.key}`;window.open(y,"_blank")}))})}).catch(r=>console.error(r))}catch(t){console.error("Error in getMovieVideos:",t)}finally{d()}}),g=async()=>{try{const e=['<span class="star star-outline"></span>','<span class="star star-outline"></span>','<span class="star star-outline"></span>','<span class="star star-outline"></span>','<span class="star star-outline"></span>'],c=document.querySelector("#hero__content-title"),i=document.querySelector("#hero__content-stars"),t=document.querySelector("#hero__content-info-text"),n=document.querySelector("#hero-content-button-area"),s=document.querySelector("#more-details"),h=document.querySelector("#hero__content-background-image"),r=Math.floor(Math.random()*20);m(),f().then(async a=>{const o=a.results[r],y=Math.round(o.vote_average/2);h.src=`https://image.tmdb.org/t/p/original/${o.backdrop_path}`,c.textContent=o.original_name||o.original_title,t.textContent=o.overview;for(let u=0;u<=y;u++)e[u]='<span class="star star"></span>';i.innerHTML=e.join(""),s.addEventListener("click",()=>{M(o)}),z(o.id)}).catch(a=>{console.error("Error fetching daily trends:",a)}).finally(()=>{d()})}catch(e){console.error("Error in heroRender:",e),d()}};g();
//# sourceMappingURL=hero-DC6qeKfx.js.map
