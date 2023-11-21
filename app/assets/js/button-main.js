// button function, remove class .visible from all classes and add class .visible to the div with ID that is given
function btnClicked(clicked){
        visible = "poke" + clicked
            document.querySelectorAll("*").forEach(s => {
            s.classList.remove("visible")
        }
    )
    document.getElementById(visible).classList.add("visible")
}

function btnClickedSearch(clicked){
    visible = clicked
        document.querySelectorAll(".poke-card").forEach(s => {
        s.classList.remove("visible")
    }
)
        document.querySelectorAll("."+visible).forEach(s => {
        s.classList.add("visible")
    }
)

}
