function minhaFunc() {
    document.getElementById("demo ").innerHTML = "Paragraph changed.";
}
window.onscroll = function() { navFunc() };

var navbar = document.getElementById("navizinha");

var sticky = navbar.offsetTop;

function navFunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sitcky")
    }
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