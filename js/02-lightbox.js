import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")
for (const item of galleryItems){
    const images = `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
            </a>
        </div> `;
    gallery.insertAdjacentHTML(`beforeend`, images)
}
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });




