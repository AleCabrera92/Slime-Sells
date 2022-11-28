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

var myPix = new Array("../images/loginlogo.png","../images/loginlogo2.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}

//Función para las tablas
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline";
	
 var nombre=document.getElementById("nombre_row"+no);
 var precio=document.getElementById("precio_row"+no);
 var descripcion=document.getElementById("descripcion_row"+no);
 var stock=document.getElementById("stock_row"+no);
 var ratings=document.getElementById("ratings_row"+no);
	
 var nombre_data=nombre.innerHTML;
 var precio_data=precio.innerHTML;
 var descripcion_data=descripcion.innerHTML;
 var stock_data=stock.innerHTML;
 var ratings_data=ratings.innerHTML;
	
 nombre.innerHTML="<input type='text' id='nombre_text"+no+"' value='"+nombre_data+"'>";
 precio.innerHTML="<input type='text' id='precio_text"+no+"' value='"+precio_data+"'>";
 descripcion.innerHTML="<input type='text' id='descripcion_text"+no+"' value='"+descripcion_data+"'>";
 stock.innerHTML="<input type='text' id='stock_text"+no+"' value='"+stock_data+"'>";
 ratings.innerHTML="<input type='text' id='ratings_text"+no+"' value='"+ratings_data+"'>";
}

function save_row(no)
{
 var nombre_val=document.getElementById("nombre_text"+no).value;
 var precio_val=document.getElementById("precio_text"+no).value;
 var descripcion_val=document.getElementById("descripcion_text"+no).value;
 var stock_val=document.getElementById("stock_text"+no).value;
 var ratings_val=document.getElementById("ratings_text"+no).value ;

 document.getElementById("nombre_row"+no).innerHTML=nombre_val;
 document.getElementById("precio_row"+no).innerHTML=precio_val;
 document.getElementById("descripcion_row"+no).innerHTML=descripcion_val;
 document.getElementById("stock_row"+no).innerHTML=stock_val;
 document.getElementById("ratings_row"+no).innerHTML=ratings_val;

 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_nombre=document.getElementById("new_nombre").value;
 var new_precio=document.getElementById("new_precio").value;
 var new_descripcion=document.getElementById("new_descripcion").value;
 var new_stock=document.getElementById("new_stock").value;
 var new_ratings=document.getElementById("new_ratings").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='nombre_row"+table_len+"'>"+new_nombre+"</td><td id='precio_row"+table_len+"'>"+new_precio+"</td><td id='descripcion_row"+table_len+"'>"+new_descripcion+"</td><td id='stock_row"+table_len+"'>"+new_stock+"</td><td id='ratings_row"+table_len+"'>"+new_ratings+"</td><td><input type='button' id='edit_button"+table_len+"' value='Editar' class='edit' onclick='edit_row("+table_len+")'><input type='button' id='save_button"+table_len+"' value='Guardar' class='save' onclick='save_row("+table_len+")'><input type='button' value='Borrar' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_nombre").value="";
 document.getElementById("new_precio").value="";
 document.getElementById("new_descripcion").value="";
 document.getElementById("new_stock").value="";
 document.getElementById("new_ratings").value="";
}

let slideIndex = 1;
showSlides(slideIndex);

let opinionIndex = 1;
showOpinions(opinionIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  showOpinions(opinionIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  showOpinions(opinionIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showOpinions(n) {
  let i;
  let opinions = document.getElementsByClassName("myOpinions");
  let dots = document.getElementsByClassName("dot");
  if (n > opinions.length) {opinionIndex = 1}
  if (n < 1) {opinionIndex = opinions.length}
  for (i = 0; i < opinions.length; i++) {
    opinions[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  opinions[opinionIndex-1].style.display = "block";
  dots[opinionIndex-1].className += " active";
}

var x = document.querySelector(".user");
var y = document.querySelector(".psswd");
var z = document.querySelector(".enter").addEventListener("click", iniciosesion);

function iniciosesion() {
    if (x.value == "admin" && y.value == "admin") {
        window.location.href = "admin/";
    } else if ((x.value !== "" && y.value !== "") && (x.value !== "admin" || y.value !== "admin")) {
        window.location.href = "user/";
    }
}

function myProducts() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBarProducts");
  filter = input.value.toUpperCase();
  ul = document.getElementById("buscada");
  li = ul.getElementsByTagName("div");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h1")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("buscada");
  var listo1 = document.getElementById("mortimer1");
  listo1.removeChild(listo1.firstElementChild);
  var listo2 = document.getElementById("mortimer2");
  listo2.removeChild(listo2.firstElementChild);
  var listo3 = document.getElementById("mortimer3");
  listo3.removeChild(listo3.firstElementChild);
  var listo4 = document.getElementById("mortimer4");
  listo4.removeChild(listo4.firstElementChild);
  var listo5 = document.getElementById("mortimer5");
  listo5.removeChild(listo5.firstElementChild);
  var listo6 = document.getElementById("mortimer6");
  listo6.removeChild(listo6.firstElementChild);
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("div");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
  var listo1 = document.getElementById("mortimer1");
  const newFirstElement1 = document.createElement("p");
  const textnode1 = document.createTextNode("1");
  newFirstElement1.appendChild(textnode1);
  listo1.insertBefore(newFirstElement1, listo1.firstChild);
  newFirstElement1.setAttribute("hidden", true);
  var listo2 = document.getElementById("mortimer2");
  const newFirstElement2 = document.createElement("p");
  const textnode2 = document.createTextNode("2");
  newFirstElement2.appendChild(textnode2);
  listo2.insertBefore(newFirstElement2, listo2.firstChild);
  newFirstElement2.setAttribute("hidden", true);
  var listo3 = document.getElementById("mortimer3");
  const newFirstElement3 = document.createElement("p");
  const textnode3 = document.createTextNode("3");
  newFirstElement3.appendChild(textnode3);
  listo3.insertBefore(newFirstElement3, listo3.firstChild);
  newFirstElement3.setAttribute("hidden", true);
  var listo4 = document.getElementById("mortimer4");
  const newFirstElement4 = document.createElement("p");
  const textnode4 = document.createTextNode("4");
  newFirstElement4.appendChild(textnode4);
  listo4.insertBefore(newFirstElement4, listo4.firstChild);
  newFirstElement4.setAttribute("hidden", true);
  var listo5 = document.getElementById("mortimer5");
  const newFirstElement5 = document.createElement("p");
  const textnode5 = document.createTextNode("5");
  newFirstElement5.appendChild(textnode5);
  listo5.insertBefore(newFirstElement5, listo5.firstChild);
  newFirstElement5.setAttribute("hidden", true);
  var listo6 = document.getElementById("mortimer6");
  const newFirstElement6 = document.createElement("p");
  const textnode6 = document.createTextNode("6");
  newFirstElement6.appendChild(textnode6);
  listo6.insertBefore(newFirstElement6, listo6.firstChild);
  newFirstElement6.setAttribute("hidden", true);
}

function sortListPrice() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("buscada");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("div");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}