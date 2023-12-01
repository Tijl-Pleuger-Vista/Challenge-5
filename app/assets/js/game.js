// function click(clicked){
// //         document.querySelectorAll("*").forEach(s => {
// //         s.classList.remove("visible")
// //     }
// // )
// document.getElementById(clicked).classList.add("visible")
// console.log("click")
// }
function unclick(){
        document.querySelectorAll("*").forEach(s => {
        s.classList.remove("visible")
    }
)
console.log("clicked")
}

function acceptFight(coins){
    document.querySelectorAll("*").forEach(s => {
    s.classList.remove("visible")
    }
)
var totalCoins = getRandomInt(coins);
alert(`You earned ${totalCoins} Coins`);
console.log("clicked")
let x = document.cookie;
fetch(`http://pokedexauth.ddns.net:5000/addpokemon/?key=${x}&updatecoins=${totalCoins}`, {
    method: 'POST',
    keepalive: true
    })
}

document.addEventListener('click', (e) => {
    document.querySelectorAll("*").forEach(s => {
        s.classList.remove("visible")
    })
    id = e.target.id;
    console.log(id)
    document.getElementById(id+"a").classList.add("visible")
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}