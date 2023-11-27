function btnClicked(clicked){
    var input = document. getElementById("delete").value;
    fetch(`http://localhost:5000/port/delete/${input}`) 
}

