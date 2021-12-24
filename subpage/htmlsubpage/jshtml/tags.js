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