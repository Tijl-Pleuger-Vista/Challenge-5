function search(){
    var input = document.getElementById("search").value;
    console.log(input)
  
        
            document.querySelectorAll(".poke-card").forEach(s => {
            s.classList.remove("visible")
            // var fuck = document.getElementById(input)
            //     console.log(fuck)
            //     fuck.classList.add("visible")
        }
        
    );
    var fuck = document.getElementById(input)
    console.log(fuck)
    fuck.classList.add("visible")
            // document.getElementById(input)
    //         .forEach(s => {
    //         s.classList.add("visible")
    //         console.log("meow")
    //     }
    // );
    
    
        // document.getElementById(input).classList.add("visible")

}



// // Get the input field
// var input = document.getElementById("search");

// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// })

document.getElementById("search").addEventListener('keypress', function(e){
    if (e.key == 'Enter'){
        console.log("meowi")

    }
});
