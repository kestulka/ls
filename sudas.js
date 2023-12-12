import duomenys from "./data2.js";

// funkcija sukurti nauja array is LS isparsintos datos
function salysArrayFromLS() {
  const infoIsLS = localStorage.getItem("salys");
  return infoIsLS === null ? [] : JSON.parse(infoIsLS);
}

// funkcija tikrinti ar salis jau yra salys array
function isCountryInSalys(salys, countryName) {
  return salys.some((savedCountry) => savedCountry.name === countryName);
}

// funkcija prideti sali i array
function addCountryToSalys(salys, country) {
  salys.push(country);
}

// funkcija atspausdinti data
function logDataFromSalys(index, addCountry) {
  console.log(`${index + 1} data: `);
  console.log(`country name: ${addCountry.name}`);
  console.log(`capital: ${addCountry.capital}`);
  console.log("-----------------------------");
}

// main

const salys = salysArrayFromLS();

duomenys.forEach((country, index) => {
  if (!isCountryInSalys(salys, country.name.common)) {
    const addCountry = {
      name: country.name.common,
      capital:
        country.capital && country.capital.length > 0
          ? country.capital[0]
          : "N/A",
    };
    addCountryToSalys(salys, addCountry);
    logDataFromSalys(index, addCountry);
  }
});

localStorage.setItem("salys", JSON.stringify(salys));
