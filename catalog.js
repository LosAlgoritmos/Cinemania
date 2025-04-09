import{s as v,h as y}from"./assets/members-modal-ePwIciLd.js";import"./assets/hero-Cz4UtpxF.js";const p=document.querySelector(".movies__list-items"),m=document.querySelector(".pagination-container");let n=1,c=0,g="",h;const T=document.querySelector(".movies__search"),M=document.querySelector("#catalog-search-btn");M.addEventListener("click",()=>{const e=document.createElement("div");e.textContent="BOSU BOSUNA O TUSA BASMA ARTIK ZATEN INPUT YERINE YAZINCA ARIYOR!",e.style.cssText=`
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
    `,document.body.appendChild(e),setTimeout(()=>{e.style.opacity="1"},0),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),300)},1e3)});T.addEventListener("input",e=>{g=e.target.value.trim(),clearTimeout(h),h=setTimeout(()=>{n=1,d(n)},500)});async function d(e=1){v();try{const t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y"}},o=g?`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(g)}&language=en-US&page=${e}`:`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${e}`,r=await(await fetch(o,t)).json();if(c=r.total_pages,p.innerHTML="",r.results.length===0){p.innerHTML=`
        <li class="no-results">
          <h2>OOPS...</h2>
          <p>We are very sorry!</p>
          <p>We don't have any results matching your search.</p>
        </li>
      `,m.innerHTML="";return}r.results.forEach(i=>{const a=document.createElement("li");a.className="movies__list-item",a.style.background="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",a.style.backgroundImage=`url(https://image.tmdb.org/t/p/original${i.poster_path})`,a.innerHTML=`
        <div class="movies__list-item-info">
          <div class="movies__list-item-info-container">
            <h3 class="movies__list-item-title">${i.title||i.name}</h3>
            <p class="movies__list-item-description">${i.release_date||i.first_air_date||""}</p>
          </div>
          <div class="movies__list-item-rating">
            ${Array.from({length:5},(s,f)=>f<Math.round(i.vote_average/2)?'<img src="./images/star.png" alt="star">':'<img src="./images/star-outline.png" alt="empty star">').join("")}
          </div>
        </div>
      `,p.appendChild(a)}),b()}catch(t){console.error("Error fetching movies:",t),p.innerHTML='<li class="error-message">Filmler yüklenirken bir hata oluştu.</li>'}finally{y()}}function b(){m.innerHTML="";const e=document.createElement("div");e.className="pagination-wrapper";const t=document.createElement("button");t.innerHTML="<",t.className="pagination-button prev",t.disabled=n===1,t.addEventListener("click",()=>{n>1&&(n--,d(n))});const o=document.createElement("div");o.className="pagination-pages";let l=Math.max(1,n-1),r=Math.min(c,l+2);if(r===c&&(l=Math.max(1,r-2)),l>1){const a=u(1);if(o.appendChild(a),l>2){const s=document.createElement("span");s.textContent="...",s.className="pagination-ellipsis",o.appendChild(s)}}for(let a=l;a<=r;a++){const s=u(a);o.appendChild(s)}if(r<c){if(r<c-1){const s=document.createElement("span");s.textContent="...",s.className="pagination-ellipsis",o.appendChild(s)}const a=u(c);o.appendChild(a)}const i=document.createElement("button");i.innerHTML=">",i.className="pagination-button next",i.disabled=n===c,i.addEventListener("click",()=>{n<c&&(n++,d(n))}),e.appendChild(t),e.appendChild(o),e.appendChild(i),m.appendChild(e)}function u(e){const t=document.createElement("button");return t.textContent=e.toString().padStart(2,"0"),t.className="pagination-button page",e===n&&t.classList.add("active"),t.addEventListener("click",()=>{e!==n&&(n=e,d(n))}),t}document.addEventListener("DOMContentLoaded",()=>{if(!m){const e=document.createElement("div");e.className="pagination-container",document.querySelector(".movies__list").after(e)}d()});document.addEventListener("DOMContentLoaded",()=>{v(),window.addEventListener("load",()=>{setTimeout(()=>{y()},500)})});
//# sourceMappingURL=catalog.js.map
