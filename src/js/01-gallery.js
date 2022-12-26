import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const makeGalleryItemsMarkup = images =>
  images
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `
    )
    .join('');

galleryRef.insertAdjacentHTML(
  'beforeend',
  makeGalleryItemsMarkup(galleryItems)
);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryRef.addEventListener('click', event => {
  event.preventDefault();
});
