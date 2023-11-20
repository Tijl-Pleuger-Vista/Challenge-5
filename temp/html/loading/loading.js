document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay (you can replace this with your actual data loading logic)
    setTimeout(function() {
        hideLoadingScreen();
    }, 10000); // 2000 milliseconds (2 seconds) delay for demonstration purposes
});

function hideLoadingScreen() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
    var loadingScreen2 = document.getElementById("loading-screen2");
    loadingScreen2.style.display = "none";
}

