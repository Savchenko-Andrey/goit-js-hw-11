import './css/styles.css';
import Notiflix from 'notiflix';
import * as _ from 'lodash.debounce';
import { fetchCountries } from './fetchCountries.js';
import { listInfo } from './listInfo.js';
import { countryInfo } from './countryInfo.js';

Notiflix.Notify.init({
    width: '380px',
    position: 'right-top',
    distance: '16px',
});

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    country: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
}

refs.input.addEventListener('input', _(onSearch, DEBOUNCE_DELAY));

function onSearch (e) {
    e.preventDefault();

    let form = e.target.value;
    if (form.trim() === '') {
        return;
    }
    
    fetchCountries(form.trim()).then(form => {
        clearHTMLList();
    
        if (form.length === 1) {
            Notiflix.Notify.success('Correct name');
            return infoCountry(form);
          } else if (form.length > 1) {
            return renderCountries(form);
          }
    })
}



function clearHTMLList() {
    refs.info.innerHTML = '';
    refs.country.innerHTML = '';
  }
    


function renderCountries(countries) {
    countries.forEach(item => {
        const {
            name: {official},
            flags: {svg},
            } = item
            renderList(official, svg)
    })
}

function infoCountry(country){
    const {
        name: { official },
        flags: { svg },
        languages,
        capital,
        population,
      } = country[0];

      const value = Object.values(languages)
      refs.info.insertAdjacentHTML(
        'afterbegin',
        countryInfo(official, svg, value, capital, population)
      );
}

function renderList(country, img) {
    refs.country.insertAdjacentHTML(
      'afterbegin',
      listInfo(country, img)
    );
  }


