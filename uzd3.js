import duomenys from "./data2.js";

const infoIsLS = localStorage.getItem("salys");

const salys = infoIsLS === null ? [] : JSON.parse(infoIsLS);

duomenys.forEach((country, index) => {
  const isCountryInLS = salys.some(
    (savedCountry) => savedCountry.name === country.name.common,
  );

  if (!isCountryInLS) {
    const addCountry = {
      name: country.name.common,
      capital:
        country.capital && country.capital.length > 0
          ? country.capital[0]
          : "Data not found",
    };

    salys.push(addCountry);
    console.log(`${index + 1} data: `);
    console.log(`country name: ${addCountry.name}`);
    console.log(`capital: ${addCountry.capital}`);
    console.log("-----------------------------");
  }
});

localStorage.setItem("salys", JSON.stringify(salys));

// kai nebeloadina:
// localStorage.clear();
