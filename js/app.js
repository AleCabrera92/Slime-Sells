// Función para mostrar el 'modal' del Login

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Función para fijar la cabecera al hacer scroll en la página

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// Función para mostrar una imagen de forma aleatoria en el desplegable del Login

window.onload = choosePic;

var myPix = new Array("css/images/loginlogo.png","css/images/loginlogo2.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}