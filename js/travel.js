
/*=== GET DOM Elements ===*/
const countriesContainer = document.querySelector('#main-content');

const buildEachCountry = (country) => {
  const a = document.createElement('a');
  a.classList.add('main-content-travel-country');
  a.innerHTML = `
  <p class="main-content-travel-country-icon blue-text">
      i
  </p>
  <p class="main-content-travel-country-name white-text">
      ${country}
  </p>
  `
  countriesContainer.appendChild(a)
}

const showCountriesList = (arr) => {
  arr.forEach(country => {
    buildEachCountry(country)
  });

}

showCountriesList(countries)