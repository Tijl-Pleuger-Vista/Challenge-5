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

// function TextMe() {
//     var s = document.getElementById("transition");
//     s.style.zIndex = "256", s.classList.replace("splash-transition-true", "splash-transition-false"), setTimeout(() => {
//         document.querySelectorAll("*").forEach(s => {
//         s.classList.remove("visible")
//         }), document.getElementById("TextMe").classList.add("visible"), s.classList.replace("splash-transition-false", "splash-transition-true")
//     }, 1e3), setTimeout(() => {
//         s.style.zIndex = "-256"
//     }, 1e3)
// }

function signup(){
document.querySelectorAll("*").forEach(s => {
s.classList.remove("visible")
})
document.getElementById("signInDiv").classList.add("visible")}

function signin(){
document.querySelectorAll("*").forEach(s => {
s.classList.remove("visible")
})
document.getElementById("loginDiv").classList.add("visible")}