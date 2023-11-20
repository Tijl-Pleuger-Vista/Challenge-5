
var numb0 = 0
var limit = 9;
var itemList

    let pokemarket = () => {

        fetch(`https://pokeapi.co/api/v2/item/poke-ball`)
        .then(itemList => itemList.json())
        .then(itemList => {

            var name = itemList.name;
            var cost = itemList.cost;
            var sprite = itemList.sprites.default;


            marketplace.innerHTML +=

            `
            <div class="card poke-card-plus">
                <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
                <div class="p-name">${name}</div>
                <div class="p-name">${cost} Poké-yen</div>
                <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
            </div>
            `


   })}; pokemarket();
