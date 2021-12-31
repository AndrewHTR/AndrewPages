document.getElementById("navizinha").innerHTML =
    '<h1 title = "Voltar para o inicio" class = "header-h1"> <a href="/index.html">Andrew Silva</a></h1>' +
    '<nav class="navi">' +
    '<ul class="aaa">' +
    '<li class="dropdown"><a class="dropbtn">HTML</a>' +
    '<div class="dropdown-content ">' +
    '<a href="/subpage/htmlsubpage/inicio.html">Inicio</a>' +
    '<a href="/subpage/htmlsubpage/tags.html">Tags</a>' +
    '<a href="/subpage/htmlsubpage/midia.html"> Midia</a>' +
    '</div>' +
    '</li>' +
    '<li class="dropdown"><a class="dropbtn">CSS</a>' +
    '<div class="dropdown-content">' +
    '<a href="/subpage/csssubpage/inicio.html">Inicio</a>' +
    '</div>' +
    '</li>' +
    '<li class="dropdown"><a class="dropbtn">JavaScript</a>' +
    '<div class="dropdown-content">' +
    '<a href="/subpage/jssubpage/inicio.html">Inicio</a>' +
    '<a>Usos</a>' +
    '</div>' +
    '</li>' +
    '<li class="dropdown"><a class="dropbtn">Python</a>' +
    '<div class="dropdown-content">' +
    '<a href="/subpage/pythonsubpage/inicio.html">Inicio</a>' +
    '</div>' +
    "</li>" +
    '<li class="dropdown"><a class="dropbtn">Java</a>' +
    '<div class="dropdown-content ">' +
    '<a href="/subpage/javasubpage/inicio.html">Inicio</a>' +
    '</div>' +
    '</li>' +
    '<li class="dropdown"><a href="/sobre.html" class="dropbtn">Sobre</a></li>' +
    " </ul>" +
    "</nav>";

document.getElementById("aaa").innerHTML = '<span id="criador" class="horario">Criado por: <a href="https://github.com/AndrewHTR"><strong>Andrew Kauã da Silva Santos</strong></a></span>' +
    '<a id="argue" href="https://www.youtube.com/watch?v=__QdAxqBi5Y&t "><ins><b><h2 class="h2-footer">I&#39d argue that everybody wants to do something that matters...</h2></b></ins></a>' +
    '<div class="horario">' +
    '<strong><span id="sa"></span></strong>' +
    '</div>'

var today = new Date();
document.getElementById("sa").innerText = "Horário: " + today.toLocaleTimeString();

function minhaFunca() {
    var today = new Date();
    document.getElementById("sa").innerText = "Horário: " + today.toLocaleTimeString();
}


var t = setInterval(minhaFunca, 1000)
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