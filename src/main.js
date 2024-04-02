
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";

// import { createGalleryMarkup } from "./js/render-functions";
// import { onSearch } from "./js/pixabay-api";

// У файлі main.js напиши всю логіку роботи додатка.

const form = document.querySelector(".search-form");
const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", onSearch);
loader.hidden = true;

const KEY_API = "42986246-3ae10d3224d15127557fd6ee9";
const BASE_URL = "https://pixabay.com/api/";

// onSearch(evt)
function onSearch(evt) {
    evt.preventDefault();
    galleryList.innerHTML = "";
    loader.hidden = false;
    const { searchRequest } = evt.currentTarget.elements;
    const searchParams = new URLSearchParams({
        key: KEY_API,
        q: searchRequest.value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
        .then(data => {
            if (!data.total) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            };
            createGalleryMarkup(data.hits)

        })
        .catch(err => console.log(err))
        .finally(() => loader.hidden = true)

    form.reset();
}

// createGalleryMarkup()
function createGalleryMarkup(arr) {
    const markup = arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" class="galleryItems-photo"></a>
                <div class="gallery-textWrapper">
                    <ul class="galleryItems-list">
                        <li class="galleryItem">
                            <h2>Likes</h2>
                            <p>${likes}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Views</h2>
                            <p>${views}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${comments}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${downloads}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("");

    galleryList.insertAdjacentHTML('afterbegin', markup);

    new SimpleLightbox('.gallery a',
        {
            captionsData: 'alt',
            captionDelay: 250,
            captionPosition: 'bottom',
            widthRatio: 0.9,
            heightRatio: 0.8,
        });
}
