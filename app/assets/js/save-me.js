
var numb = 0
var limit = 10000;
var pokemonList
localStorage.setItem("load", 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0');
var load = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`

    let pokedex = () => {
        var load = localStorage.getItem("load");
        fetch(`${load}`)
        .then(pokemonList => pokemonList.json())
        .then(pokemonList => {
            console.log(pokemonList)
            
            localStorage.setItem("load", pokemonList.next);

            var interval = 75;
            pokemonList.results.forEach(function (el, index) {

                setTimeout(function () {
                    var name = pokemonList.results[numb].name

            numb++;
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(pokemonNameRequest => pokemonNameRequest.json())
            .then(pokemonNameRequest => {
                console.log(pokemonNameRequest)
                var sprite = pokemonNameRequest.sprites.front_default;

                var _type0 = ''
                if (pokemonNameRequest.types[0]) {
                    var type0 = pokemonNameRequest.types[0].type.name;
                    if("normal"==type0)var _type0="<div class='normal'>"+type0+"</div>";if("fire"==type0)var _type0="<div class='fire'>"+type0+"</div>";if("grass"==type0)var _type0="<div class='grass'>"+type0+"</div>";if("water"==type0)var _type0="<div class='water'>"+type0+"</div>";if("ice"==type0)var _type0="<div class='ice'>"+type0+"</div>";if("electric"==type0)var _type0="<div class='electric'>"+type0+"</div>";if("fighting"==type0)var _type0="<div class='fighting'>"+type0+"</div>";if("flying"==type0)var _type0="<div class='flying'>"+type0+"</div>";if("bug"==type0)var _type0="<div class='bug'>"+type0+"</div>";if("ghost"==type0)var _type0="<div class='ghost'>"+type0+"</div>";if("rock"==type0)var _type0="<div class='rock'>"+type0+"</div>";if("ground"==type0)var _type0="<div class='ground'>"+type0+"</div>";if("steel"==type0)var _type0="<div class='steel'>"+type0+"</div>";if("dark"==type0)var _type0="<div class='dark'>"+type0+"</div>";if("psychic"==type0)var _type0="<div class='psychic'>"+type0+"</div>";if("fairy"==type0)var _type0="<div class='fairy'>"+type0+"</div>";if("dragon"==type0)var _type0="<div class='dragon'>"+type0+"</div>";if("poison"==type0)var _type0="<div class='poison'>"+type0+"</div>";
                }
                var _type1 = ''
                if (pokemonNameRequest.types[1]) {
                    var type1 = pokemonNameRequest.types[1].type.name;
                    if("normal"==type1)var _type1="<div class='normal'>"+type1+"</div>";if("fire"==type1)var _type1="<div class='fire'>"+type1+"</div>";if("grass"==type1)var _type1="<div class='grass'>"+type1+"</div>";if("water"==type1)var _type1="<div class='water'>"+type1+"</div>";if("ice"==type1)var _type1="<div class='ice'>"+type1+"</div>";if("electric"==type1)var _type1="<div class='electric'>"+type1+"</div>";if("fighting"==type1)var _type1="<div class='fighting'>"+type1+"</div>";if("flying"==type1)var _type1="<div class='flying'>"+type1+"</div>";if("bug"==type1)var _type1="<div class='bug'>"+type1+"</div>";if("ghost"==type1)var _type1="<div class='ghost'>"+type1+"</div>";if("rock"==type1)var _type1="<div class='rock'>"+type1+"</div>";if("ground"==type1)var _type1="<div class='ground'>"+type1+"</div>";if("steel"==type1)var _type1="<div class='steel'>"+type1+"</div>";if("dark"==type1)var _type1="<div class='dark'>"+type1+"</div>";if("psychic"==type1)var _type1="<div class='psychic'>"+type1+"</div>";if("fairy"==type1)var _type1="<div class='fairy'>"+type1+"</div>";if("dragon"==type1)var _type1="<div class='dragon'>"+type1+"</div>";if("poison"==type1)var _type1="<div class='poison'>"+type1+"</div>";if(""==type1)var _type1="<div></div>";
                }

                Form.innerHTML +=

                `
                <div class="card poke-card">
                    <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
                    <div class="p-name">${name}</div>
                    <div class="row type">${_type0}${_type1}</div>
                </div>
                `

});
                }, index * interval);


                });})}; pokedex();
