function toggleLightMode() {
var linkBar = document.getElementById("links");
    linkBar.style.backgroundColor = "rgb(82, 12, 23)";
    document.getElementById("menu1").style.backgroundColor = "rgb(82, 12, 23)";
    document.getElementById("header").style.backgroundColor = "rgb(82, 12, 23)";
    document.getElementById("body").style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(kyleField.jpg) no-repeat center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.getElementById("toggleButton").onclick = toggleDarkMode;
    localStorage.setItem("mode", "light");
    mode = localStorage.getItem("mode");
    document.getElementById("toggle").style.backgroundColor = "#ccc";
}

function toggleDarkMode() {
var linkBar = document.getElementById("links");
linkBar.style.backgroundColor = "black";
document.getElementById("menu1").style.backgroundColor = "black";
document.getElementById("header").style.backgroundColor = "black";
document.getElementById("body").style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(amFootballNight.jpg) no-repeat center center";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
document.getElementById("toggleButton").onclick = toggleLightMode;
localStorage.setItem("mode", "dark");
mode = localStorage.getItem("mode");
document.getElementById("toggle").style.backgroundColor = "#520c17";
}


window.onload = function() {
    var mode = localStorage.getItem("mode");
    if (mode == "light") {
        toggleLightMode();  
    } else {
        toggleDarkMode();
    }
}



   