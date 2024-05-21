// IIFE (Immediately Invoked Function Expression) encapsulating the Pokemon repository
let pokemonRepository = (function () {
  // Array containing Pokemon objects with name, height, and type
  let pokemonList = [
    { name: "Bulbasaur", height: "7", type: "Grass" },
    { name: "Charmander", height: "6", type: "Fire" },
    { name: "Squirtle", height: "5", type: "Water" },
    { name: "Caterpie", height: "3", type: "Bug" },
    { name: "Weedle", height: "3", type: "Bug" },
    { name: "Pidgey", height: "3", type: "Normal" },
    { name: "Rattata", height: "3", type: "Normal" },
    { name: "Ekans", height: "3", type: "Poison" },
    { name: "Pikachu", height: "4", type: "Electric" },
    { name: "Sandshrew", height: "6", type: "Ground" },
    { name: "Diglett", height: "2", type: "Ground" },
  ];

  // Array containing keys that are required in each Pokemon object
  const requiredKeys = ["name", "height", "type"];

  // Function to add a Pokemon to the repository
  function add(pokemon) {
    // Check if the Pokemon object has all required keys
    if (
      typeof pokemon === "object" &&
      requiredKeys.every((key) => pokemon.hasOwnProperty(key))
    ) {
      // Add the Pokemon object to the repository
      pokemonList.push(pokemon);
    } else {
      console.log(pokemon.name + " entry does not have all required keys.");
    }
  }

  // Function to get all Pokemon in the repository
  function getAll() {
    return pokemonList;
  }

  // Function to add a list item (button) for a Pokemon in the DOM
  function addListItem(pokemon) {
    // Add a list item (button) for the Pokemon
    let pokemonList = document.querySelector(".pokemon-list");
    // Create a list item
    let listPokemon = document.createElement("li");
    // Create a button for the list item (inside the list item)
    let button = document.createElement("button");
    // Add an event listener to the button to show the details
    button.addEventListener("click", function () {
      pokemonRepository.showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  // Exposing public methods through the return statement
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

// Adding Pokemon entries to the repository
pokemonRepository.add({ name: "Diglett", height: "2" });
pokemonRepository.add({ name: "Sandslash", height: "8", type: "Ground" });

// Logging all Pokemon in the repository
// console.log(pokemonRepository.getAll());

// Adding list items (buttons) for each Pokemon to the DOM
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

// pokemonRepository.getAll().forEach(function (pokemon) {});

//   if (pokemon.height > 5) {
//     document.write(
//       pokemon.name + " - " + pokemon.height + " Wow, that's big!" + "<br>"
//     );
//   } else {
//     document.write(pokemon.name + " - " + pokemon.height + " <br>");
//   }
// });

// function search(arr, query) {
//   return arr.filter((pokemon) =>
//     pokemon.name.toLowerCase().includes(query.toLowerCase())
//   );
// }

// // let pokemonList2 = [
// //   { name: "Sandslash", height: "8", type: "Ground" },
// //   { name: "Diglett", height: "2", type: "Ground" },
// //   { name: "Dugtrio", height: "7", type: "Ground" },
// //   { name: "Cubone", height: "4", type: "Ground" },
// //   { name: "Marowak", height: "6", type: "Ground" },
// //   { name: "Geodude", height: "4", type: "Ground" },
// //   { name: "Graveler", height: "5", type: "Ground" },
// //   { name: "Golem", height: "10", type: "Ground" },
// //   { name: "Onix", height: "10", type: "Ground" },
// //   { name: "Clefairy", height: "6", type: "Fire" },
// // ];

// const searchTerm = "cha";
// const searchResults = pokemonRepository.getAll(searchTerm);

// searchResults.forEach(function (pokemon) {
//   document.write(pokemon.name + " - " + pokemon.height + " <br>");
// });

// function printArrayDetails(bug) {
//   for (let i = 0; i < bug.length; i++) {
//     document.write(" Name: " + bug[i].name + ",  Height: " + bug[i].height);

//     if (bug[i].height > 6.0) {
//       document.write(" -- Wow, that's a big!");
//     }

//     document.write("<br>");
//   }
// }

// printArrayDetails(pokemonList); // executes the function using ‘pokemonList‘ as its input
// document.write("<br>");
// printArrayDetails(pokemonList2);

// let pokemonRepository = (function () {
//   let pokemonList = [
//     { name: "Bulbasaur", height: "7", type: "Grass" },
//     { name: "Charmander", height: "6", type: "Fire" },
//     { name: "Squirtle", height: "5", type: "Water" },
//     { name: "Caterpie", height: "3", type: "Bug" },
//     { name: "Weedle", height: "3", type: "Bug" },
//     { name: "Pidgey", height: "3", type: "Normal" },
//     { name: "Rattata", height: "3", type: "Normal" },
//     { name: "Ekans", height: "3", type: "Poison" },
//     { name: "Pikachu", height: "4", type: "Electric" },
//     { name: "Sandshrew", height: "6", type: "Ground" },
//   ];

//   function add(pokemon) {
//     pokemonList.push(pokemon);
//   }

//   function getAll() {
//     return pokemonList;
//   }

//   return {
//     add: add,
//     getAll: getAll,
//   };
// })();

// console.log(pokemonRepository);
