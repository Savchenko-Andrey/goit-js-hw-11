import Notiflix from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1';
const FIELDS = 'fields=name,capital,currencies,languages,population,flags';

function fetchCountries(countryName){
    return fetch(`${BASE_URL}/name/${countryName}?${FIELDS}`)
    .then(response =>  {
        if (!response.ok) {
            Notiflix.Notify.failure('Oops, there is no country with that name');
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(form => {
          if (form.length > 10) {
            Notiflix.Notify.info(
              'Too many matches found. Please enter a more specific name.'
            );
            return [];
          }
          return form;
        })
        .catch(error => {
          error;
        });
}

export { fetchCountries };
