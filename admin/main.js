function BTNDelete(clicked){
    var input = document. getElementById("delete").value;
    fetch(`http://localhost:5000/delete/?key=${input}`,{method: "POST"})
    console.log("tried")
}

function BTNupdate(clicked){
    var input = document. getElementById("update").value;
    fetch(`http://localhost:5000/update/?key=${input}`,{method: "POST"})
    console.log("tried")
}


