

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
function pageHome(){
    document.querySelectorAll("*").forEach(s => {
    s.classList.remove("visible")
    })
    document.getElementById("pokeHome").classList.add("visible")}
function pagePokedex(){
    document.querySelectorAll("*").forEach(s => {
    s.classList.remove("visible")
    })
    document.getElementById("pokeDex").classList.add("visible")}
function pageVideogames(){
    document.querySelectorAll("*").forEach(s => {
    s.classList.remove("visible")
    })
    document.getElementById("pokeVideogames").classList.add("visible")}
function pageMarketplace(){
    document.querySelectorAll("*").forEach(s => {
    s.classList.remove("visible")
    })
    document.getElementById("pokeMarketplace").classList.add("visible")}
    


    let pokedex = () => {
    
        localStorage.setItem('i', '0');
        
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`)
        .then(pokemonList => pokemonList.json())
        .then(pokemonList => {
            console.log(pokemonList)

            function placeDiv() {
                var wait = (ms) => {
                    const start = Date.now();
                    let now = start;
                    while (now - start < ms) {
                    now = Date.now();
                    }
                }
                wait(10);
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
                    if("normal"==type0)var _type0="<div class='normal'>"+type0+"</div>";if("fire"==type0)var _type0="<div class='fire'>"+type0+"</div>";if("grass"==type0)var _type0="<div class='grass'>"+type0+"</div>";if("water"==type0)var _type0="<div class='water'>"+type0+"</div>";if("ice"==type0)var _type0="<div class='ice'>"+type0+"</div>";if("electric"==type0)var _type0="<div class='electric'>"+type0+"</div>";if("fighting"==type0)var _type0="<div class='fighting'>"+type0+"</div>";if("flying"==type0)var _type0="<div class='flying'>"+type0+"</div>";if("bug"==type0)var _type0="<div class='bug'>"+type0+"</div>";if("ghost"==type0)var _type0="<div class='ghost'>"+type0+"</div>";if("rock"==type0)var _type0="<div class='rock'>"+type0+"</div>";if("ground"==type0)var _type0="<div class='ground'>"+type0+"</div>";if("steel"==type0)var _type0="<div class='steel'>"+type0+"</div>";if("dark"==type0)var _type0="<div class='dark'>"+type0+"</div>";if("psychic"==type0)var _type0="<div class='psychic'>"+type0+"</div>";if("fairy"==type0)var _type0="<div class='fairy'>"+type0+"</div>";if("dragon"==type0)var _type0="<div class='dragon'>"+type0+"</div>";if("poison"==type0)var _type0="<div class='poison'>"+type0+"</div>";


                    // type 2
                    if("normal"==type1)var _type1="<div class='normal'>"+type1+"</div>";if("fire"==type1)var _type1="<div class='fire'>"+type1+"</div>";if("grass"==type1)var _type1="<div class='grass'>"+type1+"</div>";if("water"==type1)var _type1="<div class='water'>"+type1+"</div>";if("ice"==type1)var _type1="<div class='ice'>"+type1+"</div>";if("electric"==type1)var _type1="<div class='electric'>"+type1+"</div>";if("fighting"==type1)var _type1="<div class='fighting'>"+type1+"</div>";if("flying"==type1)var _type1="<div class='flying'>"+type1+"</div>";if("bug"==type1)var _type1="<div class='bug'>"+type1+"</div>";if("ghost"==type1)var _type1="<div class='ghost'>"+type1+"</div>";if("rock"==type1)var _type1="<div class='rock'>"+type1+"</div>";if("ground"==type1)var _type1="<div class='ground'>"+type1+"</div>";if("steel"==type1)var _type1="<div class='steel'>"+type1+"</div>";if("dark"==type1)var _type1="<div class='dark'>"+type1+"</div>";if("psychic"==type1)var _type1="<div class='psychic'>"+type1+"</div>";if("fairy"==type1)var _type1="<div class='fairy'>"+type1+"</div>";if("dragon"==type1)var _type1="<div class='dragon'>"+type1+"</div>";if("poison"==type1)var _type1="<div class='poison'>"+type1+"</div>";if(""==type1)var _type1="<div></div>";

                Form.innerHTML +=
                `
                <div class="card poke-card">
                <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
                <div class="p-name">${name}</div>
                <div class="row type">
                ${_type0}${_type1}
                </div>
                </div>
                `
            
            })
        
            };
        
    let result = 0;
    for (let i = 0; i < pokemonList.results.length; i++) {
    result += placeDiv();
        }
})};
    pokedex();


    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(pokeInfo => pokeInfo.json())
    .then(pokeInfo => {
        console.log(pokeInfo)
        
        var icon = "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"
        var ability0 = pokeInfo.abilities[0].ability.name;
        var ability1 = pokeInfo.abilities[1].ability.name;
        var id = pokeInfo.id;
        var stat0 = pokeInfo.stats[0].stat.name;
        var stat1 = pokeInfo.stats[1].stat.name;
        var stat2 = pokeInfo.stats[2].stat.name;
        var stat3 = pokeInfo.stats[3].stat.name;
        var stat4 = pokeInfo.stats[4].stat.name;
        var stat5 = pokeInfo.stats[5].stat.name;

        var type1 = ''
        var type0 = pokeInfo.types[0].type.name;
        if (pokeInfo.types[1]) {
            var type1 = pokeInfo.types[1].type.name;
        }
        

        // type 1
        if("normal"==type0)var _type0="<div class='normal'>"+type0+"</div>";if("fire"==type0)var _type0="<div class='fire'>"+type0+"</div>";if("grass"==type0)var _type0="<div class='grass'>"+type0+"</div>";if("water"==type0)var _type0="<div class='water'>"+type0+"</div>";if("ice"==type0)var _type0="<div class='ice'>"+type0+"</div>";if("electric"==type0)var _type0="<div class='electric'>"+type0+"</div>";if("fighting"==type0)var _type0="<div class='fighting'>"+type0+"</div>";if("flying"==type0)var _type0="<div class='flying'>"+type0+"</div>";if("bug"==type0)var _type0="<div class='bug'>"+type0+"</div>";if("ghost"==type0)var _type0="<div class='ghost'>"+type0+"</div>";if("rock"==type0)var _type0="<div class='rock'>"+type0+"</div>";if("ground"==type0)var _type0="<div class='ground'>"+type0+"</div>";if("steel"==type0)var _type0="<div class='steel'>"+type0+"</div>";if("dark"==type0)var _type0="<div class='dark'>"+type0+"</div>";if("psychic"==type0)var _type0="<div class='psychic'>"+type0+"</div>";if("fairy"==type0)var _type0="<div class='fairy'>"+type0+"</div>";if("dragon"==type0)var _type0="<div class='dragon'>"+type0+"</div>";if("poison"==type0)var _type0="<div class='poison'>"+type0+"</div>";


        // type 2
        if("normal"==type1)var _type1="<div class='normal'>"+type1+"</div>";if("fire"==type1)var _type1="<div class='fire'>"+type1+"</div>";if("grass"==type1)var _type1="<div class='grass'>"+type1+"</div>";if("water"==type1)var _type1="<div class='water'>"+type1+"</div>";if("ice"==type1)var _type1="<div class='ice'>"+type1+"</div>";if("electric"==type1)var _type1="<div class='electric'>"+type1+"</div>";if("fighting"==type1)var _type1="<div class='fighting'>"+type1+"</div>";if("flying"==type1)var _type1="<div class='flying'>"+type1+"</div>";if("bug"==type1)var _type1="<div class='bug'>"+type1+"</div>";if("ghost"==type1)var _type1="<div class='ghost'>"+type1+"</div>";if("rock"==type1)var _type1="<div class='rock'>"+type1+"</div>";if("ground"==type1)var _type1="<div class='ground'>"+type1+"</div>";if("steel"==type1)var _type1="<div class='steel'>"+type1+"</div>";if("dark"==type1)var _type1="<div class='dark'>"+type1+"</div>";if("psychic"==type1)var _type1="<div class='psychic'>"+type1+"</div>";if("fairy"==type1)var _type1="<div class='fairy'>"+type1+"</div>";if("dragon"==type1)var _type1="<div class='dragon'>"+type1+"</div>";if("poison"==type1)var _type1="<div class='poison'>"+type1+"</div>";if(""==type1)var _type1="<div></div>";

        infoCard.innerHTML +=
        `
        <img class="" src="${icon}" alt="" style="width: 192px; height: 192px;">
        ${ability0},
        ${ability1},
        ${type0},
        ${type1},
        ${id},
        ${stat0},
        ${stat1},
        ${stat2},
        ${stat3},
        ${stat4},
        ${stat5},
        `
    })