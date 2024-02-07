import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = galleryItems.map(({preview, original, description}) => {
return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div> `})        
        
        gallery.insertAdjacentHTML(`beforeend`, images.join(""))



gallery.addEventListener("click",(event) => {
    event.preventDefault();
    const lightbox = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}" />>`);
    lightbox.show();}
     )





