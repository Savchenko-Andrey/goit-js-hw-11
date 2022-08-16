export function countryInfo(common, svg, languages, capital, population) {
    return ` <div class="container">
    <img class="list-img" src="${svg}" alt="${common}" />
        <h2 class="description" >${common}</h2>
        </div>
        <ul>
          <li class="list-item animate__animated animate__backInRight">
             <p><b>Capital:</b> ${capital}</p>
          </li>
            <li class="list-item animate__animated animate__backInRight">
             <p><b>Population:</b> ${population}</p>
          </li>
            <li class="list-item animate__animated animate__backInRight">
             <p><b>Languages:</b> ${languages}</p>
          </li>
        </ul>
        `;
  }