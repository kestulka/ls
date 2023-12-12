"use strict";

// importinam duomenis is data.js

import duomenys from "./data.js";
console.log(duomenys);

// susigrazinam favorites jei egzistuoja, jei ne sukuriam jiems array

const infoLS = localStorage.getItem("favorites");
const favorites = infoLS === null ? [] : JSON.parse(infoLS); // if infoLS nera, tai sukuria tuscia array. Jei yra, isparsina data kuri yra infoLS

// funkcija surasti filma palei jo ID

const findMovieById = (id) => {
  return duomenys.find((element) => element.id === id);
};

console.log(findMovieById(829280));
console.log(findMovieById(532639));
console.log(findMovieById(634649));

// funkcija tikrinti/prideti filmus i favorites

const myMovies = (id) => {
  const movieInfo = findMovieById(id);

  if (movieInfo) {
    console.log(movieInfo);

    // funkcijos dalis, kuri tikrina ar filmas jau yra tarp favorites
    const checking = favorites.find((element) => element.id === element.id);
    if (checking) {
      alert("Movie is already in favorites!");
    } else {
      // funkcijos dalis, kuri prideda filma i favorites
      favorites.push(movieInfo);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Movie inserted into favorites");
    }
  } else {
    console.log("Movie not found");
  }
};

console.log(myMovies(532639));
console.log(myMovies(634649));

// funkcija isvalyti favorites is LS

const clearFavorites = () => {
  localStorage.removeItem("favorites");
  alert("favorites cleared!");
};

// funkcija atspausdinti userio favorites

const userFavorites = () => {
  const infoLS = localStorage.getItem("favorites"); // retrieve favorites from LS
  if (infoLS === null) {
    console.log("user has not added any favorites yet");
  } else {
    const favorites = JSON.parse(infoLS);
    console.log("User favorites: ");
    favorites.forEach((element) => {
      console.log(`ID: ${element.id}, Title: ${element.title}`);
    });
  }
};

// userFavorites();

// funkcija istrinti filma palei jo id is favorites

const removeFromFavorites = (id) => {
  const infoLS = localStorage.getItem("favorites");

  if (infoLS === null) {
    console.log("There is no favorites left");
    return;
  }

  const favorites = JSON.parse(infoLS);

  // funkcijos dalis sukurianti nauja array be filmo kuris buvo pasirinktas istrinti
  const FavoritesAfterRemove = favorites.filter((movie) => movie.id !== id);
  // atnaujinamas favorites sarasas po istrintu filmu
  localStorage.setItem("favorites", JSON.stringify(FavoritesAfterRemove));

  console.log(`Movie with ID ${id} deleted from favorites`);
};

userFavorites(); // before deletion
removeFromFavorites(532639);
userFavorites(); // after deletion
