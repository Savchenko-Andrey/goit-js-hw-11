export function listInfo(country, svg) {
    return `
      <li class="list-item">
        <div class="container">
          <img class="list-img" src="${svg}" />
          <h2 description animate__animated animate__shakeX>${country}</h2>
        </div>
      </li>
    
      `;
  }