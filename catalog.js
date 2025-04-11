import{s as y,r as E,h as b}from"./assets/members-modal-CQYXsYt3.js";import"./assets/hero-DpNbW6zs.js";const m=document.querySelector(".movies__list-items"),u=document.querySelector(".pagination-container");let t=1,c=0,p="",f;const L=document.querySelector(".movies__search"),M=document.querySelector("#catalog-search-btn"),h=document.querySelector(".clear-search");M.addEventListener("click",()=>{const e=document.createElement("div");e.textContent="BOSU BOSUNA O TUSA BASMA ARTIK ZATEN INPUT YERINE YAZINCA ARIYOR!",e.style.cssText=`
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
    `,document.body.appendChild(e),setTimeout(()=>{e.style.opacity="1"},0)});L.addEventListener("input",e=>{p=e.target.value.trim(),p?h.classList.add("visible"):h.classList.remove("visible"),clearTimeout(f),f=setTimeout(()=>{t=1,d(t)},500)});h.addEventListener("click",()=>{L.value="",p="",h.classList.remove("visible"),t=1,d(t)});async function d(e=1){y();try{const n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y"}},o=p?`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(p)}&language=en-US&page=${e}`:`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${e}`,r=await(await fetch(o,n)).json();if(c=r.total_pages,m.innerHTML="",r.results.length===0){m.innerHTML=`
        <li class="no-results">
          <h2>OOPS...</h2>
          <p>We are very sorry!</p>
          <p>We don't have any results matching your search.</p>
        </li>
      `,u.innerHTML="";return}r.results.forEach(s=>{const a=document.createElement("li");a.className="movies__list-item",a.style.background="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",a.style.backgroundImage=`url(https://image.tmdb.org/t/p/original${s.poster_path})`;const i=['<span class="star star-outline"></span>','<span class="star star-outline"></span>','<span class="star star-outline"></span>','<span class="star star-outline"></span>','<span class="star star-outline"></span>'];for(let g=0;g<=s.vote_average/2;g++)i[g]='<span class="star star"></span>';a.innerHTML=`
        <div class="movies__list-item-info">
          <div class="movies__list-item-info-container">
            <h3 class="movies__list-item-title">${s.title||s.name}</h3>
            <p class="movies__list-item-description">${s.release_date||s.first_air_date||""}</p>
          </div>
          <div class="movies__list-item-rating">
            ${i.join("")}
          </div>
        </div>
      `,a.addEventListener("click",()=>{E(s)}),m.appendChild(a)}),T()}catch(n){console.error("Error fetching movies:",n),m.innerHTML='<li class="error-message">Filmler yüklenirken bir hata oluştu.</li>'}finally{b()}}function T(){u.innerHTML="";const e=document.createElement("div");e.className="pagination-wrapper";const n=document.createElement("button");n.innerHTML="<",n.className="pagination-button prev",n.disabled=t===1,n.addEventListener("click",()=>{t>1&&(t--,d(t))});const o=document.createElement("div");o.className="pagination-pages";let l=Math.max(1,t-1),r=Math.min(c,l+2);if(r===c&&(l=Math.max(1,r-2)),l>1){const a=v(1);if(o.appendChild(a),l>2){const i=document.createElement("span");i.textContent="...",i.className="pagination-ellipsis",o.appendChild(i)}}for(let a=l;a<=r;a++){const i=v(a);o.appendChild(i)}if(r<c){if(r<c-1){const i=document.createElement("span");i.textContent="...",i.className="pagination-ellipsis",o.appendChild(i)}const a=v(c);o.appendChild(a)}const s=document.createElement("button");s.innerHTML=">",s.className="pagination-button next",s.disabled=t===c,s.addEventListener("click",()=>{t<c&&(t++,d(t))}),e.appendChild(n),e.appendChild(o),e.appendChild(s),u.appendChild(e)}function v(e){const n=document.createElement("button");return n.textContent=e.toString().padStart(2,"0"),n.className="pagination-button page",e===t&&n.classList.add("active"),n.addEventListener("click",()=>{e!==t&&(t=e,d(t))}),n}document.addEventListener("DOMContentLoaded",()=>{if(!u){const e=document.createElement("div");e.className="pagination-container",document.querySelector(".movies__list").after(e)}d()});document.addEventListener("DOMContentLoaded",()=>{y(),window.addEventListener("load",()=>{setTimeout(()=>{b()},500)})});
//# sourceMappingURL=catalog.js.map
