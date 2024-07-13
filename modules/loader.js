document.getElementById("navizinha").innerHTML =
        '<a href="/index.html">Home</a>' +
        '<a href="/projects/projects.html">Projects</a>' +
        '<a href="sobre.html">About</a>';

document.getElementById('footinho').innerHTML = 
        '<a href="https://github.com/AndrewHTR">' +
            '<img id="imagem" src="https://github.com/AndrewHTR.png" alt="Imagem">' +
        '</a>' +
        '<div id="imagem-div">' +
            '<h2 class="fot">Andrew Silva</h2>' +
            "<p class='fot'>I love overgeared, but i don't like fish.</p>" +
        '</div>';

/*
window.onscroll = function() {myFunction()}; 
      
    var navlist = document.getElementById("navizinha"); 
    var sticky = navlist.offsetTop; 
      
    function myFunction() { 
        if (window.pageYOffset >= sticky -50) { 
            navlist.classList.add("sticky") 
        }  
          else { 
              navlist.classList.remove("sticky"); 
          } 
    } 

*/