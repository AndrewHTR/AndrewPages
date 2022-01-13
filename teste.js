var today = new Date();
document.getElementById("sa").innerText = "Horário: " + today.toLocaleTimeString();

function minhaFunca() {
    var today = new Date();
    document.getElementById("sa").innerText = "Horário: " + today.toLocaleTimeString();
}


var t = setInterval(minhaFunca, 1000)