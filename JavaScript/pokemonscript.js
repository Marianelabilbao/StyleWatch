
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
.then(response => response.json())
.then(data => {
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

function showSelectedPokemon() {
    const pokemonSelect = document.getElementById('pokemon-select');
    const pokemonUrl = pokemonSelect.value;
    fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const pokemonGrid = document.querySelector('.pokemon-grid');
        pokemonGrid.innerHTML = '';
        const imageElement = document.createElement('img');
        imageElement.src = data.sprites.front_default;
        pokemonGrid.appendChild(imageElement);
    })
    .catch(error => console.error("Ocurrió un error al obtener el Pokémon:", error));
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var iframe = document.getElementById('video');
        var src = iframe.src;
        iframe.src = src + (src.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1';
    }, 1000);
});

