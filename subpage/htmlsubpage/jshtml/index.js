function minhaFunc() {
    document.getElementById("demo ").innerHTML = "Paragraph changed.";
}

function outraFunc() {
    const a = document.getElementById("demo ").style;
    document.getElementById("image").src = "./subpage/imagens/aa.webp"
    a.fontSize = "40px";
    a.color = "blue"
}
var today = new Date();
document.getElementById("sa ").innerText = "Horário: " + today.toLocaleTimeString();

function minhaFunca() {
    var today = new Date();
    document.getElementById("sa ").innerText = "Horário: " + today.toLocaleTimeString();
}


var t = setInterval(minhaFunca, 1000)