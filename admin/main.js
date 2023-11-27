function BTNDelete(clicked){
    var input = document. getElementById("delete").value;
    fetch(`http://localhost:5000/delete/?key=${input}`)
    console.log("tried")
}

