import{s as y,r as T,h as I}from"./assets/members-modal-CG6umtly.js";import"./assets/hero-OeItsHXC.js";const m=document.querySelector(".movies__list-items"),u=document.querySelector(".pagination-container");let t=1,c=0,p="",v;const f=document.querySelector(".movies__search"),b=document.querySelector("#catalog-search-btn"),h=document.querySelector(".clear-search");b.addEventListener("click",()=>{const e=document.createElement("div");e.textContent="BOSU BOSUNA O TUSA BASMA ARTIK ZATEN INPUT YERINE YAZINCA ARIYOR!",e.style.cssText=`
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 2.6rem;
    `,document.body.appendChild(e),setTimeout(()=>{e.style.opacity="1"},0)});f.addEventListener("input",e=>{p=e.target.value.trim(),p?h.classList.add("visible"):h.classList.remove("visible"),clearTimeout(v),v=setTimeout(()=>{t=1,d(t)},500)});h.addEventListener("click",()=>{f.value="",p="",h.classList.remove("visible"),t=1,d(t)});async function d(e=1){y();try{const n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y"}},o=p?`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(p)}&language=en-US&page=${e}`:`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${e}`,r=await(await fetch(o,n)).json();if(c=r.total_pages,m.innerHTML="",r.results.length===0){m.innerHTML=`
        <li class="no-results">
          <h2>OOPS...</h2>
          <p>We are very sorry!</p>
          <p>We don't have any results matching your search.</p>
        </li>
      `,u.innerHTML="";return}r.results.forEach(a=>{const i=document.createElement("li");i.className="movies__list-item",i.style.background="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",i.style.backgroundImage=`url(https://image.tmdb.org/t/p/original${a.poster_path})`,i.innerHTML=`
        <div class="movies__list-item-info">
          <div class="movies__list-item-info-container">
            <h3 class="movies__list-item-title">${a.title||a.name}</h3>
            <p class="movies__list-item-description">${a.release_date||a.first_air_date||""}</p>
          </div>
          <div class="movies__list-item-rating">
            ${Array.from({length:5},(s,M)=>M<Math.round(a.vote_average/2)?'<img src="./images/star.png" alt="star">':'<img src="./images/star-outline.png" alt="empty star">').join("")}
          </div>
        </div>
      `,i.addEventListener("click",()=>{T(a)}),m.appendChild(i)}),N()}catch(n){console.error("Error fetching movies:",n),m.innerHTML='<li class="error-message">Filmler yüklenirken bir hata oluştu.</li>'}finally{I()}}function N(){u.innerHTML="";const e=document.createElement("div");e.className="pagination-wrapper";const n=document.createElement("button");n.innerHTML="<",n.className="pagination-button prev",n.disabled=t===1,n.addEventListener("click",()=>{t>1&&(t--,d(t))});const o=document.createElement("div");o.className="pagination-pages";let l=Math.max(1,t-1),r=Math.min(c,l+2);if(r===c&&(l=Math.max(1,r-2)),l>1){const i=g(1);if(o.appendChild(i),l>2){const s=document.createElement("span");s.textContent="...",s.className="pagination-ellipsis",o.appendChild(s)}}for(let i=l;i<=r;i++){const s=g(i);o.appendChild(s)}if(r<c){if(r<c-1){const s=document.createElement("span");s.textContent="...",s.className="pagination-ellipsis",o.appendChild(s)}const i=g(c);o.appendChild(i)}const a=document.createElement("button");a.innerHTML=">",a.className="pagination-button next",a.disabled=t===c,a.addEventListener("click",()=>{t<c&&(t++,d(t))}),e.appendChild(n),e.appendChild(o),e.appendChild(a),u.appendChild(e)}function g(e){const n=document.createElement("button");return n.textContent=e.toString().padStart(2,"0"),n.className="pagination-button page",e===t&&n.classList.add("active"),n.addEventListener("click",()=>{e!==t&&(t=e,d(t))}),n}document.addEventListener("DOMContentLoaded",()=>{if(!u){const e=document.createElement("div");e.className="pagination-container",document.querySelector(".movies__list").after(e)}d()});const E={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y"}};fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",E).then(e=>e.json()).then(e=>console.log(e)).catch(e=>console.error(e));document.addEventListener("DOMContentLoaded",()=>{y(),window.addEventListener("load",()=>{setTimeout(()=>{I()},500)})});
//# sourceMappingURL=catalog.js.map
