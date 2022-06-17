import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryNewEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryNewEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
  disableRightClick: true,
});
