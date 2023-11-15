// function login(){  
// var w3r_text = "You want to login";
// var newParagraph = document.createElement("p"); //creates a new paragraph element
// var newText = document.createTextNode(w3r_text); //creates text along with output to be displayed 
// newParagraph.appendChild(newText); //created text is appended to the paragraph element created
// document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body
// }

// function signup(){  
//     var w3r_text = "You want to sign up";
//     var newParagraph = document.createElement("p"); //creates a new paragraph element
//     var newText = document.createTextNode(w3r_text); //creates text along with output to be displayed 
//     newParagraph.appendChild(newText); //created text is appended to the paragraph element created
//     document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body
//     }

function signup(){  
    const element = document.getElementById("loginPage");
    element.remove(); // Removes the div with the 'div-02' id
    (async()=>{let t=await (await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md")).text();loginDiv.innerHTML=t})();
}


function signin(){  
    const element = document.getElementById("loginPage");
    element.remove(); // Removes the div with the 'div-02' id
    (async()=>{let t=await (await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md")).text();loginDiv.innerHTML=t})();
}
