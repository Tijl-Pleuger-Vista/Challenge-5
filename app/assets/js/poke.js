fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
.then(pokemonList => pokemonList.json())
.then(pokemonList => {
    console.log(pokemonList)
})


fetch(`https://pokeapi.co/api/v2/pokemon/1`)
.then(pokemonList => pokemonList.json())
.then(pokemonList => {
    console.log(pokemonList)
})