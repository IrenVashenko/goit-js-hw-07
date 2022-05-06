import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerys = document.querySelector(".gallery");

function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </div>
            `
        }).join('');
};

const galleryMarkup = createImagesMarkup(galleryItems);
gallerys.insertAdjacentHTML('beforeend', galleryMarkup);


gallerys.addEventListener("click", galleryClickImage)

function galleryClickImage(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`,
        {
            onShow: (instance) => window.addEventListener("keydown", onCloseImage),
            onClose: (instance) => window.removeEventListener("keydown", onCloseImage)
        }
    )
    instance.show();

}
function onCloseImage(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
};










