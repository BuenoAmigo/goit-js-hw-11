import{i as m,S as h}from"./assets/vendor-acbca2f4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const n=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");n.addEventListener("submit",y);l.hidden=!0;const p="42986246-3ae10d3224d15127557fd6ee9",f="https://pixabay.com/api/";function y(s){s.preventDefault(),c.innerHTML="",l.hidden=!1;const{searchRequest:o}=s.currentTarget.elements,a=new URLSearchParams({key:p,q:o.value,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${f}?${a}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{t.total||m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),g(t.hits)}).catch(t=>console.log(t)).finally(()=>l.hidden=!0),n.reset()}function g(s){const o=s.map(({webformatURL:a,largeImageURL:t,tags:e,likes:r,views:i,comments:u,downloads:d})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${t}">
                <img src="${a}" alt="${e}" class="galleryItems-photo"></a>
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
    </div>`).join("");c.insertAdjacentHTML("afterbegin",o),new h(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",widthRatio:.9,heightRatio:.8})}
//# sourceMappingURL=commonHelpers.js.map
