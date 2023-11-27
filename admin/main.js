function BTNDelete(clicked){
    var input = document. getElementById("delete").value;
    fetch(`http://localhost:5000/delete/${input}`)
    console.log("tried")
}

