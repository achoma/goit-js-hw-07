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
gallery.addEventListener("click",(event) => {
    event.preventDefault();
    const lightbox = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}" />>`);
    lightbox.show();
    } )





