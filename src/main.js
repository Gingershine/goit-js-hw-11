import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "42148811-877485cb71de5bd48342bfa16";

const form = document.querySelector("#form");
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
hideLoader()
form.addEventListener("submit", handleSearch);

function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const images = form.elements.images.value;
    
    gallery.innerHTML = '';

    if (!images.trim()) {
        iziToast.show({
            message: `Please, fill in the search field`,                    
            messageColor: 'white',
            backgroundColor: '#EF4040',
            position: 'topRight',
            timeout: 4000,
        });
        return;
    }
    showLoader();
    searchImages(images)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.show({                   
                    message: `Sorry, there are no images matching your search query.`,                    
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                    position: 'topRight',
                    timeout: 4000,
                });
                return;
            }
            
            gallery.innerHTML = createImagesMarkup(data.hits);

            lightbox.refresh();
            
         
        })
       .catch(error => {
      console.error(error);
    })
        .finally(() => {
        hideLoader();
      });


    event.currentTarget.reset();
}

function searchImages(images) {
    
    const urlParams = new URLSearchParams({
       key: API_KEY,
        q: images,
        type: "photo",
        orientation: "horizontal",
    safesearch: true,
    })
    
            return fetch(`${BASE_URL}?${urlParams}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json();
    });
}

function createImagesMarkup (arr) {
    return arr.map(
         ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        }) =>
      `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          width="360"
        />
      </a>
      <div class="info-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${likes}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${views}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${comments}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${downloads}</p>
        </div>
      </div>
    </li>`
    ).join('');
};

function showLoader() {
  if (loader) {
    loader.style.display = 'block';
  }
}

function hideLoader() {
  if (loader) {
    loader.style.display = 'none';
  }
}