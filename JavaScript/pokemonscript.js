// Consumiendo la API de Pokémon
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
.then(response => response.json())
.then(data => {
    // Procesamiento de la información que llega de la API
    console.log(data);
    const pokemonSelect = document.getElementById('pokemon-select');
    data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.url;
        option.textContent = pokemon.name;
        pokemonSelect.appendChild(option);
    });
})
.catch(error => console.log("Ocurrió un error al obtener la lista de Pokémon:", error));

// Función para mostrar el Pokémon seleccionado
function showSelectedPokemon() {
    const pokemonSelect = document.getElementById('pokemon-select');
    const pokemonUrl = pokemonSelect.value;
    fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => {
        // Procesamiento de la información que llega de la API
        console.log(data);
        const pokemonGrid = document.querySelector('.pokemon-grid');
        pokemonGrid.innerHTML = ''; // Limpiar la malla de imágenes antes de mostrar el nuevo Pokémon
        const imageElement = document.createElement('img');
        imageElement.src = data.sprites.front_default;
        pokemonGrid.appendChild(imageElement);
    })
    .catch(error => console.error("Ocurrió un error al obtener el Pokémon:", error));
}

