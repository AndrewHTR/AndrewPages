document.getElementById("navizinha").innerHTML =
    '<h1 title = "Voltar para o inicio" class = "header-h1"> <a href="/index.html">Andrew Silva</a></h1>' +
    '<nav class="navi">' +
    '<ul class="aaa">' +
    '<li class="dropdown"><a class="dropbtn">HTML</a>' +
    '<div style="margin: -7px;margin-left: -6px;" class="dropdown-content jlista ">' +
    '<a href="/subpage/htmlsubpage/tags.html">TAGS</a>' +
    '<a href="/subpage/htmlsubpage/midia.html"> MIDIA</a>' +
    '</div>' +
    '</li>' +
    '<li class="dropdown"><a class="dropbtn">CSS</a>' +
    '<div class="dropdown-content jlista">' +
    '<a href="#">a</a>' +
    '</div>' +
    '</li>' +
    '<li class="dropdown"><a class="dropbtn">JavaScript</a>' +
    '<div id="jsl" style="margin: -6px;" class="dropdown-content jlista">' +
    '  <a>USOS</a>' +
    ' </div>' +
    ' </li>' +
    '<li class="dropdown"><a class="dropbtn">Python</a>' +
    '<div class="dropdown-content jlista ">' +
    '<a href="/subpage/pythonsubpage/comandos.html">COMANDOS</a>' +
    '</div>' +
    "</li>" +
    " </ul>" +
    "</nav>";

document.getElementById("aaa").innerHTML = '<span id="criador" class="horario">Criado por: <a href="https://github.com/AndrewHTR"><strong>Andrew Kauã da Silva Santos</strong></a></span>' +
    '<a id="argue" href="https://www.youtube.com/watch?v=__QdAxqBi5Y&t "><ins><b><h2 class="h2-footer">Id argue that everybody wants to do something that matters...</h2></b></ins></a>' +
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