document.getElementById("navizinha").innerHTML =
    '<h1 title = "Voltar para o inicio" class = "header-h1"> <a href="/index.html">Andrew Silva</a></h1>' +
    '<nav class="navi">' +
    '<ul class="top">' +
    '<li><a>Tecnologias</a>' +
    '<ul class="second">' +
    '<li><a>HTML</a>' +
    '<ul class="third">' +
    '<li><a href="/subpage/htmlsubpage/inicio.html">Inicio</a></li>' +
    '<li><a href="/subpage/htmlsubpage/tags.html">Tags</a></li>' +
    '<li><a href="/subpage/htmlsubpage/semantica.html">Semântica</a></li>' +
    '<li><a href="/subpage/htmlsubpage/forms.html">Forms</a></li>' +
    '<li><a href="/subpage/htmlsubpage/midia.html">Midia</a></li>' +
    '</ul></li>' +
    '<li><a>CSS</a>' +
    '<ul class="third">' +
    '<li><a href="/subpage/csssubpage/inicio.html">Inicio</a></li>' +
    '<li><a href="/subpage/csssubpage/sintaxe.html">Sintaxe</a></li>' +
    '</ul></li>' +
    '<li><a>JavaScript</a>' +
    '<ul class="third">' +
    '<li><a href="/subpage/jssubpage/inicio.html">Inicio</a></li>' +
    '</ul></li>' +
    '<li><a>Python</a>' +
    '<ul class="third">' +
    '<li><a href="/subpage/pythonsubpage/inicio.html">Inicio</a></li>' +
    '</ul></li>' +
    '<li><a>Java</a>' +
    '<ul class="third">' +
    '<li><a href="/subpage/javasubpage/inicio.html">Inicio</a></li>' +
    '</ul></li>' +
    '</ul></li>' +
    '<li><a href="/teste.html">Testes</a></li>' +
    '<li><a href="/sobre.html">Sobre</a>' +
    '</li>' +
    '</ul>' +
    '</li>' +
    '</ul>' +
    "</nav>";

document.getElementById("aaa").innerHTML =
    '<div id="frase">' +
    '<a id="argue" href="https://www.youtube.com/watch?v=__QdAxqBi5Y&t "><ins><b><h2 class="h2-footer">Don&#39t shy away from opportunity just because it&#39s something new.</h2></b></ins></a>' +
    '</div>' +
    '<div id="fbaixo">' +
    '<span id="criador" class="horario">Criado por: <a href="https://github.com/AndrewHTR"><strong>Andrew Kauã da Silva Santos</strong></a></span>' +
    '</div>';

var today = new Date();
document.getElementById("sa").innerText = "Horário: " + today.toLocaleTimeString();

function minhaFunca() {
    var today = new Date();
    document.getElementById("sa").innerText = "Horário: " + today.toLocaleTimeString();
}


var t = setInterval('minhaFunca()', 1000);
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