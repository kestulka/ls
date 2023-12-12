"use strict";

// setItem / getItem

let cat = "Tom";
localStorage.setItem("tigras", cat);
let fromLs = localStorage.getItem("tigras");
console.log(fromLs);

let dog = "sabakeris";
localStorage.setItem("woofer", dog);
console.log(localStorage.getItem("woofer"));

const cats = {
  cat1: "Tom",
  cat2: "Garfield",
  cat3: "Pukis",
};
localStorage.setItem("catsArray", JSON.stringify(cats));

let catsFromLS = JSON.parse(localStorage.getItem("catsArray"));
console.log(catsFromLS);
console.log(catsFromLS.cat2);

const dogs = ["Pluto", "Winnie", "Blackie"];
localStorage.setItem("dogsArray", JSON.stringify(dogs));
let dogsFromLS = JSON.parse(localStorage.getItem("dogsArray"));
console.log(dogsFromLS);
console.log(dogsFromLS[2]);

const cats2 = [
  {
    cat1: "Tom",
    cat2: "Garfield",
    cat3: "Pukis",
  },
  {
    cat1: "Tom2",
    cat2: "Garfield2",
    cat3: "Pukis2",
  },
  {
    cat1: "Tom3",
    cat2: "Garfield3",
    cat3: "Pukis3",
  },
];
const jsonStringCats = JSON.stringify(cats2);
console.log(jsonStringCats); // stringify
const catsFromJson = JSON.parse(jsonStringCats);
console.log(catsFromJson); // parse

localStorage.setItem("catsArrayWithObjects", JSON.stringify(cats2));

const cats2FromLS = JSON.parse(localStorage.getItem("catsArrayWithObjects"));
console.log(cats2FromLS);
console.log(cats2FromLS[1].cat3);

// Retrieve data from local storage
const dataFromLS = localStorage.getItem("persons"); // Updated key to "persons"

// Parse the data or initialize an empty array if no data is present
const data = dataFromLS ? JSON.parse(dataFromLS) : [];

// Create a new person object
const person = {
  name: "Jane",
  lastname: "Dover",
};

// Add the new person to the data array
data.push(person);

// Store the updated data back in local storage
localStorage.setItem("persons", JSON.stringify(data)); // Updated key to "persons"

// Create another person object
const person1 = {
  name: "Petras",
  lastname: "Petrauskas",
};

// Retrieve the data from local storage again (use the correct variable name)
const dataFromLS1 = localStorage.getItem("persons"); // Updated key to "persons"
console.log(dataFromLS1);
const data1 = dataFromLS1 ? JSON.parse(dataFromLS1) : [];

// Check if a person with the name "Petras" and lastname "Petrauskas" already exists
const newArray = data1.find(
  (element) => element.name === "Petras" && element.lastname === "Petrauskas",
);
console.log(newArray);

if (newArray) {
  //   alert("Person already exists!");
} else {
  // If not found, add the new person to the data array and update local storage
  data1.push(person1);
  localStorage.setItem("persons", JSON.stringify(data1)); // Updated key to "persons"
  alert("New record saved!");
}

// session storage

// store data in sessionStorage
sessionStorage.setItem("username", "john_doe");

// retrieve data from sessionStorage
const storedUsername = sessionStorage.getItem("username");
console.log(storedUsername);

// remove an item from sessionStorage
// sessionStorage.removeItem("username");

// Clear all data from sessionStorage
// sessionStorage.clear();

// 1. patikrinama, ar jau localStorage yra toks key:
const tikrinaLS = () => {
  // tikrina ar LS nera tokio key:
  let infoIsLS = localStorage.getItem("asmenys");

  // jei kintamojo nera - sukurti tuscia masyva, jei yra - isparsinti
  return infoIsLS === null ? [] : JSON.parse(infoIsLS);
};
const patikrintas = tikrinaLS();

// 2. i masyvo pabaiga idedami nauji duomenys:
patikrintas.push({ name: "John", lastname: "Snow" });
console.log(patikrintas);

// 3. irasyti atnaujinta masyva i LS:
localStorage.setItem("asmenys", JSON.stringify(patikrintas));

// 4. patikrinti, ar teisingai irasyta:
const tikrinimas = JSON.parse(localStorage.getItem("asmenys"));
