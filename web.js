window.onload = function () {
  // ensures that the js code runs only after the entire page has finished loading
  // check for localStorage support:
  if (localStorage) {
    // add an event listener for form submissions

    document.getElementById("storage").addEventListener("submit", function () {
      event.preventDefault();

      // get the value of the name field

      let name = document.getElementById("name").value;

      // check if the 'names' key exists in localStorage

      let names = localStorage.getItem("names")
        ? JSON.parse(localStorage.getItem("names"))
        : [];

      // add the new name to the array

      names.push(name);

      // save the updated array in localStorage
      localStorage.setItem("names", JSON.stringify(names));
      alert("name inserted");
    });
  }
};

// retrieve data from LS

let getNames = localStorage.getItem("names");

let namesArray = getNames ? JSON.parse(getNames) : [];

console.log(namesArray);
