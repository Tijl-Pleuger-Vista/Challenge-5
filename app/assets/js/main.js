

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
        
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`)
        .then(pokemonList => pokemonList.json())
        .then(pokemonList => {
            console.log(pokemonList)

            function placeDiv() {
            var _i = localStorage.getItem('i');
            var name = pokemonList.results[_i].name
            
            _i++;
            localStorage.setItem('i', _i);

            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(pokemonNameRequest => pokemonNameRequest.json())
            .then(pokemonNameRequest => {
                console.log(pokemonNameRequest)
                var sprite = pokemonNameRequest.sprites.front_default;

                var type1 = ''
                if (pokemonNameRequest.types[1]) {
                    var type1 = pokemonNameRequest.types[1].type.name;
                  }
                var type0 = pokemonNameRequest.types[0].type.name ?? 100;
                // var type1 = pokemonNameRequest.types[1].type.name ;; 100;
                // console.log(type1)
      
                Form.innerHTML +=
                `
                <div class="card poke-card">${name}
                <img src="${sprite}" alt="" style="width: 64px; height: 64px;">
                <div>${type0} ${type1}</div>
                </div>
                `

                // pokemonNameRequest.types.forEach((owo, awa) => awa = owo.type.name);
                


                // for (var i = 0; i < pokemonNameRequest.types.length; i++) {
                //     (function(index) {
                //       setTimeout(function() {
                //         console.log(pokemonNameRequest.types[index]);
                //         var owo = pokemonNameRequest.types[index].type.name
                //       }, 100)})(i);
                //   }

                

            })

            }
        
    let result = 0;
    for (let i = 0; i < pokemonList.results.length; i++) {
    result += placeDiv();
        }
})};
    pokedex();