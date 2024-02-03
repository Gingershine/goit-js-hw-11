import{S as f,i as a}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="42148811-877485cb71de5bd48342bfa16",p=document.querySelector("#form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});u();p.addEventListener("submit",y);function y(s){s.preventDefault();const o=s.currentTarget.elements.images.value;if(c.innerHTML="",!o.trim()){a.show({message:"Please, fill in the search field",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:4e3});return}k(),b(o).then(r=>{if(r.hits.length===0){a.show({message:"Sorry, there are no images matching your search query.",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:4e3});return}c.innerHTML=L(r.hits),g.refresh()}).catch(r=>{console.error(r)}).finally(()=>{u()}),s.currentTarget.reset()}function b(s){const i=new URLSearchParams({key:h,q:s,type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function L(s){return s.map(({webformatURL:i,largeImageURL:o,tags:r,likes:e,views:t,comments:n,downloads:d})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${r}"
          width="360"
        />
      </a>
      <div class="info-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${d}</p>
        </div>
      </div>
    </li>`).join("")}function k(){l&&(l.style.display="block")}function u(){l&&(l.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
