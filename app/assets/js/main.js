

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
        
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`)
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
                var type0 = pokemonNameRequest.types[0].type.name;

                    // type 1
                    if (type0 == 'normal'){
                        var _type0 = "<div class='normal'>"+type0+"</div>"
                    }
                    if (type0 == 'fire'){
                        var _type0 = "<div class='fire'>"+type0+"</div>"
                    }
                    if (type0 == 'grass'){
                        var _type0 = "<div class='grass'>"+type0+"</div>"
                    }
                    if (type0 == 'water'){
                        var _type0 = "<div class='water'>"+type0+"</div>"
                    }
                    if (type0 == 'ice'){
                        var _type0 = "<div class='ice'>"+type0+"</div>"
                    }
                    if (type0 == 'electric'){
                        var _type0 = "<div class='electric'>"+type0+"</div>"
                    }
                    if (type0 == 'fighting'){
                        var _type0 = "<div class='fighting'>"+type0+"</div>"
                    }
                    if (type0 == 'flying'){
                        var _type0 = "<div class='flying'>"+type0+"</div>"
                    }
                    if (type0 == 'bug'){
                        var _type0 = "<div class='bug'>"+type0+"</div>"
                    }
                    if (type0 == 'ghost'){
                        var _type0 = "<div class='ghost'>"+type0+"</div>"
                    }
                    if (type0 == 'rock'){
                        var _type0 = "<div class='rock'>"+type0+"</div>"
                    }
                    if (type0 == 'ground'){
                        var _type0 = "<div class='ground'>"+type0+"</div>"
                    }
                    if (type0 == 'steel'){
                        var _type0 = "<div class='steel'>"+type0+"</div>"
                    }
                    if (type0 == 'dark'){
                        var _type0 = "<div class='dark'>"+type0+"</div>"
                    }
                    if (type0 == 'psychic'){
                        var _type0 = "<div class='psychic'>"+type0+"</div>"
                    }
                    if (type0 == 'fairy'){
                        var _type0 = "<div class='fairy'>"+type0+"</div>"
                    }
                    if (type0 == 'dragon'){
                        var _type0 = "<div class='dragon'>"+type0+"</div>"
                    }
                    if (type0 == 'poison'){
                        var _type0 = "<div class='poison'>"+type0+"</div>"
                    }

                    // type 2
                    if (type1 == 'normal'){
                        var _type1 = "<div class='normal'>"+type1+"</div>"
                    }
                    if (type1 == 'fire'){
                        var _type1 = "<div class='fire'>"+type1+"</div>"
                    }
                    if (type1 == 'grass'){
                        var _type1 = "<div class='grass'>"+type1+"</div>"
                    }
                    if (type1 == 'water'){
                        var _type1 = "<div class='water'>"+type1+"</div>"
                    }
                    if (type1 == 'ice'){
                        var _type1 = "<div class='ice'>"+type1+"</div>"
                    }
                    if (type1 == 'electric'){
                        var _type1 = "<div class='electric'>"+type1+"</div>"
                    }
                    if (type1 == 'fighting'){
                        var _type1 = "<div class='fighting'>"+type1+"</div>"
                    }
                    if (type1 == 'flying'){
                        var _type1 = "<div class='flying'>"+type1+"</div>"
                    }
                    if (type1 == 'bug'){
                        var _type1 = "<div class='bug'>"+type1+"</div>"
                    }
                    if (type1 == 'ghost'){
                        var _type1 = "<div class='ghost'>"+type1+"</div>"
                    }
                    if (type1 == 'rock'){
                        var _type1 = "<div class='rock'>"+type1+"</div>"
                    }
                    if (type1 == 'ground'){
                        var _type1 = "<div class='ground'>"+type1+"</div>"
                    }
                    if (type1 == 'steel'){
                        var _type1 = "<div class='steel'>"+type1+"</div>"
                    }
                    if (type1 == 'dark'){
                        var _type1 = "<div class='dark'>"+type1+"</div>"
                    }
                    if (type1 == 'psychic'){
                        var _type1 = "<div class='psychic'>"+type1+"</div>"
                    }
                    if (type1 == 'fairy'){
                        var _type1 = "<div class='fairy'>"+type1+"</div>"
                    }
                    if (type1 == 'dragon'){
                        var _type1 = "<div class='dragon'>"+type1+"</div>"
                    }
                    if (type1 == 'poison'){
                        var _type1 = "<div class='poison'>"+type1+"</div>"
                    }
                    if (type1 == ''){
                        var _type1 = "<div>" + "</div>"
                    }

                // var type1 = pokemonNameRequest.types[1].type.name ;; 100;
                // console.log(type1)

                Form.innerHTML +=
                `
                <div class="card poke-card">
                <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
                <div class="p-name">${name}</div>
                ${_type0}${_type1}
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