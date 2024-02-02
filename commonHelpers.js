import{S as m,i as a}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",p="42148811-877485cb71de5bd48342bfa16",g=document.querySelector("#form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});d();g.addEventListener("submit",b);function b(s){s.preventDefault();const o=s.currentTarget.elements.images.value;if(c.innerHTML="",!o.trim()){a.show({message:"Please, fill in the search field",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:4e3});return}u(),L(o).then(r=>{if(r.hits.length===0){a.show({message:"Sorry, there are no images matching your search query.",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:4e3});return}c.innerHTML=k(r.hits),y.refresh()}).catch(r=>{console.error(r)}).finally(()=>{d()}),s.currentTarget.reset()}function L(s){const i=new URLSearchParams({key:p,q:s,type:"photo",orientation:"horizontal",safesearch:!0});return u(),fetch(`${h}?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function k(s){return s.map(({webformatURL:i,largeImageURL:o,tags:r,likes:e,views:t,comments:n,downloads:f})=>`
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
          <p class="amount">${f}</p>
        </div>
      </div>
    </li>`).join("")}function u(){l&&(l.style.display="block")}function d(){l&&(l.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
