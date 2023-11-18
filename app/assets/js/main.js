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
