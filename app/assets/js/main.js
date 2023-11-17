

// fetch(`https://pokeapi.co/api/v2/pokemon/1`)
// .then(pokemonList => pokemonList.json())
// .then(pokemonList => {
//     console.log(pokemonList)
// })

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

    //

    function pageHome(){
        document.querySelectorAll("*").forEach(s => {
        s.classList.remove("visible")
        })
        document.getElementById("pokeHome").classList.add("visible")}

        function pageVideogames(){
            document.querySelectorAll("*").forEach(s => {
            s.classList.remove("visible")
            })
            document.getElementById("pokeVideogames").classList.add("visible")}
        
    

    let pokedex = () => {
    
        localStorage.setItem('i', '0');
        
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
        .then(pokemonList => pokemonList.json())
        .then(pokemonList => {
            console.log(pokemonList)

            function placeDiv() {
            // console.log("hello")

            var _i = localStorage.getItem('i');
            var name = pokemonList.results[_i].name
            // console.log(name)
            
            _i++;
            localStorage.setItem('i', _i);
            Form.innerHTML +=
            `
            <div class="card poke-card">${name}</div>
            `
            }
        
    let result = 0;
    for (let i = 0; i < pokemonList.results.length; i++) {
    result += placeDiv();
        }
})};
    pokedex();