import{S as m,i as h}from"./assets/vendor-acbca2f4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:l,views:c,comments:u,downloads:d})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${e}">
                <img src="${a}" alt="${t}" class="galleryItems-photo"></a>
                <div class="gallery-textWrapper">
                    <ul class="galleryItems-list">
                        <li class="galleryItem">
                            <h2>Likes</h2>
                            <p>${l}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Views</h2>
                            <p>${c}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${u}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${d}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("");r.insertAdjacentHTML("afterbegin",s),new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",widthRatio:.9,heightRatio:.8})}function f(o){const r="42986246-3ae10d3224d15127557fd6ee9",s="https://pixabay.com/api/",a=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{e.total||h.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),p(e.hits)}).catch(e=>console.log(e)).finally(()=>loader.hidden=!0)}const i=document.querySelector(".search-form"),y=document.querySelector(".gallery"),n=document.querySelector(".loader");i.addEventListener("submit",g);n.hidden=!0;function g(o){o.preventDefault(),y.innerHTML="",n.hidden=!1;const{searchRequest:r}=o.currentTarget.elements;let s=r.value;f(s),i.reset()}
//# sourceMappingURL=commonHelpers.js.map
