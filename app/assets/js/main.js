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

function pageLogin(){
    document.querySelectorAll("*").forEach(s => {
    s.classList.remove("visible")
    })
    document.getElementById("signInDiv").classList.add("visible")}

function pageSignup(){
    document.querySelectorAll("*").forEach(s => {
    s.classList.remove("visible")
    })
    document.getElementById("loginDiv").classList.add("visible")}
