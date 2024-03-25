// import iziToast from "izitoast";

// import "izitoast/dist/css/iziToast.min.css";


// function onSearch() {
//     evt.preventDefault();
//     galleryList.innerHTML = "";
//     loader.hidden = false;

//     const KEY_API = "42986246-3ae10d3224d15127557fd6ee9";
//     const BASE_URL = "https://pixabay.com/api/";
//     const { searchRequest } = evt.currentTarget.elements;
//     const searchParams = new URLSearchParams({
//         key: KEY_API,
//         q: searchRequest.value,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//     });

//     return fetch(`${BASE_URL}?${searchParams}`).then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }
//         return response.json()
//     })
//         .then(data => {
//             if (!data.total) {
//                 iziToast.error({
//                     title: "Error",
//                     message: "Sorry, there are no images matching your search query. Please try again!",
//                 });
//             };
//             createGalleryMarkup(data.hits)

//         })
//         .catch(err => console.log(err))
//         .finally(() => loader.hidden = true)

//     evt.currentTarget.reset();
// }

// export { onSearch }