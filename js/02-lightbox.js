import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")
for (const item of galleryItems){
    const images = `<li>
        <div class="gallery__item">
            <a class="gallery__item" href="${item.original}">
               <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </div> </li>`;
    gallery.insertAdjacentHTML(`beforeend`, images)
}
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });




