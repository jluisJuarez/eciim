/* formulario de registro */

// Get the modal
var modal = document.getElementById('registro');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* menú para celular */

function desplegarMenu() {
	
	var x = document.getElementById('barra');
	
	if (x.className === "menu") {
		
		x.className += " responsive";
		
	} else {
		
		x.className = "menu";
	}
}


/* botón para scroll */

mybutton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


/* acordeon */

var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}