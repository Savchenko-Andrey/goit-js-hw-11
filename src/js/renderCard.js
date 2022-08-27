export default function createCard(item) {
    const {
      largeImageURL,
      webformatURL,
      likes,
      views,
      comments,
      downloads,
      tags,
    } = item;
    return `
      <div class="photo-card">
       <a class="photo-card-shadow" href="${largeImageURL}">
          <img class="gallery__img" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
              <p class="info-item">
                  <b>Likes<br>${likes}</b>
              </p>
              <p class="info-item">
                  <b>Views<br>${views}</b>
              </p>
              <p class="info-item">
                  <b>Comments<br>${comments}</b>
              </p>
              <p class="info-item">
                  <b>Downloads<br>${downloads}</b>
              </p>
          </div>
      </div>
              `;
  }