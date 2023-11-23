function updatGIF() {

  var divId
  var divclass

  document.addEventListener('click', (e) => {
    // Retrieve id from clicked element
    divId = e.target.id;
    divclass = event.target.className;
    let checkdivclass = divclass.includes("p-img")


   if (checkdivclass === true) {

      var icon = "https://projectpokemon.org/images/normal-sprite/" + divId + ".gif"
      // infoCard.innerHTML =
      //   `
      //     <img class="p-img-info" src="${icon}" alt="" style="width: 192px; height: 192px;">

      //     `

      fetch(`https://pokeapi.co/api/v2/pokemon/${divId}`)
        .then(pokeInfo => pokeInfo.json())
        .then(pokeInfo => {

          var id = pokeInfo.id;
          var stat0 = pokeInfo.stats[0].stat.name;
          var stat1 = pokeInfo.stats[1].stat.name;
          var stat2 = pokeInfo.stats[2].stat.name;
          var stat3 = pokeInfo.stats[3].stat.name;
          var stat4 = pokeInfo.stats[4].stat.name;
          var stat5 = pokeInfo.stats[5].stat.name;

          var _stat0 = pokeInfo.stats[0].base_stat;
          var _stat1 = pokeInfo.stats[1].base_stat;
          var _stat2 = pokeInfo.stats[2].base_stat;
          var _stat3 = pokeInfo.stats[3].base_stat;
          var _stat4 = pokeInfo.stats[4].base_stat;
          var _stat5 = pokeInfo.stats[5].base_stat;

          var ability1 = ''
          var ability0 = pokeInfo.abilities[0].ability.name;
          if (pokeInfo.abilities[1]) {
            var ability1 = pokeInfo.abilities[1].ability.name;
          }

          var type1 = ''
          var type0 = pokeInfo.types[0].type.name;
          if (pokeInfo.types[1]) {
            var type1 = pokeInfo.types[1].type.name;
          }



          // type 1
          if ("normal" == type0) var _type0 = "<div class='normal'>" + type0 + "</div>"; if ("fire" == type0) var _type0 = "<div class='fire'>" + type0 + "</div>"; if ("grass" == type0) var _type0 = "<div class='grass'>" + type0 + "</div>"; if ("water" == type0) var _type0 = "<div class='water'>" + type0 + "</div>"; if ("ice" == type0) var _type0 = "<div class='ice'>" + type0 + "</div>"; if ("electric" == type0) var _type0 = "<div class='electric'>" + type0 + "</div>"; if ("fighting" == type0) var _type0 = "<div class='fighting'>" + type0 + "</div>"; if ("flying" == type0) var _type0 = "<div class='flying'>" + type0 + "</div>"; if ("bug" == type0) var _type0 = "<div class='bug'>" + type0 + "</div>"; if ("ghost" == type0) var _type0 = "<div class='ghost'>" + type0 + "</div>"; if ("rock" == type0) var _type0 = "<div class='rock'>" + type0 + "</div>"; if ("ground" == type0) var _type0 = "<div class='ground'>" + type0 + "</div>"; if ("steel" == type0) var _type0 = "<div class='steel'>" + type0 + "</div>"; if ("dark" == type0) var _type0 = "<div class='dark'>" + type0 + "</div>"; if ("psychic" == type0) var _type0 = "<div class='psychic'>" + type0 + "</div>"; if ("fairy" == type0) var _type0 = "<div class='fairy'>" + type0 + "</div>"; if ("dragon" == type0) var _type0 = "<div class='dragon'>" + type0 + "</div>"; if ("poison" == type0) var _type0 = "<div class='poison'>" + type0 + "</div>";


          // type 2
          if ("normal" == type1) var _type1 = "<div class='normal'>" + type1 + "</div>"; if ("fire" == type1) var _type1 = "<div class='fire'>" + type1 + "</div>"; if ("grass" == type1) var _type1 = "<div class='grass'>" + type1 + "</div>"; if ("water" == type1) var _type1 = "<div class='water'>" + type1 + "</div>"; if ("ice" == type1) var _type1 = "<div class='ice'>" + type1 + "</div>"; if ("electric" == type1) var _type1 = "<div class='electric'>" + type1 + "</div>"; if ("fighting" == type1) var _type1 = "<div class='fighting'>" + type1 + "</div>"; if ("flying" == type1) var _type1 = "<div class='flying'>" + type1 + "</div>"; if ("bug" == type1) var _type1 = "<div class='bug'>" + type1 + "</div>"; if ("ghost" == type1) var _type1 = "<div class='ghost'>" + type1 + "</div>"; if ("rock" == type1) var _type1 = "<div class='rock'>" + type1 + "</div>"; if ("ground" == type1) var _type1 = "<div class='ground'>" + type1 + "</div>"; if ("steel" == type1) var _type1 = "<div class='steel'>" + type1 + "</div>"; if ("dark" == type1) var _type1 = "<div class='dark'>" + type1 + "</div>"; if ("psychic" == type1) var _type1 = "<div class='psychic'>" + type1 + "</div>"; if ("fairy" == type1) var _type1 = "<div class='fairy'>" + type1 + "</div>"; if ("dragon" == type1) var _type1 = "<div class='dragon'>" + type1 + "</div>"; if ("poison" == type1) var _type1 = "<div class='poison'>" + type1 + "</div>"; if ("" == type1) var _type1 = "<div></div>";

          infoCard.innerHTML =
            `
    <img class="p-img-info" src="${icon}" alt="" style="width: 192px; height: 192px;">
    
    <div class="row type-info type">
    ${_type0}${_type1}
    </div>
    <h2></h2>
    <div class="row"><h3>Pokémon id:</h3>  <h3 class="stat">${id}</h3></div>
    <div class="row"><h3>Abilities:</h3>
    <div class="column">
        <div><h3 class="stat">${ability0}</h3></div>
        <div><h3 class="stat">${ability1}</h3></div>
    </div>
    </div>

    <div class="row"><h3>Stats:</h3></div>
    
    <div class="row"><h3 style="margin-left: 75px;">${stat0}</h3><h3 class="stat">${_stat0}</h3></div>
    <div class="row"><h3 style="margin-left: 75px;">${stat1}</h3><h3 class="stat">${_stat1}</h3></div>
    <div class="row"><h3 style="margin-left: 75px;">${stat2}</h3><h3 class="stat">${_stat2}</h3></div>
    <div class="row"><h3 style="margin-left: 75px;">${stat3}</h3><h3 class="stat">${_stat3}</h3></div>
    <div class="row"><h3 style="margin-left: 75px;">${stat4}</h3><h3 class="stat">${_stat4}</h3></div>
    <div class="row"><h3 style="margin-left: 75px;">${stat5}</h3><h3 class="stat">${_stat5}</h3></div>

    `
        })

    } else {
      console.log("u clicked sum stupid fool!")
    }
  }
  );

}