"use strict";
// 1. Issaugoti duomenis data.js faile:

import result from "./data.js";
console.log(result);

// 2. Patikrinti ar localStorage yra "favorites"

const infoIsLS = localStorage.getItem("favorites");
console.log(infoIsLS);

// 3. Jei nera, sukurti masyva "favorites"

const favorites = infoIsLS === null ? [] : JSON.parse(infoIsLS);
console.log(favorites);

// 4. Sukurti funkcija, kuri randa konkretaus filmo informacija is data.js failo, pagal filmo ID

const getMovies = (id) => {
  const filmas = result.find((element) => element.id === id);
  console.log(filmas);
  return filmas;
};

// 5. Irasyti i local Storage pasirinktu filmu ID ir title

const myMovies = (id) => {
  const filmoInfo = {
    id: getMovies(id).id,
    title: getMovies(id).title,
  };
  console.log(filmoInfo);
  const checking = favorites.find((element) => element.id === filmoInfo.id);
  if (checking) {
    alert("Movie already exist");
  } else {
    favorites.push(filmoInfo);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Movie inserted");
  }
};

// 6. Pasikartojanciu filmu "favorites" masyve negali buti

const print = () => {
  const fromLS = JSON.parse(localStorage.getItem("favorites"));
  console.log(fromLS);
  fromLS.forEach((element) =>
    console.log(`id: ${element.id}, title: ${element.title}`),
  );
};
print();

// 7. Sukurti funkcija, kuri gauna reiksmes is Local storage ir atspausdina konsoleje informacija apie visus user'io filmus, itrauktus i favoritu sarasa
