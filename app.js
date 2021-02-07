

// ================ 1ST WAY ======================
// function displayCountry = countries =>{}
// function displayCountry(countries){
//     const ul = document.getElementById('countryName');
//     for(i= 0; i< countries.length; i++){
//         const country = countries[i];
//         const li = document.createElement('li');
//         li.innerText = country.name;
//         ul.appendChild(li);
//     }
// }

// ================ 2ND WAY ======================
// function displayCountry(countries){
//     const countriesDiv = document.getElementById('countryName');
//     for(i= 0; i< countries.length; i++){
//         const country = countries[i];
//         const countryDiv = document.createElement('div');

//         const name = document.createElement('h3');
//         name.innerText = country.name;
//         const capital = document.createElement('h5');
//         capital.innerText = country.capital;

//         countryDiv.appendChild(name);
//         countryDiv.appendChild(capital);

//         countriesDiv.appendChild(countryDiv);

        
//     }
// }

// ================ 3RD WAY ======================
// function displayCountry(countries){
//     const countriesDiv = document.getElementById('countryName');
//     for(i= 0; i< countries.length; i++){
//         const country = countries[i];
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';

//         const countryInfo = `
//         <h3 class="country-name">${country.name}</h3>
//         <h5 class="country-capital">${country.capital}</h5>
//         `
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);      
//     }
// }
// ================ 4th WAY ======================
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountry(data));


function displayCountry(countries){
    const countriesDiv = document.getElementById('countryName');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <h5 class="country-capital">${country.capital}</h5>
        <button onclick="displayCountryDetail('${country.name}')"> Details </button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv); 
    });  
}

const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data => randomCountryInfo(data[0]))
}
const randomCountryInfo = country =>{
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML =`
    <img src="${country.flag}">
    <h1>Country: ${country.name}</h1>
    <h3>Capital: ${country.capital}</h3>
    <p>Area: ${country.area}</p>
    <p>Population: ${country.population}</p> 
    `;
}