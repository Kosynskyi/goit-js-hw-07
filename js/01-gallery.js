import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

let imgEl;

galleryEl.insertAdjacentHTML("beforeend", galleryNewEl);

galleryEl.addEventListener("click", hendlerEl);

function hendlerEl(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  imgEl = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`, {
    onShow: () => {
      window.addEventListener("keydown", closeModal);
    },
    onClose: () => {
      window.removeEventListener("keydown", closeModal);
    },
  });

  imgEl.show();
}

function closeModal(event) {
  if (event.code !== "Escape") {
    return;
  }
  imgEl.close();
}
