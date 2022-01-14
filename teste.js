var today = new Date();
document.getElementById("sa").innerText = today.toLocaleTimeString();
document.getElementById("sa").style.color = "white";

function minhaFunca() {
    var today = new Date();
    document.getElementById("sa").innerText = today.toLocaleTimeString();
}


var t = setInterval(minhaFunca, 1000)