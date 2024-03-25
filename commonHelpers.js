import{i as d,S as m}from"./assets/vendor-acbca2f4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h=document.querySelector(".search-form"),n=document.querySelector(".gallery"),l=document.querySelector(".loader");h.addEventListener("submit",y);l.hidden=!0;const p="42986246-3ae10d3224d15127557fd6ee9",f="https://pixabay.com/api/";function y(a){a.preventDefault(),n.innerHTML="",l.hidden=!1;const{searchRequest:o}=a.currentTarget.elements,s=new URLSearchParams({key:p,q:o.value,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{t.total||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),g(t.hits)}).catch(t=>console.log(t)).finally(()=>l.hidden=!0),a.currentTarget.reset()}function g(a){const o=a.map(({webformatURL:s,largeImageURL:t,tags:e,likes:r,views:i,comments:c,downloads:u})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${t}">
                <img src="${s}" alt="${e}" class="galleryItems-photo"></a>
                <div class="gallery-textWrapper">
                    <ul class="galleryItems-list">
                        <li class="galleryItem">
                            <h2>Likes</h2>
                            <p>${r}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Views</h2>
                            <p>${i}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${c}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${u}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("");n.insertAdjacentHTML("afterbegin",o),new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",widthRatio:.9,heightRatio:.8})}
//# sourceMappingURL=commonHelpers.js.map
